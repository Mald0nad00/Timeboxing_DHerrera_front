import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Login from './pages/login.jsx'
import Dashboard from './pages/dashboard.jsx'
import Planner from './pages/planner.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path="/Planner" element={<Planner/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
