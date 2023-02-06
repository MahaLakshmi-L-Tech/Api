import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserComments from "./Comment.json";
import Users from "./Users";
import OptionDetail from "./OptionDetail";
import Comments from "./Comments";
import Addcomments from "./Addcomments";
import Editcomments from "./Editcomments";
import Deletecomments from "./Deletecomments";
import Demo from "./demo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact={true} />
        <Route
          path="/users/:id/posts"
          element={<OptionDetail />}
          exact={true}
        />
        <Route
          path="/posts/:id/comments"
          element={<Comments UserComments={UserComments} />}
          exact={true}
        />
        <Route
          path="/posts/:id/Addcomments"
          element={<Addcomments UserComments={UserComments} />}
          exact={true}
        />
        <Route
          path="/posts/:id/Editcomments/:email"
          element={<Editcomments UserComments={UserComments} />}
          exact={true}
        />
        <Route
          path="/posts/:id/Deletecomments"
          element={<Deletecomments UserComments={UserComments} />}
          exact={true}
        />
      </Routes>
      {/* <Demo /> */}
    </BrowserRouter>
  );
}

export default App;
