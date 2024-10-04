import React from "react";
import { Canvas } from "@react-three/fiber";
import { CycleRaycast, OrbitControls } from "@react-three/drei";
import { RoundedBox } from "three-stdlib";

const Texi = () => {
  return (
    <mesh position={[0, 0, 0]}>
      {/* 차체 밑동 */}
      <boxGeometry args={[3, 0.5, 1]} /> {/*길이, 높이, 옆으로*/}
      {/*너비,높이,깊이,너비 세크먼트수,높이 세그먼트수, 깊이 방향 세그먼트 수, 깊이 방향 세그먼트 수,모서리둥근정도 */}
      <meshStandardMaterial color="yellow" />
      <mesh position={[0, 0.5, 0]}>
        {/* 차체 윗동*/}
        <boxGeometry args={[2, 0.5, 1]} /> {/*길이, 높이, 옆으로*/}
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        {/* 택시 바*/}
        <boxGeometry args={[0.3, 0.4, 0.8]} /> {/*길이, 높이, 옆으로*/}
        <meshStandardMaterial color="white" />
      </mesh>
      {/*----------------------------------------- */}
      {/* 바퀴 */}
      <mesh position={[-0.8, -0.3, 0.6]} rotation={[0, Math.PI / 2, 86.4]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.8, -0.3, 0.6]} rotation={[0, Math.PI / 2, 86.4]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.8, -0.3, -0.6]} rotation={[0, Math.PI / 2, 86.4]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.8, -0.3, -0.6]} rotation={[0, Math.PI / 2, 86.4]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </mesh>
  );
};

const HologramTexi = () => {
  return (
    <Canvas style={{ background: "white", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Texi />
      <OrbitControls />
    </Canvas>
  );
};

export default HologramTexi;
