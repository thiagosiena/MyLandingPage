import "../styles/scss/HomePage.scss";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import pc from "../imgs/Programming-amico.png";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Carousel from "../components/Carousel";
import code from "../imgs/mega-creator.svg";

const HomePage = () => {
    const [content] = useTypewriter({
        words: ["Thiago Siena", "", "a Developer", "", "a Musician"],
        loop: true,
    });

    return (
        <>
            {/* Seção 1 - Hero */}
            <div className="First-section">
                <div className="content1">
                    <div className="left">
                        <div className="Alltext">
                            <span className="text">Hi, I am</span>
                            <span className="TypeWriter"> {content}<Cursor /></span>

                        </div>
                    </div>

                    <div className="right">
                        <div className="object">
                            <div className="Object-3d">
                                <Canvas dpr={1} camera={{ fov: 32, position: [3.2, 3.2, 3.2], near: 0.1, far: 20 }}
                                    gl={{ powerPreference: "low-power", antialias: false, alpha: true }}
                                    style={{
                                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                        width: '120%', height: '120%', borderRadius: '50%', overflow: 'hidden', background: 'transparent'
                                    }}>
                                    <OrbitControls enabled={false} />
                                    <ambientLight intensity={0.6} />
                                    <directionalLight position={[2.5, 2.5, 2.5]} intensity={0.9} color="#0df73fff" />
                                    <mesh>
                                        <sphereGeometry args={[1.1, 42, 42]} />
                                        <MeshDistortMaterial color="#0bf33e" emissive="#0c9445ff" emissiveIntensity={0.4} distort={0.6} speed={1.8} roughness={0.2} opacity={0.95} />
                                    </mesh>
                                </Canvas>
                            </div>
                            <img src={pc} className="pc-image" alt="Programming illustration" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção 2 - Sobre */}
            <div className="Second-section" id="about">
                <div className="content2">
                    <div className="left">
                        <div className="image-container">
                            <img src={code} alt="Futuristic code representation" className="image" />
                        </div>
                    </div>

                    <div className="right">
                        <Carousel />
                    </div>
                </div>
            </div>

            {/* Seção 3 */}
            <div className="Third-section">
                <div className="content-container">
                    <h2>Coming Soon</h2>
                </div>
            </div>
        </>
    );
};

export default HomePage;