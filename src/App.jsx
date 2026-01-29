import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TalentSignUp from './pages/auth/TalentSignUp'
import TalentSignUp2 from './pages/auth/TalentSignUp2'
import EmployerSignup from './pages/auth/EmployerSignup'
import EmployerSignup2 from './pages/auth/EmployerSignup2'
import TalentSignUp3 from './pages/auth/TalentSignup3'
import EmployerSignup3 from './pages/auth/EmployerSignup3'
import Login from './pages/auth/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/talent-signup" element={<TalentSignUp />} />
         <Route path="/talent-signup2" element={<TalentSignUp2 />} />
          <Route path="/talent-signup3" element={<TalentSignUp3 />} />
         <Route path="/employer-signup" element={<EmployerSignup />} />
         <Route path="/employer-signup2" element={<EmployerSignup2 />} />
         <Route path="/employer-signup3" element={<EmployerSignup3 />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App