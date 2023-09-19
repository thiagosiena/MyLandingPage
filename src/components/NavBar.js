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
                <img src={props.icon} alt={props.alt} />
                <h4>{props.text}</h4>
            </div >
        )
    }

    return (
        <div className="NavItem">
            <img src={props.icon} alt={props.alt} />
            <Link to={props.url}>{props.text}</Link>
        </div>
    )
}

export { NavBar, NavItem }