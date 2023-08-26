import React, { useState } from "react";
import PlusSign from "./PlusSign";
import Transitions from "./Transitions";

const ExpensesTracker = () => {
  const [show, setShow] = useState("hidden");
  const [btnText, setBtntext] = useState("Add");
  const [items, setItems] = useState([]);
  const [type, setType] = useState("");
  const [Balance, setBalance] = useState(0);
  const [Income, setIncome] = useState(0);
  const [Expenses, setExpenses] = useState(0);
  const [hoverChange, setHoverChange] = useState("bg-green-500");

  const [amt, setAmt] = useState("");
  const [desc, setDesc] = useState("");

  function divHideShow() {
    if (show === "hidden") {
      setBtntext("Cancel");
      setShow("visible");
      setHoverChange("bg-red-500");
    } else {
      setBtntext("Add");
      setShow("hidden");
      setHoverChange("bg-green-500");
    }
  }

  function addDataOnClick() {
    if ((amt === "") & (desc === "")) {
      alert("Enter Details to add...");
    } else if (amt === "") {
      alert("Enter Amout of Transaction...");
    } else if (desc === "") {
      alert("Enter Description of the Transaction...");
    } else {
      if (type === "") {
        alert("Select the type of Transaction...");
      } else if (type === "Income") {
        setBalance(Number(Balance) + Number(amt));
        setIncome(Number(Income) + Number(amt));
        let data = (
          <p>
            {desc} : {amt}
          </p>
        );
        setItems([...items, data]);
        setAmt("");
        setDesc("");
      } else {
        setBalance(Number(Balance) - Number(amt));
        setExpenses(Number(Expenses) + Number(amt));
        let data = (
          <p>
            {desc} : {amt}
          </p>
        );
        setItems([...items, data]);
        setAmt("");
        setDesc("");
      }
    }
  }

  const AmtOnChange = (event) => {
    setAmt(event.target.value);
  };

  const DescOnChange = (event) => {
    setDesc(event.target.value);
  };

  const setOption = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <Transitions />

      <div className=" lg:w-[60%] w-[85%]  m-auto mt-14 bg-black/50 p-3 rounded-lg">
        <div className="text-white font-mono font-bold lg:text-3xl text-2xl m-5">
          <h1>Expenses Tracker...</h1>
        </div>

        <div className="flex justify-between items-center mr-4 ml-4 font-mono mb-6">
          <h3 className="text-white p-5 bg-white/50 rounded-3xl  text-xl font-bold">
            Balance: ${Balance}
          </h3>
          <button
            className={` bg-blue-800 p-3 lg:text-[17px] text-[14px] rounded-full font-bold border-solid border-[2px] text-white lg:w-[80px] lg:h-[50px]  hover:${hoverChange}`}
            onClick={divHideShow}
          >
            {btnText}
          </button>
        </div>

        <div
          className={`flex flex-col lg:w-[50%] ${show} items-center content-center m-auto bg-white/50 p-3 rounded-lg `}
        >
          <input
            className="m-4 p-2 rounded-xl w-[70%]"
            type="number"
            placeholder="Enter Amount"
            value={amt}
            onChange={AmtOnChange}
          ></input>
          <input
            className="p-2 rounded-xl mb-4 w-[70%]"
            type="text"
            placeholder="Enter Description"
            value={desc}
            onChange={DescOnChange}
          ></input>

          <div
            className="flex flex-row items-center justify-center"
            onChange={setOption}
          >
            <input type="radio" value="Income" name="option"></input>
            <span className="text-green-600 mr-4 ml-1 font-bold text-lg">
              Income
            </span>
            <input type="radio" value="Expense" name="option"></input>
            <span className="text-red-600 ml-1 font-bold text-lg">Expense</span>
          </div>
          <button
            className="p-3 bg-black mt-5 text-[14px] rounded-full font-bold border-solid border-[2px] text-white w-[50px] h-[50px] hover:bg-green-600"
            onClick={addDataOnClick}
          >
            <PlusSign />
          </button>
        </div>

        <div className="flex justify-between mb-12">
          <div className="ml-10 mt-7 bg-slate-100/75 rounded-lg p-4 font-serif">
            <h1 className="underline font-bold">Income</h1>
            <h3 className="text-green-500 text-2xl">${Income}</h3>
          </div>
          <div className="mr-10 mt-7 bg-slate-100/75 rounded-lg p-4 font-serif">
            <h1 className="underline font-bold">Expenses</h1>
            <h3 className=" text-red-600 text-2xl">${Expenses}</h3>
          </div>
        </div>

        <div>
          <ul>
            {items.map((item, index) => (
              <li
                key={index + 1}
                className={`m-2 bg-blue-950/100 text-white capitalize rounded-md p-2 font-serif text-center text-lg`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExpensesTracker;
