## liri-node-app

In this assignment, I created LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Liri can take in one of the folling commands.

  *'my-tweets'

  *'spotify-this-song"

  *'movie-this'

  *'do-what-it-says'

## Getting Started

- git clone https://github.com/julienguyen86/liri-node-app.git
- cd *path*/liri-node-app
- Run command 'npm install' in Terminal or GitBash
- Run command 'node liri.js' or one of the commands below.

## What Each Command Does

1.  `node liri.js my-tweets`

    * This will show your last 20 tweets and when they were created at in your terminal/bash window.

2.  `node liri.js spotify-this-song '<song name here>'`

    * This will show the following information about the song in your terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

     * If no song is provided then your program will default to "The Sign" by Ace of Base.



3. `node liri.js movie-this <movie name>`

  * This will output the following information to your terminal/bash window:

      * Title of the movie.
      * Year the movie came out.
      * IMDB Rating of the movie.
      * Rotten Tomatoes Rating of the movie.
      * Country where the movie was produced.
      * Language of the movie.
      * Plot of the movie.
      * Actors in the movie.
      * Or if no movie is passed through, it will default to "Mr. Nobody"

4. `node liri.js do-what-it-says`

      * Takes the text from random.txt and runs the song through spotify-this-song command

## Technology used
- Node.js
    * [Twitter]https://www.npmjs.com/package/twitter
   
    * [Spotify]https://www.npmjs.com/package/node-spotify-api
   
    * [Request]https://www.npmjs.com/package/request


## Author

* Julie Nguyen Github: https://github.com/juliemnguyen86
