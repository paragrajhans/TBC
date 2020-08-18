import React, { Fragment } from "react";
import axios from "axios";
import "./Home.scss";
import Header from "../../Components/Header/Header";
import Item from "../../Components/Item/Item";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://localhost:8081/api/categories",
      data: [],
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
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log("hello world");
      });
  }

  onClickCart = () => {
    let a = document.getElementById("cart");
    a.scrollIntoView({ behavior: "smooth" });
  };

  onClickHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="content-wrapper">
        <Header
          onClickHome={this.onClickHome}
          scrollEvent={this.state.scroll}
          onClickCart={this.onClickCart}
        />
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
        </div>
      </div>
    );
  }
}

export default Home;
