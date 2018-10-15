require("dotenv").config();

var apiKeys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);
var Spotify = require('node-spotify-api');
var request = require('request');
var moment = require('moment');

//   * This will search the Bands in Town Artist Events API 
//(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) 
//for an artist and render the following information about each event to the terminal:


if (process.argv[2] == 'concert-this' ) {
   
    var artist = process.argv.slice(3).join(" ")
    console.log(artist);
   
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function (error, response, body) {
        if (error) console.log(error);
        var result  =  JSON.parse(body)[0];
        console.log(response.venue)
        //console.log(response);
        // console.log("Venue name " + result.venue.name);
        // console.log("Venue location " + result.venue.city);
        // console.log("Date of Event " +  moment(result.datetime).format("MM/DD/YYYY"));
       
    });
}
