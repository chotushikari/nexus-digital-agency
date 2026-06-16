"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Points({ count = 600 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random coordinates and velocities
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread particles across 3D space
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      // Random upward drift + slight drift in x/z
      vels[i * 3] = (Math.random() - 0.5) * 0.008;
      vels[i * 3 + 1] = Math.random() * 0.008 + 0.004;
      vels[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
    }
    return { positions: pos, velocities: vels };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    if (!posAttr) return;

    // Convert normalized pointer coordinate (-1 to 1) to match scene units roughly
    const mouseX = state.pointer.x * 8;
    const mouseY = state.pointer.y * 6;

    for (let i = 0; i < count; i++) {
      let x = posAttr.getX(i);
      let y = posAttr.getY(i);
      let z = posAttr.getZ(i);

      // Apply velocity
      y += velocities[i * 3 + 1];
      x += velocities[i * 3];
      z += velocities[i * 3 + 2];

      // Reset bottom if particle exits top bounds
      if (y > 8) {
        y = -8;
        x = (Math.random() - 0.5) * 16;
        z = (Math.random() - 0.5) * 10;
      }

      // X boundaries bounce
      if (x > 8 || x < -8) {
        velocities[i * 3] *= -1;
      }

      // Mouse repulsion physics
      const dx = x - mouseX;
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2.5) {
        const force = (2.5 - dist) * 0.04;
        x += (dx / dist) * force;
        y += (dy / dist) * force;
      }

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;

    // Slow drift rotation
    pointsRef.current.rotation.y += 0.0006;
    pointsRef.current.rotation.x += 0.0003;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6366f1"
        size={0.065}
        transparent
        opacity={0.35}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ParticleField() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-[#0a0a0f] pointer-events-none" />;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Points />
      </Canvas>
    </div>
  );
}
export default ParticleField;
