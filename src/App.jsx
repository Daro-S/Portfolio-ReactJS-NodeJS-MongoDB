import './App.css'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"

import Homepage from './pages/Homepage/Homepage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App