import React from "react";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  render() {
    //return <div>{this.props.render(this.state.count)}</div>;
    return <div>{this.props.render(this.state)}</div>;
  }
}
