import Homepage from './pages/Home/Homepage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}  />
      <Route path="/signin" element={<SignIn />}  />
      <Route path="/signup" element={<SignUp />}  />
    </Routes>
    </BrowserRouter>
  )
}

export default App