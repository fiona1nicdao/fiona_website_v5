import {NavLink} from 'react-router-dom'

export default function Footer(){
    return(
        <footer>
            <ul className="contacts-footer">
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fiona-nicdao221513175luc/">
                    <i className="footer-icon fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/fiona1nicdao">
                    <i className="footer-icon fa-brands fa-github"></i>
                  </a>
              </li>
              <li>
                  <NavLink to='/travel'>
                    <i className="footer-icon fa-solid fa-plane"></i>
                  </NavLink>
              </li>
            </ul>
        </footer>
    )
}