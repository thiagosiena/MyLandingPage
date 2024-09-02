
import Header from "../components/Header";
import "../styles/css/HomePage.css";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import pc from "../imgs/Programming-amico.png"
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Carousel from "../components/Carousel";



const HomePage = () => {

    const [content] = useTypewriter({
        words: ["Thiago ", "", "a Developer", "", "a Musician"],
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
                        <div className="Object-3d">
                            <Canvas dpr={[1, 2]} camera={{ fov: 25, position: [4.8, 4.8, 4.8] }}>
                                <OrbitControls enableZoom={false} />
                                <ambientLight intensity={1} />
                                <directionalLight position={[4, 3, 2]} intensity={0.6} />
                                <mesh>
                                    <sphereGeometry args={[1, 32, 16]} />
                                    <MeshDistortMaterial color="#19C23D" distort={0.4} speed={2} />
                                </mesh>
                            </Canvas>
                        </div>
                        <img src={pc} className="pc-image" alt="pc"></img>
                    </div>
                </div>


            </div>

            <div className="Second-section" id="about">
                <div className="content">
                <div className="left">
                    <h1>a</h1>
                </div>
                <div className = "right">
                    <Carousel></Carousel>
                </div>

                </div>
             


            </div>

            <div className="Third-section" id="">
                <h1>a</h1>
            </div>

        </>


    )
}

export default HomePage;