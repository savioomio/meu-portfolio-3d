import { Canvas } from '@react-three/fiber'
import './App.css'

// Custom Components
import { WarpStars } from './components/WarpStars'
import { ConstructionPopup } from './components/ConstructionPopup'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
      <ConstructionPopup />
      
      {/* BACKGROUND LAYER (3D CANVAS) */}
      <div className="fixed inset-0 z-0">
         <Canvas camera={{ position: [0, 0, 1], fov: 75 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
            <color attach="background" args={['#000000']} />
            <fog attach="fog" args={['#000000', 5, 120]} />
            <WarpStars />
         </Canvas>
      </div>

      {/* FOREGROUND LAYER (HTML CONTENT) */}
      <main className="relative z-10">
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Contact />
      </main>

    </div>
  )
}

export default App