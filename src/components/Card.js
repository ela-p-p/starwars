import React, { Component } from "react";
import "./Card.css";
import Select from "./Select";

// let characterPicArray = [
// Beru,
// C3PO,
// DarthVader,
// Leia,
// Luke,
// Owen,
// R2D2,
// R5D4
// ];
class Card extends Component {
  state = {
    status: false
  };
  pickImage() {
    // let choice = characterPicArray.filter(star => {
    //     console.log(star)
    // })
  }
  handleSelect = value => {
    let res = value === this.props.character ? true : false;
    this.setState({
      status: res
    });
  };
  render() {
    return (
      <div className="ba b--dashed bw1 pa3">
        <header>
          <h1>Who am I?</h1>
        </header>
        <section>
          {this.state.status ? <h1 className="f1 ">Winner!!!!!</h1> : <h1>Fail!!!!!</h1>}
          <h1>{this.props.character.toUpperCase()}</h1>

          {/* <img
            alt="loading"
            src={this.pickImage()}
            // className="rotate"
            // style={{ width: 150, height: 150 }}
          /> */}
        </section>
        <Select
          characters={this.props.characters}
          handleSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default Card;
