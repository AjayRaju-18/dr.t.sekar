import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function gearShape(outer: number, inner: number, teeth: number, toothDepth: number) {
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / (teeth * 4);
  for (let i = 0; i < teeth * 4; i++) {
    const phase = i % 4;
    const r = phase === 0 || phase === 3 ? outer : outer + toothDepth;
    const a = i * step;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, inner, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return shape;
}

function Gear({
  position,
  radius,
  teeth,
  speed,
  color,
  opacity,
}: {
  position: [number, number, number];
  radius: number;
  teeth: number;
  speed: number;
  color: string;
  opacity: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const geo = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(gearShape(radius, radius * 0.32, teeth, radius * 0.16), {
      depth: radius * 0.16,
      bevelEnabled: false,
      curveSegments: 24,
    });
    g.center();
    return g;
  }, [radius, teeth]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <group ref={ref} position={position}>
      <mesh geometry={geo}>
        <meshBasicMaterial wireframe color={color} transparent opacity={opacity} />
      </mesh>
    </group>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 1.4 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.9 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function GearScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <Rig />
      <group rotation={[0.35, -0.3, 0]} scale={0.7} position={[1.4, 0, 0]}>
        <Gear position={[0, 0, 0]} radius={2.6} teeth={22} speed={0.16} color="#00b4d8" opacity={0.32} />
        <Gear
          position={[3.6, 2.1, -1.2]}
          radius={1.35}
          teeth={14}
          speed={-0.3}
          color="#7fd8ea"
          opacity={0.18}
        />
        <Gear
          position={[-3.4, -2, -1.6]}
          radius={1.0}
          teeth={12}
          speed={0.38}
          color="#ff7a00"
          opacity={0.16}
        />
      </group>
    </Canvas>
  );
}
