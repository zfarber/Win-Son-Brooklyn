import React, { Component } from "react";
import "./style.css";


class Reservations extends Component {
  render() {
    return (
      <div>
        <a id="reservations">
          <img className="title" src="https://i.imgur.com/9vWwfqb.png" />
        </a>
        <p className="text1">
          For parties of more than 5, you can reserve any time! Call us at 347
          457 6010 or email us at reservations@winsonbrooklyn.com
        </p>
        <br />
        <br />
        <p className="text2">
          For parties greater than 20 guests, we require a full-restaurant
          buyout. <br/> Please contact us for rates and packages.
        </p>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Reservations;
