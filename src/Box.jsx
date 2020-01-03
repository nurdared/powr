import React, { Component } from "react";

class Box extends Component {
  render () {
    const {changeColor, index} =  this.props;
    return (
      <div
        id={index}
        className="box mt-5 mr-2"
        onClick={() => changeColor(index)}
      ></div>
    );
  }
};





export default Box;
