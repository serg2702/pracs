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



/*let numberOfFilms;

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

writeYourGenres();*/

        // Конец практического 3




        
        
const personalMovieDataBase = {
    count:0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDataBase.count = +prompt('Skolko filmov posmotreli', '');
    
        while (personalMovieDataBase.count == '' || 
        personalMovieDataBase.count == null || isNaN(personalMovieDataBase.count)) {
            personalMovieDataBase.count = +prompt('Skolko filmov posmotreli', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            const a = prompt('Last film', ''),
                  b = prompt('Ocenka', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDataBase.movies[a] = b;
                console.log('Done (filmi)');
            } else {
                console.log('Error 1');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
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
    },

    showMyDB: function() {
        if (!personalMovieDataBase.privat) {
            console.log(personalMovieDataBase);
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            //const genre = prompt(`Lubimiy genre pod nomerom ${i}`, '');
            //if (genre != null || genre != '') {
            //    personalMovieDataBase.genres[i - 1] = genre;
            //    console.log('Done (genre)');
            //} else {
            //    console.log('Error 2');
            //    i--;
            //}

            // Другой способ

            let genres = prompt(`Введите любимые жанры через запятую`).toLowerCase;
            if (genres === null || genres === '') {
                    i--;
                    console.log('Error 2');
                } else {
                    console.log('Done (genre)');
                    personalMovieDataBase.genres = genres.split(', ');
                    personalMovieDataBase.genres.sort();
                }
        }

    personalMovieDataBase.genres.forEach((item, i) => {
        console.log(`Любимый жанр под номером ${i + 1} - это ${personalMovieDataBase.genres[i]}`);
    });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDataBase.privat) {
            personalMovieDataBase.privat = false;
        } else {
            personalMovieDataBase.privat = true;
        }
    },
};


personalMovieDataBase.start();
personalMovieDataBase.rememberMyFilms();
personalMovieDataBase.detectPersonalLevel();
personalMovieDataBase.showMyDB(personalMovieDataBase.privat);
personalMovieDataBase.writeYourGenres();
personalMovieDataBase.toggleVisibleMyDB(personalMovieDataBase.privat);


        // Конец практического 4