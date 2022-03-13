import React, { useEffect, useState } from "react"
import RestaurantFinder from "../apis/BusinessesAPI"
import { useParams } from "react-router-dom"




function EditSingleBusiness() {



    const params = useParams()

    const [currentBusiness, setCurrentBusiness] = useState(false);

  useEffect (() => {
      console.log("Logged")


      const getSingleBusiness = async () => {
            

        try {
    
           const response = await RestaurantFinder.get(("/view/" + params.id),)
           
                
            console.log(response.data.data.businesses[0])
           setCurrentBusiness(response.data.data.businesses[0])
    
           
    
         
    
    
        } catch (err) {
                console.log(err)
        }
    
    }
    
   getSingleBusiness()
   
   //console.log(currentBusiness.id)
  }, [])







  return (
    <div className="SingleBusiness">
       
        <div>{currentBusiness && currentBusiness.name}</div>
      
    </div>
  );
}

export default EditSingleBusiness;