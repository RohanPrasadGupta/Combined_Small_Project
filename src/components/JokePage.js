import React from "react";

const JokePage = () => {


    const limit = 20;
    const apikey = 'P9znoQ74ICvaYWmvazLpyQ==cgFrFYF65vMHWNPP';
    const url = `https://api.api-ninjas.com/v1/jokes?limit=${limit}`;

  

  return (
    <div className=" lg:w-[50%] w-[85%] m-auto lg:mt-6 mt-10 bg-black/50 p-3 rounded-lg">
      <h1 className="felx m-auto text-white justify-center text-center text-[20px] underline underline-offset-4 font-bold">
        Joke Page...
      </h1>

      <h2>jokes here</h2>


    </div>
  );
};

export default JokePage;
