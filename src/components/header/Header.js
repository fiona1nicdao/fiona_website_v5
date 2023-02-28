
export default function Header(){
    // const header = document.querySelector(".menu-header")
    // let preScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //     let currentScrollPos = window.pageXOffset;
    //     if (preScrollpos > currentScrollPos){
    //         header.style.top='1px';
    //     }else{
    //         header.style.top= '-50px';
    //     }

    //     preScrollpos = currentScrollPos;
    // }
    return(
        <header className="menu-header">
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