/* eslint-env node */

import fs from "fs";
import path from "path";

let skippedFiles;

function createMovieFromFile(filePath, callback) {
    let fileContent = fs.readFileSync(filePath, { encoding: "utf8" }),
        movie = Movie.fromJSON(fileContent);
    callback(movie);
}

class Movie {

    constructor(title, year, genre, director, actors, poster) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
        this.actors = actors;
        this.poster = poster;
        Object.freeze(this);
    }

    static fromJSON(json) {
        let jsonObject = JSON.parse(json),
            title = jsonObject.Title,
            year = jsonObject.Year,
            genre = jsonObject.Genre.split(", ")[0],
            director = jsonObject.Director,
            actors = jsonObject.Actors.split(", ").map(function(actor) {
                return {
                    name: actor,
                };
            }),
            poster = jsonObject.Poster;
        return new Movie(title, year, genre, director, actors, poster);
    }

}

class MovieParser {

    constructor() {
        this.filters = [];
    }

    setMovieParserListener(callback) {
        this.movieParserListener = callback;
    }

    parseMoviesFrom(dataPath) {
        let files = fs.readdirSync(dataPath);
        skippedFiles = 0;
        for (let i = 0; i < files.length; i++) {
            let filePath = path.join(dataPath, files[i]);
            console.log(`Parsing movie ... ${Math.floor((i/files.length) * 100)}% (Skipped ${skippedFiles}/${i+1} files)`);
            try {
                createMovieFromFile(filePath, this.movieParserListener);
            } catch (error) {
                console.log(`Error while importing movie from  ${filePath}`);
                skippedFiles++;
            }
        }
    }

}

export default new MovieParser();