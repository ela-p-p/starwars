import React, { Component } from "react";
import "./App.css";
import Card from "../components/Card";
// import { charactersApi } from "./characters";

class App extends Component {
  state = {
    display: undefined,
    characters: [],
    character: ""
  };

  clickHandler = () => {
    fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(results => {
        console.log(results.results);
        this.setState({
          characters: results.results
        });

    this.randomCharacter(this.state.characters);
    this.setState({
      display: undefined
    });
    });
  };

  randomCharacter = array => {
    let randomNum = Math.floor(Math.random() * array.length);
    let randomCharacter = array[randomNum].name;
    this.setState({
      character: randomCharacter
    });
  };

  handleSelect = value => {
    let res = value === this.state.character ? true : false;
    this.setState({
      display: res
    });
  };

  render() {
    return (
      <div className="App">
        <header className="f1">
          <h1 >Star Wars Trivia</h1>
        </header>
        <section className="mt5">
          <h3>Test your Star Wars knowledge!</h3>
          <p>Match the name with an item from the dropdown menu</p>
          <button
            style={{
              backgroundColor: "orange",
              height: "2em",
              borderRadius: "2em",
              margin: "2em"
            }}
            onClick={this.clickHandler}
          >
            Randomizer
          </button>
          {this.state.display && <h1 className="f1 ">Winner!!!!!</h1>}
          {this.state.display === false && this.state.character && <h1 className="f1 ">Try Again?</h1>}
          {this.state.character && (
            <Card
              character={this.state.character}
              characters={this.state.characters}
              display={this.state.display}
              handleSelect={this.handleSelect}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
