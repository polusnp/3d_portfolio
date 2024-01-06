import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { a } from "@react-spring/three"
import spaceScene from "../assets/space.glb"

function Space({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const spaceRef = useRef()

  const { gl, viewport } = useThree()
  const { nodes, materials } = useGLTF(spaceScene)

  // Use a ref for the last mouse x position
  const lastX = useRef(0)
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0)
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95

  const handlePointerDown = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(true)

    const clientX = event.touches ? event.touches[0].clientX : event.clientX

    lastX.current = clientX
  }

  const handlePointerUp = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(false)
  }

  const handlePointerMove = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX

      // calculate the change in the horizontal position of the mouse cursor or touch input,

      const delta = (clientX - lastX.current) / viewport.width

      // Update the island's rotation based on the mouse/touch movement
      spaceRef.current.rotation.y += delta * 0.01 * Math.PI

      // Update the reference for the last clientX position
      lastX.current = clientX

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI
    }
  }

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true)

      spaceRef.current.rotation.y += 0.005 * Math.PI
      rotationSpeed.current = 0.0125
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true)

      spaceRef.current.rotation.y -= 0.005 * Math.PI
      rotationSpeed.current = -0.0125
    }
  }

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false)
    }
  }

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement
    canvas.addEventListener("pointerdown", handlePointerDown)
    canvas.addEventListener("pointerup", handlePointerUp)
    canvas.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown)
      canvas.removeEventListener("pointerup", handlePointerUp)
      canvas.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0
      }

      spaceRef.current.rotation.y += rotationSpeed.current
    } else {
      const rotation = spaceRef.current.rotation.y

      // Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

      // Set the current stage based on orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(1)
          break
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3)
          break
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(4)
          break
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(2)
          break
        case normalizedRotation >= 0.1 && normalizedRotation <= 0.5:
          setCurrentStage(1)
          break

        default:
          setCurrentStage(null)
      }
    }
  })

  return (
    <a.group ref={spaceRef} {...props}>
      <a.group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={50000}
        />
      </a.group>
    </a.group>
  )
}

export default Space
