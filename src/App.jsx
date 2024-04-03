import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Feed from "./Components/Feed";
// import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="Appp" style={{ margin: "-8px" }}>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
