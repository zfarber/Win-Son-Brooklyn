import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class Menu extends Component {
  render() {
    return (
      <div className="menuContainer" id="menu">
        <img className="title" src="https://i.imgur.com/5eWQF47.png" alt="menu heading" />
        <img src="https://i.imgur.com/OQrMeK2.png" alt="reservations info_1" />
        <img src="https://i.imgur.com/eKNXAy2.png" alt="reservations info_2" />
      </div>
    );
  }
}

export default Menu;
