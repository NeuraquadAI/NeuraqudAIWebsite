"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingShape({
  position,
  color,
  scale,
  speed,
  distort,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
  distort: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.15}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#a78bfa" />
      <pointLight position={[-10, -5, 5]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[0, 5, -8]} intensity={0.6} color="#f472b6" />

      <FloatingShape
        position={[-2.2, 0.8, 0]}
        color="#6366f1"
        scale={1.1}
        speed={0.4}
        distort={0.35}
      />
      <FloatingShape
        position={[2.4, -0.5, -1]}
        color="#ec4899"
        scale={0.85}
        speed={0.55}
        distort={0.45}
      />
      <FloatingShape
        position={[0.5, 1.2, -2]}
        color="#06b6d4"
        scale={0.65}
        speed={0.35}
        distort={0.5}
      />
      <FloatingShape
        position={[-1, -1.2, -1.5]}
        color="#8b5cf6"
        scale={0.5}
        speed={0.6}
        distort={0.4}
      />
    </>
  );
}

type Hero3DProps = {
  compact?: boolean;
};

export function Hero3D({ compact = false }: Hero3DProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 h-full overflow-hidden ${
        compact ? "min-h-[280px]" : "min-h-[520px]"
      }`}
    >
      {/* Fallback gradient blobs for mobile / reduced motion */}
      <div className="hero-gradient-blobs absolute inset-0 md:hidden" aria-hidden />
      <div className="hidden h-full w-full md:block">
        <Canvas
          camera={{ position: [0, 0, compact ? 7 : 6], fov: compact ? 50 : 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}
