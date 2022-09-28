import { parsePathData } from './SVGUtils'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { a, useSpring } from '@react-spring/three'
import { useGesture } from 'react-use-gesture'
import {  Sphere } from '@react-three/drei'

 function Icon3D({ path, color, isCCW, ...props }) {
  // Size and position normalization
  return (
    <group {...props}>
      <SvgPath d={path} color={color} isCCW={isCCW} scale={[1 / 12, -1 / 12, 1 / 12]} position={[-1, 1, 0]} />
    </group>
  )
}

function SvgPath({ d, color = '#000', isCCW = true, ...props }) {

  const path = parsePathData(d)
  const shapes = path.toShapes(isCCW)
  return (
    <group {...props}>
      {shapes.map((shape, i) => (
        <mesh key={i}>
          <shapeBufferGeometry args={[shape]} />
          <meshBasicMaterial color={color} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}


export default function AnimatedIcon({ path, color, invert = false, ...props }) {
  const [spins, setSpins] = useState(0)
  const spring = useSpring({ rotation: [0, spins * Math.PI, 0] })
  const canSpin = useRef(false)
  const bind = useGesture({
    onMove: ({ vxvy: [vx] }) => {
      if (canSpin.current && vx !== 0) {
        setSpins(spins + Math.sign(vx))
        canSpin.current = false
      }
    },
    onPointerOver: () => (canSpin.current = true),
  })
  return (
    <a.group rotation={[-Math.PI / 4, 0, 0]} {...spring} {...bind()} {...props}>
      <Turntable>
        <Float amplitude={0.3} speed={2}>
          <Icon3D path={path} color={color} isCCW={!invert} />
          {/* Transparent sphere to generate a shadow */}
          <Sphere args={[1, 4, 32]} scale-z={0.1}>
            <meshStandardMaterial opacity={0} transparent />
          </Sphere>
          {/* Bounding sphere for events */}
          <Sphere visible={false} />
        </Float>
      </Turntable>
    </a.group>
  )
}

// Slowly spin around
function Turntable(props) {
  const ref = useRef()
  useFrame((_, delta) => (ref.current.rotation.y += delta))
  return <group ref={ref} {...props} />
}

// Float up and down
function Float({ speed = 1, amplitude = 1, ...props }) {
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.position.y = amplitude * Math.sin(clock.elapsedTime * speed)))
  return <group ref={ref} {...props} />
}
