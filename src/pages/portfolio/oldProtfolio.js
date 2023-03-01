import { useState } from 'react'
import data from '../../assets/data/data'
import OnePortfolio from './onePortfolio'

import foodweatherPIC from '../../assets/images/foodweather.png'
import weatherPIC from '../../assets/images/weather.png'
import polariPIC from '../../assets/images/polari.png'
export default function Portfolio(){
    const [current,setCurrent] = useState(0)
    let length = portfoliodata.length
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
                <div className="project-2">
                    <div className="project-content">
                        <div className="project-image-container">
                            <img className="project-image" alt="weather website" src={weatherPIC}/>
                        </div>
                        <div className="project-information">
                            <div className="project-title"> Weather</div>
                            <div className='project-description'>Weather dashboard site that shows the weather outlook for multiple cities and for one city the five day future forecast</div>
                            <div className='project-links'>
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://fiona1nicdao.github.io/weather/">
                                        <i className="project-icons fa-solid fa-desktop"></i>
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/fiona1nicdao/weather">
                                        <i className="project-icons fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-3">
                    <div className="project-content">
                        <div className="project-image-container">
                        <img className="project-image" alt="foodweather website " src={foodweatherPIC}/>
                        </div>
                        <div className="project-information">
                            <div className="project-title">What's your Food Temp?</div>
                            <div className='project-description'>A website that provides the weather and a corresponding recipe depending on the temperature of the city enter.</div>
                            <div className='project-links'>
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://seasons-of-food.github.io/whats-your-food-temp/">
                                        <i className="project-icons fa-solid fa-desktop"></i>
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/seasons-of-food/whats-your-food-temp">
                                        <i className="project-icons fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}