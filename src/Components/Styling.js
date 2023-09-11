import  React,{ useState } from "react";

const Styling = () => {
    const state=useState();
    const [count,setcount]=useState(0);
    const IncNum=()=>{
        setcount(count+1);
    }

    const DecNum=()=>{
        setcount(count-1);
    }
  return (
    <>
    <div className="items-center mt-40">
    <div  className="flex justify-center mt-4">
      <h1>{count}</h1>
    </div>
    <div className="flex justify-center mt-4">
    <button 
    onClick={IncNum}
    className="bg-blue-100 p-3 rounded-2xl justify-center m-5  text-brown">Inc</button>
    <button 
    onClick={DecNum}
    className="bg-blue-100 p-3 rounded-2xl justify-center m-5  text-brown">Dec</button>
    </div>
    </div>
.    </>
  )
}

export default Styling
