import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../imgs/LogoTSS.png';

function Header() {

    return (<>


        <div className='Header'>
            <div className='Contempt' >
                <img className='Logo' src={Logo} alt='logo' />
                <div className='Projects'>Projects</div>
                <div className='About'>About</div>
                <Link to='/Contact' className='Contact'>Contact</Link>
            </div>
        </div>

    </>
    )

}

export default Header