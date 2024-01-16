import React from "react";
import { getApiConfiguration } from "../store/homeSlice";
//import { useParams } from "next/navigation";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFench";
import { fenchapii } from "../utils/apii";
import { useSelector } from "react-redux";
const Details=()=>{
   const{mediatype,id}= useParams();
   const {data,loading}= useFetch(`/${mediatype}/${id}`);
   console.log(data)
   const {url}=useSelector((state)=>state.home)
   
return(
    
    <div>
      
      {!loading?(
        <div className="div">
{  !!data &&(
    <div className="div m-12 mx-72 flex ">
    <img className="rounded-xl h-96 w-72" src={url.backdrop+data.backdrop_path}/>
        <div className="mx-11">
<div className="name text-white text-3xl">

    {data.title}
</div>
<div className="tagline my-2 text-gray-600 font-sans">
{data.tagline}




</div>
<div className="rating my-2 h-9 w-9 border flex justify-center items-center border-green-500 rounded-full  text-white">
<div className="bg-transparent">
{data.vote_average}
</div>


</div>
<div className="para text-white text-s">

{data.overview}

</div>
<div className="div flex gap-3 my-2 font-sans text-gray-400">
<div className="div">
    status {data.status}
</div>
<div className="div">
    Runtime : {data.runtime}
</div>
<div className="div">
Realese data: {data.release_date}
</div>


</div>
<div className="director flex gap-1 my-4">
<div className="div text-white">Budget: </div>
<div className="div text-gray-500 font-sans"> {data.budget} dollars</div>

</div>
<div className="director flex gap-1 my-4">
<div className="div text-white">Revenge: </div>
<div className="div text-gray-500 font-sans"> {data.revenue} dollars</div>

</div>
        </div>
   
    </div>
)



}
        </div>
      ):( <div className="div">

      </div>)



      }
    </div>
)
}
export default Details