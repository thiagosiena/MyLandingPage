
import Header from "../components/Header";
import "../styles/css/HomePage.css";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import pc from "../imgs/PCphoto.png"


const HomePage = () => {

    const [content] = useTypewriter({
        words: ["Thiago Siena", "" ,"a Developer",""],
        loop: {},
    });

    return (
        <>
            <Header />
            <div className="First-section">
                <div className="content">
                <div className="left">
                    <div className="Title">
                        <h1>
                            Hi, i am<span className="TypeWriter"> {content}</span>
                            <span className="Cursor"><Cursor /></span>

                        </h1>

                    </div>
                </div>
                <div className="right">
                        <img src={pc} className="pc-image" alt="pc"></img>
                </div>
            </div>


            </div>
            <div className="Second-section">
                <h1>hi</h1>
            </div>

        </>


    )
}

export default HomePage;