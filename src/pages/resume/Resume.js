
export default function Resume(){
    return(
        <div id="Contact" className="resume-page">
            <div className="contact-area">
                <button className="resume-btn">
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1q1EKLx0dT3Utp_vGiCbspLCsVys4nlF_/view?usp=sharing">View Resume</a>
                </button>
                <div className="contact-section">
                    <h2>Let's Get In Touch! </h2>
                    <div className="email">fionanicdao8374@gmail.com</div>
                    <h2> You can reach me on socials</h2>
                        <ul className="contacts-socials">
                            <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fiona-nicdao221513175luc/">
                                <i className="social-icon fa-brands fa-linkedin"></i>
                            </a>
                            </li>
                            <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/fiona1nicdao">
                                <i className="social-icon fa-brands fa-github"></i>
                            </a>
                            </li>
                        </ul>
                </div>
            </div>

            <div className="skills"> 
                <h1>Skills & Experiences</h1>
                <div className="skill-icon-section">
                    <i className="skill-icon fa-brands fa-html5"></i>
                    <i className="skill-icon fa-brands fa-css3-alt"></i>
                    <i className="skill-icon fa-brands fa-square-js"></i>
                    <i className="skill-icon fa-brands fa-react"></i>
                    <i className="skill-icon fa-brands fa-bootstrap"></i>
                    <i className="skill-icon fa-brands fa-node"></i>
                    <img className="sizeImgMongodb"alt="mongoDB icon"src="https://user-images.githubusercontent.com/50216349/74248780-cb022980-4cf0-11ea-93fb-724342358f0f.png"/>
                    <img className="sizeImgSQL"alt="SQL icon" src="https://camo.githubusercontent.com/3d0e496c6660afe5b12402e0d29e9b8f9cb8b39da511b3eadf2f3650b47a4c85/687474703a2f2f74616e6b77732e636f6d2f696d616765732f6d7973716c2e706e67"/>
                    <img className="sizeImgGraphql" alt="graphQL icon"src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"/>
                
                </div>
                <div className="skills-content">
                <div className="proficiency">
                    <h1 className="proficiency-title">Proficiency</h1>
                    <div className="proficiency-content">
                        <div>
                            <h2 className="spacing">Front-end</h2>
                            <ul className="spacing-left">
                                <li className="dot">HTML</li>
                                <li className="dot">SASS</li>
                                <li className="dot">CSS</li>

                                <li className="dot">JavaScript</li>
                                <li className="dot">jQuery</li>
                                <li className="dot">responsive design</li>
                                <li className="dot">React.js</li>
                                <li className="dot">Bootstrap</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="spacing">Back-end</h2>
                            <ul className="spacing-left">
                                <li className="dot">Python</li>
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

                <div className="experience">
                <div className="work">
                    <h2 className="work-h2">Experience</h2>
                    <ul className="line-border">
                        <li className="dot">Dentsu Media</li>
                            <li className="dot-details desktop">Experience working as a Front End Engineer, where I built, maintained, tested, and optimized data-driven transactional experiences and e-commerce flows efficiently on tight deadlines.</li>
                            <li className="dot-details">Chicago, IL</li>
                        <li className="dot">Lab Research</li>
                            <li className="dot-details desktop">Developed strengths in creativity and teamwork, and I am an innovative problem-solver. Also achieved academic paper publication in a scientific journal PNAS</li>
                            <li className="dot-details">Chicago, IL</li>
                    </ul>
                </div>

                <div className="education">
                    <h2 className="work-h2">Education</h2>
                    <ul className="line-border">
                        <li className="dot">Northwestern</li>
                            <li className="dot-details"> Univeristy</li>
                            <li className="dot-details">Full Stack Web Development Certificate</li>
                        <li className="dot">Loyola Chicago</li>
                            <li className="dot-details">Univeristy</li>
                            <li className="dot-details">Bachelor's of Science in Biology </li>
                    </ul>
                </div>
                </div>
                </div>


            </div>

        </div>
    )
}