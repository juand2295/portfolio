import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'
import { DirectionalLight, PerspectiveCamera } from 'three'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./lumen/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"/>
      <pointLight intensity={2} position={[0, 0.1, 0.1]}/>
      <ambientLight intensity={4}/>
      {/* <lightProbe/> */}
      <directionalLight position={[0,1,0]} intensity={1.2}/>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.05 : 0.06}
        position={isMobile ? [-0.1, -0.3, -0.3] : [-0.05, -0.4, -0.6]}
        rotation={[0, -1.5, 0]}
      />
    </mesh>
  )
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60,1,1,3);
  return <group position={[0,0,2]}>
  <cameraHelper args={[camera]} />
  </group>
}

const ComputersCanvas = () => {

  const [ isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => { 
      mediaQuery.removeEventListener('change', handleMediaQueryChange)}

  }, [])


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={isMobile? { position: [0, 0, 3], fov: 60, near:0.1, far:8} :{ position: [0, 0, 3], fov: 60, near:0.1, far:8}}
      gl={{preserveDrawingBuffer: true}}
    >
      {/* <ambientLight />
      <pointLight /> */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          maxDistance={2.7}
          minDistance={2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI/4}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
      {/* <CameraHelper/> */}
    </Canvas>
  )
}

export default ComputersCanvas

