
export default function OnePortfolio({onedata}){
    return(
        <>
            <div className="project-1">
                <div className="project-content">
                        <div className="project-image-container">
                        <img className="project-image" alt="polar website" src={onedata.imageSrc}/>
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
                                <div ><i class="arrow-icons fa-solid fa-arrow-left-long"></i></div>
                                <div><i class="dots-icons fa-solid fa-ellipsis"></i></div>
                                <div><i class="arrow-icons fa-solid fa-arrow-right-long"></i></div>
                            </div>

                        </div>
                </div>
                </div>
        </>
    )
}