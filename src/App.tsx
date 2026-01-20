import { Suspense, lazy } from 'react'


import { Header } from './components/Header'
import { ConstructionPopup } from './components/ConstructionPopup'
import { Hero } from './components/Hero'

// Lazy Loading Components (Deferred)
const SkillsCarousel = lazy(() => import('./components/SkillsCarousel').then(module => ({ default: module.SkillsCarousel })))
const ThreeBackground = lazy(() => import('./components/ThreeBackground'))
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })))
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })))
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })))

function App() {
  return (
    <div className="bg-black min-h-screen text-text-primary selection:bg-accent-soft selection:text-white font-body">
      <Header />
      <ConstructionPopup />
      
      <Suspense fallback={<div className="fixed inset-0 z-0 bg-black" />}>
         <ThreeBackground />
      </Suspense>

      <main className="relative z-10">
         <Hero />
         <Suspense fallback={<div className="h-screen" />}>
            <About />
            <SkillsCarousel />
            <Projects />
            <Contact />
         </Suspense>
      </main>

    </div>
  )
}

export default App