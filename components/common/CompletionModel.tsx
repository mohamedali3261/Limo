import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense, useEffect } from 'react';

function Model() {
  const { scene } = useGLTF('/emoji.glb');

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.color.set('orange');
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

export function CompletionModel() {
  return (
    <div className="w-64 h-64 mx-auto">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Stage intensity={0.5} environment={null} adjustCamera={true}>
            <Model />
          </Stage>
          {/* Manual lights as fallback for environment map */}
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        </Suspense>
        <OrbitControls makeDefault enableZoom={false} />
      </Canvas>
    </div>
  );
}
