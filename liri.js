//https://github.com/Techmama1/liri-node-app/blob/master/liri.js

require("dotenv").config();

var apiKeys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);
var Spotify = require('node-spotify-api');
var request = require('request');
var moment = require('moment');
var fs = require('file-system');

var spotify = new Spotify({
    id: apiKeys.spotify.id,
    secret: apiKeys.spotify.secret
  });

//   * This will search the Bands in Town Artist Events API 
//(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) 
//for an artist and render the following information about each event to the terminal:


//FINISHED
if (process.argv[2] == 'concert-this' ) {
   
    var artist = process.argv.slice(3).join(" ");
   
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function (error, response, body) {
        if (error) {
            console.log(error);
        }

        var result  =  JSON.parse(body);
        console.log("request succesfull \n\n");
        for(i=0; i < result.length; i++){
            //console.log(i);
            console.log("Vanue name: ", result[i].venue.name);
            console.log("Venue city, state: ", result[i].venue.city , result[i].venue.region);
            console.log("Date of event", moment(result[i].datetime).format("MM/DD/YYYY"));
        }
    });

//FINISHED
} else if (process.argv[2] == 'spotify-this-song' ) {
   
    //var artist = process.argv[3];
    var artist = process.argv.slice(3).join(" ");
    var songName;
    if (songName = ""){
        songName = "The Sign" //this needs work
        songName = songName.join(" ");
        console.log("songName: ", songName);
    } else{
        songName = process.argv.slice(3).join(" ");
        console.log(typeof songName);   
    }

    spotify.search({ type: 'track', query: songName, limit: 10}, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }

        console.log("search successful \n\n");
        console.log("artist name: ", data.tracks.items[0].album.artists[0].name);
        console.log("song name: ", data.tracks.items[0].name);
        console.log("preview link: ", data.tracks.items[0].preview_url);
        console.log("album name: ", data.tracks.items[0].album.name);
    });

} else if (process.argv[2] == 'movie-this' ) {
    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
    //var artist = process.argv[3];

    var movie = process.argv.slice(3).join("+");
    console.log("start");
    // console.log("movie: ", movie);
    // console.log("typeof: ", typeof movie);
    if (movie == ""){
        console.log("undefined!!!");
    }

    var queryURL = "http://www.omdbapi.com/?apikey=f2ba943a&t=" + movie;
    console.log(queryURL);

    request(queryURL, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        var result  =  JSON.parse(body);
        //console.log(result);
        console.log("\n\n\nMovie title: ", result.Title);
        console.log("Movie year: ", result.Year);
        console.log("IMBD rating: ", result.imdbRating);
        //console.log("Rotten tomatos rating: ", result.Ratings[0]);
        console.log("Country produced: ", result.Country);
        console.log("Language of movie", result.Language);
        console.log("Movie plot: ", result.Plot);
        console.log("Movie plot: ", result.Actors);
    });
}else if (process.argv[2] == 'do-what-it-says' ) {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        console.log(data);
         newName = data.split(",");
         newName = newName[1].slice(1, -1);
         //console.log("inside song name: ", newName);

         spotify.search({ type: 'track', query: newName, limit: 10}, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
            console.log("search successful \n\n");
            console.log("artist name: ", data.tracks.items[0].album.artists[0].name);
            console.log("song name: ", data.tracks.items[0].name);
            console.log("preview link: ", data.tracks.items[0].preview_url);
            console.log("album name: ", data.tracks.items[0].album.name);
        });
    });
}



