import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, useScroll, ScrollControls } from '@react-three/drei'
import * as THREE from 'three'
import './App.css'

// Componente de câmera animada
// Componente de câmera animada
function AnimatedCamera() {
  const { camera } = useThree()
  const scroll = useScroll()
  
  useFrame(() => {
    // Posições chave da câmera (Espaçamento de 30 unidades)
    // 0.00: z=10 (Hero em 0)
    // 0.25: z=-20 (About em -30)
    // 0.50: z=-50 (Skills em -60)
    // 0.75: z=-80 (Projects em -90)
    // 1.00: z=-110 (Contact em -120)

    const r = scroll.offset
    
    if (r < 0.25) {
      // Hero -> About
      const t = r / 0.25
      camera.position.z = THREE.MathUtils.lerp(10, -20, t)
      camera.position.x = 0
      camera.position.y = 0
    } else if (r < 0.5) {
      // About -> Skills
      const t = (r - 0.25) / 0.25
      camera.position.z = THREE.MathUtils.lerp(-20, -50, t)
      camera.position.x = THREE.MathUtils.lerp(0, -2, t)
      camera.position.y = 0
    } else if (r < 0.75) {
      // Skills -> Projects
      const t = (r - 0.5) / 0.25
      camera.position.z = THREE.MathUtils.lerp(-50, -80, t)
      camera.position.x = THREE.MathUtils.lerp(-2, 0, t)
      camera.position.y = THREE.MathUtils.lerp(0, 2, t)
    } else {
      // Projects -> Contact
      const t = (r - 0.75) / 0.25
      camera.position.z = THREE.MathUtils.lerp(-80, -110, t)
      camera.position.x = THREE.MathUtils.lerp(0, 2, t)
      camera.position.y = THREE.MathUtils.lerp(2, 0, t)
    }
  })
  
  return null
}

// Seção Hero
function HeroSection() {
  return (
    <group position={[0, 0, 0]}>
      <Text
        fontSize={1.5}
        color="#4f46e5"
        anchorX="center"
        anchorY="middle"
        position={[0, 2, 0]}
      >
        Sávio Pessôa Afonso
      </Text>
      <Text
        fontSize={0.5}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, 1, 0]}
      >
        Programador Front end • Web, Mobile & Desktop • Modelador 3D
      </Text>
    </group>
  )
}

// Seção About
function AboutSection() {
  return (
    <group position={[0, 0, -30]}>
      <Text
        fontSize={1}
        color="#ef4444"
        anchorX="center"
        anchorY="middle"
        position={[0, 2, 0]}
      >
        Sobre Mim
      </Text>
      <Text
        fontSize={0.4}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, 0.5, 0]}
        maxWidth={8}
      >
        Trabalhando na Wicomm
        {'\n'}Studying English at Wise Up | Basic II
      </Text>
    </group>
  )
}

// Seção Skills
function SkillsSection() {
  const skills = [
    'Arduino', 'C', 'Bootstrap', 'Tailwind', 'PHP', 
    'WordPress', 'Python', 'Django', 'JavaScript', 
    'React', 'TypeScript'
  ]
  
  return (
    <group position={[0, 0, -60]}>
      <Text
        fontSize={1}
        color="#10b981"
        anchorX="center"
        anchorY="middle"
        position={[0, 3, 0]}
      >
        Skills
      </Text>
      <Text
        fontSize={0.4}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, 1, 0]}
        maxWidth={8}
      >
        {skills.join(' • ')}
      </Text>
    </group>
  )
}

// Seção Projects
function ProjectsSection() {
  return (
    <group position={[0, 0, -90]}>
      <Text
        fontSize={1}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
        position={[0, 3, 0]}
      >
        Projetos
      </Text>
      <Text
        fontSize={0.4}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, 1.5, 0]}
        maxWidth={8}
      >
        E-commerce Platform
      </Text>
      <Text
        fontSize={0.3}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, 0.8, 0]}
        maxWidth={8}
      >
        React • TypeScript • Stripe
      </Text>
      
      <Text
        fontSize={0.4}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
        maxWidth={8}
      >
        Task Management App
      </Text>
      <Text
        fontSize={0.3}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, -0.7, 0]}
        maxWidth={8}
      >
        Next.js • Prisma • PostgreSQL
      </Text>
      
      <Text
        fontSize={0.4}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, -1.5, 0]}
        maxWidth={8}
      >
        3D Portfolio Website
      </Text>
      <Text
        fontSize={0.3}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, -2.2, 0]}
        maxWidth={8}
      >
        React Three Fiber • GSAP
      </Text>
    </group>
  )
}

