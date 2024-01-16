
import { useEffect,useContext,useState } from "react";
import { fenchapii } from "./utils/apii";
import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import dynamic from "next/dynamic";
import { useSelector,useDispatch } from "react-redux";
import { getApiConfiguration, getGeners } from "./store/homeSlice";
import Home from "./pages/Home";
import Details from "./pages/details";
import Herobanner from "./pages/herobanner";
import SearchResult from "./pages/searchResult";
import Explore from "./pages/explore";
import Header from "./header/header";
function Page1(){
   const dispatch=useDispatch();
     const {url}= useSelector((state)=>state.home
     );
   useEffect(
     ()=>{
       apitest();
    
     },[]
   );
// const genresCall=async()=>{
//   let promises=[];
//   let endPoint=["tv","movie"];
//   let allGenres={};


//   endPoint.forEach((url)=>{
//    promises.push(fenchapii(`/genre/${url}/list`));

//   });
//   const data= await Promise.all(promises);
  
//   data.map(({genres})=>{
//     return genres.map((item)=>(allGenres[item.id]=item));
//   })
// }
//dispatch(getGeners(allGenres))





  const apitest=()=>{
    
   fenchapii('/configuration').then((res)=>{
   const url={
    backdrop:res.images.secure_base_url+"original",
    poster:res.images.secure_base_url+"original",
    profile:res.images.secure_base_url+'original',
   }
     dispatch(getApiConfiguration(url));
  
  
    })
   
   
    
  }
return(
  <div >
    <Header></Header>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/:mediatype/:id" element={<Details></Details>}>

  </Route>
  <Route path="/search/:query" element={<SearchResult></SearchResult>}>

  </Route>
  <Route path="/explore/:mediaType" element={<Explore></Explore>}></Route>
  
 </Routes>
 </BrowserRouter>
 
 </div>
)
}
export default dynamic (() => Promise.resolve(Page1), {ssr: false})
