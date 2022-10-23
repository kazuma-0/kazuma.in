import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { MathUtils } from "three";
import colors from "nice-color-palettes/500.json";
import { OrbitControls } from "@react-three/drei";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
function generateShapes() {
  let pos = [];
  for (let i = 0; i < 40; i++) {
    pos[i] = [
      MathUtils.randFloat(-3, 3),
      MathUtils.randFloat(-3, 3),
      MathUtils.randFloat(-3, 3),
    ];
  }
  return pos;
}
let palette = colors[MathUtils.randInt(0, 500)];
const boxes = generateShapes().map((pos, i) => {
  let randomColor;
  try {
    randomColor = palette[MathUtils.randInt(0, 5)];
  } catch (e) {
    randomColor = "#1a1e1f";
  }
  return (
    <mesh key={i} position={pos} receiveShadow castShadow>
      <boxGeometry
        args={[
          MathUtils.randFloat(0.4, 2),
          MathUtils.randFloat(0.4, 2),
          MathUtils.randFloat(0.4, 2),
        ]}
      />
      <meshPhysicalMaterial color={randomColor}></meshPhysicalMaterial>
    </mesh>
  );
});

function BoxGroup() {
  const el = useRef(undefined);
  useFrame(() => {
    el.current.rotation.x =
      el.current.rotation.y =
      el.current.rotation.z -=
        MathUtils.randInt(1, 3) * 0.002;
  });

  return <group ref={el}>{boxes}</group>;
}
function Generative() {
  return (
    <Canvas
      shadows={true}
      orthographic
      camera={{ zoom: isMobile ? 20 : 40, position: [0, 0, 100] }}
    >
      <pointLight
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        intensity={1}
        position={[0, 10, 10]}
      />
      <BoxGroup />
      <ambientLight intensity={0.7}></ambientLight>
      <EffectComposer disableNormalPass={true}>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={10}
          height={200}
          opacity={20}
        />
      </EffectComposer>
      <OrbitControls />
    </Canvas>
  );
}

export default Generative;
