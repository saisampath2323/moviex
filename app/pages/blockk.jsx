import React from "react";
import { useNavigate } from "react-router-dom";
const Blockk=({url,name,id,type,endpoint})=>{
const Navigate=useNavigate();
  function handler(){
    Navigate(`/${type || endpoint}/${id}`)
  }
    return (
        <div className="w-64 mx-5 my-4 flex-col" onClick={handler}>
              <img className="h-72 max-w-lg rounded-lg overflow-y-auto" src={`${url}`}/>
              <div className="text-white">
                {name}
              </div>
        </div>
    )
}
export default Blockk