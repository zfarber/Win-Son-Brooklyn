import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../About';
import Press from '../Press';
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
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
