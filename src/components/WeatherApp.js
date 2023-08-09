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
      <div className=" w-[70%] m-auto mt-14 bg-black/50 p-3 rounded-lg">

        <div className="mt-4 text-[30px] font-serif font-bold text-yellow-100 text-center">
          Weather App...
        </div>
        <div className="felx mt-8 mb-16 items-center justify-center text-center">
          <input
            type="text"
            value={text}
            onChange={OnTypeing}
            placeholder="Enter the loaction..."
            className="text-[16px] h-16 p-2 rounded-full w-[80%]"
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
              className="w-[150px] m-auto h-[150px] weatherIcon"
            ></img>
            <h2 className="text-[20px] text-white capitalize cloud"> </h2>
            <h1 className="text-[50px] text-white font-semibold temp">0°C</h1>
            <h2 className="text-[20px] capitalize text-white city"> </h2>
            <h2 className="text-[30px] capitalize text-white country">
              Country:
            </h2>
          </div>

          <div className="mt-9 flex justify-between mb-10">
            <div className="ml-10">
              <img
                src={HumidityImg}
                alt="Humidity"
                className=" h-10 w-10"
              ></img>
              <p className="text-white -mt-12 ml-16 humid">0%</p>
              <p className="text-[15px] font-bold ml-12 text-white">
                Humidity:
              </p>
            </div>
            <div className="mr-10">
              <img src={WindImg} alt="Wind" className="h-10 mr-24 w-10  "></img>
              <p className="text-white ml-12 -mt-12 speed">0 km/hr</p>
              <p className="text-white font-bold ml-10">WindSpeed:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
