import React, { useContext } from "react";
import { useState } from "react";
import CenterCard from "./CenterCard";
import './Centerlist.css'
import clinicContext from "../Contexts/Contest";

function Centerslist(){
    const {clinics} = useContext(clinicContext);
    return(
        <>
        <div className="mid-content">
        <input placeholder="Centers near me" className="input" />
    </div>
    <div className="cards">
    {clinics.map((clinic)=>(
        <CenterCard key={clinic.id} {...clinic} />
    ))}
    </div>
    </>
    
    )
}

export default Centerslist;