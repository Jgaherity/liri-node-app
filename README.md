
# liri-node-app:
## LIRI - Language Interpretation and Recognition Interface

 [link to to video demonstration](https://drive.google.com/file/d/1zAoybyCUTjQkG0ighu0I5fA0H5ks_MgQ/view)
 
 Liri node app provides data about an artist, song, concert, or movie! Simply enter in node commands and find out more about your favorite media. 
 
 
 ## Install instructions
 LIsted in the package.json, you need to install the follow npm packages via node:
 
 ```js
npm i node-spotify-api
 ```
 
 ```js
npm i request
 ```
 
 ```js
npm i moment
 ```
 
 ```js
npm i request
 ```
 
 ## get started
 
 At the root level of this project, enter in one of the following commands: 
 
 1. `node liri.js concert-this <artist/band name here>`
* APIs used: Bands in Town
* Results: 
     * Name of the venue
     * Venue location
     * Date of the Event

 
2. `node liri.js spotify-this-song '<song name here>'`
* APIs used: Spotify
* Results:
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
 
 3. `node liri.js movie-this '<movie name here>'`
* APIs used: OMBD
 *Results: 
     * Title of the movie.
     * Year the movie came out.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Country where the movie was produced.
     * Language of the movie.
     * Plot of the movie.
     * Actors in the movie.

4. `node liri.js do-what-it-says`
    * Results in pre-determined spotify song "I want it that way" from the first command



