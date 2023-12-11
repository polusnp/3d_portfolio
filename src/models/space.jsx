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
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree()
  const { nodes, materials } = useGLTF(spaceScene)

  // Use a ref for the last mouse x position
  const lastX = useRef(0)
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0)
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(true)

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX

    // Store the current clientX position for reference
    lastX.current = clientX
  }

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(false)
  }

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
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
      rotationSpeed.current = 0.007
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true)

      spaceRef.current.rotation.y -= 0.005 * Math.PI
      rotationSpeed.current = -0.007
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

  // This function is called on each frame update

  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0
      }

      spaceRef.current.rotation.y += rotationSpeed.current
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = spaceRef.current.rotation.y

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4)
          break
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3)
          break
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2)
          break
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1)
          break
        default:
          setCurrentStage(null)
      }
    }
  })
  // const spaceRef = useRef()
  // const isRotatingRef = useRef(false)

  // const { gl, viewport } = useThree()
  // const { nodes, materials } = useGLTF(spaceScene)

  // useEffect(() => {
  //   isRotatingRef.current = true
  //   const handlePointerDown = () => {
  //     isRotatingRef.current = !isRotatingRef.current // Toggle rotation
  //   }

  //   const canvas = gl.domElement
  //   canvas.addEventListener("pointerdown", handlePointerDown)

  //   return () => {
  //     canvas.removeEventListener("pointerdown", handlePointerDown)
  //   }
  // }, [gl, viewport])

  // useFrame(() => {
  //   if (isRotatingRef.current) {
  //     spaceRef.current.rotation.y += 0.0002
  //   } else if (!isRotatingRef.current) {
  //     spaceRef.current.rotation.y += 0.01
  //   }
  // })

  return (
    <a.group ref={spaceRef} {...props}>
      <a.group scale={0.01}>
        <a.group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.body_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[0, 0.065, 2.077]}
            scale={1.924}
          />
          <mesh
            geometry={nodes.body_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, 0.065, 2.082]}
            scale={1.93}
          />
        </a.group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 1.891]}>
          <mesh
            geometry={nodes.waves_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-0.098, 0.405, 4.492]}
            scale={8.225}
          />
        </group>
        <a.group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 1.891]}>
          <mesh
            geometry={nodes.waves1_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-0.003, 0.001, 4.492]}
            scale={4.492}
          />
        </a.group>
        <a.group
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        >
          <mesh
            geometry={nodes.waves2_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-0.925, -0.001, -3.719]}
            scale={4.492}
          />
        </a.group>
        <a.group
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        >
          <mesh
            geometry={nodes.particles_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-15.462, -23.011, -14.437]}
            scale={45.235}
          />
        </a.group>
        <a.group
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        >
          <mesh
            geometry={nodes.Sphere_Material001_0.geometry}
            material={materials["Material.001"]}
            scale={0.991}
          />
        </a.group>
        <a.group
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        >
          <mesh
            geometry={nodes.Sphere004_Material002_0.geometry}
            material={materials["Material.002"]}
            scale={0.991}
          />
        </a.group>
        <a.group
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        >
          <mesh
            geometry={nodes.Sphere005_Material001_0.geometry}
            material={materials["Material.001"]}
            scale={0.991}
          />
        </a.group>
        <a.group
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials["Material.001"]}
            scale={0.995}
          />
          <mesh
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials["Material.002"]}
            scale={1.005}
          />
        </a.group>
        <a.group
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        >
          <mesh
            geometry={nodes.Sphere003_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, 0, 0.001]}
            scale={0.989}
          />
        </a.group>
        <a.group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials["Material.001"]}
            scale={0.995}
          />
          <mesh
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials["Material.002"]}
            scale={1.005}
          />
        </a.group>
        <a.group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        >
          <mesh
            geometry={nodes.Sphere008_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, 0, 0.001]}
            scale={0.989}
          />
        </a.group>
        <mesh
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <mesh
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
      </a.group>
    </a.group>
  )
}

useGLTF.preload("/space.glb")

export default Space
