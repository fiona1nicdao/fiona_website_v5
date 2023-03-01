import { useState } from 'react'
import data from '../../assets/data/data'
import OnePortfolio from './OnePortfolio'

import foodweatherPIC from '../../assets/images/foodweather.png'
import weatherPIC from '../../assets/images/weather.png'
import polariPIC from '../../assets/images/polari.png'
export default function Portfolio(){
    const [current,setCurrent] = useState(0)
    let length = data.length
    // let navigate = useNavigate();

    function goForward(){
       setCurrent(current === length - 1 ? 0 :current + 1) 
    }
    function goBackward(){
        setCurrent(current === 0 ? length - 1  :current - 1)
    }

    return(
        <div id="Portfolio"className="portfolio-page">
            <h1>Personal Portfolio</h1>
            <div className='Projects'>
                {data.map((onedata, index)=>{
                    return(
                        <div className={index === current? 'active': 'hidden'} key={index}>
                            {index === current && (<OnePortfolio onedata={onedata}/>)}
                        </div>
                    )
                })}
            </div>
            <div className='arrow-container'>
                                <div onClick={goBackward}><i class="arrow-icons fa-solid fa-arrow-left-long"></i></div>
                                <div><i class="dots-icons fa-solid fa-ellipsis"></i></div>
                                <div onClick={goForward}><i class="arrow-icons fa-solid fa-arrow-right-long"></i></div>
                            </div>
            <div className="Projects">
                <div className="project-1">
                    <div className="project-content">
                        <div className="project-image-container">
                        <img className="project-image" alt="polar website" src={polariPIC}/>
                        </div>
                        <div className="project-information">
                            <div className="project-title"> Polari</div>
                            <div className='project-content'>
                                <div className='project-description'>Polari is a dating website caterd to the LGBTQ community with an emphasis to educate users of their attachment styles.</div>
                                <div className='project-links'>
                                    <div>
                                        <a target="_blank" rel="noopener noreferrer" href="https://polari-attachments.herokuapp.com/">
                                            <i className="project-icons fa-solid fa-desktop"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/polari-2022">
                                            <i className="project-icons fa-brands fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='arrow-container'>
                                <div><i class="arrow-icons fa-solid fa-arrow-left-long"></i></div>
                                <div><i class="dots-icons fa-solid fa-ellipsis"></i></div>
                                <div><i class="arrow-icons fa-solid fa-arrow-right-long"></i></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}