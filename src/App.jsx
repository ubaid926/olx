import { useState } from 'react'
import './App.css'
import AppForm from './pages/form'
import AppLayout from './components/navbar'
import AppDropdown from './components/dropdown'
import AppSearch from './components/search'
import FormValues from './config/context'

// import AppRouter from './config/router'

function App() {
  const [contextInit, setcontextInit] = useState({})
  // console.log(contextInit)
  return (
    <>
      {/* <RouterProvider/> */}
      {/* <AppRouter > */}
      <FormValues.Provider value={{ contextInit, setcontextInit }}>
        <div className=''>
          <AppLayout />
          <div className="flex justify-end align-center" style={{ width: "100%", padding: "10px", height: "80px", backgroundColor: "#002f34", color: "white" }}>
            <h4 className="font-bold">Free Classifieds in Pakistan</h4>
            <p> . © 2006-2025 OLX</p>
          </div>
        </div>
        {/* </AppRouter> */}
        {/* <Link to="/form">
        route
        </Link > */}
      </FormValues.Provider>
    </>
  )
}

export default App
