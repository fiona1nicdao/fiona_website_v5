import mepic from '../../assets/images/me.png'

export default function Aboutme(){

    return(
        <div id="About-me" className="about-me-page">
            <div className='orange-box'></div>
            <div className='blue-box'></div>
            <h1 className='about-me-title'>About Me</h1>
            <div className='about-me-content'>
   
                <div className='pictureme'>
                        <img className="me" alt="Fiona" src={mepic}/>
                </div>
                <div className="Paragraph">
                    <p className="textcoder">Byte about me ...</p>
                    <p className="textme"> I’m Fiona Nicdao, a Data Analyst with a strong foundation in Computer Science and Biology. I thrive on applying analytical thinking and technical skills to solve complex problems through innovative data-driven solutions. With experience in both academia and industry—including roles in research, front-end development, and teaching—I bring a diverse and adaptive approach to every project. I also previously served as Treasurer for the Women in CyberSecurity (WiCyS) chapter at Loyola University Chicago, where I managed budgets and coordinated events to support women in the field. I'm passionate about building functional, user-focused applications and continuously expanding my knowledge in machine learning, deep learning, and database systems.</p>
                </div>
            </div>
 

        </div>
    )
}