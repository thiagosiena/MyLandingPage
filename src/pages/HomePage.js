
import Header from "../components/Header";
import "../styles/css/HomePage.css";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import pc from "../imgs/Programming-amico.png"
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";


const HomePage = () => {

    const [content] = useTypewriter({
        words: ["Thiago Siena", "", "a Developer", ""],
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
                            <Canvas camera={{ fov: 25, position: [4.8, 4.8, 4.8] }}>
                                <OrbitControls enableZoom={false} />
                                <ambientLight intensity={1} />
                                <directionalLight position={[3, 2, 1]} />
                                <mesh>
                                    <sphereGeometry args={[1,200,300]} />
                                    <MeshDistortMaterial color="#19C23D" distort={0.4} speed={2} />
                                </mesh>
                            </Canvas>
                        </div>
                        <img src={pc} className="pc-image" alt="pc"></img>
                    </div>
                </div>


            </div>
            <div className="Second-section" id="segunda">
                <h1>hi</h1>
            </div>

        </>


    )
}

export default HomePage;