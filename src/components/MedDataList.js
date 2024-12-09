import React from "react";
import MedData from "./MedData";

export default function MedDataList({medicines}){

    return(
        <div className="app-body">

       { medicines.map((med)=>{
            
            return(
                <MedData med={med}/>
            )
        })}
        </div>
    )
}