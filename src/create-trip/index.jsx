// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   AI_PROMPT,
//   SelectBudgetOptions,
//   SelectTravelsList,
// } from "@/constants/options";
// import { chatSession } from "@/service/AiModel";
// // import { Toast } from "@radix-ui/react-toast";
// import React, { useEffect, useState } from "react";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import { toast } from "sonner";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from "@react-oauth/google";

// function CreateTrip() {
//   const [openDailog, setOpenDailog] = useState(false);

//   const [place, setPlace] = useState();

//   const [formData, setFormData] = useState([]);

//   const handleInputChange = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);

//   // const OnGenerateTrip=()=>{
//   //     if(formData?.noOfDays>15&&!formData?.location||!formData?.budget||!formData?.traveler){
//   //         toast("please fill all details")
//   //         return ;
//   //     }
//   //     console.log(formData)
//   // }

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => GetUserProfile(codeResp),
//     onError: (error) => console.log(error),
//   });

//   const OnGenerateTrip = async () => {
//     const user = localStorage.getItem("user");

//     if (!user) {
//       setOpenDailog(true);
//       return;
//     }

//     const noOfDays = parseInt(formData?.noOfDays, 10);

//     // Ensure all fields are filled and number of days is valid
//     if (
//       noOfDays > 15 ||
//       !formData?.location ||
//       !formData?.budget ||
//       !formData?.traveler
//     ) {
//       toast("Please fill all details");
//       return;
//     }

//     const FINAL_PROMPT = AI_PROMPT.replace(
//       "{location}",
//       formData?.location?.label
//     )
//       .replace("{totalDays}", formData?.noOfDays)
//       .replace("{traveler}", formData?.traveler)
//       .replace("{budget}", formData?.budget)
//       .replace("{totalDays}", formData?.noOfDays);

//     console.log(FINAL_PROMPT);

//     const result = await chatSession.sendMessage(FINAL_PROMPT);

//     console.log(result?.response?.text());
//   };

//   const GetUserProfile = (tokenInfo) => {
//     axios
//       .get(
//         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
//         {
//           headers: {
//             Authorization: `Bearer ${tokenInfo?.access_token}`,
//             Accept: "Application/json",
//           },
//         }
//       )
//       .then((resp) => {
//         console.log(resp);
//       });
//   };

//   return (
//     <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
//       <h2 className="text-black font-bold text-3xl">
//         Tell Us Your Travel Preferences 🏕️🌳
//       </h2>
//       <p className="mt-3 text-gray-500 text-xl">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
//         aliquam voluptatum ex corrupti officia rerum!
//       </p>

//       <div className="mt-20 flex flex-col gap-10">
//         <div className="text-black">
//           <h2 className="text-black text-xl my-3 font-medium">
//             What is Your Destination Of Choice?
//           </h2>
//           <GooglePlacesAutocomplete
//             className="text-black"
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               place,
//               onChange: (v) => {
//                 setPlace(v);
//                 handleInputChange("location", v);
//               },
//             }}
//           />
//         </div>

//         <div>
//           <h2 className="text-black text-xl my-3 font-medium">
//             How many days are you planning this trip?
//           </h2>
//           <Input
//             className="text-black"
//             placeholder={"Ex.3"}
//             type="number"
//             onChange={(e) => handleInputChange("noOfDays", e.target.value)}
//           />
//         </div>
//       </div>

//       <div>
//         <h2 className="text-black text-xl my-3 font-medium">
//           What is your Budget?
//         </h2>

//         <div className="grid grid-cols-3 gap-5 mt-5">
//           {SelectBudgetOptions.map((item, index) => (
//             <div
//               className={`"text-black p-4 border cursor-pointer rounded-lg hover:shadow-lg "
//                 ${formData?.budget == item.title && "shadow-lg border-black"}
//                 `}
//               key={index}
//               onClick={() => handleInputChange("budget", item.title)}
//             >
//               <h2 className="text-4xl">{item.icon}</h2>
//               <h2 className="font-bold text-black text-lg">{item.title}</h2>
//               <h2 className="text-sm text-gray-500">{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-black text-xl my-3 font-medium">
//           Who do you want to travel with in your next trip?
//         </h2>

