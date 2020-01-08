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
  
  pickImage() {
    // let choice = characterPicArray.filter(star => {
    //     console.log(star)
    // })
  }
  
  render() {
    return (
      <div className="ba b--dashed bw1 pa3">
        <header>
          <h1>Who am I?</h1>
        </header>
        <section>
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
          handleSelect={this.props.handleSelect}
        />
      </div>
    );
  }
}

export default Card;
