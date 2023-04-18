import {Routes,Route} from 'react-router-dom'
import NavComponent from "./Components/Nav/NavComponent"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import Landing from "./Components/Landing/Landing"
import Footer from "./Components/Footer/Footer"
import DashBoard from "./Components/DashBoard/dashboard"

function App() {

  return (
    <div className="App">
     <NavComponent/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
