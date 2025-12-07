//-------------------------------------------------------------
// DATABASE: touristDB
//-------------------------------------------------------------
// use touristDB;


//-------------------------------------------------------------
// CREATE COLLECTION
//-------------------------------------------------------------
db.createCollection("tourist_places");


//-------------------------------------------------------------
// INSERT 10 TOURIST PLACE DOCUMENTS
//-------------------------------------------------------------
db.tourist_places.insertMany([
  {
    id: 1,
    place: "Coorg",
    address: { state: "Karnataka" },
    tourist_attractions: ["Abbey Falls", "Raja’s Seat", "Coffee Plantations"],
    best_time: "October to April",
    transport: {
      nearest_airport: "Mangalore Airport",
      nearest_railway: "Mysore Junction",
      by_road: "KSRTC buses from Bangalore"
    },
    accommodation: "Resorts, Homestays",
    food: "Pandi Curry, Coorg Coffee"
  },
  {
    id: 2,
    place: "Hampi",
    address: { state: "Karnataka" },
    tourist_attractions: ["Vittala Temple", "Stone Chariot", "Virupaksha Temple"],
    best_time: "November to February",
    transport: {
      nearest_airport: "Hubli Airport",
      nearest_railway: "Hospet Junction",
      by_road: "KSRTC buses from Bangalore"
    },
    accommodation: "Guest Houses",
    food: "Local Vegetarian Thali"
  },
  {
    id: 3,
    place: "Mysore",
    address: { state: "Karnataka" },
    tourist_attractions: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
    best_time: "October to February",
    transport: {
      nearest_airport: "Mysore Airport",
      nearest_railway: "Mysore Junction",
      by_road: "Buses from Bangalore"
    },
    accommodation: "Hotels, Heritage Stay",
    food: "Mysore Pak"
  },
  {
    id: 4,
    place: "Gokarna",
    address: { state: "Karnataka" },
    tourist_attractions: ["Om Beach", "Mahabaleshwar Temple", "Half Moon Beach"],
    best_time: "October to March",
    transport: {
      nearest_airport: "Goa Dabolim Airport",
      nearest_railway: "Gokarna Road",
      by_road: "Private buses from Bangalore"
    },
    accommodation: "Beach Resorts",
    food: "Seafood, Banana Buns"
  },
  {
    id: 5,
    place: "Chikmagalur",
    address: { state: "Karnataka" },
    tourist_attractions: ["Mullayanagiri", "Coffee Estates", "Hebbe Falls"],
    best_time: "September to March",
    transport: {
      nearest_airport: "Mangalore Airport",
      nearest_railway: "Kadur Junction",
      by_road: "KSRTC & private buses"
    },
    accommodation: "Homestays, Resorts",
    food: "Filter Coffee, Malnad Cuisine"
  },
  {
    id: 6,
    place: "Munnar",
    address: { state: "Kerala" },
    tourist_attractions: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam"],
    best_time: "October to May",
    transport: {
      nearest_airport: "Cochin Airport",
      nearest_railway: "Aluva Station",
      by_road: "KSRTC buses"
    },
    accommodation: "Hill Resorts",
    food: "Kerala Sadya"
  },
  {
    id: 7,
    place: "Wayanad",
    address: { state: "Kerala" },
    tourist_attractions: ["Edakkal Caves", "Soochipara Falls", "Banasura Sagar Dam"],
    best_time: "October to April",
    transport: {
      nearest_airport: "Calicut Airport",
      nearest_railway: "Kozhikode Station",
      by_road: "Private taxis & buses"
    },
    accommodation: "Tree Houses, Resorts",
    food: "Puttu, Kadala Curry"
  },
  {
    id: 8,
    place: "Alleppey",
    address: { state: "Kerala" },
    tourist_attractions: ["Backwaters", "Houseboats", "Alleppey Beach"],
    best_time: "September to March",
    transport: {
      nearest_airport: "Cochin Airport",
      nearest_railway: "Alleppey Station",
      by_road: "Cabs & buses"
    },
    accommodation: "Houseboats",
    food: "Karimeen Pollichathu"
  },
  {
    id: 9,
    place: "Kumarakom",
    address: { state: "Kerala" },
    tourist_attractions: ["Bird Sanctuary", "Vembanad Lake", "Backwaters"],
    best_time: "October to February",
    transport: {
      nearest_airport: "Cochin Airport",
      nearest_railway: "Kottayam Station",
      by_road: "Taxi from Kottayam"
    },
    accommodation: "Luxury Resorts",
    food: "Appam & Stew"
  },
  {
    id: 10,
    place: "Kovalam",
    address: { state: "Kerala" },
    tourist_attractions: ["Lighthouse Beach", "Hawa Beach", "Samudra Beach"],
    best_time: "September to March",
    transport: {
      nearest_airport: "Trivandrum Airport",
      nearest_railway: "Trivandrum Central",
      by_road: "KSRTC buses"
    },
    accommodation: "Beach Resorts",
    food: "Fish Curry Meals"
  }
]);


//-------------------------------------------------------------
// QUERY 1:
// List the tourist attractions of Kerala
// EXCLUDE accommodation and food fields
//-------------------------------------------------------------
db.tourist_places.find(
  { "address.state": "Kerala" },
  {
    _id: 0,
    place: 1,
    tourist_attractions: 1,
    accommodation: 0,
    food: 0
  }
);



//-------------------------------------------------------------
// QUERY 2:
// List the places sorted STATE-wise (ascending)
//-------------------------------------------------------------
db.tourist_places.find(
  {},
  { _id: 0, place: 1, "address.state": 1 }
).sort({ "address.state": 1 });
