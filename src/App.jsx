// /* eslint-disable no-unused-vars */

import './App.css'
import LogIn from './page/Auth/LogIn'
import Register from './page/Auth/Register'
import { Routes, Route } from 'react-router-dom'

import Home from './page/Home/Home'
import Dashboard from './page/Dashboard/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/LogIn" element={<LogIn/>} />
      </Routes>
    </>
  )
}

export default App
