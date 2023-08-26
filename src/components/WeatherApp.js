import React, { useState } from "react";
import searchLogo from "../images/search.png";
import CloudyImg from "../images/clouds.png";
import HumidityImg from "../images/humidity.png";
import WindImg from "../images/wind.png";
import Clear from "../images/clear.png";
import Drizzle from "../images/drizzle.png";
import Haze from "../images/haze.png";
import Mist from "../images/mist.png";
import Rain from "../images/rain.png";
import Snow from "../images/snow.png";
import Transitions from "./Transitions";

const WeatherApp = () => {
  const [text, setText] = useState("");

  //https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=78f48424dbefa01c37286d0ac5b7fadd

  const OnTypeing = (event) => {
    setText(event.target.value);
  };

  const searchPress = async () => {
    if (text === "") {
      alert("Input cannot be Blank...");
    } else {
      console.log(text);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=78f48424dbefa01c37286d0ac5b7fadd`;

      const response = await fetch(url);

      if (response.status === 404) {
        alert("wrong Inpput");
      } else {
        var data = await response.json();
        setText("");

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".cloud").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°C";
        document.querySelector(".country").innerHTML =
          "Country: " + data.sys.country;
        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main === "Clouds") {
          document.querySelector(".weatherIcon").src = CloudyImg;
        } else if (data.weather[0].main === "Windy") {
          document.querySelector(".weatherIcon").src = WindImg;
        } else if (data.weather[0].main === "Haze") {
          document.querySelector(".weatherIcon").src = Haze;
        } else if (data.weather[0].main === "Mist") {
          document.querySelector(".weatherIcon").src = Mist;
        } else if (data.weather[0].main === "Clear") {
          document.querySelector(".weatherIcon").src = Clear;
        } else if (data.weather[0].main === "Drizzle") {
          document.querySelector(".weatherIcon").src = Drizzle;
        } else if (data.weather[0].main === "Rain") {
          document.querySelector(".weatherIcon").src = Rain;
        } else if (data.weather[0].main === "Snow") {
          document.querySelector(".weatherIcon").src = Snow;
        }
      }

      console.log(data);

      // .then(response=> response.json())
      // // .then(data=> setWData(data))
      // if(text===''){
      //     alert('Enter the valid Address..')
      // }
      // else{
      //     })

      // }
    }
  };

  return (
    <>

<Transitions />
      <div className=" lg:w-[50%] w-[85%] m-auto lg:mt-6 mt-10 bg-black/50 p-3 rounded-lg">

        <div className="mt-4 lg:text-[30px] text-[20px] font-serif font-bold text-yellow-100 text-center">
          Weather App...
        </div>
        <div className="felx mt-8 lg:mb-16 mb-4 items-center justify-center text-center">
          <input
            type="text"
            value={text}
            onChange={OnTypeing}
            placeholder="Enter the loaction..."
            className="lg:text-[16px] lg:h-16 text-[12px] h-10 p-2 rounded-full w-[80%]"
          ></input>

          <button
            className="m-2 justify-center w-14 h-14  rounded-full bg-slate-50 p-5 shadow-lg hover:bg-green-500"
            onClick={searchPress}
          >
            <img src={searchLogo} alt="search"></img>
          </button>
        </div>

        <div className="belowdiv">
          <div className="felx flex-col justify-center text-center">
            <img
              src={CloudyImg}
              alt="Cloudy"
              className="lg:w-[150px] lg:m-auto w-[100px] m-auto h-[100px] lg:h-[150px] weatherIcon"
            ></img>
            <h2 className="text-[20px] text-white capitalize cloud"> </h2>
            <h1 className="text-[50px] text-white font-semibold temp">0°C</h1>
            <h2 className="text-[20px] capitalize text-white city"> </h2>
            <h2 className="text-[30px] capitalize text-white country">
              Country:
            </h2>
          </div>

          <div className="mt-9 flex justify-between lg:mb-1 mb-10">
            <div className="ml-10">
              <img
                src={HumidityImg}
                alt="Humidity"
                className=" lg:h-10 lg:w-10 h-6 w-6"
              ></img>
              <p className="text-white lg:-mt-12 -mt-8 lg:ml-16 ml-12 humid">0%</p>
              <p className="lg:text-[15px] text-[12px] font-bold lg:ml-12 ml-8  text-white">
                Humidity:
              </p>
            </div>
            <div className="mr-10">
              <img src={WindImg} alt="Wind" className="lg:h-10 lg:w-10 h-6 w-6  "></img>
              <p className="text-white lg:-mt-12 -mt-8 lg:ml-12 ml-10 speed">0 km/hr</p>
              <p className="text-white lg:text-[15px] text-[12px] font-bold ml-10 lg:ml-12">WindSpeed:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
