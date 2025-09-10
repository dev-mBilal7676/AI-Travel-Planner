import { config } from "process"

const Base_URL="https://places.googleapis.com/v1/places:searchText"

const Config={
    headers:{
        "Content-Type":"application/json",
        "X-Google-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
         "X-Google-FieldMask":[
            "places.photos",
            "places.displayName",
            "places.id"

         ] 
    }
}

export const GetPlaceDetails=(data)=>axios.post(Base_URL,data,config)