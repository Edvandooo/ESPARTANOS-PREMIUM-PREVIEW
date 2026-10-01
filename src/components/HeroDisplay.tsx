import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BurgerItem } from '../types/burger';
import { SmokeVideo } from './SmokeVideo';

interface HeroDisplayProps {
  currentBurger: BurgerItem;
  direction: number;
}

export const HeroDisplay: React.FC<HeroDisplayProps> = ({ currentBurger, direction }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none select-none pt-12 sm:pt-14 md:pt-16 pb-4 sm:pb-8">
      {/* 
        LAYER 0: CINEMATIC SMOKE VIDEO (z-[5])
        - Fumaça em vídeo real com fundo preto 100% invisível via mix-blend-mode: screen
        - Posicionada atrás dos textos (z-10) e do hambúrguer (z-20)
        - Surge do centro e sobe suavemente pela parte superior do Hero
        - Desaparece gradualmente com máscara vertical antes das áreas inferiores
        - Loop contínuo, sem controles, sem áudio e sem bordas visíveis
      */}
      <SmokeVideo />

      {/* 
        LAYER 1: TEXTO DO NOME DO HAMBÚRGUER NO TOPO DO HAMBÚRGUER (z-10)
        - Posicionado no topo do hambúrguer, completamente atrás dele (z-10)
        - Sem espaçamento exagerado, normal, compacto e legível
        - Tamanho reduzido em 8%
        - Animação exatamente preservada (direction, duration, ease, initial/animate/exit)
      */}
      <div 
        className="relative z-10 w-full flex items-center justify-center pointer-events-none select-none overflow-visible px-3 sm:px-4 mb-1 sm:mb-2 md:mb-3"
        style={{ top: '14px' }}
        aria-hidden="true"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentBurger.id + '-giant-text'}
            custom={direction}
            initial={{
              opacity: 0,
              y: direction > 0 ? 15 : -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: direction > 0 ? -15 : 15,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center justify-center w-full"
          >
            <span 
              className="font-display text-[10.5vw] xs:text-[11vw] sm:text-[10.5vw] md:text-[9.2vw] lg:text-[8.1vw] xl:text-[7.5rem] text-white leading-none tracking-normal uppercase select-none opacity-100 whitespace-nowrap block will-change-transform text-center"
              style={{
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                letterSpacing: '0.01em',
              }}
            >
              {currentBurger.giantWordmark}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 
        LAYER 2: MAIN PRODUCT OVERLAY (BURGER + FRIES ON WOODEN BOARD) (z-20)
        - Proporção calibrada no mobile e desktop para respiração visual completa
        - O hambúrguer começa abaixo do texto sem cobrir as letras
        - Fica à frente do texto (z-20)
        - Mantém exatamente a imagem, animação e layout
      */}
      <div className="relative z-20 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[640px] xl:max-w-[720px] px-3 sm:px-4 flex items-center justify-center pointer-events-auto">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentBurger.id}
            custom={direction}
            initial={{
              opacity: 0,
              scale: 0.95,
              x: direction > 0 ? 30 : -30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              x: direction > 0 ? -30 : 30,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex items-center justify-center w-full will-change-transform"
          >
            {/* The Real Transparent PNG Product Photography with organic soft-edge blend on base */}
            <div className="relative group max-w-full">
              <img
                src={currentBurger.image}
                alt={currentBurger.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[33vh] sm:max-h-[44vh] md:max-h-[50vh] lg:max-h-[56vh] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] filter contrast-[1.03] brightness-[1.02]"
                style={{
                  maskImage: 'radial-gradient(ellipse 95% 82% at 50% 36%, black 58%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0.4) 86%, transparent 98%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 82% at 50% 36%, black 58%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0.4) 86%, transparent 98%)',
                }}
              />

              {/* Transição gradual e suave da base escura com o fundo do Hero */}
              <div
                className="absolute inset-x-0 bottom-0 h-10 sm:h-14 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(8,7,6,0.95) 0%, rgba(8,7,6,0.6) 40%, rgba(8,7,6,0.15) 75%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Natural soft contact shadow beneath the board */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[85%] h-10 bg-black/90 blur-xl rounded-full -z-10" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

