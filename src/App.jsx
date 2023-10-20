// /* eslint-disable no-unused-vars */

import './App.css'

import LogIn from './page/Auth/LogIn'
import Register from './page/Auth/Register'
import Home from './page/Home/Home'
import Dashboard from './page/Dashboard/Dashboard'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
      <Routes>
        <Route path="/your-teeth/Dashboard" element={<Dashboard/>} />
        <Route path="/your-teeth" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/LogIn" element={<LogIn/>} />
      </Routes>

    </>
  )
}

export default App
