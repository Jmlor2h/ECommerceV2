import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products.json";

export default class ProdList extends React.Component {
  state = {
    type: "Base",
    filterText: "",
    colour: "",
  };

  //UseState is a react hook that lets you set some state to react component.

  myFilter(type) {
    return () => {
      this.setState({ type });
    };
  }

  myFilter2(colour) {
    return () => {
      this.setState({ colour });
    };
  }

  onChange(e) {
    this.setState({ filterText: e.target.value });
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
          <section class="sideoptions">
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
                    value={this.state.filterText}
                    onChange={(e) => this.onChange(e)}
                  />
                </li>
                <br />
              </ul>
            </div>
            <div class="sect">
              <p class="opt1">Sort by</p>
              <ul>
              <li><Link className="sorted" style={{ textDecoration: 'none', color: 'black'}} to='/products'>None</Link></li>
              <li><Link className="sorted" style={{ textDecoration: 'none', color: 'black'}} to='/products/l2h'>Price: Low to High</Link></li>
              <li><Link className="sorted" style={{ textDecoration: 'none', color: 'black'}} to='/products/h2l'>Price: High to Low</Link></li>
              </ul>
            </div>
            <br />
            <div class="sect1">
              <p class="opt1">Products</p>
              <ul>
                <li onClick={this.myFilter("Base")}>All</li>
                <li onClick={this.myFilter("Tee")}>Shirts</li>
                <li onClick={this.myFilter("Hoodie")}>Hoodies</li>
                <li onClick={this.myFilter("Shorts")}>Shorts</li>
                <li onClick={this.myFilter("Sweatpants")}>Sweatpants</li>
                <li></li>
              </ul>
            </div>
            <br />
            <div class="sect2">
              <p class="opt1">Color</p>
              <ul>
                <li onClick={this.myFilter2("")}>All</li>
                <li onClick={this.myFilter2("pink")}>Pink</li>
                <li onClick={this.myFilter2("blue")}>Blue</li>
                <li onClick={this.myFilter2("gray")}>Gray</li>
                <li onClick={this.myFilter2("red")}>Red</li>
                <li onClick={this.myFilter2("green")}>Green</li>
                <li onClick={this.myFilter2("navy")}>Navy</li>
              </ul>
            </div>
            <br />
          </section>
          <div class="product-list">
            {Products.filter((props) => {
              if (this.state.filterText === "") {
                return true;
              } else {
                return this.normalizeString(props.name).includes(
                  this.normalizeString(this.state.filterText)
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
              .map((props) => (
                <section>
                  <div class="product-item">
                    <div class="product-img">
                      <img
                        src={require("../images/" + props.imgSrc + ".png")}
                        alt={props.imgSrc}
                      />
                    </div>
                    <div class="product-content">
                      <h3 class="product-name">{props.name}</h3>
                      <p class="product-desc">{props.desc}</p>
                      <p class="product-price">{props.price}</p>
                      <button type = "button" class="add-to-cart-btn">
                    <i class= "fa fa-shopping-cart"></i> Add To Cart</button>                    </div>
                  </div>
                </section>
              ))}
          </div>
        </div>
      </section>
    );
  }
}
