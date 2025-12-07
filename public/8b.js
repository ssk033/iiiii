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
    director_birthdate: "1970-01-20",
    film_title: "Warrior",
    year: 2012,
    type: "Action"
  },
  {
    actor_name: "Elly",
    actor_id: 102,
    actor_birthdate: "1990-02-11",
    director_name: "Karan",
    director_id: 202,
    director_birthdate: "1975-07-09",
    film_title: "Dream Girl",
    year: 2012,
    type: "Romance"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-06-15",
    director_name: "Shyam",
    director_id: 203,
    director_birthdate: "1969-03-30",
    film_title: "Mission 2012",
    year: 2012,
    type: "Thriller"
  },
  {
    actor_name: "Elly",
    actor_id: 102,
    actor_birthdate: "1990-02-11",
    director_name: "Ram",
    director_id: 201,
    director_birthdate: "1970-01-20",
    film_title: "Silent Tears",
    year: 2013,
    type: "Drama"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-08-22",
    director_name: "Anil",
    director_id: 204,
    director_birthdate: "1965-10-15",
    film_title: "Shadow Man",
    year: 2014,
    type: "Thriller"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-08-22",
    director_name: "Karan",
    director_id: 202,
    director_birthdate: "1975-07-09",
    film_title: "Happy Days",
    year: 2011,
    type: "Comedy"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-08-22",
    director_name: "Kabir",
    director_id: 205,
    director_birthdate: "1972-11-02",
    film_title: "Alpha Code",
    year: 2010,
    type: "Sci-Fi"
  },
  {
    actor_name: "John",
    actor_id: 101,
    actor_birthdate: "1985-06-15",
    director_name: "Meera",
    director_id: 206,
    director_birthdate: "1978-05-19",
    film_title: "Rising Star",
    year: 2011,
    type: "Drama"
  },
  {
    actor_name: "Elly",
    actor_id: 102,
    actor_birthdate: "1990-02-11",
    director_name: "Zoya",
    director_id: 207,
    director_birthdate: "1981-04-13",
    film_title: "Magic World",
    year: 2012,
    type: "Fantasy"
  },
  {
    actor_name: "Ram",
    actor_id: 103,
    actor_birthdate: "1980-08-22",
    director_name: "Ravi",
    director_id: 208,
    director_birthdate: "1973-09-29",
    film_title: "The Legend",
    year: 2015,
    type: "Action"
  }
]);


//-------------------------------------------------------------
// QUERY i:
// List all the movies acted by John OR Elly in the year 2012
//-------------------------------------------------------------
db.movies.find(
  { 
    actor_name: { $in: ["John", "Elly"] },
    year: 2012
  },
  { _id: 0, film_title: 1, actor_name: 1, type: 1 }
);


//-------------------------------------------------------------
// QUERY ii:
// List ONLY the actor_name & type of movies where RAM acted
// SORTED by MOVIE NAMES (film_title)
//-------------------------------------------------------------
db.movies.find(
  { actor_name: "Ram" },
  { _id: 0, actor_name: 1, type: 1, film_title: 1 }
).sort({ film_title: 1 });
