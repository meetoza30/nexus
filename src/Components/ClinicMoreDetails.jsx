import React, { useState, useEffect, useContext } from 'react';
import './ClinicMoreDetails.css';
import Docard from './Docard';
import clinicContext from '../Contexts/Contest';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from '../assets/10im1.jpg'
import im2 from '../assets/10im2.jpg'
import im3 from '../assets/10im3.jpg'
import { Carousel } from "react-bootstrap";


function ClinicMoreDetails() {
  const [selectedSection, setSelectedSection] = useState('Overview');
  const { id } = useParams();
  const { clinics } = useContext(clinicContext);

  const [currentClinic, setCurrentClinic] = useState({ timings: [], services:[]});

  useEffect(() => {
    const foundClinic = clinics.find((clinic) => clinic.id === Number(id));
    setCurrentClinic(foundClinic);
  }, [clinics, id]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };
  // console.log(currentClinic.services)

  const servicesPerColumn = 5; // Adjust this value as needed

  const chunkedServices = currentClinic?.services?.reduce((acc, service, index) => {
    const columnIndex = Math.floor(index / servicesPerColumn);
    acc[columnIndex] = acc[columnIndex] || [];
    acc[columnIndex].push(service);
    return acc;
  }, []);

  return (
    <div>
      <div className="secheader">
        <SectionHeader title="Overview" onClick={() => handleSectionClick('Overview')} />
        <SectionHeader title="Doctors" onClick={() => handleSectionClick('Doctors')} />
        <SectionHeader title="Services" onClick={() => handleSectionClick('Services')} />
        <SectionHeader title="Photos" onClick={() => handleSectionClick('Photos')} />
      </div>
      <div className="secontent">
        {selectedSection === 'Overview' && (
          <div className="outercontain">
            <div>
              Timings:
              <br></br>
              <p>{currentClinic.timings[0]}</p>
              {/* <br></br> */}
              <p>{currentClinic.timings[1]}</p>
            </div>
            <div id='service'>
              Services:
              <ul>
                {currentClinic.services.slice(0, 5).map((it)=>{return <li key={it}>{it}</li>})}
              </ul>
            </div>
          </div>
        )}
        {selectedSection === 'Doctors' && currentClinic?.docs && currentClinic && (
          <div>
            <h2>Doctors</h2>
            {Object.keys(currentClinic.docs).map((docId) => (
              <Docard key={docId} docid={docId} />
            ))}
          </div>
        )}
        {selectedSection === 'Services' && chunkedServices && (
          <div className="services-container">
            {chunkedServices.map((columnServices, index) => (
              <div key={index} className="service-column">
                {/* <h2>Column {index + 1}</h2> */}
                <ul>
                  {columnServices.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {selectedSection === 'Photos' && 
        <div className='carouselpics'> <Carousel>
      <Carousel.Item id='carousel-contain'>
        <img
          className="d-block" id='carousel-contain'
          src={im1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel></div>}
      </div>
    </div>
  );
}

function SectionHeader({ title, onClick }) {
  return (
    <div className="section-header" onClick={onClick}>
      {title}
    </div>
  );
}

export default ClinicMoreDetails;