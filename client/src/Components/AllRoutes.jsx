import {Routes,Route} from 'react-router-dom';
import Register from './Register/Register'
import Login from "./Login/Login"
import Landing from "./Landing/Landing"
import DashBoard from "./DashBoard/DashBoard"
import SearchPage from "./SearchPage/SearchPage"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Landing/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='/searchPage' element={<SearchPage/>}/>
        </Routes>
    )
}

export default AllRoutes;