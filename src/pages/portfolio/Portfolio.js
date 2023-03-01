import { useState } from 'react'
import data from '../../assets/data/data'
import OnePortfolio from './OnePortfolio'

export default function Portfolio(){
    // carousel for differnt projects 
    const [current,setCurrent] = useState(0)
    let length = data.length

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
                <div onClick={goBackward}><i className="arrow-icons fa-solid fa-arrow-left-long"></i></div>
                <div><i className="dots-icons fa-solid fa-ellipsis"></i></div>
                <div onClick={goForward}><i className="arrow-icons fa-solid fa-arrow-right-long"></i></div>
            </div>
            <div className='blue-circle'></div>
            <div className='orange-circle'></div>
        </div>
    )
}