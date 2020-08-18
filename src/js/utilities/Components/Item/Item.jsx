import React, { Fragment } from "react";
import "./Item.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { addToCart, showDetails } = this.props;

    return (
      <Fragment>
        {this.props.leg.variants.map((variant, index) => (
          <div key={index} className="item">
            <div className="item-image">
              <img src={this.props.leg.images[0].url} />
            </div>
            <h5 className="item-brand">{this.props.leg.name}</h5>
            <p className="item-price">
              {"$"}
              {variant.prices.regular}
            </p>
          </div>
        ))}

        {/* {this.props.leg.variants.reduce((prev, curr) =>
            prev.prices.regular < curr.prices.regular ? prev : curr
          )} */}
      </Fragment>
    );
  }
}

export default Item;

// Each product displays information for the variant with the lowest regular price:
// Variant image
// Product name
// Price rounded to the nearest dollar
