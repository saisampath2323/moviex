import React, { useState } from "react";
import useFetch from "../hooks/useFench";
import { useSelector } from "react-redux";
import Blockk from "./blockk";
const Trending=()=>{
    const [endpoint,setendpoint]=useState('day');
   
    const {data,loading}=useFetch(`/trending/movie/${endpoint}`);
    const data1=data?.results;
   
   const {url}=useSelector((state)=>state.home)
    return(
        <div className="banner  overflow-x-auto">
         <div className="title flex justify-between text-red-600 text-4xl text-center l ">
           <div className="div my-1 bg-gradient-to-bl p-3">
           trendingg
           </div>
           <div className="flex p-1 my-1 mx-7 rounded-2xl bg-red-600">

    

       <div className="div bg-white rounded-3xl p-1 px-2 mx-2 my-1"  onClick={()=>setendpoint('week')}>
         day
     </div>
     <div className="div bg-white rounded-2xl p-1 px-2 mx-2 my-1" onClick={()=>setendpoint('day')}>
     week
     </div>
</div>
         </div> 
         
         <div className="flex overflow-x-scroll">

       {
           !loading? (data1? (data1.map((item)=>{
               const posterurl=url.poster+item.poster_path;
               return (<Blockk url={posterurl} name={item.title} id={item.id} type={item.media_type} endpoint={endpoint} ></Blockk>)
            })):(console.log("bee"))):(console.log("hii"))
        }  

        </div>

</div>

)}
export default Trending