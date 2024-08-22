import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import clinicContext from "../Contexts/Contest";
import './BookAppoint.css'
import { useCol } from "react-bootstrap/esm/Col";
import AppointmentBooking from "./AppointmentBooking";
// import { useParams } from "react-router-dom";
// import clinicContext from "../Contexts/Contest";

function BookAppoint(){
    let {docid} = useParams();
    let {id} = useParams();
    id = Number(id);
    const [imageSrc, setImageSrc] = useState(null);
    // console.log(docid);
    const { clinics } = useContext(clinicContext);
    const foundClinic = clinics.find((clinic) => clinic.id === id);
    const doc = foundClinic.docs[docid]
    useEffect(()=>{
        import(`../assets/Doctors/${docid}.jpg`)
        .then(img=>setImageSrc(img.default))
        .catch(err=>console.error(err));
    },[docid])

    const verification = ({ isVerify }) =>
        isVerify ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" id="tick" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>
            <span id="verify">Medical Registration Verified</span>
          </>
        ) : (
          <p>Not Verified</p>
        );

        const clinicInfo = {
          name: "Skin And Surgery International & Asia Institute of Hair Transplant",
          fee: 700,
          location: "Viman Nagar",
          rating: 5,
          waitTime: "Max 30 mins wait"
        };

        const ClinicInfo = ({ clinic }) => (
          <div className="clinicinfo">
            <h2>{clinic.name}</h2>
            <div className="tagcontain">
            <p className='doctags' id="doctag1">₹{clinic.fee} fee</p>
            <p className='doctags' id="doctag1">{clinic.location}</p>
            <p className='doctags' id="doctag1">{clinic.rating} ★ | {clinic.waitTime}</p>

            </div>
            <div>
              <div className="detailscontain">
            <p id="detailstab">{foundClinic.centeradd}</p>
            <div id="timingstab">
            <p id="timings">{foundClinic.timings[0]} : </p>
            <p>{foundClinic.timings[1]}</p>
            </div>
            </div>
            </div>
          </div>
        );
        
    return (
    <>
    <div className="compage">
    <div className="cardcontain">
        
         <div className="docard">
        <img src={imageSrc} id="doctimg" alt="Doctor's Image" />
        <div id="doctdetails">
          <h1 to={`/${id}/${docid}`} id="doctname">
            {doc.docname}
          </h1>
          <div className="doctskills">
            {doc?.docskills?.map((skill) => (
              <span key={skill}>
                 {skill} | <span></span> 
              </span>
            ))}
          </div>
          <p id="doctexp">Experience - {doc.exp} years</p>
          {verification({ isVerify: doc?.isVerify })}
        </div>
      </div>
      {/* <br></br> */}
      <div id="line"></div>
      <ClinicInfo clinic={clinicInfo} className="clinicinfo"/>
      </div>
      <h1 id="bookhead">Book your appointment</h1>
            <AppointmentBooking />
            </div>
    </>
    )
}

export default BookAppoint;