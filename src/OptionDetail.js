import React, { PureComponent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class OptionDetail extends PureComponent {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: [],
    };
  }

  componentDidMount = () => {
    const id = +window.location.pathname.split("/")[2];
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`) //change API
      .then((response) => {
        const posts = response.data;
        // const updatedpost = posts.filter((post) => post.userId === id);
        this.setState({ posts });
      })

      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const users = response.data;
        this.setState({ users });
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
    // const temppost = this.state.posts.map((comme) => {
    //   return (
    //     <>
    //       <div>
    //         UserId:{comme.userId}
    //         name:{comme.title}
    //       </div>
    //       ;
    //     </>
    //   );
    // });
  };

  render() {
    const { posts } = this.state;
    const { users } = this.state;

    const userPosts = posts.map((comme) => {
      return (
        <div>
          <div className="userDetail">
            <div className="tittle">name:{comme.title}</div>
            <br />
            <div className="bodyComment">body: {comme.body}</div>
            <br />
            <Link to={`/posts/${comme.userId}/comments`}>View Comments</Link>
          </div>
        </div>
      );
    });

    return (
      <>
        <div>
          <h5 className="headingDisplay">
            Displaying the posts of<span>{users.name}</span>
          </h5>
          <br />
          <div className="commentFlex"> {userPosts}</div>
        </div>
      </>
    );
  }

  //   const location = +window.location.pathname.split("/")[2];
  //   // const idlocation = location.
  //   const { posts } = this.props;
  //   const filtereduser = posts.filter(function (value) {
  //     return value.userId === location;
  //   });

  //   const filterdata = filtereduser.map((val) => {
  //     return (
  //       <div className="userDetail">
  //         <br /> title: {val.title}
  //         <br />
  //         body:
  //         {val.body}
  //         <br />
  //         <Link to={`/posts/${val.userId}/comments`}>View Comments</Link>
  //       </div>
  //     );
  //   });

  //   return (
  //     <>
  //       <h3>{filterdata}</h3>
  //     </>
  //   );
  // }
}
export default OptionDetail;
