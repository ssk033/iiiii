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
    year: 2012,
    type: "Action"
  },
  {
    actor_name: "Elly",
    actor_id: 102,
    actor_birthdate: "1990-11-12",
    director_name: "Karan",
    director_id: 202,
    director_birthdate: "1975-06-18",
    film_title: "Dream Girl",
    year: 2012,
    type: "Romance"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-04-10",
    director_name: "Zoya",
    director_id: 203,
    director_birthdate: "1982-02-20",
    film_title: "Night Shadow",
    year: 2012,
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
    year: 2012,
    type: "Drama"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-08-10",
    director_name: "Karan",
    director_id: 202,
    director_birthdate: "1975-06-18",
    film_title: "Happy Hours",
    year: 2011,
    type: "Comedy"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-08-10",
    director_name: "Meera",
    director_id: 204,
    director_birthdate: "1978-04-01",
    film_title: "Fire Storm",
    year: 2010,
    type: "Sci-Fi"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-04-10",
    director_name: "Shyam",
    director_id: 205,
    director_birthdate: "1970-11-10",
    film_title: "Dark Escape",
    year: 2013,
    type: "Thriller"
  },
  {
    actor_name: "Elly",
    actor_id: 102,
    actor_birthdate: "1990-11-12",
    director_name: "Zoya",
    director_id: 203,
    director_birthdate: "1982-02-20",
    film_title: "Rise Again",
    year: 2012,
    type: "Romance"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-08-10",
    director_name: "Kabir",
    director_id: 206,
    director_birthdate: "1972-09-15",
    film_title: "The Legend",
    year: 2014,
    type: "Action"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-04-10",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-03-15",
    film_title: "Zero Hour",
    year: 2012,
    type: "Action"
  }
]);


//-------------------------------------------------------------
// QUERY i:
// List all movies acted by JOHN & ELLY in the year 2012
//-------------------------------------------------------------
db.movies.find(
  { actor_name: { $in: ["John", "Elly"] }, year: 2012 },
  { _id: 0, film_title: 1, actor_name: 1, type: 1 }
);


//-------------------------------------------------------------
// QUERY ii:
// List ONLY name & movie type where RAM acted
// SORTED by movie title
//-------------------------------------------------------------
db.movies.find(
  { actor_name: "Ram" },
  { _id: 0, actor_name: 1, type: 1, film_title: 1 }
).sort({ film_title: 1 });
