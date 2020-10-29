// not mine -- from tutorial: https://www.rithmschool.com/courses/react-fundamentals/component-life-cycle
import React, { Component } from "react";
import axios from "axios";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://icanhazdadjoke.com/search?term=cat`, {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        const jokes = response.data.results.map(joke => ({
          id: joke.id,
          text: joke.joke
        }));
        this.setState({ jokes });
      });
  }

  render() {
    let data = "Sorry, no joke results yet";
    if (this.state.jokes.length > 0) {
      data = this.state.jokes.map(joke => (
        <div key={joke.id}>
          <p>{joke.text}</p>
        </div>
      ));
    }
    return <div>{data}</div>;
  }
}

export default Jokes;
