import React, { useContext } from "react";
import CenterCard from "./CenterCard";
import './Centerlist.css';
import clinicContext from "../Contexts/Contest";

function Centerslist(){
    const { clinics } = useContext(clinicContext);
    
    return (
        <>
            <div className="mid-content">
                <div className="input-container">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className="search-icon">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                    <input placeholder="Centers near me" className="input" />
                </div>
            </div>
            <div className="cards">
                {clinics.map((clinic) => (
                    <CenterCard key={clinic.id} {...clinic} />
                ))}
            </div>
        </>
    )
}

export default Centerslist;
