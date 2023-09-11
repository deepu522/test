import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const[userData,setData]=useState([]);
  useEffect(() => {
    axios
    //   .get("https://jsonplaceholder.typicode.com/users")
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => { 
        console.log(response)
        setData(response.data);
    });
  }, []);
  return( 
  <div className="text-center mt-9">
  {userData.map(
    (data)=>{
        return(
            <div> 
            {/* {`${data.id} UserName: ${data.name}`} */}
            {`${data.id} UserName: ${data.title}`}
            <img src={data.url} className="h-6"/>
            </div>
        )
    }
  )}
  </div>
  );
};

export default Axios;

// https://jsonplaceholder.typicode.com/users