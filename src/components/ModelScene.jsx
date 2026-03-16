import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./model.jsx";

export default function ModelScene() {
  return (
    <Canvas camera={{ position: [0, 1, 1] }}>
      <ambientLight intensity={50} />
      <directionalLight position={[2,2,2]} />

      <Model />

      <OrbitControls enableZoom={false}
      enablePan={false}
       />
    </Canvas>
  );
}