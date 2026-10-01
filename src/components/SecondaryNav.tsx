import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BurgerItem } from '../types/burger';

interface SecondaryNavProps {
  currentIndex: number;
  total: number;
  nextBurger: BurgerItem;
  onNext: () => void;
  onPrev: () => void;
  onSelectNext: () => void;
}

export const SecondaryNav: React.FC<SecondaryNavProps> = ({
  currentIndex,
  total,
  nextBurger,
  onNext,
  onPrev,
  onSelectNext,
}) => {
  return (
    <div className="absolute right-3 sm:right-6 md:right-8 lg:right-10 xl:right-14 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2.5 sm:gap-4 pointer-events-auto">
      {/* Navigation Chevrons - Stacked minimal chevrons matching reference blueprint */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={onPrev}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-neutral-800 bg-neutral-950/85 hover:bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 shadow-lg group cursor-pointer"
          aria-label="Previous burger"
          title="Previous item"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={onNext}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-neutral-800 bg-neutral-950/85 hover:bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 shadow-lg group cursor-pointer"
          aria-label="Next burger"
          title="Next item"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* 
        Next Burger Floating Preview
        Sofisticado, com margem confortável da borda direita da tela,
        perfeitamente integrado à composição como área de navegação intencional.
      */}
      <button
        onClick={onSelectNext}
        className="group relative flex flex-col items-start focus:outline-none text-left cursor-pointer"
        aria-label={`Next: ${nextBurger.titleLine1} ${nextBurger.titleLine2}`}
        title={`Next: ${nextBurger.titleLine1} ${nextBurger.titleLine2}`}
      >
        {/* Subtle Next Indicator Micro-Label */}
        <div className="hidden sm:flex items-center gap-1.5 mb-1 pl-1 opacity-75 group-hover:opacity-100 transition-opacity">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f99619]" />
          <span className="text-[8px] tracking-[0.28em] uppercase font-bold text-neutral-300">
            PRÓXIMO
          </span>
        </div>

        {/* Ambient Warm Halo behind the next burger */}
        <div className="relative w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(249,150,25,0.14)_0%,_transparent_70%)] rounded-full blur-xl group-hover:bg-[radial-gradient(circle,_rgba(249,150,25,0.25)_0%,_transparent_70%)] transition-all duration-500 pointer-events-none" />

          {/* Floating Transparent Burger */}
          <img
            src={nextBurger.image}
            alt={nextBurger.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.95)] brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-400 ease-out select-none pointer-events-none"
          />

          {/* Floor Contact Shadow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/75 blur-md rounded-full pointer-events-none -z-10" />
        </div>
      </button>
    </div>
  );
};

