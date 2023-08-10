import "./App.css";
import ExpensesTracker from "./components/ExpensesTracker";
import Home from "./components/Home";
import MainHeadTodo from "./components/MainHeadTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/WeatherApp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/todoapp" Component={MainHeadTodo} />
          <Route exact path="/expensestracker" Component={ExpensesTracker} />
          <Route exact path="/weatherapp" Component={WeatherApp} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
