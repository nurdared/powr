import React, { Fragment, Component } from "react";
import Box from './Box';

class Boxes extends Component  {
  render() {
    const {boxes, changeColor} = this.props;
    if(!boxes.length)
      return <h1>No box</h1>;
    return (
      <Fragment>
          {boxes.map((box, index) => (
            <Box Box={ box } 
                key = {index}
                index = {index}
                changeColor={changeColor}/>
          ))}
      </Fragment>
    );
  }
};

export default Boxes;
