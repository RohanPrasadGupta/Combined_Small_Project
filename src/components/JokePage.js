import React, { useState } from "react";
import { Image1, Image2, Image3, Image5 } from "./Icons";
import Transitions from "./Transitions";

const JokePage = () => {
  const [jokes, setJokes] = useState([]);
  const [num , setNum] = useState('')

  const ButtonPressed = async()=>{
    // console.log('pressed')
    if (num<1){
      alert("Enter the number")
    }
    else if(num>51){
      alert("Sorry! Cannot exceet more than 50")
    }
    else{

      const limit = num;
      const apiKey = "P9znoQ74ICvaYWmvazLpyQ==cgFrFYF65vMHWNPP";
      const apiUrl = `https://api.api-ninjas.com/v1/jokes?limit=${limit}`;
      
      fetch(apiUrl,{
        method:'GET',
        headers:{
          "X-Api-key": apiKey,
          "Content-Type": "application/json"},
        }).then((response)=>{if (!response.ok){
          throw new Error("Network Error");
        }
        return response.json();
      }).then((data)=>{
        // console.log(data);
        setJokes(data)
      }).catch((error)=>{
        console.error("Console Error", error)
      })

    }    
  }

    function numberInput(event){
      // console.log(event.target.value)
      setNum(event.target.value)
      // console.log(num)
    }

  return (

    <>

   <Transitions />

    <div className=" lg:w-[90%] w-[95%] m-auto lg:mt-6 mt-10 bg-black/50 p-3 rounded-lg">
      <h1 className="felx m-auto text-white justify-center text-center text-[20px] underline underline-offset-4 font-bold">
        Joke Page...
      </h1>
        <div className=" p-2 flex items-center justify-center"> 
          <Image1 className='w-8 m-2 h-8' /> 
          <Image2 className='w-8 m-2 h-8' /> 
          <Image3 className='w-8 m-2 h-8'/>  
          <Image5 className='w-8 m-2 h-8'/>
          </div>


      <p className="text-[20px] text-center m-4 p-1 font-mono font-bold text-white underline underline-offset-4">"Enter the number 1-50 to render the jokes on Your Screen..."</p>
      <div className="flex justify-center items-center"> 

      <input type="number" placeholder="Enter the number of jokes to render..." className="p-2 rounded-lg m-2 border-none" onChange={numberInput} value={num}></input>

      <button
        onClick={ButtonPressed}
        className="border-2 border-black bg-white p-2 rounded-lg text-[12px] font-bold hover:text-white hover:bg-black hover:border-white w-12 h-10 border-none"
        >
        Show
      </button>
      </div>

          <div className="felx lg:columns-3 m-2 content-center text-center ">
          {jokes.length>0 ?( jokes.map((joke,index)=><div className="bg-white/50 rounded overflow-hidden shadow-lg p-1 m-2 h-auto w-auto font-bold font-mono" key={index}>{index+1}:&nbsp;{joke.joke}</div>)):(<div className="text-white font-mono font-bold">No Jokes To Display</div>)}
        </div>

    </div>
  </>
  );
};

export default JokePage;
