'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { getInstrumentConfig } from '@/src/config/instrument.config';

function ModelRenderer({ modelPath }: { modelPath: string }) {
  const config = getInstrumentConfig();
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && config.model3D?.autoRotate) {
      groupRef.current.rotation.y += (config.model3D.autoRotateSpeed || 0.5) * 0.005;
    }
  });

  return (
    <primitive
      ref={groupRef}
      object={scene}
      scale={config.model3D?.scale || 1}
      position={[0, -1.2, 0]}
      rotation={config.model3D?.initialRotation || [0, 0, 0]}
    />
  );
}

export default function InstrumentHero3DClient() {
  const config = getInstrumentConfig();
  const modelPath = config.model3D?.path || '/models/bassoon.glb';

  return (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{
          position: [0, 0, config.model3D?.cameraDistance || 3.5],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} />
        <directionalLight position={[-5, -2, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <ModelRenderer modelPath={modelPath} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>

      <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] text-white/70 pointer-events-none border border-white/10">
        3D Interactive · Drag to Rotate
      </div>
    </div>
  );
}
