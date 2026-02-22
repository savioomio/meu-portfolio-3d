import { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteGallery from '@/components/ui/3dGalleryPhotography';
import '@/components/assets/RenewButton.css';

const CustomContractIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M23.12,11.88c-1.13-1.13-3.11-1.13-4.24,0l-7,7c-.57,.57-.88,1.32-.88,2.12v2c0,.55,.45,1,1,1h2c.8,0,1.55-.31,2.12-.88l7-7c.57-.57,.88-1.32,.88-2.12s-.31-1.55-.88-2.12Zm-1.41,2.83l-7,7c-.19,.19-.44,.29-.71,.29h-1v-1c0-.26,.11-.52,.29-.71l7-7c.38-.38,1.04-.38,1.41,0,.19,.19,.29,.44,.29,.71s-.1,.52-.29,.71Zm-7.71-1.21c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5c0,.32,.1,.67,.29,.99-.32,.28-.74,.51-1.29,.51-.44,0-.88-.13-1.3-.34,.81-1.16,1.3-2.55,1.3-3.66,0-1.65-1.35-3-3-3s-3,1.35-3,3c0,1.22,.68,2.65,1.71,3.8-.24,.13-.48,.2-.71,.2-.55,0-1,.45-1,1s.45,1,1,1c.83,0,1.61-.33,2.3-.85,.84,.53,1.76,.85,2.7,.85,2.6,0,4-2.48,4-3.5Zm-6.87-.1c-.68-.79-1.13-1.72-1.13-2.4,0-.55,.45-1,1-1s1,.45,1,1c0,.72-.35,1.63-.87,2.4Zm1.87,7.6c0,.55-.45,1-1,1h-3c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h5.76c1.07,0,2.07,.42,2.83,1.17l3.24,3.24c.76,.76,1.17,1.76,1.17,2.83v1.76c0,.55-.45,1-1,1s-1-.45-1-1v-1.76c0-.08,0-.16-.02-.24h-2.98c-1.1,0-2-.9-2-2V2.02c-.08,0-.16-.02-.24-.02H5c-1.65,0-3,1.35-3,3v12c0,1.65,1.35,3,3,3h3c.55,0,1,.45,1,1Z"/>
  </svg>
);

const CustomSignatureIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M24,15c0,.55-.45,1-1,1h-7c-.55,0-1,.45-1,1s.45,1,1,1h3c1.65,0,3,1.35,3,3s-1.35,3-3,3H1c-.55,0-1-.45-1-1s.45-1,1-1H19c.55,0,1-.45,1-1s-.45-1-1-1h-3c-1.65,0-3-1.35-3-3s1.35-3,3-3h7c.55,0,1,.45,1,1ZM.29,19.71c-.24-.24-.35-.6-.27-.94l1.64-7.01c.33-1.41,1.4-2.56,2.78-3l3.7-1.16L14.88,.88c1.13-1.13,3.11-1.13,4.24,0h0s0,0,0,0c.57,.57,.88,1.32,.88,2.12s-.31,1.55-.88,2.12l-6.72,6.72-1.16,3.7c-.44,1.38-1.58,2.45-3,2.78l-7.01,1.64c-.08,.02-.15,.03-.23,.03-.26,0-.52-.1-.71-.29ZM10,8.59l1.41,1.41,6.29-6.29c.19-.19,.29-.44,.29-.71s-.1-.52-.29-.71t0,0c-.38-.38-1.04-.38-1.41,0l-6.29,6.29Zm-6.38,3.63l-.84,3.59,2.52-2.52c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-2.52,2.52,3.59-.84c.73-.17,1.32-.72,1.54-1.43l1.01-3.2-2.08-2.08-3.2,1.01c-.71,.22-1.26,.82-1.43,1.54Z"/>
  </svg>
);

const images = import.meta.glob('@/assets/dignissima/*.webp', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
}) as Record<string, string>;

const sampleImages = Object.entries(images).map(([path, src]) => ({
  src,
  alt: path.split('/').pop()?.replace('.webp', '') || 'image'
}));

