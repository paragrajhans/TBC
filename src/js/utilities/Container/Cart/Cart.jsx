import React, { Fragment } from "react";
import CartItem from "../../Components/CartItem/CartItem";
import { BackIcon } from "../../../../style/icons";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    if (!this.props.history.location.fromHeader) this.setItems();
  }

  getTotalPrice = () => {
    let price = 0,
      items = this.state.cart;

    for (let idx = 0; idx < items.length; idx++) {
      price +=
        items[idx].quantity *
        (items[idx].prices &&
          (items[idx].prices.sale
            ? items[idx].prices.sale
            : Number(items[idx].prices.regular)));
    }
    return price;
  };

  setItems() {
    this.setState(
      {
        cart: this.props.history.location.cart,
      },
      () => {
        this.setState({
          totalPrice: this.getTotalPrice(),
        });
      }
    );
  }

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

  backtoList = () => {
    return this.props.history.push({
      pathname: "/",
      cart: this.state.cart,
    });
  };

  removeFromCart = (dataItem) => {
    let itemIndex = this.getItemIndexInCart(dataItem);
    if (itemIndex === -1) {
      console.error("Item not found in cart.");
      return;
    }
    let items = this.state.cart;
    let deletedItem = items.splice(itemIndex, 1);
    this.setState({
      cart: items,
      totalPrice: this.getTotalPrice(),
    });
  };

  getTotalQuantity = (items) => {
    let quantity = 0;
    for (let idx = 0; idx < items.length; idx++) {
      quantity += items[idx].quantity;
    }
    return quantity;
  };

  render() {
    return (
      <Fragment>
        <div className="cart-wrapper">
          <div className="cart-container">
            <div className="row no-gutters py-2">
              <div
                className="col-sm-0 p-2 align-self-center"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.backtoList();
                }}
              >
                <BackIcon width={"40px"} height={"40px"} />
              </div>
              <div className="col-sm-11 text-center p-2">
                <h1>Cart</h1>
              </div>
              <div className="col-sm-4 text-center p-2"></div>
            </div>

            <div className="row no-gutters justify-content-center">
              <div className="col-sm-8 p-3">
                {this.props.history.location.cart ? (
                  this.props.history.location.cart.length > 0 ? (
                    <div>
                      <div className="card card-body border-0">
                        {this.props.history.location.cart.map((item) => (
                          <CartItem
                            key={item.id}
                            item={item}
                            removeFromCart={this.removeFromCart}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="p-3 text-center text-muted">
                        Your cart is empty.
                      </div>
                      <div className="p-3 text-center">
                        <a
                          href="#"
                          className="stretched-link p-3 text-center"
                          onClick={() => {
                            this.backtoList();
                          }}
                        >
                          Please click here to continue shopping
                        </a>
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <div className="p-3 text-center text-muted">
                      Your cart is empty.
                    </div>
                    <div className="p-3 text-center">
                      <a
                        href="#"
                        className="stretched-link p-3 text-center"
                        onClick={() => {
                          this.backtoList();
                        }}
                      >
                        Please click here to continue shopping
                      </a>
                    </div>
                  </>
                )}
              </div>

              {this.state.cart
                ? this.state.cart.length > 0 && (
                    <div className="col-sm-2 p-3">
                      <div className="card card-body">
                        <p className="mb-1">Items</p>
                        <h4 className=" mb-3 txt-right">
                          {this.state.cart
                            ? this.state.cart.length
                              ? this.getTotalQuantity(this.state.cart)
                              : 0
                            : ""}
                        </h4>
                        <hr className="my-4" />
                        <p className="mb-1"> Total</p>
                        <h3 className="m-0 txt-right">
                          {"$" + Math.ceil(this.state.totalPrice)}
                        </h3>
                      </div>
                    </div>
                  )
                : ""}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
