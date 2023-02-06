import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Addcomments extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A comment was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    const location = +window.location.pathname.split("/")[2];
    return (
      <>
        <div onSubmit={this.handleSubmit} className="formDisplay">
          postId:{location}
          <br /> <br />
          <label>
            Email:
            <input type="text" />
          </label>
          <br />
          <label>
            Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Body
            <input type="text" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </div>
      </>
    );
  }
}
export default Addcomments;
