import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from '../Pages/Services'
import Details from '../Pages/Details'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Services/>}/>
        <Route path='/details' element={<Details/>}/>
    </Routes>
  )
}

export default AllRoutes