// Seção Contact
function ContactSection() {
  return (
    <group position={[0, 0, -120]}>
      <Text
        fontSize={1}
        color="#f59e0b"
        anchorX="center"
        anchorY="middle"
        position={[0, 2, 0]}
      >
        Contato
      </Text>
      <Text
        fontSize={0.5}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
      >
        saviopessaafonso@gmail.com
      </Text>
      <Text
        fontSize={0.3}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, -0.8, 0]}
        onClick={() => window.open('https://www.instagram.com/savioomio/', '_blank')}
      >
        Instagram: @savioomio
      </Text>
      <Text
        fontSize={0.3}
        color="#64748b"
        anchorX="center"
        anchorY="middle"
        position={[0, -1.3, 0]}
        onClick={() => window.open('https://www.linkedin.com/in/savioomio', '_blank')}
      >
        LinkedIn: in/savioomio
      </Text>
    </group>
  )
}

// --- WARP SPEED STARS ---

const StarShaderMaterial = {
  vertexShader: `
    uniform float uTime;
    uniform float uSpeed;
    attribute float aSize;
    attribute vec3 aRandom;
    varying float vAlpha;
    
    void main() {
      vec3 pos = position;
      
      // Move stars towards camera based on speed
      pos.z += uTime * uSpeed * 50.0;
      
      // Loop stars within a box
      float depth = 200.0;
      pos.z = mod(pos.z + depth * 0.5, depth) - depth * 0.5;
      
      // Stretch stars based on speed to create "warp" streaks
      float stretch = 1.0 + uSpeed * 20.0;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Scale size by distance and random factor
      gl_PointSize = aSize * (100.0 / -mvPosition.z) * stretch;
      gl_Position = projectionMatrix * mvPosition;
      
      // Fade out stars at the edges of the box
      float dist = abs(pos.z);
      vAlpha = 1.0 - smoothstep(depth * 0.4, depth * 0.5, dist);
    }
  `,
  fragmentShader: `
    varying float vAlpha;
    
    void main() {
      // Circular particle
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);
      if (dist > 0.5) discard;
      
      // Soft glow
      float strength = 1.0 - (dist * 2.0);
      strength = pow(strength, 2.0);
      
      gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha * strength);
    }
  `
}

function WarpStars() {
  const count = 5000
  const meshRef = useRef<THREE.Points>(null)
  const scroll = useScroll()
  
  // Create random star positions
  const [positions, sizes, randoms] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const randoms = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100 // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200 // z
      
      sizes[i] = Math.random() * 2
      
      randoms[i * 3] = Math.random()
      randoms[i * 3 + 1] = Math.random()
      randoms[i * 3 + 2] = Math.random()
    }
    
    return [positions, sizes, randoms]
  }, [])
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uSpeed: { value: 0 }
  }), [])
  
  useFrame((state) => {
    if (meshRef.current) {
      // Update time
      uniforms.uTime.value = state.clock.elapsedTime
      
      // Get scroll speed (delta of scroll offset)
      // scroll.delta gives the change in scroll position
      // We smooth it out or amplify it for the effect
      const targetSpeed = scroll.delta * 200 // Amplify scroll delta
      
      // Lerp speed for smoothness
      uniforms.uSpeed.value = THREE.MathUtils.lerp(
        uniforms.uSpeed.value,
        targetSpeed,
        0.1
      )
      
      // Pass uniforms to shader
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = uniforms.uTime.value
      material.uniforms.uSpeed.value = uniforms.uSpeed.value
      
      // Make stars follow camera
      meshRef.current.position.z = state.camera.position.z
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={count}
          array={sizes}
          itemSize={1}
          args={[sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={count}
          array={randoms}
          itemSize={3}
          args={[randoms, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        attach="material"
        vertexShader={StarShaderMaterial.vertexShader}
        fragmentShader={StarShaderMaterial.fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        fog={false}
      />
    </points>
  )
}

// Cena principal
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />
      
      {/* Fog para esconder seções distantes */}
      {/* Fog para esconder seções distantes */}
      <fog attach="fog" args={['#000000', 10, 25]} />
      
      <WarpStars />
      <AnimatedCamera />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Canvas 3D fixo */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 

        height: '100vh',
        backgroundColor: '#000000'
      }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ScrollControls pages={5} damping={0.3}>
            <Scene />
          </ScrollControls>
        </Canvas>
      </div>
      
      {/* UI Overlay */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        color: 'white',
        fontSize: '14px',
        zIndex: 10,
        fontFamily: 'Arial, sans-serif'
      }}>
        Scroll para navegar
      </div>
    </div>
  )
}

export default App