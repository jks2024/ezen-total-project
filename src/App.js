import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./signup/Login";
import Signup from "./signup/Signup";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Members from "./pages/Members";
import MemberInfo from "./pages/MemberInfo";
import UserStore from "./context/UserStore";
import ThemeSetting from "./pages/ThemeSetting";
import Category from "./pages/board/Category";
import BoardList from "./pages/board/BoardList";
import BoardWrite from "./pages/board/BoardWrite";
import BoardDetail from "./pages/board/BoardDetail";
import Movies from "./pages/Movie";
import ChatList from "./pages/chatting/ChatList";
import ChatRoomCreate from "./pages/chatting/ChatRoomCreate";

function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Members" element={<Members />} />
            <Route path="/MemberInfo/:email" element={<MemberInfo />} />
            <Route path="/ThemeSetting" element={<ThemeSetting />} />
            <Route path="/category" element={<Category />} />
            <Route path="/boards" element={<BoardList />} />
            <Route path="/boardWrite" element={<BoardWrite />} />
            <Route path="/BoardDetail/:id" element={<BoardDetail />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Chat" element={<ChatList />} />
            <Route path="/Chat-create" element={<ChatRoomCreate />} />
          </Route>
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
