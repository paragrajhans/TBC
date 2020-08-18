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

  showDetails = (dataItem, price, name) => {
    console.log(dataItem);
    console.log(price);
    this.setState({
      ...this.state,
      selectedItem: dataItem,
      variantPrice: price,
      openDialog: true,
      variantName: name,
    });
  };

  toggleDialog = () => {
    this.setState({
      openDialog: !this.state.openDialog,
    });
  };

  navigatetoCart = (dataItem) => {
    this.setState(
      {
        redirect: true,
      },
      () => {
        if (this.state.redirect) {
          return this.props.history.push({
            pathname: "/cart",
            item: this.state.selectedItem,
            price: this.state.variantPrice,
            nane: this.state.variantName,
          });
        }
      }
    );
  };

  render() {
    return (
      <div className="content-wrapper">
        {this.state.openDialog && (
          <Dialog
            title={"Product Details"}
            onClose={this.toggleDialog}
            width="60%"
            height="49%"
          >
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-2" style={{ marginTop: "3%" }}>
                  <img
                    src={this.state.selectedItem.images[0].url}
                    className="card-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {this.state.selectedItem.name}
                    </h5>
                    <p className="card-text">
                      {this.state.selectedItem.short_description}
                    </p>
                    <p className="card-text">
                      {/* <a href={this.state.tempItem.productUrl} target="_blank">
                        Navigate to Product
                      </a> */}
                    </p>

                    <p className="card-text">
                      <small className="text-muted">
                        {"$"}
                        {this.state.variantPrice}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <DialogActionsBar>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.navigatetoCart();
                }}
              >
                Add to Cart
              </button>
            </DialogActionsBar>
          </Dialog>
        )}
        <Header
          onClickHome={this.onClickHome}
          scrollEvent={this.state.scroll}
          onClickCart={this.onClickCart}
        />
        <div
          className="row justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <p style={{ marginRight: "5px", fontSize: "18px" }}>Sort By :</p>
          <DropDownList
            className="sort-by"
            data={this.state.categories}
            onChange={this.onChange}
            style={{
              border: "1px solid gray",
              borderRadius: "4px",
            }}
          />
        </div>
        <div className="item-wrapper">
          {this.state.data.map((value) => {
            return value.products.map((product) => {
              return (
                <Item
                  key={product.id}
                  leg={product}
                  // addToCart={this.addToCart}
                  // showDetails={this.showDetails}
                  // changeQty={this.changeQty}
                />
              );
            });
          })}
          {/* {this.state.data.map((value) => {
            return (
              <Item
                key={value.id}
                leg={value}
                // addToCart={this.addToCart}
                showDetails={this.showDetails}
                // changeQty={this.changeQty}
              />
            );
          })} */}
        </div>
      </div>
    );
  }
}

export default Home;
