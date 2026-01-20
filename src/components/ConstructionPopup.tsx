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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="max-w-md w-full glass-card p-8 shadow-glow-accent relative overflow-hidden">
        {/* Decorative HUD Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        
        <h3 className="font-heading text-2xl font-bold text-white mb-6 mt-2 flex items-center gap-3">
          <span className="text-yellow-500">⚠️</span> Em Construção
        </h3>
        
        <p className="text-text-secondary font-body mb-8 leading-relaxed">
          Este portfólio está passando por uma reformulação completa para uma nova arquitetura híbrida de alta performance.
          <br/><br/>
          Algumas seções podem conter textos de exemplo (Lorem Ipsum) ou funcionalidades incompletas.
        </p>
        
        <button 
          onClick={handleClose}
          className="btn-primary w-full"
        >
          Entendido, Acessar Sistema
        </button>
      </div>
    </div>
  )
}
