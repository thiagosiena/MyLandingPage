import { Link } from "react-router-dom"
import "../styles/css/DropDown.css"

function DropDown({ children }) {
    return (
        <div className="DropDown">
            <ul>
                {children.map((DropDownItens, index) => (<li key={index} > {DropDownItens}</li>))}
            </ul>
        </div>
    )
}



function DropDownItem(props) {

    if (props.url == null) {
        return (
            <div className="DropDownItem">
                <img className="Icons" src={props.icon} alt={props.alt} />
                <h4 className="Text">{props.text}</h4>
            </div >
        )
    }

    return (
        <div className="DropDownItem">
            <img className="Icons" src={props.icon} alt={props.alt} />
            <Link className="Button" to={props.url}>{props.text}</Link>
        </div>
    )
}

export { DropDown, DropDownItem }
