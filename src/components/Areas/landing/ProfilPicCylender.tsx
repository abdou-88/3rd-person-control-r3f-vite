import { useCylinder } from '@react-three/cannon'

export  function Cylinder() {
  const [ref, api] :any = useCylinder(() => ({ mass: 1, position: [-10, 15, -80] }))
  // useFrame(() => (myref.current.rotation.x = myref.current.rotation.y += 0.01))

  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 4, 0)
      }}
      ref={ref}
      
    >
      <cylinderGeometry attach="geometry" args={[8, 8, 0.4, 64]} />
      <meshBasicMaterial attach="material" color="#cccccc" />
    </mesh>
  )
}
