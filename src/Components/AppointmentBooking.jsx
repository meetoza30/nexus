import React, { useState, useEffect } from 'react';
import './AppointmentBooking.css'
import { Link, useParams } from 'react-router-dom';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [randomnum, setRandomnum] = useState('')
  // const {id} = useParams();
  // const {docid} = useParams();
  // console.log(id)

    useEffect(()=>{
      let randomno = Math.floor(10000 + Math.random()*90000);
      setRandomnum(randomno);
    }, [setSelectedSlot])


  const availableSlots = {
    "2024-08-24": ["09:45 AM", "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM"],
    "2024-08-25": ["12:00 PM", "12:45 PM", "01:00 PM", "01:15 PM"],
    "2024-08-26": ["09:45 AM", "10:15 AM", "10:30 AM", "10:45 AM"],
  };

  const handleBooking = () => {
    
    alert(`Appointment booked on ${selectedDate} at ${selectedSlot}`);
  };

  return (
    <div className="appointment-booking">
      
      <DatePicker 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate}
        availableSlots={availableSlots}
      />
      {selectedDate && (
        <TimeSlotPicker 
          selectedDate={selectedDate} 
          selectedSlot={selectedSlot} 
          setSelectedSlot={setSelectedSlot} 
          availableSlots={availableSlots[selectedDate]} 
        />
      )}
      <div className="bookingbtn">
        <Link to={`/appointment_no/${randomnum}`}>
        <button 
          onClick={handleBooking} 
          disabled={!selectedDate || !selectedSlot}
          className="bookbtn"
        >
          Book Appointment
        </button>
        </Link>
      </div>
    </div>
  );
};

const ClinicInfo = ({ clinic }) => (
  <div className="clinic-info">
    <h2>{clinic.name}</h2>
    <p className='doctags'>₹{clinic.fee} fee</p>
    <p className='doctags'>{clinic.location}</p>
    <p className='doctags'>{clinic.rating} ★ | {clinic.waitTime}</p>
  </div>
);

const DatePicker = ({ selectedDate, setSelectedDate, availableSlots }) => {
  const dates = Object.keys(availableSlots);
  
  return (
    <div className="date-picker">
      <h3 className='heads'>Select a Date</h3>
      <div className="dates">
        {dates.map(date => (
          <button 
            key={date} 
            onClick={() => setSelectedDate(date)}
            className={selectedDate === date ? 'selected' : ''}
            id='datebtn'
          >
            {new Date(date).toDateString()} ({availableSlots[date].length} Slots Available)
          </button>
        ))}
      </div>
    </div>
  );
};

const TimeSlotPicker = ({ selectedDate, selectedSlot, setSelectedSlot, availableSlots }) => (
  <div className="time-slot-picker">
    <h3 className='heads'>Select a Time Slot</h3>
    <div className="slots">
      {availableSlots.map(slot => (
        <button 
          key={slot} 
          onClick={() => setSelectedSlot(slot)}
          className={selectedSlot === slot ? 'selected' : ''}
          id='timebtn'
        >
          {slot}
        </button>
      ))}
    </div>
  </div>
);

export default AppointmentBooking;
