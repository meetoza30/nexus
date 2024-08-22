import React, { createContext } from "react";
import { useContext } from "react";

const clinicContext = createContext();
const clinicsData = [
    {
        centername: "Skin & surgery International & Asia Institute of Hair Transplant",
        centeradd:"207, Tradenet Building, Next to Phoenix Mall, Landmark : Above Kothari Wheels Maruti Showroom, Next to Phoenix Market City, Pune",
        time:"8 pm",
        id:10,
        timings: ["Mon-Sun", "09:30 AM - 10:30 PM"],        
        specs:"Multi-Speciality Clinic",
        logo: "clinic10",
        services: ["Dermabrasion",
            "Laser Resurfacing",
            "Acne / Pimples Treatment",
            "Scar Treatment",
            "Wart Removal",
            "Laser Hair Removal - Face",
            "Photofacial",
            "Tattoo Removal",
            "Sun Spots, Age Spots, And Other Pigmented Lesions",
            "Leucoderma Treatment",
            "Peel, Polishing, Lasers",
            "Anti Aging Treatment",
            "Dental Fillings",
            "Mole Removal",
            "Dermaroller"],
        docs: {
            12345:{
            docname: "Dr. Pradeep Kumari",
            docskills: ["MBBS", "Dermatologist", "Veneorology & Leprosy", "Dermatosurgeon", "DVD"],
            exp: 21,
            isVerify: true
        },
        98765:{
            docname: "Dr. Nitin Jain",
            docskills:["MBBS", "FCPS", "Hair Transplant Surgeon"],
            exp: 21,
            isVerify: true

        }, 45689:{
            docname: "Dr. Ajay More",
            docskills:["MBBS", "MD-Dermatology", "Veneorology & Leprosy"],
            exp: 9,
            isVerify: false
        }
    }
    },
    {
        centername: "Kaya Clinic",
        centeradd:"Yogesh House, East Street, Camp, Pune, Maharashtra, Pune - 411001, Maharashtra",
        time:"8 pm",
        id:11,
        timings: ["Mon-Sun", "10:30 AM - 6:00 PM"],
        specs:"Hair PRP Treatment",
        logo: "clinic11",
        services: ["Dermabrasion",
            "Laser Resurfacing",
            "Acne / Pimples Treatment",
            "Scar Treatment",],
        docs:{}
        
    },
    {
        centername: "SkinCure Skin & Hair Clinic",
        centeradd:"D136, 1st Floor, D building, Clover Center, Besides Arora Towers, Moledina Road, Camp, Pune - 411001, Maharashtra",
        time:"6:30 pm",
        id:12,
        specs:"Mesotherapy | Hair-grafting",
        logo: "clinic12",
        docs:{}
    }

]
export const ClinicProvider  = ({children})=>{
    return(
        <>
        <clinicContext.Provider value = {{clinics: clinicsData}}>
            {children}
        </clinicContext.Provider>
        </>
    )
}

export default clinicContext;