//-------------------------------------------------------------
// DATABASE: movieDB
//-------------------------------------------------------------
// use movieDB;


//-------------------------------------------------------------
// CREATE COLLECTION
//-------------------------------------------------------------
db.createCollection("movies");


//-------------------------------------------------------------
// INSERT 10 MOVIE DOCUMENTS
//-------------------------------------------------------------
db.movies.insertMany([
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-06-15",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-02-10",
    film_title: "Action Star",
    year: 2018,
    type: "Thriller"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-06-15",
    director_name: "Karan",
    director_id: 202,
    director_birthdate: "1975-08-28",
    film_title: "Comedy Nights",
    year: 2018,
    type: "Comedy"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-06-15",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-02-10",
    film_title: "Fear Zone",
    year: 2019,
    type: "Horror"
  },
  {
    actor_name: "Aman",
    actor_id: 102,
    actor_birthdate: "1990-03-10",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-02-10",
    film_title: "Life Story",
    year: 2018,
    type: "Drama"
  },
  {
    actor_name: "Riya",
    actor_id: 103,
    actor_birthdate: "1992-09-20",
    director_name: "Shyam",
    director_id: 203,
    director_birthdate: "1968-12-01",
    film_title: "Laugh Out Loud",
    year: 2017,
    type: "Comedy"
  },
  {
    actor_name: "Sameer",
    actor_id: 104,
    actor_birthdate: "1987-11-11",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-02-10",
    film_title: "City Runner",
    year: 2020,
    type: "Thriller"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-06-15",
    director_name: "Vikram",
    director_id: 204,
    director_birthdate: "1978-05-17",
    film_title: "Hero Returns",
    year: 2018,
    type: "Action"
  },
  {
    actor_name: "Aisha",
    actor_id: 105,
    actor_birthdate: "1995-04-14",
    director_name: "Shyam",
    director_id: 203,
    director_birthdate: "1968-12-01",
    film_title: "Romantic Breeze",
    year: 2019,
    type: "Romance"
  },
  {
    actor_name: "Kabir",
    actor_id: 106,
    actor_birthdate: "1988-01-01",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-02-10",
    film_title: "Dark Secrets",
    year: 2018,
    type: "Thriller"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-06-15",
    director_name: "Shyam",
    director_id: 203,
    director_birthdate: "1968-12-01",
    film_title: "Final Mission",
    year: 2016,
    type: "Action"
  }
]);


//-------------------------------------------------------------
// QUERY 1:
// List all movies acted by John in the year 2018
//-------------------------------------------------------------
db.movies.find(
  { actor_name: "John", year: 2018 },
  { _id: 0, film_title: 1, type: 1 }
);


//-------------------------------------------------------------
// QUERY 2:
// List ONLY actor names + movie type for movies directed by Ram
//-------------------------------------------------------------
db.movies.find(
  { director_name: "Ram" },
  { _id: 0, actor_name: 1, type: 1 }
);
