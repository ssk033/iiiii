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
    actor_birthdate: "1985-04-10",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-03-15",
    film_title: "Final Attack",
    year: 2018,
    type: "Action"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-04-10",
    director_name: "Meera",
    director_id: 202,
    director_birthdate: "1978-07-21",
    film_title: "Night Shadow",
    year: 2018,
    type: "Thriller"
  },
  {
    actor_name: "Elly",
    actor_id: 102,
    actor_birthdate: "1990-11-12",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-03-15",
    film_title: "Ocean Breeze",
    year: 2018,
    type: "Drama"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-04-10",
    director_name: "Shyam",
    director_id: 203,
    director_birthdate: "1969-02-10",
    film_title: "Shadow Run",
    year: 2017,
    type: "Thriller"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-09-09",
    director_name: "Kabir",
    director_id: 204,
    director_birthdate: "1965-11-28",
    film_title: "Firestorm",
    year: 2016,
    type: "Sci-Fi"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-09-09",
    director_name: "Zoya",
    director_id: 205,
    director_birthdate: "1982-01-19",
    film_title: "Happy Hours",
    year: 2015,
    type: "Comedy"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-04-10",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-03-15",
    film_title: "Dead End",
    year: 2018,
    type: "Horror"
  },
  {
    actor_name: "Elly",
    actor_id: 102,
    actor_birthdate: "1990-11-12",
    director_name: "Shyam",
    director_id: 203,
    director_birthdate: "1969-02-10",
    film_title: "Rise Again",
    year: 2018,
    type: "Romance"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-09-09",
    director_name: "Meera",
    director_id: 202,
    director_birthdate: "1978-07-21",
    film_title: "City Crime",
    year: 2019,
    type: "Crime"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-04-10",
    director_name: "Kabir",
    director_id: 204,
    director_birthdate: "1965-11-28",
    film_title: "Last Mission",
    year: 2018,
    type: "Action"
  }
]);


//-------------------------------------------------------------
// QUERY i:
// List ALL movies acted by JOHN in the year 2018
//-------------------------------------------------------------
db.movies.find(
  { actor_name: "John", year: 2018 },
  { _id: 0, film_title: 1, type: 1 }
);


//-------------------------------------------------------------
// QUERY ii:
// List ONLY actor_name & type of movie where RAM has ACTED
// SORTED by movie title
//-------------------------------------------------------------
db.movies.find(
  { actor_name: "Ram" },
  { _id: 0, actor_name: 1, type: 1, film_title: 1 }
).sort({ film_title: 1 });
