//-------------------------------------------------------------
// DATABASE: touristDB
//-------------------------------------------------------------
// use touristDB;


//-------------------------------------------------------------
// CREATE COLLECTION
//-------------------------------------------------------------
db.createCollection("tourist_places");


//-------------------------------------------------------------
// INSERT 10 DOCUMENTS
//-------------------------------------------------------------
db.tourist_places.insertMany([
  { id: 1, place: "Coorg", address: { state: "Karnataka" },
    tourist_attractions:["Abbey Falls","Raja’s Seat"], best_time:"Oct-Apr",
    transport:{ airport:"Mangalore", railway:"Mysore" },
    accommodation:"Resorts", food:"Pandi Curry" },

  { id: 2, place: "Hampi", address:{ state:"Karnataka" },
    tourist_attractions:["Stone Chariot","Vittala Temple"], best_time:"Nov-Feb",
    transport:{ airport:"Hubli", railway:"Hospet" },
    accommodation:"Guest Houses", food:"Veg Thali" },

  { id: 3, place:"Mysore", address:{ state:"Karnataka" },
    tourist_attractions:["Mysore Palace","Chamundi Hills"], best_time:"Oct-Feb",
    transport:{ airport:"Mysore", railway:"Mysore Jn" },
    accommodation:"Hotels", food:"Mysore Pak" },

  { id: 4, place:"Gokarna", address:{ state:"Karnataka" },
    tourist_attractions:["Om Beach","Mahabaleshwar Temple"], best_time:"Oct-Mar",
    transport:{ airport:"Goa", railway:"Gokarna Rd" },
    accommodation:"Beach Resorts", food:"Seafood" },

  { id: 5, place:"Chikmagalur", address:{ state:"Karnataka" },
    tourist_attractions:["Mullayanagiri","Coffee Estates"], best_time:"Sep-Mar",
    transport:{ airport:"Mangalore", railway:"Kadur" },
    accommodation:"Homestays", food:"Malnad Cuisine" },

  { id: 6, place:"Munnar", address:{ state:"Kerala" },
    tourist_attractions:["Tea Gardens","Eravikulam NP"], best_time:"Oct-May",
    transport:{ airport:"Cochin", railway:"Aluva" },
    accommodation:"Resorts", food:"Sadya" },

  { id: 7, place:"Wayanad", address:{ state:"Kerala" },
    tourist_attractions:["Edakkal Caves","Soochipara Falls"], best_time:"Oct-Apr",
    transport:{ airport:"Calicut", railway:"Kozhikode" },
    accommodation:"Tree Houses", food:"Puttu Kadala" },

  { id: 8, place:"Alleppey", address:{ state:"Kerala" },
    tourist_attractions:["Backwaters","Houseboats"], best_time:"Sep-Mar",
    transport:{ airport:"Cochin", railway:"Alleppey" },
    accommodation:"Houseboats", food:"Karimeen" },

  { id: 9, place:"Kumarakom", address:{ state:"Kerala" },
    tourist_attractions:["Vembanad Lake","Bird Sanctuary"], best_time:"Oct-Feb",
    transport:{ airport:"Cochin", railway:"Kottayam" },
    accommodation:"Resorts", food:"Appam Stew" },

  { id: 10, place:"Kovalam", address:{ state:"Kerala" },
    tourist_attractions:["Lighthouse Beach","Hawa Beach"], best_time:"Sep-Mar",
    transport:{ airport:"Trivandrum", railway:"TVM Central" },
    accommodation:"Beach Resorts", food:"Fish Meals" }
]);


//-------------------------------------------------------------
// QUERY 1: All tourist places of Karnataka
//-------------------------------------------------------------
db.tourist_places.find(
  { "address.state": "Karnataka" },
  { _id: 0, place: 1 }
);


//-------------------------------------------------------------
// QUERY 2: List the places sorted STATE-wise
//-------------------------------------------------------------
db.tourist_places.find(
  {},
  { _id: 0, place: 1, "address.state": 1 }
).sort({ "address.state": 1 });
