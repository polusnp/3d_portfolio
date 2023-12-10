import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../components/Loader"
import Space from "../models/Space"
import HomeInfo from "../components/HomeInfo"

function Home() {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustSpaceForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -5, -43]
    let rotation = [0.5, 6, 0]

    if (window.innerWidth < 768) {
      screenScale = [3, 3, 3]
    } else {
      screenScale = [4, 4, 4]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [spaceScale, spacePosition, spaceRotation] = adjustSpaceForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center blue-gradient_text">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-black $ ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Space
            rotation={spaceRotation}
            position={spacePosition}
            scale={spaceScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
