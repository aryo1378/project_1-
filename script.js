// Project 1 code

const numberOfFilms = +prompt('How much movies have you already watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};


const answer1 = prompt('Last movie watched?');
const answer2 = +prompt('How would you rate it on a scale 1-10?');

const answer3 = prompt('Last movie watched?');
const answer4 = +prompt('How would you rate it on a scale 1-10?');

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;

console.log(personalMovieDB);