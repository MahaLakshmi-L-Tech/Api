import React, { PureComponent } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
class Users extends PureComponent {
  // test = (user) => {
  //   console.log("hello", user);
  // };
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const user = response.data;
        // console.log(user);

        this.setState({ user });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // render() {
  //   // const { posts } = this.props;

  //   // const tempusers = posts.map((user) => user.userId);
  //   // const users = new Array(...new Set(tempusers));

  //   return (
  //     <>
  //       <div className="page1">
  //         <h1 className="selectTitle">select userId</h1>
  //         <div className="userOption">
  //           {users.map((user) => {
  //             return (
  //               <div>
  //                 <Link to={`/user/${user}`}>
  //                   <FaUserCircle size={"80px"} />
  //                 </Link>
  //                 <h3>userid{user}</h3>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  render() {
    const { user } = this.state;

    return (
      <div className="page">
        <div className="page1">
          <h1 className="selectTitle">select user</h1>
          <div className="userOption">
            {user.map((usr) => {
              return (
                <Link to={`/users/${usr.id}/posts`}>
                  <FaUserCircle size={"80px"} />
                  <h3>{usr.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Users;
