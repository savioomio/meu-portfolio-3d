import { Suspense, lazy } from 'react'
import './App.css'

// Custom Components (Critical Path)
import { ConstructionPopup } from './components/ConstructionPopup'
import { Hero } from './components/Hero'

// Lazy Loading Components (Deferred)
const ThreeBackground = lazy(() => import('./components/ThreeBackground'))
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })))
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })))
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })))
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })))

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-white font-sans">
      <ConstructionPopup />
      
      {/* BACKGROUND LAYER (3D CANVAS) - Loaded Lazily so 'three.js' doesn't block the initial paint */}
      <Suspense fallback={<div className="fixed inset-0 z-0 bg-black" />}>
         <ThreeBackground />
      </Suspense>

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