import React, { Component } from "react";
import axios from "axios";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [], searchTerm: "", gifOfTheDay: null };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=car&rating=g&api_key=dc6zaTOxFJmzC`,
        { headers: { Accept: "application/json" } }
      )
      .then(response => {
        if (response.data.data) {
          const firstResult = response.data.data[0];
          console.log(response.data.data[0]);

          this.setState({
            gifOfTheDay: { source: firstResult.source, id: firstResult.id }
          });
        }
      });
  }
  onChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onSubmit = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&rating=g&api_key=dc6zaTOxFJmzC`,
        { headers: { Accept: "application/json" } }
      )
      .then(response => {
        if (response.data.data) {
          const firstResult = response.data.data[0];
          const gifClone = this.state.gifs.slice();
          gifClone.push({ source: firstResult.source, id: firstResult.id });
          this.setState({ gifs: gifClone });
        }
      });
  };

  onDelete = id => {
    const clone = this.state.gifs.slice().filter(x => x.id !== id);
    this.setState({ gifs: clone });
  };

  render() {
    let data = "Search to find gifs!";
    if (this.state.gifs.length > 0) {
      data = this.state.gifs.map(gif => {
        return (
          <div key={gif.id}>
            <img src={gif.source} alt={gif.id} />
            <input
              type="submit"
              value="Delete"
              onClick={() => this.onDelete(gif.id)}
            />
          </div>
        );
      });
    }
    return (
      <div>
        {this.state.gifOfTheDay && (
          <>
            <h3>Gif of the Day:</h3>
            <img
              src={this.state.gifOfTheDay.source}
              alt={this.state.gifOfTheDay.id}
            />
          </>
        )}
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.onChange}
        />
        <input type="submit" onClick={this.onSubmit} />
        <div>{data}</div>
      </div>
    );
  }
}

export default Gif;
