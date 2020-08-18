import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="text-center mt-5">
          <h1>Cart</h1>
          <p>This is the Cart Page.</p>
        </div>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 ? (
              <div>
                <div className="card card-body border-0">
                  <div className="row no-gutters py-2">
                    <div className="col-sm-2 p-2">
                      <img
                        alt={this.props.history.location.item.image_alt_tags}
                        style={{ margin: "0 auto", maxHeight: "50px" }}
                        src={this.props.history.location.item.images[0].url}
                        className="img-fluid d-block"
                      />
                    </div>
                    <div className="col-sm-4 p-2">
                      <h5 className="mb-1">
                        {this.props.history.location.item.name}
                      </h5>
                      <p className="mb-1">
                        Price: {this.props.history.location.price}
                      </p>
                    </div>
                    <div className="col-sm-2 p-2 text-center ">
                      {/* <p className="mb-0">Qty: {product.quantity}</p> */}
                    </div>
                    <div className="col-sm-4 p-2 text-right">
                      <button
                        // onClick={() => increase(product)}
                        className="btn btn-primary btn-sm mr-2 mb-1"
                      >
                        {/* <PlusCircleIcon width={"20px"} /> */}
                      </button>

                      {/* {product.quantity > 1 && (
                                <button
                                  onClick={() => decrease(product)}
                                  className="btn btn-danger btn-sm mb-1"
                                >
                                  <MinusCircleIcon width={"20px"} />
                                </button>
                              )} */}

                      {/* {product.quantity === 1 && (
                                <button
                                  onClick={() => removeProduct(product)}
                                  className="btn btn-danger btn-sm mb-1"
                                >
                                  <TrashIcon width={"20px"} />
                                </button>
                              )} */}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-3 text-center text-muted">
                Your cart is empty
              </div>
            )}

            {checkout && (
              <div className="p-3 text-center text-success">
                <p>Checkout successfull</p>
                <Link to="/" className="btn btn-outline-success btn-sm">
                  BUY MORE
                </Link>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                <hr className="my-4" />
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
