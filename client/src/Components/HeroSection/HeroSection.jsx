import SelectInput from '../SelectInput'
import HeroPic from '../../assets/HeroPic.png'
import {GoSearch} from 'react-icons/go'
import './style.css'

function HeroSection(){
    return (
        <div className="" id="hero-section">
            <div className='sub-div bg-primary-color' id="top-div">
                
                <p className='text-xl text-white'>
                    <span className='hero-span'>SHIKSHAK</span> ke bina <span className='hero-span'>SHIKSHA</span> Aadhuri<br/> 
                    <span className='hero-span'>GETSHIKSHAK</span> ke bina woh Rista Aadhuri<br/><br/>
                    Use <span className='hero-span'>GETSHIKSHAK</span> and Learn More from the Knowledge Experts
                </p>
            </div> 

            <div className='sub-div bg-primary-color' id='bottom-div'>
                <div className='rounded h-fit' id="search-box">
                        <SelectInput optionArray={['Select Location','a','b','c']} />
                        <input type="text" className="p-2 min-w-[57%] border-0" id="input-box" placeholder="Type here to Search"/>
                        <button className='w-24 flex justify-center items-center rounded-r' id='search-btn'><GoSearch/></button>
                </div>
            </div>

        </div>
    )
}

export default HeroSection