export function Dignissima() {
  const [showModal, setShowModal] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadAssets = async () => {
      // Preload Audio
      const audioUrl = "https://savioomiodev.com.br/assets/dignissima/two_year_dating_anniversary_song.m4a";
      const audioPromise = new Promise((resolve) => {
        const audio = new Audio(audioUrl);
        audio.oncanplaythrough = () => resolve(true);
        audio.onerror = () => resolve(false);
        setTimeout(() => resolve(false), 5000);
      });

      // Preload first 12 images
      const imagePromises = sampleImages.slice(0, 12).map((img) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = img.src;
          image.onload = () => resolve(true);
          image.onerror = () => resolve(false);
        });
      });

      await Promise.all([audioPromise, ...imagePromises]);
      setTimeout(() => setIsLoading(false), 1500);
    };

    preloadAssets();
  }, []);

  const moveNoButton = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
    const maxX = window.innerWidth - 250; 
    const maxY = window.innerHeight - 100; 
    
    const x = Math.random() * Math.max(0, maxX);
    const y = Math.random() * Math.max(0, maxY);
    
    setNoBtnPosition({ x, y });
  };
  
  const handleRenew = () => {
    // Perfect Confetti Burst
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // Main burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#fb7185', '#ffffff', '#f43f5e']
    });

    setTimeout(() => {
      setShowModal(false);
      audioRef.current?.play().catch(() => console.log("Audio playback requires interaction"));
    }, 2000);
  };

  return (
    <main className="min-h-screen h-full w-full relative bg-neutral-950">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-neutral-950"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center justify-center drop-shadow-[0_0_15px_rgba(225,29,72,0.5)] z-10"
              >
                <Heart className="w-16 h-16 md:w-24 md:h-24 fill-rose-500 text-rose-500" />
              </motion.div>

            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 font-love-buble text-white/50 tracking-widest text-lg uppercase"
            >
              Preparando surpresa...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <Helmet>
        <title>Minha Digníssima - Sávio Pessôa</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Uma página especial, feita com carinho, apenas para você." />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savioomiodev.com.br/dignissima" />
        <meta property="og:title" content="Minha Digníssima - Sávio Pessôa" />
        <meta property="og:description" content="Uma página especial, feita com carinho, apenas para você." />
        <meta property="og:image" content="https://savioomiodev.com.br/og-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://savioomiodev.com.br/dignissima" />
        <meta property="twitter:title" content="Minha Digníssima - Sávio Pessôa" />
        <meta property="twitter:description" content="Uma página especial, feita com carinho, apenas para você." />
        <meta property="twitter:image" content="https://savioomiodev.com.br/og-image.png" />
      </Helmet>
      
      <audio ref={audioRef} loop>
        <source src="https://savioomiodev.com.br/assets/dignissima/two_year_dating_anniversary_song.ogg" type="audio/ogg" />
        <source src="https://savioomiodev.com.br/assets/dignissima/two_year_dating_anniversary_song.m4a" type="audio/mp4" />
      </audio>

      {!isLoading && isRunning && showModal && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            left: noBtnPosition.x,
            top: noBtnPosition.y
          }}
          onMouseEnter={moveNoButton}
          whileTap={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 15,
            opacity: { duration: 0.2 }
          }}
          className="fixed z-[100] px-8 py-3 bg-neutral-800 text-neutral-400 rounded-full font-love-buble border border-white/10 shadow-2xl"
          style={{ position: 'fixed' }} // Force fixed
        >
          Não quero...
        </motion.button>
      )}

      <AnimatePresence>
        {!isLoading && showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-neutral-950/30 backdrop-blur-md"
            />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl max-w-lg w-full shadow-2xl"
            >
              {/* Decorative gradient orb */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-4xl font-love-buble text-white mb-2 flex flex-col items-center justify-center gap-3">
                  Parabéns pelos 2 anos de contrato! <CustomContractIcon className="w-8 h-8" />
                </h2>
                
                <div className="bg-black/20 p-6 rounded-2xl border border-white/5 text-left">
                  <p className="text-neutral-200 text-md leading-relaxed font-serif">
                    Ao aceitar a renovação automática desse contrato, você está disposta a manter a relação sobre os termos apresentados adiante logo após a assinatura do contrato.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative min-h-[60px]">
                  <div className="relative group">
                    <button 
                      onClick={handleRenew}
                      className="uiverse-button"
                    >
                      <div className="bg"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 342 208"
                        height="208"
                        width="342"
                        className="splash"
                      >
                        <path strokeLinecap="round" strokeWidth="3" d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362" />
                        <path strokeLinecap="round" strokeWidth="3" d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893" />
                        <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272" />
                        <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449" />
                        <path strokeLinecap="round" strokeWidth="3" d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998" />
                        <path strokeLinecap="round" strokeWidth="3" d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976" />
                        <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227" />
                        <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924" />
                        <path strokeLinecap="round" strokeWidth="3" d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998" />
                        <path strokeLinecap="round" strokeWidth="3" d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976" />
                        <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272" />
                        <path strokeLinecap="round" strokeWidth="3" strokeOpacity="0.3" d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449" />
                      </svg>
                      <div className="wrap">
                        <div className="outline"></div>
                        <div className="content">
                          <span className="char state-1">
                            {"Renovar!".split("").map((c, i) => (
                              <span key={i} data-label={c} style={{ "--i": i + 1 } as any}>{c}</span>
                            ))}
                          </span>
                          <div className="icon">
                            <CustomSignatureIcon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Placeholder Button (Ghost) */}
                  <div className={`${isRunning ? 'opacity-0 pointer-events-none' : ''}`}>
                    <motion.button
                      onMouseEnter={moveNoButton}
                      className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 rounded-full font-love-buble transition-colors border border-white/10"
                    >
                      Não quero...
                    </motion.button>
                  </div>
                </div>
                
                <p className="text-xs text-neutral-500 mt-4 font-love-buble">
                  *A rescisão não é uma opção válida neste sistema.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Content with conditional visibility */}
      <motion.div 
        animate={{ filter: showModal ? "blur(10px)" : "blur(0px)" }}
        transition={{ duration: 1.5 }}
        className="relative h-full w-full"
      >
        <InfiniteGallery
          images={sampleImages}
          speed={1.2}
          zSpacing={3}
          visibleCount={12}
          falloff={{ near: 0.8, far: 14 }}
          className="h-screen w-full overflow-hidden"
        />
        
        <AnimatePresence>
          {!showModal && (
            <>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center text-center px-3 mix-blend-exclusion text-white z-20"
              >
                <h1 className="font-love-buble text-4xl md:text-9xl tracking-tight font-normal">
                  Minha Digníssima
                </h1>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
		</main>
  );
}
