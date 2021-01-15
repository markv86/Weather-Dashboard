// Variables
let city = cleveland;
let searchBtn = $(".btn") 
let input = 
let cityName = cleveland

//API key
var APIKey = "5aaef105d6f2d697fbe06f4fa073111b";
var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + " &appid=5aaef105d6f2d697fbe06f4fa073111b";

$.ajax({
    url: "api.openweathermap.org/data/2.5/weather?q=cleveland&appid=5aaef105d6f2d697fbe06f4fa073111b",
    get: "GET"
}).then(function(response){
    console.log(response)
});

// function searchCity(cityName) {
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//         console.log(cityName)
//     })
    // }).then(function (response) {
    //     console.log(response);
    //     console.log(queryURL);

// function currentWeather(city){
//     var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
//     $.ajax({
//         url:queryURL,
//         method:"GET",
//         }).then(function(response)
