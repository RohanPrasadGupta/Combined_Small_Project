import React, { useState } from "react";
import ListIcon from "./ListIcon";
import MainTodoLists from "./MainTodoLists";
import Transitions from "./Transitions";

const MainHeadTodo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const textChange = (event) => {
    setText(event.target.value);
  };

  const onAddBtn = () => {
    if (text === "") {
      alert("Enter Text to add..");
    } else {
      setList((allItem) => {
        return [...allItem, text];
      });
    }
    setText("");
  };

  const deleteItem = (id) => {
    setList((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Transitions />
      <div className=" w-[70%] m-auto mt-14 bg-black/50 p-3 rounded-lg ">
        <div className="flex mb-6 justify-center">
          <h1 className="font-bold text-[16px] lg:text-[34px] underline underline-offset-2 font-serif text-white ">
            Todo APP...
          </h1>
          <ListIcon className="lg:w-12 lg:h-12 ml-4 w-6 h-6" />
        </div>
        <div className="flex justify-center mb-4 w-auto">
          <input
            type="text"
            value={text}
            onChange={textChange}
            className="border-0 p-3 rounded-2xl flex-1 lg:w-auto w-[60%] "
            placeholder="Enter task to add on list..."
          ></input>
          <button
            className="ml-2 bg-orange-500 p-3 rounded-2xl font-bold text-[15px] text-white hover:bg-green-500 cursor-pointer "
            onClick={onAddBtn}
          >
            {" "}
            Add
          </button>
        </div>

        <div className="flex text-left ml-6">
          <ul>
            {list.map((itemval, index) => {
              return (
                <MainTodoLists
                  text={itemval}
                  id={index}
                  key={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainHeadTodo;
