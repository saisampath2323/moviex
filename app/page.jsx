'use client'
import { useEffect,useContext,useState } from "react";
import { fenchapii } from "./utils/apii";
import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Page1 from "./Page1";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "./store/store";
function page(){
 return(
  

  
  <Provider store={store}>

 
  <Page1></Page1>

  </Provider>


 
)
}
export default dynamic (() => Promise.resolve(page), {ssr: false})
