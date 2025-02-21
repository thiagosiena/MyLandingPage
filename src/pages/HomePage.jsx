

import "../styles/css/HomePage.css";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import pc from "../imgs/Programming-amico.png"
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Carousel from "../components/Carousel";
import code from "../imgs/mega-creator.svg"



const HomePage = () => {

    const [content] = useTypewriter({
        words: ["Thiago", "", "a Developer", "", "a Musician"],
        loop: {},
    });


    return (
        <>

            <div className="First-section">
                <div className="content1">
                    <div className="left">
                        <div className="Alltext">
                            <span className="text"> Hi i am</span>
                            <span className="TypeWriter"> {content}</span>
                            <span className="Cursor"><Cursor /></span></div>

                    </div>
                    <div className="right">
                        <div className="object">
                            <div className="Object-3d">
                                <Canvas dpr={[1, 2]} camera={{ fov: 25, position: [4.8, 4.8, 4.8] }}>
                                    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                                    <ambientLight intensity={1} />
                                    <directionalLight position={[4, 3, 2]} intensity={0.6} />
                                    <mesh pointerEvents="none">
                                        <sphereGeometry args={[1, 32, 16]} />
                                        <MeshDistortMaterial color="#19C23D" distort={0.4} speed={2} />
                                    </mesh>
                                </Canvas>
                            </div>
                            <img src={pc} className="pc-image" alt="pc"></img>


                        </div>

                    </div>
                </div>


            </div>

            <div className="Second-section" id="about">
                <div className="content2">
                    <div className="left">
                        <div className="image-container">
                            <img src={code} alt="Futuristic Art" className="image" />
                            <div className="ink-effect"></div>
                        </div>
                    </div>
                    <div className="right">
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