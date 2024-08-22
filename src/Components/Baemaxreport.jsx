import React from "react";
import './Baemaxreport.css'
import { Link } from "react-router-dom";

function Baemaxreport(){
    return(
        <>
        <div className="pagecontainer">
        <h1 id="head">Write down the sympotms in the below box & get your report from our<span id="baemax"> AI Model 'Baemax'</span></h1>
        <input placeholder="Enter your symptoms"/>
        <Link id="submitbtn">Get your Baemax Report</Link>
        </div>
        
        </>
    )
}

export default Baemaxreport;