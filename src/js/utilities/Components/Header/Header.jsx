import React from "react";
import "./Header.scss";
import { BagIcon, FlowerIcon } from "../../../../style/icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigateToCart } = this.props;
    return (
      <header>
        <div className="row no-gutters">
          <div className="col-sm-11 text-left" style={{ cursor: "pointer" }}>
            <h4>The Bouqs Company</h4>
          </div>
          <div
            className="col-sm-1 text-right"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigateToCart();
            }}
          >
            <BagIcon width={"30px"} height={"30px"} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
