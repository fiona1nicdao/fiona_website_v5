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
                    {/* <p className="large">Hello! I am</p> */}
                    {/* <p className="large">Fiona Nicdao</p> */}
                    <p className="textcoder">Byte about me ...</p>
                    <p className="textme"> Leveraging a science background to build a more intuitive user experience. Experience with e-commerce websites in different areas, like healthcare, communications, and banking. Educated in full-stack development. I am known as an innovative problem solver and eager to learn new languages and programs. I am excited to leverage my skill as part of a fast-paced, quality-driven team to build a better experience on the web.</p>
                </div>
            </div>
 

        </div>
    )
}