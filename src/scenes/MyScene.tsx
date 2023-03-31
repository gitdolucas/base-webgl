import { OrbitControls, Sphere, Stats, Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export function MyScene() {

    return (
        <div style={{ width: "100%", height: "100vh" }}>

            <Canvas >
                <color attach="background" args={['#333']} />

                {/* Grid cartesiano*/}
                {/* Para gerar um set novo de dados, clique no grid. */}
                <gridHelper
                    position={[0, 0, 0]}
                    // args={[20, 10, "#ff6239", '#a19cb6']}
                    args={[10, 10, "#84beee", '#202020']}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <Sphere args={[.25, 12, 12]} position={[0, 0, 0]} >
                    <meshBasicMaterial color={"#fff"} />
                </Sphere>
                <Box args={[.25, .25, .25]} position={[5, 0, 0]} >
                    <meshBasicMaterial color={"#0ff"} />
                </Box>
                <Sphere args={[.25, 4, 2]} position={[0, 5, 0]} >
                    <meshBasicMaterial color={"#ff0"} />
                </Sphere>

                {/* Controle de câmera */}
                <OrbitControls />

                <Stats showPanel={0} className="stats"  />
            </Canvas>
        </div>
    )
}