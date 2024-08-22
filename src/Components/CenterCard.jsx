import React, { useEffect, useState } from "react";
import clinic1logo from '../assets/clinic1logo.jpg'
import { Link } from "react-router-dom";
import './CenterCard.css';

function CenterCard({ centername, centeradd, specs, time, id, logo }) {
    const [imgSrc, setimgSrc] = useState(null);
    
    useEffect(()=>{
        import(`../assets/${logo}.png`)
        .then(img=>{setimgSrc(img.default)})
        .catch(err=>{
            console.log(err)
        })

    }, [logo])
    // logo = {logo}
    console.log(typeof(logo))
    
    return (
        <div className="contain">
            <img src={imgSrc} alt="logo1" className="logo"/>
            <div className="details">
                <Link
                    className="name"
                    to={{
                        pathname: `/clinics/${id}`,
                        // state: { centername, centeradd, specs, time, id, logo }
                    }}
                >
                    {centername}
                </Link>
                <div className="tags">
                    <p id="type">{specs}</p>
                    <p id="time"><span>Closes at: </span>{time}</p>
                </div>
                <p id="add">{centeradd}</p>
                    <Link to={`/clinics/${id}`} id="inperson" href="#">Schedule In-Person Visit</Link>
            </div>
        </div>
    );
}

export default CenterCard;