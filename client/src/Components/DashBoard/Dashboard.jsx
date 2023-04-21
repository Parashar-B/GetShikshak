import './style.css'
import {FcManager} from 'react-icons/fc';

function DashBoard(){
    return(
        <div id='dashboard-div'>
            <div className='dashboard-sub-div' id='dashboard-left-sub-div'>
                <div id='dashboard-profile-section' className='dashboard-left-row-div'>
                    {/* <p >GETSHIKSHAK</p> */}
                    <div id='profile-pic-section'>
                        <div id='profile-pic'>
                            <FcManager/>
                        </div>
                    </div>
                    <div id='profile-info-section'>
                        <p id='user-name'>Tutor Name</p>
                        <div id='user-rating-tag'><span className='star'>★</span> 4.5</div>
                        <button className='btn-class' id='profile-edit-btn'>Edit</button>
                    </div>
                </div>
                <div id='dashboard-menu-section' className='dashboard-left-row-div'>
                    <div className='dashboard-menu-options'>
                        Profile Section
                    </div>
                    <div className='dashboard-menu-options'>
                        Students
                    </div>
                    <div className='dashboard-menu-options'>
                        Classes
                    </div>
                    <div className='dashboard-menu-options'>
                        Settings
                    </div>
                    <button className='btn-class' id='log-out-btn'>Log out</button>
                </div>
            </div>
            <div className='dashboard-sub-div' id='dashboard-right-sub-div'>
                Details Pages
            </div>
        </div>
    )
}

export default DashBoard;