import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model() {

  const { scene } = useGLTF("/e3.glb");
  const ref = useRef();

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y = mouse.x * Math.PI * 0.1;
      ref.current.rotation.x = mouse.y * Math.PI * 0.07;
    }
  });

  return <primitive ref={ref} object={scene} scale={1} />;
}