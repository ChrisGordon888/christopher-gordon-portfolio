import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf'); // Ensure this path is correct and accessible
  return (
    <primitive 
      object={earth.scene}
      scale={3.6} // You may need to adjust this value depending on the size of your model
      position-y={0}
      rotation-y={0}
      // position={[0, 0, 0]} // Corrected from 'position-y'
      // rotation={[0, Math.PI, 0]} // Corrected from 'rotation-y'
    />
  );
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameLoop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{  
        fov: 56,
        near: 0.1,
        far: 200, 
        position: [-4, 3, 6]
      }} // Adjusted camera position and added 'fov'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate // Corrected typo here
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* <ambientLight intensity={0.5} /> // Added ambient light
        <directionalLight position={[10, 10, 5]} intensity={1} /> // Added directional light
        <directionalLight position={[-10, -10, -5]} intensity={1} /> // Added another directional light */}

        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas; // Corrected the export to 'EarthCanvas'