
export default function Resume(){
    return(
        <div id="Contact" className="resume-page">
            <div>Resume Page</div>
            <button>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1RLBrxvKDF0HSdWaEYL7vXaK6iGlgnDkx/view?usp=sharing">View Resume</a>
            </button>
            <div>fionanicdao8374@gmail.com</div>
            <div classsName="skills"> 
            <div className="proficiency">
                    <div>
                        <h2 className="spacing">Front-end Proficiencies</h2>
                        <ul className="spacing-left">
                            <li className="dot">HTML</li>
                            <li className="dot">CSS</li>
                            <li className="dot">JavaScript</li>
                            <li className="dot">jQuery</li>
                            <li className="dot">responsive design</li>
                            <li className="dot">React.js</li>
                            <li className="dot">Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="spacing">Back-end Proficiencies</h2>
                        <ul className="spacing-left">
                            <li className="dot">API</li>
                            <li className="dot">Node</li>
                            <li className="dot">Express</li>
                            <li className="dot">MySQL, Squelize</li>
                            <li className="dot">MongoDB, Mongoose</li>
                            <li className="dot">REST</li>
                            <li className="dot">GraphQL</li>
                            <li className="dot">Apollo</li>

                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="work-experience">
                <h2>Experience</h2>
                <div>Dentsu</div>
                <div>Research</div>
            </div>

            <div className="education">
                <h2>Education</h2>
                <div>Northwestern </div>
                <div>Loyola </div>
            </div>
        </div>
    )
}