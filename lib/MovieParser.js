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

    constructor(title, year, genre, director, actors) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
        this.actors = actors;
        Object.freeze(this);
    }

    static fromJSON(json) {
        let jsonObject = JSON.parse(json);
        return new Movie(jsonObject.title, jsonObject.year, jsonObject.genre, jsonObject.director, jsonObject.actors);
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
            if (i % 100 === 0) {
                console.log(
                    `[Parsing movie ... ${Math.floor((i/files.length) * 100)}% (Skipped ${skippedFiles}/${i} files)`
                );
            }
            createMovieFromFile(filePath, this.movieParserListener);
        }
    }

}

export default new MovieParser();