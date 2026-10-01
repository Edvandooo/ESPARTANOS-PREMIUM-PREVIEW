import React from 'react';
import { X, MapPin, Clock, Phone, ArrowUpRight, Instagram, ExternalLink } from 'lucide-react';
import { ESPARTANOS_INFO } from '../data/burgers';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
}) => {
  if (!isOpen) return null;

  const links = [
    { name: 'INÍCIO', id: 'inicio', desc: 'Destaques e hambúrgueres artesanais da vitrine' },
    { name: 'CARDÁPIO', id: 'cardapio', desc: 'Seleção completa dos nossos hambúrgueres nobres' },
    { name: 'BEBIDAS', id: 'bebidas', desc: 'Fanta, Coca-Cola, Chopp Pink Moon e Cerveja Império' },
    { name: 'ACOMPANHAMENTOS', id: 'acompanhamentos', desc: 'Batatas com cheddar e bacon Polenghi e onion rings' },
    { name: 'COMBOS', id: 'combos', desc: 'Combos individuais e para dois com Guaracamp' },
    { name: 'CONTATO', id: 'contato', desc: 'Endereço, WhatsApp e horário de atendimento' },
  ];

  const handleLinkClick = (id: string, name: string) => {
    onSelectTab(name);
    onClose();
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'cardapio') {
      document.getElementById('cardapio-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'bebidas') {
      document.getElementById('bebidas-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'acompanhamentos') {
      document.getElementById('cardapio-acompanhamentos')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'combos') {
      document.getElementById('cardapio-combos')?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'contato') {
      document.getElementById('contato-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg h-full bg-[#0a0a09] text-white border-l border-neutral-800 p-8 sm:p-12 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Top bar with close button */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f99619]" />
            <span className="text-xs font-bold tracking-[0.25em] text-neutral-300 uppercase">
              ESPARTANOS HAMBURGUERIA
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Navigation Links */}
        <div className="py-6 space-y-5">
          {links.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id, link.name)}
                className="w-full text-left group flex items-start justify-between py-2 transition-transform duration-200 hover:translate-x-2 focus:outline-none"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`font-display text-2xl sm:text-3xl tracking-wider uppercase transition-colors ${
                      isActive ? 'text-[#f99619]' : 'text-neutral-100 group-hover:text-[#f99619]'
                    }`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <span className="text-[9px] tracking-widest font-bold px-2 py-0.5 bg-[#f99619] text-black rounded-full uppercase">
                        ATUAL
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 mt-1 max-w-xs">{link.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
              </button>
            );
          })}
        </div>

        {/* Link direto para Pedido no Anota.ai */}
        <div className="py-4 border-t border-neutral-900">
          <a
            href={ESPARTANOS_INFO.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#f99619] hover:bg-[#ff9f24] text-neutral-950 font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>PEDIR NO ANOTA.AI</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Dados Reais da Espartanos */}
        <div className="pt-6 border-t border-neutral-900 space-y-3.5 text-xs text-neutral-400">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#f99619] shrink-0 mt-0.5" />
            <span>{ESPARTANOS_INFO.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#f99619] shrink-0" />
            <span>{ESPARTANOS_INFO.hours}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#f99619] shrink-0" />
            <a
              href={`https://wa.me/${ESPARTANOS_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {ESPARTANOS_INFO.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="w-4 h-4 text-[#f99619] shrink-0" />
            <a
              href={ESPARTANOS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {ESPARTANOS_INFO.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

