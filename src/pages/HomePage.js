
import Header from "../components/Header";
import "../styles/css/HomePage.css";
import { Cursor ,useTypewriter } from 'react-simple-typewriter'


const HomePage = () => {

    const [content] = useTypewriter({
        words: ["Thiago Siena", "a Developer", ],
        loop: {},
    });

    return (
        <>
            <Header/>
            
            <div className="Title">
                <h1>
                    Hi, i am<span className="TypeWriter"> {content}</span>
                    <span className="Cursor"><Cursor/></span>
                
                </h1>
            </div>
        </>


    )
}

export default HomePage;