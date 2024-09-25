export const SelectTravelsList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travels in exploration",
    icon: "🚶‍♂️", // Emoji icon for solo travel
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travels in tandem",
    icon: "🍷", // Emoji for couple
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventurers",
    icon: "👨‍👩‍👧‍👦", // Emoji for family
    people: "3 to 5 People",
  },

  {
    id: 4,
    title: 'Friends',
    desc: 'A group of close companions',
    icon: '👬👭',  // Emoji for friends
    people: '3 to 10 People',  // You can adjust this number as per your logic
  }
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💸", // Emoji representing low-budget option
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰", // Emoji representing moderate-budget option
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Indulge in premium experiences",
    icon: "🤑", // Emoji representing high-budget or luxury option
  },
];



export const AI_PROMPT='Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget , give me hotels options list with HotelName, Hotel Address, Price, Hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format. '
