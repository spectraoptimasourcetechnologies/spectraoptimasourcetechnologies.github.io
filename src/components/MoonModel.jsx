import { useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const MoonModel = () => {


  return (
    <Canvas className='md:!h-80 !h-56 2xl:!h-96 z-0'>
      <Environment preset='city' />
      <directionalLight intensity={3} position={[5, 1, 2]} />
      <Model />
    </Canvas>
  );
};

const Model = () => {
  const mesh = useRef(null);
  const { nodes, materials } = useGLTF("/model/moon.glb")
  const { viewport } = useThree();

  const scaleFactor = Math.min(viewport.width / 3, viewport.height / 3);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.004;
    }
  });

  return (
    <group ref={mesh} scale={scaleFactor}>
      <group name='Low_Poly_Moonfbx' rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <mesh name='moon_Moon_0' castShadow receiveShadow geometry={nodes.moon_Moon_0?.geometry} material={materials.Moon} />
      </group>
    </group>
  )
}

export default MoonModel;
