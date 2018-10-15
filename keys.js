console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

//unsure if this is correct? usually looks like module.exports= myBands
module.exports = exports.spotify;

