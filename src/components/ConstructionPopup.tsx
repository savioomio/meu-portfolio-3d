import { useState, useEffect } from 'react'

export function ConstructionPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Verifica se já mostrou o popup nesta sessão
    const hasSeen = sessionStorage.getItem('hasSeenPopup')
    if (!hasSeen) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('hasSeenPopup', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="max-w-md w-full bg-slate-900 border border-cyan-500/50 rounded-xl p-6 shadow-[0_0_50px_rgba(6,182,212,0.2)] relative overflow-hidden">
        {/* Decorative HUD Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-2 right-2 text-cyan-400 text-xs font-mono animate-pulse">SYSTEM WARNING</div>
        
        <h3 className="text-2xl font-bold text-white mb-4 mt-2 flex items-center gap-2">
          <span className="text-yellow-500">⚠️</span> Em Construção
        </h3>
        
        <p className="text-slate-300 mb-6 leading-relaxed">
          Este portfólio está passando por uma reformulação completa para uma nova arquitetura híbrida de alta performance.
          <br/><br/>
          Algumas seções podem conter textos de exemplo (Lorem Ipsum) ou funcionalidades incompletas.
        </p>
        
        <button 
          onClick={handleClose}
          className="w-full py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors duration-200 border border-cyan-400/30 shadow-lg"
        >
          Entendido, Acessar Sistema
        </button>
      </div>
    </div>
  )
}
