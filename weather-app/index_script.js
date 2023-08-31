import API_KEY from "./config.js";

import CITY from "./CITY.js";


window.onload= function(){
  document.getElementById("search-btn").addEventListener('click', ()=>{
getWeatherData();
  })
}
// var CITY =[
//     "adhilabad",
//     "anakapalli",
//     "athili",
//     "bhimavaram",
//     "bhikkavolu",
//     "kakinada",
//     "rajahmundry",
//     "pitapuram",
//     "peddapuram",
//     "samalkot",
//     "thadepalligudem",
//     "thanuku",
//     "eluru",
//     "bhemadolu"
//   ];

  const place=document.querySelector("#place");

  // populated data
  for (var i in CITY){
    var option = document.createElement("option");
    option.value = CITY[i];
    option.text=CITY[i];
    place.appendChild(option);
  }

  //get weather data
  function getWeatherData(){

    let cityName=document.getElementById('search-input').value;
    // alert(API_KEY);
   let api_endPoint=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}&lang=en`;
   fetch(api_endPoint).then((res)=> {
    return res.json()
   }).then((data)=>{
    populatedWeatherData(data);
   })
function populatedWeatherData(data){
  document.getElementById("city_info").innerText=`Weather in ${data.name}`;
  document.getElementById('temp').innerText=data.main.temp;
  document.getElementById('humidity').innerText=data.main.humidity;
  document.getElementById('Wind_speed').innerText=data.wind.speed;
  document.getElementById('sunrise').innerText=formatAMPM(new Date(data.sys.sunrise * 1000));
  document.getElementById('sunset').innerText=formatAMPM(new Date(data.sys.sunset * 1000));
  getWeeklyData();
}
      }

      function getWeeklyData(){
        
      }
  
      function formatAMPM(date){
        return date.toLocaleString ("en-US",{
          hour:"numeric",
          minute:"numeric",
        });
      }
  
  