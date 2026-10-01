import React from 'react';
import fantaImg from '../assets/images/drink_fanta.jpg';
import cocaImg from '../assets/images/drink_coca.jpg';
import imperioImg from '../assets/images/drink_imperio.jpg';
import pinkMoonImg from '../assets/images/drink_pink_moon.jpg';

interface DrinkItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  fallbackImage: string;
  alt: string;
}

const DRINKS: DrinkItem[] = [
  {
    id: 'fanta',
    name: 'Fanta Laranja',
    brand: 'Fanta',
    image: '/fanta_laranja.png',
    fallbackImage: fantaImg,
    alt: 'Fanta Laranja Original 1.5L com fatias de laranja e gelo',
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola Original',
    brand: 'Coca-Cola',
    image: '/coca_cola.png',
    fallbackImage: cocaImg,
    alt: 'Coca-Cola Sabor Original estupidamente gelada com gelo',
  },
  {
    id: 'imperio',
    name: 'Cerveja Império Lager',
    brand: 'Império Puro Malte',
    image: '/imperio_lager.png',
    fallbackImage: imperioImg,
    alt: 'Cerveja Império Puro Malte Lager 600ml gelada com lúpulo',
  },
  {
    id: 'pink-moon',
    name: 'Pink Moon Red Draft',
    brand: 'Pink Moon Chopp',
    image: '/pink_moon.png',
    fallbackImage: pinkMoonImg,
    alt: 'Pink Moon Red Draft Chopp 600ml com frutas vermelhas e gelo',
  },
];

export const DrinksInfiniteCarousel: React.FC = () => {
  // Duplicamos a lista de 4 itens para criar o loop contínuo sem saltos
  const sequenceA = DRINKS;
  const sequenceB = DRINKS;

  return (
    <section 
      id="bebidas-section"
      className="relative w-full bg-[#050404] py-10 sm:py-14 lg:py-16 overflow-hidden border-t border-b border-neutral-900 select-none"
      aria-label="Carrossel Infinito de Bebidas Geladas Espartanos"
    >
      {/* Header sutil da faixa */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-6 sm:mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#f99619] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-neutral-300 uppercase">
            BEBIDAS GELADAS ESPARTANOS
          </span>
        </div>
        <span className="hidden sm:inline-block text-[9px] font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          ESTUPIDAMENTE GELADAS · DELIVERY & BALCÃO
        </span>
      </div>

      {/* Faixa Marquee Contínua da Direita para a Esquerda */}
      <div className="relative w-full overflow-hidden flex">
        {/* Sombras suaves nas bordas laterais para fade orgânico */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#050404] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#050404] to-transparent z-10 pointer-events-none" />

        {/* Trilho de animação linear infinita sem pausas ou saltos */}
        <div className="flex w-max animate-infinite-marquee">
          {/* Sequência A */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
            {sequenceA.map((drink, idx) => (
              <div
                key={`seqA-${drink.id}-${idx}`}
                className="w-[78vw] sm:w-[68vw] md:w-[44vw] lg:w-[44vw] max-w-[580px] aspect-[16/9] shrink-0 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 shadow-2xl relative group"
              >
                <img
                  src={drink.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== drink.fallbackImage) {
                      target.src = drink.fallbackImage;
                    }
                  }}
                  alt={drink.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Sequência B (Gêmea idêntica para transição perfeita de -50% para 0%) */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0" aria-hidden="true">
            {sequenceB.map((drink, idx) => (
              <div
                key={`seqB-${drink.id}-${idx}`}
                className="w-[78vw] sm:w-[68vw] md:w-[44vw] lg:w-[44vw] max-w-[580px] aspect-[16/9] shrink-0 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 shadow-2xl relative group"
              >
                <img
                  src={drink.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== drink.fallbackImage) {
                      target.src = drink.fallbackImage;
                    }
                  }}
                  alt={drink.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
