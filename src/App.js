// import ConnectForm from "./pages/ConnectForm";
import Contact from "./components/Contact/Contact";
// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Hero /> */}
      {/* <ConnectForm /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
