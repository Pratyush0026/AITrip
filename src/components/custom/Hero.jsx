// import React from "react";
// import { Button } from "../ui/button";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <div className="flex flex-col items-center mx-56 gap-9">
//       <h1 className="text-black font-extrabold text-[50px] text-center mt-16">
//         <div className="mb-2">
//           <span className="text-[#f56551]">
//             Discover Your Next Adventure with AI:
//           </span>
//         </div>
//         <span>Personalized Itineraries at Your Fingertips</span>
//       </h1>
//       <p className="text-xl text-gray-500 text-center">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi
//         optio voluptas ducimus, aliquam magni?
//       </p>
//       <Link to={'/create-trip'}>
//       <Button className='text-white'>Get Started Now!</Button>
//       </Link>
//     </div>
//   );
// }

// export default Hero;



import React from "react";
import { Button } from "../ui/button"; // Ensure this button has appropriate styles
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import '../../style.css';

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen text-white p-6 overflow-hidden">
      {/* Background with Stars */}
      <div className="hero-background">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 1 + 0.5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Title Animation */}
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-4" 
        initial={{ opacity: 0, x: -100 }} // Starts off-screen to the left
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Unleash Your Wanderlust!
      </motion.h1>

      {/* Paragraph Animation */}
      <motion.p 
        className="text-lg md:text-xl text-center mb-8 max-w-2xl" 
        initial={{ opacity: 0, x: 100 }} // Starts off-screen to the right
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Dive into a world of personalized travel experiences. Discover unique destinations and create memories that last a lifetime!
      </motion.p>

      {/* Button Link */}
      <Link to={'/create-trip'}>
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          transition={{ duration: 0.2 }}
        >
          <Button className='bg-yellow-500 cursor-pointer text-black hover:bg-yellow-400 relative z-10'>
            Start Your Journey
          </Button>
        </motion.div>
      </Link>

      {/* Image Section Animation */}
      <motion.div 
        className="mt-10"
        initial={{ opacity: 0, y: -50 }} // Starts off-screen at the top
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img 
          src="https://media.istockphoto.com/id/2042539861/photo/joyful-friends-taking-a-selfie-on-vacation.jpg?s=2048x2048&w=is&k=20&c=cgUN_Kw8HyPsyiu6P9RvWOq8N2M1D14LoWzA3bUDtdc=" // Travel image
          alt="Adventure Illustration"
          className="w-3/4 md:w-80 mx-auto animate-pulse rounded-xl" 
        />
      </motion.div>

      {/* Features Section Animation */}
      <motion.div 
        className="mt-12 flex flex-col items-center" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Why Travel With Us?</h2>
        <ul className="list-disc list-inside text-center">
          <li className="text-lg">🏖️ Tailored Itineraries Just for You</li>
          <li className="text-lg">🌍 Explore Unique Destinations</li>
          <li className="text-lg">🗺️ Stress-Free Travel Planning</li>
          <li className="text-lg">✨ Create Lasting Memories</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Hero;
