import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyNavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="navbar">
        <MyNavBar />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Home />} />
          <Route path="/productos/:id" element={<Home />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
