import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { BurgerItem } from '../types/burger';

interface ProductInfoProps {
  burger: BurgerItem;
  onAddToCart: (burger: BurgerItem) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ burger, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(burger);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  return (
    <div className="absolute left-3.5 xs:left-4 sm:left-10 lg:left-14 bottom-4 xs:bottom-6 sm:bottom-14 md:bottom-16 lg:bottom-20 z-40 max-w-[215px] xs:max-w-[245px] sm:max-w-[300px] pointer-events-auto flex flex-col items-start">
      {/* 1. NOME DO HAMBÚRGUER */}
      <motion.div
        key={`title-${burger.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-1 sm:mb-2.5"
      >
        <h2 className="text-white font-bold text-sm xs:text-base sm:text-xl lg:text-2xl leading-[1.08] tracking-tight uppercase">
          <span className="block">{burger.titleLine1}</span>
          <span className="block">{burger.titleLine2}</span>
        </h2>
      </motion.div>

      {/* 2. DESCRIÇÃO */}
      <motion.div
        key={`desc-${burger.id}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mb-1 sm:mb-4 lg:mb-5"
      >
        <p className="text-[8px] xs:text-[8.5px] sm:text-[10px] text-neutral-400 font-medium tracking-[0.1em] sm:tracking-[0.14em] uppercase leading-relaxed max-w-[195px] xs:max-w-[215px] sm:max-w-[210px]">
          {burger.tagline}
        </p>

        {/* 3. PREÇO */}
        <div className="mt-1 sm:mt-1.5 flex items-center gap-1.5 sm:gap-2 text-[10px] xs:text-[10.5px] sm:text-[11px] text-neutral-300 font-semibold tabular-nums">
          <span className="text-[#f99619] font-bold">R$ {burger.price.toFixed(2).replace('.', ',')}</span>
          <span className="text-neutral-600 font-normal">·</span>
          <span className="text-neutral-400 font-normal">{burger.calories}</span>
        </div>
      </motion.div>

      {/* 4. TEXTO/INFORMAÇÃO INFERIOR (No mobile visível nesta ordem exata, no desktop exibido na barra inferior) */}
      <div className="block sm:hidden mb-2">
        <p className="text-[7.5px] xs:text-[8px] tracking-[0.18em] font-medium text-neutral-400 uppercase select-none max-w-[210px] leading-tight">
          {burger.microTitle}
        </p>
      </div>

      {/* 5. BOTÃO "ADICIONAR AO CARRINHO" */}
      <motion.button
        onClick={handleAdd}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 sm:gap-2.5 pl-3.5 sm:pl-4 pr-1.5 sm:pr-2 min-h-[44px] py-2 sm:py-2 bg-[#f99619] hover:bg-[#ff9f24] text-neutral-950 font-bold text-[8.5px] xs:text-[9px] sm:text-[11px] tracking-wider uppercase rounded-full shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer select-none"
        aria-label={isAdded ? 'ADICIONADO ao carrinho' : `ADICIONAR AO CARRINHO: ${burger.titleLine1} ${burger.titleLine2}`}
      >
        <span>{isAdded ? 'ADICIONADO' : 'ADICIONAR AO CARRINHO'}</span>
        <span className="w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-white text-neutral-900 flex items-center justify-center transition-transform">
          {isAdded ? (
            <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
          )}
        </span>
      </motion.button>
    </div>
  );
};
