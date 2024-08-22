import React, { useContext,  useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
// import clinic1logo from '../assets/clinic1logo.jpg'
import clinicContext from "../Contexts/Contest";
import './ClinicDetails.css';
import ClinicMoreDetails from "./ClinicMoreDetails";

function ClinicDetails() {
     let {id}  = useParams();
    id = Number(id)


    const {clinics} = useContext(clinicContext);
    // console.log(clinics)
    const clinic = clinics.find((iterator) => iterator.id === id);
    // console.log(clinic)

    if (!clinic) {
        return <p>No clinic details available.</p>;
    }
    const {centername, centeradd, time, specs,logo} = clinic;

    const [imgSrc, setimgSrc] = useState(null);
    
    useEffect(()=>{
        import(`../assets/${logo}.png`)
        .then(img=>{setimgSrc(img.default)})
        .catch(err=>{
            console.log(err)
        })

    }, [logo])
    const address = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centeradd)}`

    return (
        <>
        <div className="maincontain">
        <div className="cliniccontain">
            <img src={imgSrc} alt="logo1" className="cliniclogo"/>
            <div className="clinicdetails">
                <h2 className="clinicname">{centername}</h2>
                <div className="clinictags">
                    <p id="clinictype">{specs}</p>
                    <p id="clinictime"><span>Closes at: </span>{time}</p>
                </div>
                <p id="clinicadd">{centeradd}</p>
                <a href={address} className="clinicdirections" target="_blank">Get directions (Click here)</a>
                
            </div>
        </div>
        <ClinicMoreDetails className="moredetails" id={id}/>
        </div>
        </>
    );
}



//     return (
//         <div>
//             <div className="contain">
//                 <img src={clinic1logo} alt="logo1" className="cliniclogo"/>
//                 <div className="details">
//                     <h2 className="name">{centerdetails.centername}</h2>
//                     <div className="tags">
//                         <p id="clinictype">{centerdetails.specs}</p>
//                         <p id="time"><span>Closes at: </span>{centerdetails.time}</p>
//                     </div>
//                     <p id="clinicadd">{centerdetails.centeradd}</p>
//                     <div className="btns">
//                         <a id="inperson" href="#">Schedule In-Person Visit</a>
//                         <a id="virtual" href="#">Schedule Virtual Meeting</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default ClinicDetails;
