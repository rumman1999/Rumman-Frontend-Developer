import { Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <div className="flex-grow">
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
