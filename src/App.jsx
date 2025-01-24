import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebLayout from './Layout/WebLayout.jsx'
import Profile from './pages/Profile'  
import  Contact  from './pages/Contact'
import Project from './pages/Project'

const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout/>}>
            <Route path="/" element={<Profile/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App