import React from "react";
import { TrashIcon } from "../../../../style/icons";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { removeFromCart } = this.props;
    return (
      <>
        <div className="row no-gutters py-2">
          <div className="col-sm-2 p-2">
            <img
              style={{ margin: "0 auto", maxHeight: "50px" }}
              src={this.props.item.image_url}
              className="img-fluid d-block"
            />
          </div>
          <div className="col-sm-4 p-2">
            <h5 className="mb-1">{this.props.item.product_name}</h5>
            <p className="mb-1">
              Price:{" "}
              {this.props.item.prices && this.props.item.prices.sale
                ? "$" + Math.ceil(this.props.item.prices.sale)
                : "$" + Math.ceil(this.props.item.prices.regular)}{" "}
            </p>
          </div>
          <div className="col-sm-2 p-2 text-center ">
            <p className="mb-0">Qty: {this.props.item.quantity}</p>
          </div>
          <div className="col-sm-4 p-2 text-right">
            <button
              onClick={() => {
                removeFromCart(this.props.item);
              }}
              className="btn btn-danger btn-sm mb-1"
            >
              <TrashIcon width={"20px"} />
            </button>
          </div>
        </div>
        <hr className="my-4" />
      </>
    );
  }
}

export default CartItem;
