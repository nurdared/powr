import React, { Component } from "react";
import "./App.css";
import Container from "./Container";

class App extends Component {
  constructor(){
    super();
    this.state = {
      containers: [
        // {boxes: []}
      ]
    }
  }

  addBox = () => {
    this.state.containers.push('box')
    this.setState({ containers: this.state.containers })
  }

  addContainer = () => {
    this.state.containers.push('container')
    this.setState({ containers: this.state.containers })
  }

  changeColor = (id) => {
    document.getElementById(id).style.background = this.getRandomColor();
  }

  getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  


  render () {
    return (
      <main className="wrapper">
        <div className="row">
          <Container addBox = { this.addBox } 
                     boxes = {this.state.containers} 
                     changeColor={this.changeColor}
                     addContainer = {this.addContainer}
                     containers={this.state.containers}/>
        </div>
      </main>
    );
  }
}

export default App;
