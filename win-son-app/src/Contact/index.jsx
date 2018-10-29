import React, { Component } from "react";
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <a id="contact">
          <img className="title" src="https://i.imgur.com/9S3vpbe.png" />
        </a>
        <p className="phone">
          347 457 6010
        </p>
        <p className="email">
          info@winsonbrooklyn.com
        </p>
        <br />
        <p className="address">
          159 Graham Ave Brooklyn, NY
        </p>
      </div>
    );
  }
}

export default Contact;
