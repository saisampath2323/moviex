'use client'
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFench";
import { useSelector } from "react-redux";


const Herobanner=()=>{
    const [backgroud,setbackgroud]=useState("");
    const [query,setquery]=useState("");
    const navgate=useNavigate();
    const {data,loading}=useFetch('/movie/upcoming')
    const {url}=useSelector((state)=>state.home)
    useEffect(()=>{
        const bg =url.backdrop+data?.results?.[Math.floor(Math.random()*20)].backdrop_path
        setbackgroud(bg);
      
    
    },[data])
    const handler=(event)=>{
if(event.key==="Enter" && query.length>0){
navgate(`/search/${query}`)
}
    }
return(
    <div className="flex flex-col items-center justify-center back-img  bg-cover bg-center bg-gradient-to-r from-cyan-500 to-blue-500 " style={{backgroundImage: `url(${backgroud})`, height:"684px"}}>
            {/* <div className="herobanner  flex-col align-middle justify-center ">
        

        <div className="wapperflex-col align-middle justify-center "  >
            <div className="content  flex-col align-middle justify-center " style={{height:"600px",width:"100%"}}> */}
                <div className="text-9xl text-white bg-transparent ">
                       Welcome 
                </div>
                <div className="text-4xl text-white my-14 bg-transparent">
                    Millions of movies tv shoes and many moree
                </div>
                <div className="searchinput bg-transparent">
                      <input className="rounded-2xl h-10 bg-white w-96 hover:bg-black" type="text" placeholder="   search for an movie" onKeyUp={handler} onChange={(event)=>setquery(event.target.value)}>
                      </input>

               
            footer
            {/* </div>
            </div>
            </div> */}
            </div>
       
       
       
    </div>
)
}
export default Herobanner