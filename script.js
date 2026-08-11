const numberOfFilms = +prompt('How much movies have you already watched?');

function checkMovieCount() {
    if (numberOfFilms < 10) {
        alert('small');
    } else if (numberOfFilms <= 30) {
        alert('normal');
    } else {
        alert('huge');
    }
}
 checkMovieCount();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

function getMovieInfo() {
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



getMovieInfo();
console.log(personalMovieDB);