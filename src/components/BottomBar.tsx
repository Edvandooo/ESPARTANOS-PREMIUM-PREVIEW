import React from 'react';
import { BurgerItem } from '../types/burger';

interface BottomBarProps {
  currentBurger: BurgerItem;
  currentIndex: number;
  total: number;
  onSelectIndex: (index: number) => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  currentBurger,
  currentIndex,
  total,
  onSelectIndex,
}) => {
  return (
    <div className="absolute bottom-2.5 right-3.5 xs:right-4 sm:bottom-4 md:bottom-6 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto z-40 flex flex-col items-end sm:items-center gap-1 sm:gap-2 text-right sm:text-center pointer-events-auto">
      {/* Editorial micro text - Exibido na barra inferior no desktop (no mobile fica na área de informações acima do botão) */}
      <p className="hidden sm:block text-[9px] sm:text-[10px] tracking-[0.24em] font-medium text-neutral-300 uppercase select-none transition-opacity duration-300">
        {currentBurger.microTitle}
      </p>

      {/* Carousel Indicator Dots - Ampliado no mobile com touch target generoso, preservado no PC */}
      <div className="flex items-center gap-1 sm:gap-2" role="tablist" aria-label="Seleção de hambúrgueres em destaque">
        {Array.from({ length: total }).map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectIndex(idx)}
              className="w-9 h-9 sm:w-auto sm:h-auto p-0 sm:p-1 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 cursor-pointer"
              aria-label={`Hambúrguer ${idx + 1}`}
            >
              {isActive ? (
                <span className="w-4 h-4 sm:w-2.5 sm:h-2.5 rounded-full bg-[#f99619] ring-4 sm:ring-2 ring-[#f99619]/40 ring-offset-2 ring-offset-black transition-all" />
              ) : (
                <span className="w-2.5 h-2.5 sm:w-1.5 sm:h-1.5 rounded-full bg-neutral-500 sm:bg-neutral-600 hover:bg-neutral-400 transition-colors" />
              )}
            </button>
          );
        })}
      </div>

      {/* Micro scroll indicator */}
      <button
        onClick={() => document.getElementById('cardapio-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center gap-1.5 text-[8px] sm:text-[9px] tracking-[0.25em] text-neutral-500 hover:text-[#f99619] uppercase transition-colors pt-0.5 cursor-pointer"
      >
        <span>Cardápio Completo</span>
        <span className="animate-bounce">↓</span>
      </button>
    </div>
  );
};

