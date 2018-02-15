var fs = require('fs');

// Store all of the arguments in arrays
var action = process.argv[2];
var argTwo = process.argv[3];
var request = require('request');

// Get twitter and spotify keys from keys.js
var keys = require('./keys.js');

// Grab the twitter package
var twitter = require('twitter');
var client = new twitter(keys.twitterKeys);
var params = {screen_name: 'FoxNews', count: 20};

// Grab the spotify package
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotifyKeys);


// Switch statement to run different apps
switch (action) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifySong();
        break;
    case "movie-this":
        thisMovie();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
}

// Twitter
function myTweets() {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        // If no error, 
        if (!error) {

            // Repeat for up to 20 tweets/how many tweets there are...
            for (i = 0; i < tweets.length; i++) {
                // Divider line
                console.log('-----------------------------------------------------------');
                // logs the date/time the tweets were created.
                console.log(tweets[i].created_at);
                // log tweets text.
                console.log(tweets[i].text);
              
            }
        }
    })
};


// Spotify
function spotifySong() {
    var song = "The Sign Ace of Base";
    if (argTwo !== undefined) {
        song = argTwo;
    }
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        // logs the artists, song name, spotify preview link
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);

    });
}




// omdb Movie
function thisMovie() {
    var movieName = process.argv[3];
    var movieName = "Mr. Nobody";
    if (argTwo !== undefined) {
        movieName = argTwo;
    }

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Parse the body of the following information
            var movieData = JSON.parse(body);
            console.log("Title: " + movieData.Title);
            console.log("Year: " + movieData.Year);
            console.log("IMDB Rating: " + movieData.imdbRating);
            console.log("Rotten Tomatoes Rating: " + movieData.tomatoRating);
            console.log("Country: " + movieData.Country);
            console.log("Language: " + movieData.Language);
            console.log("Plot: " + movieData.Plot);
            console.log("Actors: " + movieData.Actors);
        }
    })
}





// Do What It Says
function doWhatItSays() {
    fs.readFile('random.txt', 'utf8', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            var dataArray = data.split(',');
            var argOne = dataArray[0];
            var argTwo = dataArray[1];
            switch (argOne) {
                case "my-tweets":
                    getTweets();
                    break;
                case "spotify-this-song":
                    function getSong() {
                        var queryInput = "what's my age again";
                        if (argTwo !== undefined) {
                            queryInput = argTwo;
                        }
                        spotify.search({ type: 'track', query: queryInput, count: 1 }, function(err, data) {
                            if (err) {
                                console.log('Error occurred: ' + err);
                                return;
                            }
                            console.log("Artist: " + data.tracks.items[0].artists[0].name);
                            console.log("Song Name: " + data.tracks.items[0].name);
                            console.log("Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify);
                            console.log("Album: " + data.tracks.items[0].album.name);

                        });
                    }
                    getSong();
                    break;
                case "movie-this":
                    function getMovie() {
                        var queryInput = "Mr. Nobody";
                        if (argTwo !== undefined) {
                            queryInput = argTwo;
                        }
                        request('http://www.omdbapi.com/?t=' + queryInput + "&tomatoes=true", function(error, response, body) {
                            if (!error && response.statusCode == 200) {
                                var movieData = JSON.parse(body);
                                console.log("Title: " + movieData.Title);
                                console.log("Year: " + movieData.Year);
                                console.log("IMDB Rating: " + movieData.imdbRating);
                                console.log("Rotten Tomatoes Rating: " + movieData.tomatoRating);
                                console.log("Country: " + movieData.Country);
                                console.log("Language: " + movieData.Language);
                                console.log("Plot: " + movieData.Plot);
                                console.log("Actors: " + movieData.Actors);
                            } else {
                                console.log(error);
                            }
                        });
                    }
                    getMovie();
                    break;
            }
        }
    });
}
