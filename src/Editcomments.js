import React, { PureComponent } from "react";

class Editcomments extends PureComponent {
  constructor() {
    super();
    this.state = {
      editComments: {},
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount() {
    const { UserComments } = this.props;
    const location = +window.location.pathname.split("/")[2];
    const commentId = +window.location.pathname.split("/")[4];

    const filteredcomment = UserComments.filter((val) => {
      return val.postId === location && val.id === commentId;
    });

    this.setState({ editComments: filteredcomment[0] });
  }

  handleTextChange = (event, changeValue) => {
    const { editComments } = this.state;
    if (changeValue === "Body") {
      this.setState({
        editComments: { ...editComments, body: event.target.value },
      });
    }
  };

  render() {
    const { editComments } = this.state;

    const displayComments = (
      <div className="commentBox">
        Post Id: {editComments.postId}
        <br /> <br />
        Email: {editComments.email}
        <br /> <br />
        Post Title: {editComments.name}
        <br /> <br />
        <div className="textarea1">
          Body:
          <textarea
            value={editComments.body}
            onChange={(e) => {
              this.handleTextChange(e, "Body");
            }}
          ></textarea>
        </div>
        <br /> <br />
      </div>
    );

    return (
      <>
        <h3>{displayComments}</h3>
        <br />
        <br />
        <input type={"submit"}></input>
      </>
    );
  }
}
export default Editcomments;
