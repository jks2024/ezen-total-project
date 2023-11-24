import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./signup/Login";
import Signup from "./signup/Signup";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
