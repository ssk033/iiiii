// -------------------------------------------------------
// INSERTING 10 DOCUMENTS INTO restaurants COLLECTION
// -------------------------------------------------------
db.restaurants.insertMany([
  {
    id: 1,
    name: "La Trattoria",
    address: { building: "12", street: "Church St", area: "MG Road", pincode: "560001", city: "Bangalore" },
    cuisine: ["Italian"],
    nearby_landmarks: ["MG Road Metro", "Brigade Road"],
    online_delivery: "yes",
    famous_for: "Margherita Pizza"
  },
  {
    id: 2,
    name: "Olive Bistro",
    address: { building: "7A", street: "100 Feet Road", area: "Indiranagar", pincode: "560038", city: "Bangalore" },
    cuisine: ["Italian", "Mediterranean"],
    nearby_landmarks: ["Indiranagar Club", "1st Main Road"],
    online_delivery: "yes",
    famous_for: "Seafood Pasta"
  },
  {
    id: 3,
    name: "Curry Palace",
    address: { building: "3", street: "Brigade Road", area: "Central", pincode: "560001", city: "Bangalore" },
    cuisine: ["North Indian Thali"],
    nearby_landmarks: ["Brigade Mall", "Cubbon Park"],
    online_delivery: "no",
    famous_for: "Dal Makhani Thali"
  },
  {
    id: 4,
    name: "Spice Route",
    address: { building: "45", street: "Residency Rd", area: "Shanthala Nagar", pincode: "560025", city: "Bangalore" },
    cuisine: ["South Indian"],
    nearby_landmarks: ["St. Mark's Road"],
    online_delivery: "yes",
    famous_for: "Masala Dosa"
  },
  {
    id: 5,
    name: "Kabab Junction",
    address: { building: "99", street: "5th Cross", area: "Koramangala", pincode: "560095", city: "Bangalore" },
    cuisine: ["North Indian Thali", "Mughlai"],
    nearby_landmarks: ["Forum Mall", "Koramangala 5th Block"],
    online_delivery: "yes",
    famous_for: "Kebabs & Thali"
  },
  {
    id: 6,
    name: "Bella Vita",
    address: { building: "2", street: "Marine Drive", area: "South Mumbai", pincode: "400020", city: "Mumbai" },
    cuisine: ["Italian"],
    nearby_landmarks: ["Marine Drive Promenade"],
    online_delivery: "yes",
    famous_for: "Truffle Pasta"
  },
  {
    id: 7,
    name: "The Dosa Corner",
    address: { building: "21", street: "4th Cross", area: "Jayanagar", pincode: "560011", city: "Bangalore" },
    cuisine: ["South Indian"],
    nearby_landmarks: ["Jayanagar 4th Block"],
    online_delivery: "no",
    famous_for: "Rava Masala Dosa"
  },
  {
    id: 8,
    name: "Northern Platter",
    address: { building: "56", street: "Connaught Place", area: "Central Delhi", pincode: "110001", city: "Delhi" },
    cuisine: ["North Indian Thali"],
    nearby_landmarks: ["Rajiv Chowk Metro"],
    online_delivery: "yes",
    famous_for: "Punjabi Thali"
  },
  {
    id: 9,
    name: "Garden Cafe",
    address: { building: "14", street: "Lavelle Road", area: "Central", pincode: "560001", city: "Bangalore" },
    cuisine: ["Italian", "Continental"],
    nearby_landmarks: ["UB City", "Lalbagh"],
    online_delivery: "yes",
    famous_for: "Pesto Pasta"
  },
  {
    id: 10,
    name: "Thali Express",
    address: { building: "8", street: "Jayanagar Main", area: "Jayanagar", pincode: "560041", city: "Bangalore" },
    cuisine: ["North Indian Thali"],
    nearby_landmarks: ["Jayanagar Metro", "Shopping Complex"],
    online_delivery: "yes",
    famous_for: "Sabzi Roti Thali"
  }
])

// -------------------------------------------------------
// QUERY 1:
// List the name and address of all restaurants in Bangalore
// WHERE cuisine is Italian
// -------------------------------------------------------
db.restaurants.find(
  {
    "address.city": "Bangalore",
    cuisine: { $in: ["Italian"] }
  },
  {
    _id: 0,
    name: 1,
    address: 1
  }
)

// -------------------------------------------------------
// QUERY 2:
// List the name, address, and nearby landmarks of restaurants
// in Bangalore WHERE North Indian Thali is available
// -------------------------------------------------------
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
