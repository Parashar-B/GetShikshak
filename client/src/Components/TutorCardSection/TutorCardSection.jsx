import './style.css'

function TutorCardSection(){
    return(
        <div id='tutor-card'>
            <div id='heading'>
                <p >Meet Our Tutors</p>
            </div>
            <div id='cards-div'>
                <div className='card'>
                    <div className='profile-pic-section'>
                            <div className='profile-pic'>
                            </div>
                    </div>
                    <div className='tutor-details'>
                        <p className='tutor-name'>Tutor Name</p>
                        <div className='ratings'>
                            <p>Rating: </p>
                            <span className='star'>★★★★★</span>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='profile-pic-section'>
                            <div className='profile-pic'>
                            </div>
                    </div>
                    <div className='tutor-details'>
                        <p className='tutor-name'>Tutor Name</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='profile-pic-section'>
                            <div className='profile-pic'>
                            </div>
                    </div>
                    <div className='tutor-details'>
                        <p className='tutor-name'>Tutor Name</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='profile-pic-section'>
                            <div className='profile-pic'>
                            </div>
                    </div>
                    <div className='tutor-details'>
                        <p className='tutor-name'>Tutor Name</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='profile-pic-section'>
                            <div className='profile-pic'>
                            </div>
                    </div>
                    <div className='tutor-details'>
                        <p className='tutor-name'>Tutor Name</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TutorCardSection;