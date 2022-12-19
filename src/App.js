import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Objective from "./pages/Objective";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Password from "./pages/Password";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Personnel from "./pages/Personnel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Objective" element={<Objective />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/User" element={<User />} />
          <Route path="/Personnel" element={<Personnel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
