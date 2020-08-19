import React, { Fragment } from "react";
import axios from "axios";
import "./Home.scss";
import Header from "../../Components/Header/Header";
import Item from "../../Components/Item/Item";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { data } from "autoprefixer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://localhost:8081/api/categories",
      constData: [],
      cart: [],
      data: [],
      categories: [],
      openDialog: false,
    };
  }

  componentDidMount() {
    axios
      .get(this.state.url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        this.setState(
          {
            data: response.data,
            constData: response.data,
          },
          () => {
            this.setCategories(this.state.data);
          }
        );
      })
      .catch((error) => {
        console.log("hello world");
      });

    if (this.props.location.cart) {
      if (this.props.location.cart.length > 0) {
        this.setState({
          cart: this.props.location.cart,
        });
      }
    }
  }

  setCategories(dataItem) {
    let temp = [];
    dataItem.forEach((element) => {
      temp.push(element.slug);
    });

    this.setState({
      categories: temp,
    });
  }

  onChange = (event) => {
    let tempData = [];
    this.state.constData.forEach((value) => {
      if (event.target.value === value.slug) {
        tempData.push(value);
      }
    });
    this.setState({
      data: tempData,
    });
  };

  showDetails = (dataItem, leg) => {
    console.log(dataItem);
    console.log(leg);
    this.setState({
      ...this.state,
      selectedItem: dataItem,
      selectedLeg: leg,
      openDialog: true,
    });
  };

  toggleDialog = () => {
    this.setState({
      openDialog: !this.state.openDialog,
    });
  };

  getItemIndexInCart = (dataItem) => {
    let items = this.state.cart;
    for (let idx = 0; idx < items.length; idx++) {
      if (items[idx].id === dataItem.id) {
        return idx;
      } else {
        continue;
      }
    }
    return -1;
  };

  addToCart = () => {
    let updatedCart = this.state.cart;
    let itemIndexInCart = this.getItemIndexInCart(this.state.selectedItem);
    console.log(itemIndexInCart);

    if (itemIndexInCart !== -1) {
      updatedCart[itemIndexInCart].quantity += 1;
    } else {
      console.log("something matched 2");
      let itemCopy = JSON.parse(JSON.stringify(this.state.selectedItem));
      itemCopy.quantity = 1;
      itemCopy.product_name = this.state.selectedLeg.name;
      itemCopy.product_description = this.state.selectedLeg.description;
      itemCopy.image_url = this.state.selectedLeg.images[0].url;

      updatedCart.push(itemCopy);
    }

    this.setState(
      {
        cart: updatedCart,
        redirect: true,
      },
      () => {
        if (this.state.redirect) {
          return this.props.history.push({
            pathname: "/cart",
            cart: this.state.cart,
            totalPrice: this.state.totalPrice,
          });
        }
      }
    );
  };

  navigateToCart = () => {
    return this.props.history.push({
      pathname: "/cart",
      cart: this.state.cart,
      totalPrice: this.state.totalPrice,
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        {this.state.itemAdded && <div className="item-added">Item Added</div>}
        {this.state.openDialog && (
          <Dialog
            title={"Product Details"}
            onClose={this.toggleDialog}
            width="60%"
            height="42%"
          >
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-2 align-self-center">
                  <img
                    src={this.state.selectedLeg.images[0].url}
                    className="card-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {this.state.selectedLeg.name} -{" "}
                      {this.state.selectedItem.name}
                    </h5>
                    <p className="card-text">
                      {this.state.selectedLeg.description}
                    </p>
                    <p className="card-text">
                      {this.state.selectedItem.prices &&
                        (this.state.selectedItem.prices.sale ? (
                          <>
                            <del className="text-danger">
                              {"$" +
                                Math.ceil(
                                  this.state.selectedItem.prices.regular
                                )}
                            </del>{" "}
                            <span className="text-success">
                              {"$" +
                                Math.ceil(this.state.selectedItem.prices.sale)}
                            </span>
                          </>
                        ) : (
                          <span className="text-primary">
                            {"$" +
                              Math.ceil(this.state.selectedItem.prices.regular)}
                          </span>
                        ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <DialogActionsBar>
              <div className="m-3">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.addToCart();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </DialogActionsBar>
          </Dialog>
        )}
        <Header
          onClickHome={this.onClickHome}
          navigateToCart={this.navigateToCart}
        />
        <div className="row no-gutters" style={{ marginTop: "100px" }}>
          <h6 className="col-sm-12 pr-4 text-right">
            Sort By :{" "}
            <DropDownList
              className="sort-by"
              data={this.state.categories}
              onChange={this.onChange}
              style={{
                border: "1px solid gray",
                borderRadius: "4px",
              }}
            />
          </h6>
        </div>
        <div className="item-wrapper p-2">
          {this.state.data.map((value) => {
            return value.products.map((product) => {
              return (
                <Item
                  key={product.id}
                  leg={product}
                  showDetails={this.showDetails}
                  // changeQty={this.changeQty}
                />
              );
            });
          })}
        </div>
      </div>
    );
  }
}

export default Home;
