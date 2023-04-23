import { Plane } from "@react-three/drei";

export function Sword() {
    return (
        <Plane args={[1, 0.3]}>
            <meshBasicMaterial />
        </Plane>
    )
}