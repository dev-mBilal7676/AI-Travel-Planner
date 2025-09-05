import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AI_PROMPT, SelectBudgetList, SelectTravelList } from "@/constants/options";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {chatSession} from "@/service/AIModal"
import { toast } from "sonner"
import { FcGoogle } from "react-icons/fc"; 
import { useGoogleLogin } from "@react-oauth/google";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/components/ui/dialog"
function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  //---------------------Handle Input-------------------
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //--------------------useEffect-------------------
  useEffect(() => {
    console.log(formData);
  }, [formData]);


const login=useGoogleLogin({
  onSuccess:(codeResp)=>console.log(codeResp),
  onError: (error) => console.log(error),

  
});

 //------------------OnGenerateTrip---------------------
  const OnGenerateTrip =async () => {
const user = localStorage.getItem("user");
if(!user){
  setOpenDialog(true);
  return;
}
    if (formData?.noOfDays>8&&!formData?.location||!formData?.budget||!formData?.traveler) {
      toast("Please fill all detail.")
      return;
    }
    
    const  FINAL_PROMPT = AI_PROMPT
    .replace("{location}",formData?.location?.label)
      .replace("{noOfDays}", formData?.noOFDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOFDays);
      console.log(FINAL_PROMPT);
      const result = await chatSession.sendMessage(FINAL_PROMPT);
console.log(result?.response?.text());

  };
    
   const GetUserProfile=(tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
      {
        headers:{
          Authorization:`Bearer ${tokenInfo?.access_token}`,
          Accept:"Application/json"
        } 

   }).then((resp)=>{
    console.log(resp);
    localStorage.setItem("user",JSON.stringify(resp.data));
    OnGenerateTrip();
    setOpenDialog(false);
   })

  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner generates a
        customized itinerary based on your preferences.
      </p>
      {/* Location Input */}
      <div className="mt-20">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
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
        {/* Number of Days */}
        <div className="mt-10 flex flex-col gap-10">
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>

      {/* Budget Section */}
      <div>
        <h2 className="text-xl my-3 font-medium">What is Your budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                formData?.budget == item.title && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Travel With Section */}
      <div>
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveler", item.people)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                formData?.traveler == item.people && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 justify-end flex">
        {/* s---------------On-Generate-Trip-Butten--------------- */}
        <Button onClick={OnGenerateTrip} className=" text-gray-900 ">Generate Trip</Button>
      </div>

      {/* ----------Dialog for Google Login---------- */}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign in with Google</h2>
              <p className="mt-3">Sign in to the app with Google authentication securely</p>
               <Button onClick={login} className="text-gray-900 w-full mt-5 flex gap-4 items-center">
                <FcGoogle className="h-10 w-10" /> Sign in with Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> 
    </div>
  );
}

export default CreateTrip;
