import { Link } from "react-router-dom"
import '../styles/css/NavBar.css'


function NavBar({ children }) {
    return (
        <div className={`NavBar`}>
            <ul>
                {children.map((NavItens, index) => (<li key={index} > {NavItens}</li>))}
            </ul>
        </div>
    )
}


function NavItem(props) {
    

    
    if (props.url == null) {
        return (
            <div className="NavItem">
                <img className="Icons" src={props.icon} alt={props.alt} />
                <h4 className="Text">{props.text}</h4>
            </div >
        )
    }
    else{
        return (
            <div className="NavItem">
                <img className="Icons" src={props.icon} alt={props.alt} />
                <Link className="Button" to={props.url}>{props.text}</Link>
            </div>
        )
    }
    
}

export { NavBar, NavItem }