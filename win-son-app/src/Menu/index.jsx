import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class Menu extends Component {
  render() {
    return (
      <div className="menuContainer" id="menu">
        <img className="title" src="https://i.imgur.com/5eWQF47.png" />
      <div>
        <img src="https://i.imgur.com/OQrMeK2.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/eKNXAy2.png" />
      </div>
      </div>
    );
  }
}

export default Menu;
