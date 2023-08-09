import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-black/80 text-white">
        
        <ul className=" flex justify-between p-2">
          <li className=" border-solid border-white border-[2px] p-2 rounded-lg">
            <Link to='/' > Home </Link>
          </li>
          <li className=" border-solid border-white border-[2px] p-2 rounded-lg">
            <Link to="/todoapp" >TodoApp </Link>
          </li>
          <li className=" border-solid border-white border-[2px] p-2 rounded-lg">
            <Link to="/expensestracker" > Expenses Tracker </Link>
          </li>
          <li className=" border-solid border-white border-[2px] p-2 rounded-lg">
            <Link to="/weatherapp" > WeatherApp </Link>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
