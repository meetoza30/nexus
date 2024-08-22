import React, { useState, useContext, useEffect } from "react";
import './Docard.css';
import clinicContext from '../Contexts/Contest';
import { useParams, Link } from "react-router-dom";
// import { useState } from "react";

function Docard({ docid }) {
  const [imageSrc, setImageSrc] = useState(null);
  const { clinics } = useContext(clinicContext);
  const [docdata, setdocdata] = useState('')
  let { id } = useParams(); // Get clinic ID from URL params
  id=Number(id)
  
    useEffect(()=>{
        import(`../assets/Doctors/${docid}.jpg`)
        .then(img=>setImageSrc(img.default))
        .catch(err=>console.error(err));
    },[docid])
  useEffect(() => {
    const foundClinic = clinics.find((clinic) => clinic.id === id);
    // console.log(foundClinic)
    if (foundClinic && foundClinic.docs && docid) {
      setdocdata(foundClinic.docs[docid]);
    }
  }, [clinics, id, docid]);

  const verification = ({ isVerify }) =>
    isVerify ? (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="tick" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>
        <span id="verify">Medical Registration Verified</span>
      </>
    ) : (
      <p id="verify">Not Verified</p>
    );

  return (
    docid && ( // Render only if docid is available
      <div className="doc_card">
        <img src={imageSrc} id="docimg" alt="Doctor's Image" />
        <div id="docdetails">
          <Link to={`/clinics/${id}/doctors/${docid}`} id="docname">
            {docdata.docname}
          </Link>
          <div className="docskills">
            {docdata?.docskills?.map((skill) => (
              <span key={skill}>
                 {skill} | <span></span> 
              </span>
            ))}
          </div>
          <p id="docexp">Experience - {docdata.exp} years</p>
          {verification({ isVerify: docdata?.isVerify })}
          <div id="bookbtn">
          <Link to={`/clinics/${id}/doctors/${docid}`} id="btns">Book Appointment</Link>
          </div>
        </div>
      </div>
    )
  );
}

export default Docard;