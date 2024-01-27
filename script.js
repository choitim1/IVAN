"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
/*let a = prompt("Один из последних просмотренных фильмов?", "");
let b = prompt("На сколько оцените его?", "");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
*/
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", "");
//   const b = prompt("На сколько оцените его?", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }
// console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
  alert("маловато");
} else if (personalMovieDB.count >= 30) {
  alert("ok");
} else alert("error");

