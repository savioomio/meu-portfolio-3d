import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteGallery from '@/components/ui/3d-gallery-photography';

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
                className="text-6xl md:text-8xl drop-shadow-[0_0_15px_rgba(225,29,72,0.5)] z-10"
              >
                ❤️
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
                <h2 className="text-3xl font-love-buble text-white mb-2">
                  Parabéns pelos 2 anos de contrato! 📜
                </h2>
                
                <div className="bg-black/20 p-6 rounded-2xl border border-white/5 text-left">
                  <p className="text-neutral-200 leading-relaxed font-love-buble">
                    Ao aceitar a renovação automática desse contrato, você está disposta a manter a relação sobre os termos apresentados adiante logo após a assinatura do contrato.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative min-h-[60px]">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowModal(false);
                      audioRef.current?.play().catch(() => console.log("Audio playback requires interaction"));
                    }}
                    className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-love-buble transition-colors shadow-lg shadow-rose-500/20"
                  >
                    Quero renovar! ✍️
                  </motion.button>

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
                  * Cláusula pétrea: A rescisão não é uma opção válida neste sistema.
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
                <h1 className="font-love-buble text-4xl md:text-9xl tracking-tight italic font-normal">
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
