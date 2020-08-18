import React from "react";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClickHome, onClickCart } = this.props;
    return (
      <header>
        {this.props.scrollEvent ? (
          <div className="scroll-header-container justify-content-center">
            <div
              className="home"
              onClick={() => {
                onClickHome();
              }}
            >
              The Bouqs Company
            </div>
            <div className="cart">
              <i
                className="fas fa-shopping-cart"
                style={{ fontSize: "20px" }}
                onClick={() => {
                  onClickCart();
                }}
              ></i>
              <span class="material-icons">shopping_cart</span>
            </div>
          </div>
        ) : (
          <div className="header-container justify-content-center">
            <div
              className="home"
              onClick={() => {
                onClickHome();
              }}
            >
              The Bouqs Company
            </div>

            <div className="cart">
              <i
                className="fas fa-shopping-cart"
                style={{ fontSize: "20px" }}
                onClick={() => {
                  onClickCart();
                }}
              ></i>
            </div>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
