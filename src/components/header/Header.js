import React, {useState, useEffect} from "react";
export default function Header(){
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [menuView, setMenuView] = useState("menu-header");

  useEffect(() => {
    const handleScroll = () => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;
    
        if(prevScrollPos < currentScrollPos){
            // if scroll down hide menu header
            setMenuView("menu-header-hidden")
        }else {
            // else you are going up so un-hide menu header
            setMenuView("menu-header")
        }
        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

    return(
        <header className={menuView}>
            <h1 className="initials">FN</h1>
            <div className="dropdown">
                <button className="dropdown-menu-button">
                    <i className="menu-icon fa-solid fa-bars"></i>
                </button>
                <nav className="menu">
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a href="#About-me">About Me</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}