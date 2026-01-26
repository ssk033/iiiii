//-------------------------------------------------------------
// STEP 1: USE / CREATE DATABASE
//-------------------------------------------------------------
//use restaurantDB


//-------------------------------------------------------------
// STEP 2: CREATE COLLECTION
//-------------------------------------------------------------
db.createCollection("restaurants")


//-------------------------------------------------------------
// STEP 3: INSERT 10 DOCUMENTS (WITH ALL REQUIRED FIELDS)
//-------------------------------------------------------------
db.restaurants.insertMany([
  {
    id: 1,
    name: "Curry Palace",
    address: { building: "10", street: "Brigade Road", area: "Central", pincode: "560001", city: "Bangalore" },
    cuisine: ["North Indian Thali"],
    nearby_landmarks: ["Brigade Mall", "Cubbon Park"],
    online_delivery: "no",
    famous_for: "Dal Makhani Thali"
  },
  {
    id: 2,
    name: "La Pino's",
    address: { building: "22", street: "Church Street", area: "MG Road", pincode: "560001", city: "Bangalore" },
    cuisine: ["Italian"],
    nearby_landmarks: ["MG Road Metro"],
    online_delivery: "yes",
    famous_for: "Cheese Burst Pizza"
  },
  {
    id: 3,
    name: "Thali Express",
    address: { building: "5", street: "Jayanagar Main", area: "Jayanagar", pincode: "560041", city: "Bangalore" },
    cuisine: ["North Indian Thali"],
    nearby_landmarks: ["Jayanagar Metro"],
    online_delivery: "yes",
    famous_for: "Special Roti-Sabzi Thali"
  },
  {
    id: 4,
    name: "Olive Garden",
    address: { building: "33", street: "100 Feet Road", area: "Indiranagar", pincode: "560038", city: "Bangalore" },
    cuisine: ["Italian"],
    nearby_landmarks: ["Indiranagar Club"],
    online_delivery: "yes",
    famous_for: "Pasta Alfredo"
  },
  {
    id: 5,
    name: "Kabab Junction",
    address: { building: "29", street: "5th Cross", area: "Koramangala", pincode: "560095", city: "Bangalore" },
    cuisine: ["North Indian Thali", "Mughlai"],
    nearby_landmarks: ["Forum Mall"],
    online_delivery: "yes",
    famous_for: "Chicken Kebabs"
  },
  {
    id: 6,
    name: "Delhi Durbar",
    address: { building: "81", street: "Residency Road", area: "Central", pincode: "560025", city: "Bangalore" },
    cuisine: ["North Indian"],
    nearby_landmarks: ["St. Mark's Road"],
    online_delivery: "no",
    famous_for: "Paneer Butter Masala"
  },
  {
    id: 7,
    name: "Garden Cafe",
    address: { building: "11", street: "Lavelle Road", area: "Central", pincode: "560001", city: "Bangalore" },
    cuisine: ["Continental"],
    nearby_landmarks: ["UB City"],
    online_delivery: "yes",
    famous_for: "Pesto Pasta"
  },
  {
    id: 8,
    name: "The Dosa Corner",
    address: { building: "42", street: "4th Block", area: "Jayanagar", pincode: "560011", city: "Bangalore" },
    cuisine: ["South Indian"],
    nearby_landmarks: ["Jayanagar RTO"],
    online_delivery: "no",
    famous_for: "Rava Masala Dosa"
  },
  {
    id: 9,
    name: "Punjabi Ghar",
    address: { building: "17", street: "Malleshwaram Main Road", area: "Malleshwaram", pincode: "560003", city: "Bangalore" },
    cuisine: ["North Indian Thali"],
    nearby_landmarks: ["Mantri Mall"],
    online_delivery: "yes",
    famous_for: "Punjabi Lassi & Thali"
  },
  {
    id: 10,
    name: "Urban Rasoi",
    address: { building: "6", street: "BTM Layout 2nd Stage", area: "BTM", pincode: "560076", city: "Bangalore" },
    cuisine: ["North Indian"],
    nearby_landmarks: ["BTM Lake"],
    online_delivery: "yes",
    famous_for: "Chole Bhature"
  }
])


//-------------------------------------------------------------
// QUESTION 1:
// List the name, address and nearby landmarks of all restaurants
// IN BANGALORE where NORTH INDIAN THALI is available
//-------------------------------------------------------------
db.restaurants.find(
  {
    "address.city": "Bangalore",
    cuisine: { $in: ["North Indian Thali"] }
  },
  {
    _id: 0,
    name: 1,
    address: 1,
    nearby_landmarks: 1
  }
)


//-------------------------------------------------------------
// QUESTION 2:
// List the name, address and the dish the restaurant is famous for
// FOR ALL RESTAURANTS IN BANGALORE
//-------------------------------------------------------------
db.restaurants.find(
  {
    "address.city": "Bangalore"
  },
  {
    _id: 0,
    name: 1,
    address: 1,
    famous_for: 1
  }
)
