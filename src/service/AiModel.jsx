import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50 - $100 per night",\n      "hotelImageURL": "https://images.trvl-media.com/media/hotels/1000000/900000/899000/898500/898529/898529_112_c.jpg",\n      "geoCoordinates": [36.1684, -115.1449],\n      "rating": 4.0,\n      "description": "A budget-friendly hotel located in the heart of Fremont Street Experience. Offers a casino, restaurants, and a rooftop pool."\n    },\n    {\n      "hotelName": "The Golden Nugget",\n      "hotelAddress": "129 E Fremont Street, Las Vegas, NV 89101",\n      "price": "$70 - $150 per night",\n      "hotelImageURL": "https://media.cntraveler.com/photos/5a31564799c893789f719e89/master/pass/the-golden-nugget-las-vegas-casino-resort-hotel-exterior-view.jpg",\n      "geoCoordinates": [36.1696, -115.1416],\n      "rating": 4.5,\n      "description": "A historic hotel with a vibrant casino, a shark tank, and a variety of dining options."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$40 - $80 per night",\n      "hotelImageURL": "https://media.cntraveler.com/photos/5a31563f99c893789f719e5b/master/pass/circus-circus-las-vegas-casino-resort-hotel-exterior-view.jpg",\n      "geoCoordinates": [36.1097, -115.1747],\n      "rating": 3.5,\n      "description": "A family-friendly hotel with a circus theme, a midway, and a variety of budget-friendly dining options."\n    },\n    {\n      "hotelName": "The Strat Hotel, Casino & SkyPod",\n      "hotelAddress": "2000 S Las Vegas Blvd, Las Vegas, NV 89104",\n      "price": "$60 - $120 per night",\n      "hotelImageURL": "https://media.cntraveler.com/photos/5a31564399c893789f719e6d/master/pass/the-strat-hotel-casino-and-skypod-exterior-view.jpg",\n      "geoCoordinates": [36.1164, -115.1692],\n      "rating": 4.0,\n      "description": "A hotel with an observation tower offering panoramic city views, a casino, and a variety of dining options."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "plan": [\n        {\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A pedestrian-friendly street with a canopy of lights, live music, street performers, and casinos.",\n          "placeImageURL": "https://www.visitlasvegas.com/media/1464/freemont-street-experience-las-vegas.jpg",\n          "geoCoordinates": [36.1684, -115.1447],\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "Evening (5 PM - 10 PM)"\n        },\n        {\n          "placeName": "The Mob Museum",\n          "placeDetails": "A museum dedicated to the history of organized crime in Las Vegas and the United States.",\n          "placeImageURL": "https://www.themobmuseum.org/images/mob-museum-exterior.jpg",\n          "geoCoordinates": [36.1685, -115.1433],\n          "ticketPricing": "$29.95",\n          "rating": 4.0,\n          "timeTravel": "Afternoon (2 PM - 5 PM)"\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "plan": [\n        {\n          "placeName": "Red Rock Canyon National Conservation Area",\n          "placeDetails": "A scenic area with red sandstone cliffs, hiking trails, and rock climbing opportunities.",\n          "placeImageURL": "https://www.nps.gov/redr/learn/nature/images/Red-Rock-Canyon-overview.jpg",\n          "geoCoordinates": [36.1484, -115.2478],\n          "ticketPricing": "$15 per vehicle",\n          "rating": 4.5,\n          "timeTravel": "Morning (9 AM - 12 PM)"\n        },\n        {\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "A free attraction featuring elaborate floral displays that change seasonally.",\n          "placeImageURL": "https://www.bellagio.com/content/dam/bellagio/images/conservatory/2021/11/conservatory_november_2021_hero.jpg",\n          "geoCoordinates": [36.1175, -115.1722],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeTravel": "Afternoon (2 PM - 5 PM)"\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "plan": [\n        {\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "A pedestrian-friendly promenade with shops, restaurants, bars, and entertainment.",\n          "placeImageURL": "https://www.thelinq.com/media/4073/linq-promenade-at-night.jpg",\n          "geoCoordinates": [36.1199, -115.1707],\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeTravel": "Morning (10 AM - 1 PM)"\n        },\n        {\n          "placeName": "High Roller Observation Wheel",\n          "placeDetails": "A giant observation wheel offering 360-degree views of the city.",\n          "placeImageURL": "https://www.caesars.com/content/dam/caesars/linq/high-roller/images/hero-image-2020.jpg",\n          "geoCoordinates": [36.1199, -115.1707],\n          "ticketPricing": "$35",\n          "rating": 4.5,\n          "timeTravel": "Afternoon (3 PM - 6 PM)"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Explanation:**\n\n**Hotels:**\n\n* **The D Las Vegas** and **Circus Circus Hotel & Casino** are the most budget-friendly options, offering rooms for under $100 per night.\n* **The Golden Nugget** and **The Strat Hotel, Casino & SkyPod** offer slightly more upscale experiences with a range of amenities.\n\n**Itinerary:**\n\n* **Day 1:** \n    * **Fremont Street Experience:** Enjoy the vibrant atmosphere, free shows, and the casino scene.\n    * **The Mob Museum:** Learn about the fascinating history of organized crime in Las Vegas.\n* **Day 2:**\n    * **Red Rock Canyon National Conservation Area:** Experience the natural beauty of the desert landscape.\n    * **Bellagio Conservatory & Botanical Garden:** Marvel at the impressive floral displays.\n* **Day 3:**\n    * **The LINQ Promenade:** Shop, dine, and enjoy the lively entertainment.\n    * **High Roller Observation Wheel:** Get stunning panoramic views of Las Vegas.\n\n**Notes:**\n\n* This itinerary focuses on free or affordable attractions and activities.\n* Consider purchasing a Las Vegas Strip Pass or a discount card for additional savings on attractions.\n* Many casinos offer free shows and entertainment.\n* Remember to check the operating hours and ticket prices of the attractions before your trip.\n* This itinerary can be customized to fit your interests and preferences.\n',
        },
      ],
    },
  ],
});
