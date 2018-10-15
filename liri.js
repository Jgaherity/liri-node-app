require("dotenv").config();

var apiKeys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);
var Spotify = require('node-spotify-api');
var request = require('request');
var moment = require('moment');

var spotify = new Spotify({
    id: apiKeys.spotify.id,
    secret: apiKeys.spotify.secret
  });

//   * This will search the Bands in Town Artist Events API 
//(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) 
//for an artist and render the following information about each event to the terminal:


if (process.argv[2] == 'concert-this' ) {
   
    var artist = process.argv[3]; //only accepts one named artists
    //var artist = process.argv.slice(3).join(" ");
    // console.log(artist);
   
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function (error, response, body) {
        if (error) {
            console.log(error);
        }

        var result  =  JSON.parse(body);

        for(i=0; i < result.length; i++){
            //console.log(i);
            console.log("Vanue name: ", result[i].venue.name);
            console.log("Venue city, state: ", result[i].venue.city , result[i].venue.region);
            console.log("Date of event", moment(result[i].datetime).format("MM/DD/YYYY"));
        }
       
    });
} else if (process.argv[2] == 'spotify-this-song' ) {
   
    var artist = process.argv[3]; //only accepts one named artists
    //var artist = process.argv.slice(3).join(" ");

    // var spotify = new Spotify({
    //     id: <your spotify client id>,
    //     secret: <your spotify client secret>
    //   });

    var songName = process.argv.slice(3).join(" ");
    console.log("song name: ", songName);

    spotify.search({ type: 'track', query: songName}, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }

        console.log("call successful")
   
    });

    
}


