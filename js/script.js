"use strict";

/*const numberOfFilms = +prompt('Skolko filmov posmotreli', '');

const personalMovieDataBase = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last film', ''),
      b = prompt('Ocenka', ''),
      c = prompt('Last film', ''),
      d = prompt('Ocenka', '');

personalMovieDataBase.movies[a] = b;
personalMovieDataBase.movies[c] = d;

console.log(personalMovieDataBase);*/


// Конец практического 1


/*const numberOfFilms = +prompt('Skolko filmov posmotreli', '');

const personalMovieDataBase = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++){
    const a = prompt('Last film', ''),
          b = prompt('Ocenka', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDataBase.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error 1');
        i--;
    }
}

if (personalMovieDataBase.count < 10) {
    console.log('Posmotreno malo filmov');
} else {
    if (personalMovieDataBase.count > 9 && personalMovieDataBase.count < 30) {
        console.log('Klassicheskiy zritel');
    } else {
        if (personalMovieDataBase.count > 29) {
            console.log('Kinoman');
        } else {
            console.log('Error 2');
        }
    }
}

console.log(personalMovieDataBase);*/


        // Конец практического 2



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Skolko filmov posmotreli', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Skolko filmov posmotreli', '');
    }
} 

start();


const personalMovieDataBase = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Last film', ''),
              b = prompt('Ocenka', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDataBase.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error 1');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDataBase.count < 10) {
        console.log('Posmotreno malo filmov');
    } else {
        if (personalMovieDataBase.count > 9 && personalMovieDataBase.count < 30) {
            console.log('Klassicheskiy zritel');
        } else {
            if (personalMovieDataBase.count > 29) {
                console.log('Kinoman');
            } else {
                console.log('Error 2');
            }
        }
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDataBase);
    }
}

showMyDB(personalMovieDataBase.privat);


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Lubimiy genre pod nomerom ${i}`, '');
        personalMovieDataBase.genres[i - 1] = genre;
    }
}

writeYourGenres();

        // Конец практического 2