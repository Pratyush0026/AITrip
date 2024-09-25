import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({hotel}) {

    const [PhotoUrl, setPhotoUrl]=useState();

    useEffect(()=>{
      hotel&&GetPlacePhoto();
    },[hotel])
  
    const GetPlacePhoto= async()=>{
  
      const data= {
        textQuery: hotel?.hotelName 
      }
      
  
      const result = await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[3].name);
  
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name );
        setPhotoUrl(PhotoUrl)
      })
    }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+ hotel?.hotelName + ","+ hotel?.hotelAddress} target="_blank">
          <div className="text-black hover:scale-105 cursor-pointer transition-all" >
            <img
              src={PhotoUrl?PhotoUrl:"/placeholder.jpg"}
              alt={hotel?.name || "Hotel"}
              className="rounded-lg w-full h-48 object-cover"
            />
            <div className="my-2 flex flex-col gap-2">
              <h3 className="font-bold mt-2">
                {hotel?.hotelName || "Unnamed Hotel"}
              </h3>
              <p className="text-gray-500 text-sm">
                📍 {hotel?.hotelAddress || "Address not available"}
              </p>
              <p className=" text-md">
                💰 Price: {hotel?.price || "Price not available"}
              </p>
              <p className=" text-md">
                ⭐ Ratings: {hotel?.rating || "Price not available"}
              </p>
            </div>
          </div>
          </Link>
  )
}

export default HotelCardItem
