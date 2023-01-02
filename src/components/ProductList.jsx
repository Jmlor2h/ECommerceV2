import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ProdList extends React.Component {
  state = {
    products: [],
    type: "Base",
    searchBarText: "",
    colour: "",
    cost: "",
  };


  componentDidMount() {
    axios.get("/api/products").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    }).catch(error => console.error(`Error: ${error}`));
  }

  costFilter(cost) {
    return () => {
      this.setState({ cost });
    };
  }

  typeFilter(type) {
    return () => {
      this.setState({ type });
    };
  }

  colorFilter(colour) {
    return () => {
      this.setState({ colour });
    };
  }

  onChange(e) {
    this.setState({ searchBarText: e.target.value });
  }

  normalizeString(str) {
    return str.toLowerCase().replace(/\s/g, "");
  }

  render() {
    return (
      <section class="products">
        <h1>Our Products</h1>
        <div class="container">
          <br />
          <div class="sideoptionsmobile">
            <div>
              <ul>
                <li>
                  <label class="searchlabel" for="searchbar">
                    Search by name
                  </label>
                </li>
                <li>
                  <input
                    id="searchbar"
                    name="searchbar"
                    placeholder=" Ex:(product name)"
                    type="text"
                    value={this.state.searchBarText}
                    onChange={(e) => this.onChange(e)}
                  />
                </li>
                <br />
              </ul>
            </div>
            <div class="sectmobile">
              <p class="opt1">Sort by</p>
              <ul>
                <li>
                  <Link
                    className="sorted"
                    style={{ textDecoration: "none", color: "black" }}
                    to="/products"
                  >
                    None
                  </Link>
                </li>
                <li>
                  <Link
                    className="sorted"
                    style={{ textDecoration: "none", color: "black" }}
                    to="/products/l2h"
                  >
                    Price: Low to High
                  </Link>
                </li>
                <li>
                  <Link
                    className="sorted"
                    style={{ textDecoration: "none", color: "black" }}
                    to="/products/h2l"
                  >
                    Price: High to Low
                  </Link>
                </li>
                <li onClick={this.costFilter("")}>Price: All</li>
                <li onClick={this.costFilter("0 - 30")}>Price: 0 - 30</li>
                <li onClick={this.costFilter("30 - 50")}>Price: 31 - 50</li>
                <li onClick={this.costFilter("50+")}>Price: 50 and up</li>
              </ul>
            </div>
            <br />
            <div class="sect1mobile">
              <p class="opt1">Products</p>
              <ul>
                <li onClick={this.typeFilter("Base")}>All</li>
                <li onClick={this.typeFilter("Tee")}>Shirts</li>
                <li onClick={this.typeFilter("Hoodie")}>Hoodies</li>
                <li onClick={this.typeFilter("Shorts")}>Shorts</li>
                <li onClick={this.typeFilter("Sweatpants")}>Sweatpants</li>
                <li></li>
              </ul>
            </div>
            <br />
            <div class="sect2mobile">
              <p class="opt1">Color</p>
              <ul>
                <li onClick={this.colorFilter("")}>All</li>
                <li onClick={this.colorFilter("pink")}>Pink</li>
                <li onClick={this.colorFilter("blue")}>Blue</li>
                <li onClick={this.colorFilter("gray")}>Gray</li>
                <li onClick={this.colorFilter("red")}>Red</li>
                <li onClick={this.colorFilter("green")}>Green</li>
                <li onClick={this.colorFilter("navy")}>Navy</li>
              </ul>
            </div>
            <br />
          </div>
          <div class="product-listmobile">
            {this.state.products
              .filter((props) => {
                if (this.state.searchBarText === "") {
                  return true;
                } else {
                  return this.normalizeString(props.name).includes(
                    this.normalizeString(this.state.searchBarText)
                  );
                }
              })

              .filter((props) => {
                if (this.state.type === "Base") {
                  return true;
                } else {
                  return this.state.type === props.category;
                }
              })

              .filter((props) => {
                if (this.state.colour === "") {
                  return true;
                } else {
                  return this.state.colour === props.color;
                }
              })

              .filter((props) => {
                if (this.state.cost === "") {
                  return true;
                } else if (this.state.cost === "0 - 30" && props.price <= 30 && props.price > 0){
                  return props;
                } else if (this.state.cost === "30 - 50" && props.price <= 50 && props.price > 30){
                  return props;
                } else if (this.state.cost === "50+" && props.price >= 50){
                  return props;
                }
              })
              .map((props) => (
                <section>
                  <div class="product-itemmobile">
                    <div class="product-imgmobile">
                      <img
                        src={("/images/" + props.imgSrc + ".png")}
                        alt={props.imgSrc}
                      />
                    </div>
                    <div class="product-content">
                      <h3 class="product-name">{props.name}</h3>
                      <p class="product-desc">{props.desc}</p>
                      <p class="product-price">${props.price}</p>
                      <button type="button" class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart"></i> Add To Cart
                      </button>
                    </div>
                  </div>
                </section>
              ))}
          </div>
        </div>
      </section>
    );
  }
}
