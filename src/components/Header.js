import '../styles/Header.scss'
import { Link } from "react-router-dom";
import Logo from '../imgs/parrot_PNG96591.png'

function Header() {

    return (<>


        <div className="Header">
            <div className="Contempt" >
                <img className="Logo" src={Logo} alt='logo' />
                <div>Projects</div>
                <div><Link to="/Contact"> Contact</Link> </div>
            </div>
        </div>

    </>
    )

}

export default Header