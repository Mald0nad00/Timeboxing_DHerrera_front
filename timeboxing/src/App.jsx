import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Login from './pages/login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
