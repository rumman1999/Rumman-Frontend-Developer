import { Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Meals from "./pages/Meals/Meals";
import MealDetail from "./pages/MealDetail/MealDetail";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <div className="flex-grow">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/meal-detail/:idMeal" element={<MealDetail />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
