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


const numberOfFilms = +prompt('Skolko filmov posmotreli', '');

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

console.log(personalMovieDataBase);