import React, { PureComponent } from "react";
import axios from "axios";

class Comments extends PureComponent {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }
  componentDidMount = () => {
    const id = +window.location.pathname.split("/")[2];

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        const comments = response.data;
        this.setState({ comments });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { comments } = this.state;
    const commentDetails = comments.map((comment) => {
      return (
        <div className="commentBox ">
          <div className="tittle">tittle: {comment.name}</div>
          <br />
          <div className="email">Email: {comment.email}</div>
          <br />
          <div className="bodyComment">Body: {comment.body}</div>
          <br />
        </div>
      );
    });
    return (
      <>
        <div className="commentFlex">{commentDetails}</div>
      </>
    );
    // const { UserComments } = this.props;
    // const location = +window.location.pathname.split("/")[2];

    // const filteredcomment = UserComments.filter((val) => {
    //   return val.postId === location;
    // });

    // const displayComments = filteredcomment.map((comment) => {
    // return;
    // <div className="commentBox">
    //   Post Title:{comment.name}
    //   <br />
    //   Email:{comment.email}
    //   <br />
    //   Body:{comment.body}
    //   <div className="linkSpace">
    //     <Link to={`/posts/${comment.postId}/Editcomments/${comment.id}`}>
    //       Edit Comments
    //     </Link>
    //     <Link to={`/posts/${comment.postId}/Deletecomments`}>
    //       Delete Comments
    //     </Link>
    //   </div>
    //   <br />
    // </div>
  }
  //   return (
  //     <>
  //       <Link
  //         to={{
  //           pathname: `/posts/${filteredcomment[0].postId}/Addcomments`,
  //           state: { postId: filteredcomment[0].postId },
  //         }}
  //       >
  //         Add Comments
  //       </Link>
  //       <h3>{displayComments}</h3>
  //     </>
  //   );
  // }
}
export default Comments;
