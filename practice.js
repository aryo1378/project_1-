let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
    start() {
    numberOfFilms = +prompt('How much movies have you already watched?');
    this.count = numberOfFilms;

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much movies have you already watched?');
        this.count = numberOfFilms;
    }
    },
    detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('small');
    } else if (numberOfFilms <= 30) {
        alert('normal');
    } else {
        alert('huge');
    }
    },
    showMyDB() {
    if (this.privat === false) {
        console.log(this);
    }
    },
    writeYourGenres() {
    for (let k = 1; k <= 3; k++) {
        let response = prompt(`Your favourite movie number ${k}?`);
        while (response === null || response.trim() === '') {
            response = prompt(`Your favourite movie number ${k}?`);
        }
        this.genres[k - 1] = response;
        
    }
    this.genres.forEach(function(genre, index) {
            console.log(`Favorite genre #${index + 1} is ${genre}`);
        })
    },
    rememberMyFilms() {
    for (let m = 0; m < 2; m++) {

        let title = prompt('Last movie watched?');

        if (title === null) {
            alert('Please enter a movie name.');
            continue;
        } 

        title = title.trim();

        if (title.length  === 0) {
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

        this.movies[title] = rating;
    }
    },
    toggleVisibleMyDB() {
        this.privat = !this.privat;
    }
};

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();