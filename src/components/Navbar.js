import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-black/70 text-white container">
        
        <ul className=" flex justify-between p-2 lg:text-[18px] text-[8px] ">
          <li className=" border-solid border-white border-[2px] p-2 rounded-lg hover:bg-white hover:text-black">
            <Link to='/todoapp' > TodoApp </Link>
          </li>
          
          <li className=" border-solid border-white border-[2px] p-2 rounded-lg hover:bg-white hover:text-black">
            <Link to="/expensestracker" > Expenses Tracker </Link>
          </li>
          <li className=" border-solid border-white border-[2px] p-2 rounded-lg hover:bg-white hover:text-black">
            <Link to="/weatherapp" > WeatherApp </Link>
          </li>
          <li className=" border-solid border-white border-[2px] p-2 rounded-lg hover:bg-white hover:text-black">
            <Link to="/jokepage" > JokePage </Link>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
