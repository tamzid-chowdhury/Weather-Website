const request = require('request');


const forecast = (latitude,longtitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=958a68ee586c3688133de8c2e37f49a0&query=" + latitude + "," + longtitude + "&units=f";
    request({url, json:true},(error,{body} = {}) => {
        if(error){
            callback("Unable to connect to weather service!");
        }
        else if(body.error){
            callback("Unable to find location. Try another search!");
        }
        else{
            callback(undefined,body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " 
            + body.current.feelslike + " degrees out.");
        }
    })
}

module.exports = forecast 