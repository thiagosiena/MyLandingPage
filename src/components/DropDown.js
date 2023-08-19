import { Link } from "react-router-dom"
import "../styles/css/DropDown.css"




function DropDown({ children }) {
    return (
        <div className="DropDown">
            <ul>
                {children.map((DropDownItens) => (<li>{DropDownItens}</li>))}
            </ul>
        </div>
    )

}

function DropDownItem(props) {

    if (props.url == null) {
        return (
            <div className="DropDownItem">
                <img src={props.img} alt={props.alt} />
                <h4>{props.text}</h4>
            </div >
        )
    }

    return (
        <div className="DropDownItem">
            <img src={props.img} alt={props.alt} />
            <Link to={props.url}>{props.text}</Link>
        </div>
    )
}

export { DropDown, DropDownItem }
