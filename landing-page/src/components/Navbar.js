// import logo from "image path.png"
import logo from "../images/antonio-minion.png"

export default function Header(){
    return(
        <header>
            <nav className="nav">
            <img src={logo} className="nav--icon"/>
            <h3 className="nav--logo_text">Joel Montano</h3>
            <ul className="nav--items">
                    <li className="first">About</li>
                    <li>Projects</li>
                    <li className="last">Contact Me</li>
                </ul>
            </nav>
        </header>
    )
}


//<img src={logo}>