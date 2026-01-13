import { Canvas } from '@react-three/fiber'
import { Suspense, lazy } from 'react'
import './App.css'

// Custom Components (Critical Path)
import { ConstructionPopup } from './components/ConstructionPopup'
import { Hero } from './components/Hero'

// Lazy Loading Components (Deferred)
const WarpStars = lazy(() => import('./components/WarpStars').then(module => ({ default: module.WarpStars })))
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })))
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })))
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })))
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })))

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-white font-sans">
      <ConstructionPopup />
      
      {/* BACKGROUND LAYER (3D CANVAS) */}
      <div className="fixed inset-0 z-0">
         <Canvas camera={{ position: [0, 0, 1], fov: 75 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
            <color attach="background" args={['#000000']} />
            <fog attach="fog" args={['#000000', 5, 120]} />
            <Suspense fallback={null}>
                <WarpStars />
            </Suspense>
         </Canvas>
      </div>

      {/* FOREGROUND LAYER (HTML CONTENT) */}
      <main className="relative z-10">
         <Hero />
         <Suspense fallback={<div className="h-screen" />}>
            <About />
            <Skills />
            <Projects />
            <Contact />
         </Suspense>
      </main>

    </div>
  )
}

export default App