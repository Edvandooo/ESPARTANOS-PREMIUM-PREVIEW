import React from 'react';
import { Share2, ShoppingBag } from 'lucide-react';
import { EspartanosLogo } from './EspartanosLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenMenu: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenMenu,
  onOpenCart,
  cartCount,
  onShare,
}) => {
  const navItems = [
    { label: 'INÍCIO', id: 'inicio' },
    { label: 'CARDÁPIO', id: 'cardapio' },
    { label: 'BEBIDAS', id: 'bebidas' },
    { label: 'ACOMPANHAMENTOS', id: 'acompanhamentos' },
    { label: 'COMBOS', id: 'combos' },
    { label: 'CONTATO', id: 'contato' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveTab(item.label);
    if (item.id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.id === 'cardapio') {
      document.getElementById('cardapio-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.id === 'bebidas') {
      document.getElementById('bebidas-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.id === 'acompanhamentos') {
      document.getElementById('cardapio-acompanhamentos')?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.id === 'combos') {
      document.getElementById('cardapio-combos')?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.id === 'contato') {
      document.getElementById('contato-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-6 sm:px-10 lg:px-14 pt-3 sm:pt-4 flex items-center justify-between pointer-events-auto">
      {/* Brand Logo - Logo Real ESPARTANOS PREMIUM (presença ampliada ~2x) */}
      <button
        onClick={() => {
          setActiveTab('INÍCIO');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 py-1"
        aria-label="Espartanos Hamburgueria Artesanal Premium Início"
      >
        <EspartanosLogo className="h-16 sm:h-22 md:h-28 lg:h-32 w-auto transition-transform duration-300 group-hover:scale-105" />
      </button>

      {/* Center Navigation - Português do Brasil */}
      <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
        {navItems.map((item) => {
          const isActive = activeTab === item.label;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`text-[10px] lg:text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 ${
                isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#f99619] rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Top Right Controls - Pedir Agora CTA + Carrinho + Hamburger & Compartilhar */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Direct Link to Real Anota.ai Order System */}
        <a
          href="https://pedido.anota.ai/loja/espartanos-hamburgueria?f=msa"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f99619] hover:bg-[#ff9f24] text-black font-bold text-[9px] sm:text-[10px] tracking-wider uppercase transition-all shadow-md hover:scale-105"
        >
          <span>PEDIR AGORA</span>
        </a>

        {/* Carrinho Trigger - Botão ampliado e com touch target ergonômico no mobile */}
        <button
          onClick={onOpenCart}
          className="relative w-10 h-10 sm:w-auto sm:h-auto p-2 sm:p-1.5 text-neutral-300 hover:text-white transition-colors focus:outline-none flex items-center justify-center rounded-full bg-neutral-900/70 sm:bg-transparent border border-neutral-800/80 sm:border-0 cursor-pointer shadow-sm"
          title="Ver Carrinho"
          aria-label={`Carrinho com ${cartCount} itens`}
        >
          <ShoppingBag className="w-5 h-5 sm:w-4 sm:h-4 text-[#f99619]" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-3.5 sm:h-3.5 bg-[#f99619] text-black text-[9px] sm:text-[8px] font-bold rounded-full flex items-center justify-center shadow">
              {cartCount}
            </span>
          )}
        </button>

        {/* Controles de Menu e Compartilhar - Alinhamento horizontal confortável no mobile com touch targets generosos, e stack vertical original no PC */}
        <div className="flex flex-row sm:flex-col items-center gap-1.5 sm:gap-2">
          {/* Compartilhar */}
          <button
            onClick={onShare}
            className="w-10 h-10 sm:w-auto sm:h-auto p-2 sm:p-1 text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 flex items-center justify-center rounded-full bg-neutral-900/70 sm:bg-transparent border border-neutral-800/80 sm:border-0 cursor-pointer shadow-sm"
            title="Compartilhar hambúrguer"
            aria-label="Compartilhar hambúrguer"
          >
            <Share2 className="w-4.5 h-4.5 sm:w-3.5 sm:h-3.5" />
          </button>

          {/* Menu Drawer Trigger */}
          <button
            onClick={onOpenMenu}
            className="w-10 h-10 sm:w-auto sm:h-auto p-2 sm:p-1 flex flex-col justify-center items-center sm:items-end gap-1.5 sm:gap-1 text-white hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 rounded-full bg-neutral-900/70 sm:bg-transparent border border-neutral-800/80 sm:border-0 cursor-pointer shadow-sm"
            aria-label="Abrir menu de navegação"
            title="Menu"
          >
            <span className="w-5 h-[2px] bg-current rounded-full" />
            <span className="w-3.5 h-[2px] bg-current rounded-full transition-all group-hover:w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
