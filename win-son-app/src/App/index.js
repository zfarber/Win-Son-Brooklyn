import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../About';
import Press from '../Press';
import HeaderPhoto from '../HeaderPhoto';
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPhoto />
        <About />
        <br/>
        <br/>
        <br/>
        <Press />
      </div>
    )
  }
}

export default App;