//         <div className="grid grid-cols-3 gap-5 mt-5">
//           {SelectTravelsList.map((item, index) => (
//             <div
//               className={`"text-black p-4 border cursor-pointer rounded-lg hover:shadow-lg "
//                 ${formData?.traveler == item.people && "shadow-lg border-black"}
//                 `}
//               key={index}
//               onClick={() => handleInputChange("traveler", item.people)}
//             >
//               <h2 className="text-4xl">{item.icon}</h2>
//               <h2 className="font-bold text-black text-lg">{item.title}</h2>
//               <h2 className="text-sm text-gray-500">{item.desc}</h2>
//               <h2 className="text-sm text-gray-500">{item.people}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="my-10 justify-end flex">
//         <Button onClick={OnGenerateTrip}>Generate Trip</Button>
//       </div>

//       <Dialog open={openDailog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src="/logo.svg" />
//               <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
//               <p>Sign In to The App with Google Authentication Securely</p>

//               <Button
//                 onClick={login}
//                 className="w-full mt-5 flex gap-4 items-center"
//               >
//                 <FcGoogle className="h-7 w-7" />
//                 Sign In with Google
//               </Button>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default CreateTrip;

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelsList,
} from "@/constants/options";
import { chatSession } from "@/service/AiModel";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log("Google Login Success:", codeResp);
      GetUserProfile(codeResp);
      setOpenDailog(false);
    },
    onError: (error) => {
      console.log("Login Error:", error);
      toast("Login failed. Please try again.");
    },
  });

  const GetUserProfile = (tokenInfo) => {
    console.log(
      "Fetching User Profile with Access Token:",
      tokenInfo?.access_token
    );
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log("User Profile:", resp.data); // Log the user profile data
        localStorage.setItem("user", JSON.stringify(resp.data)); // save user info to local storage
        setOpenDailog(false);
        OnGenerateTrip();
      })
      .catch((error) => {
        console.error("Error fetching user profile", error);
      });
  };

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDailog(true);
      return;
    }

    const noOfDays = parseInt(formData?.noOfDays, 10);

    if (
      noOfDays > 15 ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast("Please fill all details");
      return;
    }

    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    // console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log("--", result?.response?.text());
    setLoading(false);

    SaveAiTrip(result?.response?.text());
  };

  // const SaveAiTrip = async (TripData) => {
  //   setLoading(true);
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   const docId = Date.now().toString();
  //   await setDoc(doc(db, "AITrips", docId), {
  //     userSelection: formData,
  //     TripData: JSON.parse(TripData),
  //     userEmail: user?.email,
  //     id: docId,
  //   });
  //   setLoading(false);
  //   navigate('/view-trip/'+docId)
  // };



  const SaveAiTrip = async (TripData) => {
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem("user"));
  
      const docId = Date.now().toString();
      const tripDocRef = doc(db, "AITrips", docId);
  
      // Save trip data to Firebase
      await setDoc(tripDocRef, {
        userSelection: formData,
        TripData: JSON.parse(TripData),
        userEmail: user?.email,
        id: docId,
      });
  
      setLoading(false);
  
      // Navigate only after saving is successful
      navigate(`/view-trip/${docId}`);
    } catch (error) {
      setLoading(false);
      console.error("Error saving trip data:", error);
      toast("Failed to save trip. Please try again.");
    }
  };
  
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="text-black font-bold text-3xl">
        Tell Us Your Travel Preferences 🏕️🌳
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        aliquam voluptatum ex corrupti officia rerum!
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div className="text-black">
          <h2 className="text-black text-xl my-3 font-medium">
            What is Your Destination Of Choice?
          </h2>
          <GooglePlacesAutocomplete
            className="text-black"
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-black text-xl my-3 font-medium">
            How many days are you planning this trip?
          </h2>
          <Input
            className="text-black"
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-black text-xl my-3 font-medium">
          What is your Budget?
        </h2>

        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              className={`"text-black p-4 border cursor-pointer rounded-lg hover:shadow-lg "
                ${formData?.budget == item.title && "shadow-lg border-black"}`}
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-black text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-black text-xl my-3 font-medium">
          Who do you want to travel with in your next trip?
        </h2>

        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelsList.map((item, index) => (
            <div
              className={`"text-black p-4 border cursor-pointer rounded-lg hover:shadow-lg "
                ${
                  formData?.traveler == item.people && "shadow-lg border-black"
                }`}
              key={index}
              onClick={() => handleInputChange("traveler", item.people)}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-black text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
              <h2 className="text-sm text-gray-500">{item.people}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 justify-end flex">
        <Button disabled={loading} onClick={OnGenerateTrip}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Google Sign-In</DialogTitle> {/* Add this title */}
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <div>Sign In to The App with Google Authentication Securely</div>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
