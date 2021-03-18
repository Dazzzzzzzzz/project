"use strict";


const nubmerOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
console.log(nubmerOfFilms);


const personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false


};

const a = prompt("Один из последних просмотренных фильмов?",""),
    b = prompt("На сколько оцените его?",""),
    c = prompt("Один из последних просмотренных фильмов?",""),
    d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);


// let incr = 10,
//     decr = 10;
// // incr++;
// // decr--;

// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);





// console.log('arr' + "- object");


// const category = 'guns';

// console.log(`https://someurl.com/${category}`);

// const user = "Ivan";

// alert(`Hello, ${user}`);


// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj ["name"]);

// let arr = [`plum.png`,`orange.jpg`,`apple.bmp`];
// console.log(arr[1]);

// const result = confirm(`Are you here?`);
// console.log(result);

// const answer = +prompt("Вам есть 18","18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your surname?', '');
// answers[3] = prompt('How old are you?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

