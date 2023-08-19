import '../styles/css/Header.css';
import { Link } from 'react-router-dom';
import {DropDownItem, DropDown} from './DropDown';
import Logo from '../imgs/App Logo Inspiraton 39.svg';
import Calculator from '../imgs/Icons/icons8-calculator-26.png';
import Arrow from '../imgs/Icons/icons8-arrow-50.png';
import { useState } from "react";


export default function Header() {


    const [OpenDropDown, SetOpenDropDown] = useState(false);
    const ClassProjetcs = "Projects " + (OpenDropDown ? "aberto" : "");
    return (<>
        {console.log(ClassProjetcs)}
        <div className='Header'>
            <div className='Content' >
                <img className='Logo' src={Logo} alt='logo' />
                <Link to="# " className={ClassProjetcs} onClick={() => SetOpenDropDown(!OpenDropDown)}>
                    Projects
                    <img className='Arrow' src={Arrow} alt='arrow' />
                </Link>
                {OpenDropDown ? (
                    <DropDown>
                         <DropDownItem img={Calculator} alt={"icon"} url={"/Calculator"} text={"Calculator"} />
                        <DropDownItem text={"test"} />
                    </DropDown>
                    )
                    : null}
                <div className='About'>About</div>
                <Link to='/Contact' className='Contact'>Contact</Link>
            </div>
        </div>

    </>
    )

}

