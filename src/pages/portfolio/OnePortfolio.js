
export default function OnePortfolio({onedata}){
    return(
        <>
            <div className="project-1">
                <div className="project-content">
                    <div className="project-image-container">
                        <img className="project-image" alt="polar website" src={onedata.imageSrc}/>
                    </div>
                    <div className="project-information">
                        <div className="project-title">{onedata.title}</div>
                        <div className='project-content'>
                                <div className='project-description'>{onedata.description}</div>
                                <div className='project-links'>
                                    <div>
                                        <a target="_blank" rel="noopener noreferrer" href={onedata.website}>
                                            <i className="project-icons fa-solid fa-desktop"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a target="_blank" rel="noopener noreferrer" href={onedata.github}>
                                            <i className="project-icons fa-brands fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}