import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", results: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.search();
    console.log("Your favorite flavor is: " + this.state.results);
    event.preventDefault();
  }

  search = () => {
    const { state } = this;
    const apiurl = "http://www.omdbapi.com/?apikey=ab60ee59";
    axios(apiurl + "&s=" + state.value).then(({ data }) => {
      let items = data.Search;
      this.setState({ results: items });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Films Name :
            <input
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <List results={this.state.results} />
        </div>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    var listItems = this.props.results
      ? this.props.results.map((e) => (
          <Items
            key={e.imdbID}
            Title={e.Title}
            imdbID={e.imdbID}
            imageUrl={e.Poster}
          />
        ))
      : [];
    return <ul>{listItems}</ul>;
  }
}

function Items(props) {
  return (
    <li className="employee">
      <div>
        <img src={props.imageUrl} alt="nope" />
      </div>
      <div>
        <b>Full Title:</b> {props.Title}
      </div>
      <div>
        <b>ID:</b> {props.imdbID}
      </div>
    </li>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
