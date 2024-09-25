import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { MdAddLocationAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {

    const [PhotoUrl, setPhotoUrl]=useState();

    useEffect(()=>{
      place&&GetPlacePhoto();
    },[place])
  
    const GetPlacePhoto= async()=>{
  
      const data= {
        textQuery:place.placeName
      }
      
  
      const result = await GetPlaceDetails(data).then(resp=>{
        // console.log(resp.data.places[0].photos[3].name);
  
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name );
        setPhotoUrl(PhotoUrl)
      })
    }


  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+ place.placeName} target="_blank">
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer '>
      <img src={PhotoUrl?PhotoUrl:"/placeholder.jpg"} alt="" className='w-[130px] h-[170px] rounded-xl object-cover' />

    <div>
        <h2 className='font-bold text-lg' >{place.placeName}</h2>
        <p className='text-sm text-gray-400'>{place.placeDetails}</p>
        <h2 className='mt-2'>⏰{place.timeTravel}</h2>
        <h2 className='mt-2'>💰 Ticket Price: {place.ticketPricing || "Free"}</h2>
        <Button size="sm" ><MdAddLocationAlt className='text-white' /></Button>
    </div>

    </div>
    </Link>
  )
}

export default PlaceCardItem
