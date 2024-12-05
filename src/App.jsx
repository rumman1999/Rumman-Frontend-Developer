import { Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    </>
  );
}

export default App;
