import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,  createHashRouter} from 'react-router-dom'
import ClinicDetails from './Components/ClinicDetails.jsx'
import Centerslist from './Components/Centerslist.jsx'
import BookAppoint from './Components/BookAppoint.jsx'
import Baemaxreport from './Components/Baemaxreport.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    children:[{
      path: '/',
      element: <Centerslist/>
    },
      {
        path: '/clinics/:id',
        element: <ClinicDetails/>,
        children:[ {
          
        }]

      },
      {
        path: '/clinics/:id/doctors/:docid',
        element: <BookAppoint />
      },
      {
        path: '/appointment_no/:randomnum',
        element: <Baemaxreport />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
