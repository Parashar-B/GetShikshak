import NavComponent from "./Components/Nav/NavComponent"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <div className="App">
     <NavComponent/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
