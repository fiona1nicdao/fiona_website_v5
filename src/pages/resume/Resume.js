
export default function Resume(){
    return(
        <div id="Contact" className="resume-page">
            <div className="contact-area">
                <button className="resume-btn">
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1iFbfSfBcXEHDNJ0eMim9vxStO6lOywp3/view?usp=sharing">View Resume</a>
                </button>
                <div className="contact-section">
                    <h2>Let's Get In Touch! </h2>
                    <div className="email">fiona1nicdao@gmail.com</div>
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
                    <i className="skill-icon fa-brands fa-java"></i>
                    <i className="skill-icon fa-brands fa-html5"></i>
                    <i className="skill-icon fa-brands fa-css3-alt"></i>
                    <i className="skill-icon fa-brands fa-square-js"></i>
                    <i className="skill-icon fa-brands fa-python"></i>
                    <i className="skill-icon fa-brands fa-react"></i>
                    <i className="skill-icon fa-brands fa-bootstrap"></i>
                    <i className="skill-icon fa-brands fa-node"></i>
                    <img className="sizeImgMongodb"alt="mongoDB icon"src="https://user-images.githubusercontent.com/50216349/74248780-cb022980-4cf0-11ea-93fb-724342358f0f.png"/>
                    <i className="skill-icon fa-solid fa-database"></i>
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
                                <li className="dot">Java</li>
                                <li className="dot">JavaScript</li>
                                <li className="dot">jQuery</li>
                                <li className="dot">responsive design</li>
                                <li className="dot">React.js</li>
                                <li className="dot">Bootstrap</li>
                                {/* <li className="dot">Software Engineer</li> */}
                                {/* <li className="dot">XML</li> */}
                                {/* <li className="dot">PHP</li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="spacing">Back-end</h2>
                            <ul className="spacing-left">
                                <li className="dot">Python</li>
                                <li className="dot">Java</li>
                                <li className="dot">Data Structures</li>
                                <li className="dot">API</li>
                                <li className="dot">Node</li>
                                <li className="dot">Express</li>
                                <li className="dot">MySQL, Squelize</li>
                                <li className="dot">MongoDB, Mongoose</li>
                                <li className="dot">REST</li>
                                <li className="dot">GraphQL</li>
                                <li className="dot">Apollo</li>
                                <li className="dot">Machine Learning </li>

                            </ul>
                        </div>
                    </div>
                </div>    

                <div className="experience">
                <div className="work">
                    <h2 className="work-h2">Experience</h2>
                    <ul className="line-border">
                        <li className="dot">Teaching Assistant</li>
                            <li className="dot-details desktop">Experience working as a Teaching Assistant at Loyola Univeristy Chicago, tutor students on Discrete Structure concepts such as sets, boolean expressions,algorithmic time, etc. As well as give constructive feedback on assignments & exams and grade their correctness and work. </li>
                            <li className="dot-details">Chicago, IL</li>
                        <li className="dot">Front End Engineer</li>
                            <li className="dot-details desktop">Experience working as a Front End Engineer at Dentsu Media, where I built, maintained, tested, and optimized data-driven transactional experiences and e-commerce flows efficiently on tight deadlines.</li>
                            <li className="dot-details">Chicago, IL</li>
                        <li className="dot">Lab Research</li>
                            <li className="dot-details desktop">Developed strengths in creativity and teamwork, and I am an innovative problem-solver. Also achieved academic paper publication in a scientific journal PNAS</li>
                            <li className="dot-details">Chicago, IL</li>
                    </ul>
                </div>

                <div className="education">
                    <h2 className="work-h2">Education</h2>
                    <ul className="line-border">
                        <li className="dot">Loyola Chicago</li>
                            <li className="dot-details">Univeristy</li>
                            <li className="dot-details">Master's of Science in Computer Science (working on it) </li>
                            <li className="dot-details">Bachelor's of Science in Biology </li>
                        <li className="dot">Northwestern</li>
                            <li className="dot-details"> Univeristy</li>
                            <li className="dot-details">Full Stack Web Development Certificate</li>
                        
                    </ul>
                </div>
                </div>
                </div>


            </div>

        </div>
    )
}