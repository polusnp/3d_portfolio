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
      screenScale = [4, 4, 4]
    } else {
      screenScale = [4, 4, 4]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [spaceScale, spacePosition, spaceRotation] = adjustSpaceForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-zinc-950"
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
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
