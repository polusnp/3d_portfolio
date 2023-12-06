import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../components/Loader"
import Space from "../models/space"

{
  /* {<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
      POPUP
    </div>} */
}

function Home() {
  const adjustSpaceForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [3, 3, 3]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [spaceScale, spacePosition, spaceRotation] = adjustSpaceForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-black"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Space
            rotation={spaceRotation}
            position={spacePosition}
            scale={spaceScale}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
