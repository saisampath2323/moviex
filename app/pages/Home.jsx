import React from "react";
import Herobanner from "./herobanner";
import Trending from "./trending";
import Popular from "./popular";
import Toprated from "./tprated";
const Home=()=>{
return(
    <div>
        
       <Herobanner></Herobanner>
       <Trending></Trending>
       <Popular></Popular>
       <Toprated></Toprated>
    </div>
)
}
export default Home