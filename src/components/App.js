import React, { Component } from "react";
import "./App.css";
import Card from "../components/Card";

class App extends Component {
  state = {
    display: false,
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
      });

    // this.setState({
    //   display: true
    // });
  };

  randomCharacter = array => {
    let randomNum = Math.floor(Math.random() * array.length);
    let randomCharacter = array[randomNum].name;
    console.log("random", randomCharacter);

    this.setState({
      character: randomCharacter
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="f1">Star Wars Trivia</h1>
        </header>
        <section>
          <h3>Test your Star Wars knowledge!</h3>
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
          {this.state.character && (
            <Card
              character={this.state.character}
              characters={this.state.characters}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
