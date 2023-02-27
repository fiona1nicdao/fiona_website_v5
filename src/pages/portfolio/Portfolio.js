import foodweatherPIC from '../../assets/images/foodweather.png'
import weatherPIC from '../../assets/images/weather.png'
import polariPIC from '../../assets/images/polari.png'
export default function Portfolio(){
    return(
        <div className="portfolio-page">
            <h1>Portfolio Page</h1>
            <div className="Projects">
                <div className="project-1">
                    <div className="project-title"> Polari</div>
                    <div className="project-content">
                        <div className="project-image-container">
                        <img className="project-image" alt="polar website picture" src={polariPIC}/>
                        </div>
                        <div className="project-information">
                            <div className='project-description'>Polari is a dating website caterd to the LGBTQ community with an emphasis to educate users of their attachment styles.</div>
                            <div>
                                <div>website link</div>
                                <div>github link </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-2">
                    <div className="project-title"> Weather</div>
                    <div className="project-content">
                        <div className="project-image-container">
                            <img className="project-image" alt="weather website picture" src={weatherPIC}/>
                        </div>
                        <div className="project-information">
                            <div className='project-description'>Weather dashboard site that shows the weather outlook for multiple cities and for one city the five day future forecast</div>
                            <div>
                                <div>website link</div>
                                <div>github link </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-3">
                    <div className="project-title">What's your Foood Temp </div>
                    <div className="project-content">
                        <div className="project-image-container">
                        <img className="project-image" alt="foodweather website picture" src={foodweatherPIC}/>
                        </div>
                        <div className="project-information">
                            <div className='project-description'>A website that provides the weather and a corresponding recipe depending on the temperature of the city enter.</div>
                            <div>
                                <div>website link</div>
                                <div>github link </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}