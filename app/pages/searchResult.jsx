import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFench";
const SearchResult=()=>{
    const {query}=useParams();
    const {data,loading}=useFetch(`/discover/movie/${query}`)
    console.log(data)
return(
    <div>
        
    </div>
)
}
export default SearchResult