import React, { Component, useEffect, useState } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: "",
      maha: "hjfdhfjk",
      test: "dkfjkjdh",
      road: {},
      Test1: [3, 4, 5, 6, 6, 77, 7, 7, 8],
    };
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    this.setState({ demo: "112333" });
  }

  componentDidUpdate(prevState, currentState) {
    console.log(prevState, "-old", currentState, "-new");
  }

  change() {
    this.setState({ demo: "112333555555" });
  }

  render() {
    const { demo } = this.state;
    console.log(demo, "demo");
    return <input value={demo} onChange={this.change}></input>;
  }
}

export default Demo;

// function Test() {
// const [demo, updateDemo] = useState();

// updateDemo('12343453')

// }
