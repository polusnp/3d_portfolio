import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../components/Loader"
import Space from "../models/Space"
import HomeInfo from "../components/HomeInfo"
import StartInfo from "../components/StartInfo"

function Home() {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(null)
  const [startInfo, setStartInfo] = useState(true)

  const adjustSpaceForScreenSize = () => {
    let screenScale = null
    let screenPosition = [20, 0, -200]
    let rotation = [0, 0, 0]

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1]
    } else {
      screenScale = [0.4, 0.4, 0.4]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [spaceScale, spacePosition, spaceRotation] = adjustSpaceForScreenSize()

  return (
    <section className="w-full h-screen relative">
      {startInfo && <StartInfo />}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center blue-gradient_text">
        {currentStage && (
          <HomeInfo currentStage={currentStage} setStartInfo={setStartInfo} />
        )}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent $ ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
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
