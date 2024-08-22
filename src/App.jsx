import React from "react"
import Header from "./Components/Header"
import Centerslist from "./Components/Centerslist"
import {Outlet} from 'react-router-dom'
import clinicContext, {ClinicProvider} from "./Contexts/Contest"
import ClinicDetails from "./Components/ClinicDetails"
import { RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 

  return (
    <>
    <ClinicProvider>
      <Header />
      <main>
      <Outlet/>
      </main>
      </ClinicProvider>
      
    </>
  )
}

export default App
