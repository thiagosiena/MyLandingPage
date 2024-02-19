import { Link } from "react-router-dom"
import "../styles/css/DropDown.css"
import { useEffect } from "react"

function DropDown({ children }) {

    const scrollDropDown = () =>{
   
        const Dp = document.querySelector(".DropDown")
        if(window.scrollY >= 60){
          Dp.classList.add("DropDown-scrolled");
          
        }
        else{
          Dp.classList.remove("DropDown-scrolled");
        }
      }
      useEffect(()=>{
        window.addEventListener("click", scrollDropDown)
        window.addEventListener("scroll", scrollDropDown);
        return () =>{
        window.removeEventListener("click", scrollDropDown)
        window.removeEventListener("scroll", scrollDropDown);
        }
      })
    return (
        <div className="DropDown">
            <ul>
                {children.map((DropDownItens, index) => (<li key={index}>{DropDownItens}</li>))}
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
