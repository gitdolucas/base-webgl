import { OrbitControls, Sphere, Stats, Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Sword } from "../components/Sword";
export function MyScene() {

    return (
        <div style={{ width: "100%", height: "100vh" }}>

            <Canvas >
                <color attach="background" args={['#333']} />

                {/* Grid cartesiano*/}
                <gridHelper
                    position={[0, 0, 0]}
                    args={[10, 10, "#84beee", '#202020']}
                    rotation={[Math.PI / 2, 0, 0]}
                    />
                
                {/* Objetos */}
                <Sword />

                {/* Controle de câmera */}
                <OrbitControls />

                {/* Status app */}
                <Stats showPanel={0} className="stats"  />
            </Canvas>
        </div>
    )
}