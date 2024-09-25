import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import { useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [openDailog, setOpenDailog] = useState(false);

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
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching user profile", error);
      });
  };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="p-3 shadow-sm flex justify-between  items-center px-5">
      <img src="/logo.svg" />
      <div>
        {user ? (
          <div className="flex items-center gap-3">
               <a href="/create-trip">
            <Button variant="outline" className="rounded-full text-black">
              + Create Trip
            </Button>
            </a>
            
            <a href="/my-trips">
            <Button variant="outline" className="rounded-full text-black">
              My Trips
            </Button>
            </a>

            <Popover>
              <PopoverTrigger>
                {" "}
                <img
                  src={user?.picture}
                  className="h-[35px] w-[35px] rounded-full"
                  alt=""
                  srcset=""
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="text-black cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  LogOut
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDailog(true)}>Sign in</Button>
        )}
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

export default Header;
