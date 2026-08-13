let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('How much movies have you already watched?');
    personalMovieDB.count = numberOfFilms;

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much movies have you already watched?');
        personalMovieDB.count = numberOfFilms;
    }
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('small');
    } else if (numberOfFilms <= 30) {
        alert('normal');
    } else {
        alert('huge');
    }
}

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let k = 1; k <= 3; k++) {
        personalMovieDB.genres[k - 1]  = prompt(`Your favourite movie number ${k}?`);
    }
}

function rememberMyFilms() {
    for (let m = 0; m < 2; m++) {

        const title = prompt('Last movie watched?');

        if (title === null) {
            alert('Please enter a movie name.');
            continue;
        } else if (title.length  === 0) {
            alert('Can`t be empty.');
        } else if(title.length > 50) {
            alert('Yo! Hold on!');
        }

        const rating = prompt('How would you rate it? 1-10');
        if (rating === null) {
            alert('Please enter a rating.');
        } else if (rating.length  === 0) {
            alert('Can`t be empty.');
        } else if(rating.length > 50) {
            alert('Yo! Hold on!');
        }

        personalMovieDB.movies[title] = rating;
    }
}

start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
showMyDB();