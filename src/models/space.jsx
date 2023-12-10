import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { a } from "@react-spring/three"
import spaceScene from "../assets/space.glb"

function Space({ isRotating, setIsRotating, ...props }) {
  const spaceRef = useRef()
  const isRotatingRef = useRef(false)

  const { gl, viewport } = useThree()
  const { nodes, materials } = useGLTF(spaceScene)

  // const lastX = useRef(0)
  // const rotationSpeed = useRef(0)

  useEffect(() => {
    isRotatingRef.current = true
    const handlePointerDown = () => {
      isRotatingRef.current = !isRotatingRef.current // Toggle rotation
    }

    // const handlePointerUp = () => {
    //   e.stopPropagation()
    //   e.preventDefault()
    //   setIsRotating(false)
    // }

    // const handlePointerMove = (e) => {
    //   e.stopPropagation()
    //   e.preventDefault()

    //   if (isRotatingRef.current) {
    //     const clientX = e.touches ? e.touches[0].clientX : e.clientX
    //     const delta = (clientX - lastX.current) / viewport.width

    //     spaceRef.current.rotation.y += delta * 0.01 * Math.PI

    //     lastX.current = clientX

    //     rotationSpeed.current = delta * 0.01 * Math.PI
    //   }
    // }

    const canvas = gl.domElement
    canvas.addEventListener("pointerdown", handlePointerDown)
    // canvas.addEventListener("pointerup", handlePointerUp)
    // canvas.addEventListener("pointermove", handlePointerMove)

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown)
      // canvas.removeEventListener("pointerup", handlePointerUp)
      // canvas.removeEventListener("pointermove", handlePointerMove)
    }
  }, [gl, viewport])

  useFrame(() => {
    if (isRotatingRef.current) {
      spaceRef.current.rotation.y += 0.0002
    } else if (!isRotatingRef.current) {
      spaceRef.current.rotation.y += 0.01
    }
  })

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
