import mepic from '../../assets/images/me.png'

export default function Aboutme(){

    return(
        <div className="about-me-page">
            <h1>about me </h1>
            {/* <div className='box'></div> */}
            <div className='about-me-content'>
   
                <div className='pictureme'>
                        <img className="me" alt="Fiona" src={mepic}/>
                </div>
                <div className="Paragraph">
                    {/* <p className="large">Hello! I am</p> */}
                    <p className="large">Fiona Nicdao</p>
                    <p className="textcoder">I am a web developer</p>
                    <p className="textme">I graduated from Loyola Univeristy at Chicago with a Bachelor Degree in Biology. Leveraging a science background to build a more intuitive user experience. Recently earning a certificate in full-stack development from Northwestern University Coding-Bootcamp, with newly developed skills in JavaScript, React.js, and MySQL. I am known as an innovative problem solver and eager to learn new languages and programs. Lattes is the world's greatest invention and second is computers.</p>
                </div>
            </div>
 

        </div>
    )
}