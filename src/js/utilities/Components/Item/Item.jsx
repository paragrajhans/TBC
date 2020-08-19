import React, { Fragment } from "react";
import "./Item.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowestVariant: [],
    };
  }

  componentDidMount() {
    const lowestVariant = this.props.leg.variants.reduce((prev, curr) =>
      prev.prices.regular < curr.prices.regular ? prev : curr
    );
    this.setState({
      lowestVariant: lowestVariant,
    });
  }

  render() {
    const { showDetails } = this.props;

    return (
      <Fragment>
        <div
          key={this.state.lowestVariant.id}
          className="item"
          onClick={() => {
            showDetails(this.state.lowestVariant, this.props.leg);
          }}
        >
          <div className="item-image">
            <img src={this.props.leg.images[0].url} />
          </div>
          <h5 className="item-brand">
            {this.props.leg.name} - {this.state.lowestVariant.name}
          </h5>
          <p className="item-price">
            {this.state.lowestVariant.prices &&
              (this.state.lowestVariant.prices.sale ? (
                <>
                  <del className="text-danger">
                    {"$" + Math.ceil(this.state.lowestVariant.prices.regular)}
                  </del>{" "}
                  <span className="text-success">
                    {"$" + Math.ceil(this.state.lowestVariant.prices.sale)}
                  </span>
                </>
              ) : (
                <span className="text-primary">
                  {"$" + this.state.lowestVariant.prices.regular}
                </span>
              ))}
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Item;
