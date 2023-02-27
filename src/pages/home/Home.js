import React, {useState} from 'react'
import { useTrail, a } from '@react-spring/web'

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 900, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 100: 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className='trailsText' style={style}>
          <a.div >{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}
  
export default function Home(){
  const [open, set] = useState(true)
    return(
      <div className='home-page'>
            <div className='main-text'onClick={() => set(state => !state)} >
              <Trail open={open}>
              <div className='white-font hello-center'> Hello, I am</div>
              <div className='white-font name-center'>Fiona Nicdao</div>
              <div className='white-font title-text'>Software Engineer</div>
              </Trail>
           </div>
            <div className='sub-text'>
              <p className='change-text'>
                Change your Perspective on the World Around You, <br></br>You Might Find Something Interesting 
              </p>
            </div>
      </div>
    )

};