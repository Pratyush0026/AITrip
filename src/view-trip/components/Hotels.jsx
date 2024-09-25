// import React from 'react'

// function Hotels({trip}) {
//   return (
//     <div>
//       <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>

//       <div className='text-black'>
//         {trip?.tripData?.hotels?.map((hotel,index)=>(
//             <div className='text-black'>
//                 <img src="/placeholder.jpg" alt="hello" className='rounded-lg '/>
//             </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Hotels

import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="text-black grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {trip?.TripData?.hotels?.map((hotel, index) => (
           <HotelCardItem hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
