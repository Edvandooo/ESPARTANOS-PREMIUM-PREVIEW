import React, { useState } from 'react';
import { ShoppingBag, ExternalLink, Plus, Check, Clock, MapPin, Phone, Instagram, Flame, Award } from 'lucide-react';
import { MenuItem, BurgerItem } from '../types/burger';
import { MENU_PRODUCTS, ESPARTANOS_INFO } from '../data/burgers';
import { EspartanosLogo } from './EspartanosLogo';

interface CardapioSectionProps {
  onAddToCart: (burger: BurgerItem | MenuItem) => void;
}

export const CardapioSection: React.FC<CardapioSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'artesanais' | 'acompanhamentos' | 'combos'>('todos');
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  const filteredItems = activeCategory === 'todos' 
    ? MENU_PRODUCTS 
    : MENU_PRODUCTS.filter(item => item.category === activeCategory);

  const artesanais = MENU_PRODUCTS.filter(item => item.category === 'artesanais');
  const acompanhamentos = MENU_PRODUCTS.filter(item => item.category === 'acompanhamentos');
  const combos = MENU_PRODUCTS.filter(item => item.category === 'combos');

  return (
    <section id="cardapio-section" className="relative w-full bg-[#080706] text-white pt-20 pb-28 px-4 sm:px-8 lg:px-14 border-t border-neutral-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_rgba(249,150,25,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] font-bold tracking-[0.25em] text-[#f99619] uppercase mb-4 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-[#f99619]" />
            <span>CARDÁPIO OFICIAL ESPARTANOS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display leading-tight mb-4">
            RECEITAS NOBRES & SABOR ARTESANAL
          </h2>
          
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Blends de 90g e 180g preparados na chapa, queijos nobres como Gouda, Provolone e Gorgonzola, bacon fatiado crocante e molhos artesanais exclusivos.
          </p>

          {/* Categorias Filtro */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: 'todos', label: 'TODOS OS PRODUTOS' },
              { id: 'artesanais', label: 'HAMBÚRGUERES ARTESANAIS' },
              { id: 'acompanhamentos', label: 'ACOMPANHAMENTOS' },
              { id: 'combos', label: 'COMBOS' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all focus:outline-none ${
                  activeCategory === cat.id
                    ? 'bg-[#f99619] text-black shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ESTRUTURA EDITORIAL INSPIRADA NA REFERÊNCIA */}
        {activeCategory === 'todos' ? (
          <div className="space-y-16">
            
            {/* Bloco 1: Hambúrgueres Artesanais (Destaque Principal) */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-neutral-800/80">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f99619]" />
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide font-display text-white">
                    HAMBÚRGUERES ARTESANAIS
                  </h3>
                  <span className="text-xs text-neutral-500 font-semibold">({artesanais.length} opções)</span>
                </div>
                <a
                  href={ESPARTANOS_INFO.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#f99619] hover:underline font-semibold tracking-wider uppercase"
                >
                  <span>Pedir no Anota.ai</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Grid 2 colunas estilo cardápio gourmet */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {artesanais.map((item) => {
                  const isJustAdded = addedId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="group relative bg-[#0f0e0d] border border-neutral-800/80 hover:border-[#f99619]/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-4">
                        {/* Imagem real se disponível */}
                        {item.image && (
                          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl bg-black/40 flex items-center justify-center p-1 relative overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#f99619] transition-colors">
                                {item.name}
                              </h4>
                              {item.badge && (
                                <span className="text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-[#f99619] border border-[#f99619]/30">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-base sm:text-lg font-bold text-[#f99619] shrink-0 tabular-nums">
                              R$ {item.price.toFixed(2).replace('.', ',')}
                            </span>
                          </div>

                          <p className="text-xs text-neutral-400 font-normal leading-relaxed mb-3">
                            {item.description}
                          </p>

                          {/* Ingredientes tags */}
                          {item.ingredients && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {item.ingredients.map((ing, idx) => (
                                <span
                                  key={idx}
                                  className="text-[9px] text-neutral-400 bg-neutral-900/90 px-2 py-0.5 rounded-md border border-neutral-800"
                                >
                                  {ing}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Botões de Ação */}
                      <div className="flex items-center justify-between pt-3 mt-2 border-t border-neutral-900 gap-3">
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                          Espartanos Premium
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleAdd(item)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-[10px] tracking-wider uppercase transition-colors"
                            aria-label={`Adicionar ${item.name} ao carrinho`}
                          >
                            {isJustAdded ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span>Adicionado</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3 h-3 text-[#f99619]" />
                                <span>Adicionar</span>
                              </>
                            )}
                          </button>

                          <a
                            href={ESPARTANOS_INFO.orderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#f99619] hover:bg-[#ff9f24] text-black font-bold text-[10px] tracking-wider uppercase transition-all shadow-sm"
                          >
                            <span>Pedir</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bloco 2 & 3: Acompanhamentos e Combos em 2 colunas organizadas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
              
              {/* Coluna Acompanhamentos */}
              <div id="cardapio-acompanhamentos" className="bg-[#0f0e0d] border border-neutral-800/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#f99619]" />
                    <h3 className="text-xl font-bold uppercase tracking-wide font-display text-white">
                      ACOMPANHAMENTOS
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">McCain & Polenghi</span>
                </div>

                <div className="space-y-6">
                  {acompanhamentos.map((item) => {
                    const isJustAdded = addedId === item.id;
                    return (
                      <div key={item.id} className="group border-b border-neutral-900 pb-5 last:border-0 last:pb-0">
                        <div className="flex items-baseline justify-between gap-3 mb-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-[#f99619] transition-colors uppercase">
                            {item.name}
                          </h4>
                          <span className="text-sm font-bold text-[#f99619] tabular-nums shrink-0">
                            R$ {item.price.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                        {item.serves && (
                          <span className="inline-block text-[9px] text-[#f99619] font-bold uppercase mb-1">
                            {item.serves}
                          </span>
                        )}
                        <p className="text-xs text-neutral-400 mb-3">{item.description}</p>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleAdd(item)}
                            className="px-3 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-[9px] uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                          >
                            {isJustAdded ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Plus className="w-2.5 h-2.5 text-[#f99619]" />}
                            <span>{isJustAdded ? 'Adicionado' : 'Adicionar ao carrinho'}</span>
                          </button>
                          <a
                            href={ESPARTANOS_INFO.orderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[9px] font-bold text-neutral-400 hover:text-white uppercase tracking-wider inline-flex items-center gap-0.5"
                          >
                            <span>Pedir no Anota.ai</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Coluna Combos */}
              <div id="cardapio-combos" className="bg-[#0f0e0d] border border-neutral-800/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#f99619]" />
                    <h3 className="text-xl font-bold uppercase tracking-wide font-display text-white">
                      COMBOS ESPECIAIS
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#f99619] font-bold">Com Guaracamp</span>
                </div>

                <div className="space-y-6">
                  {combos.map((item) => {
                    const isJustAdded = addedId === item.id;
                    return (
                      <div key={item.id} className="group border-b border-neutral-900 pb-5 last:border-0 last:pb-0">
                        <div className="flex items-baseline justify-between gap-3 mb-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#f99619] transition-colors uppercase">
                              {item.name}
                            </h4>
                            {item.badge && (
                              <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-[#f99619] border border-[#f99619]/30">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-bold text-[#f99619] tabular-nums shrink-0">
                            R$ {item.price.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mb-3">{item.description}</p>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleAdd(item)}
                            className="px-3 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-[9px] uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                          >
                            {isJustAdded ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Plus className="w-2.5 h-2.5 text-[#f99619]" />}
                            <span>{isJustAdded ? 'Adicionado' : 'Adicionar ao carrinho'}</span>
                          </button>
                          <a
                            href={ESPARTANOS_INFO.orderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[9px] font-bold text-neutral-400 hover:text-white uppercase tracking-wider inline-flex items-center gap-0.5"
                          >
                            <span>Pedir no Anota.ai</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Grid Filtrada */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isJustAdded = addedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#0f0e0d] border border-neutral-800/80 hover:border-[#f99619]/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {item.image && (
                      <div className="w-full h-36 rounded-xl bg-black/40 flex items-center justify-center p-2 mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-white uppercase">{item.name}</h4>
                      <span className="text-base font-bold text-[#f99619] tabular-nums">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    {item.badge && (
                      <span className="inline-block text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#f99619]/15 text-[#f99619] border border-[#f99619]/30 mb-2">
                        {item.badge}
                      </span>
                    )}
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-4 border-t border-neutral-900">
                    <button
                      onClick={() => handleAdd(item)}
                      className="px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-[10px] uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                    >
                      {isJustAdded ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3 text-[#f99619]" />}
                      <span>{isJustAdded ? 'Adicionado' : 'Adicionar'}</span>
                    </button>
                    <a
                      href={ESPARTANOS_INFO.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-full bg-[#f99619] hover:bg-[#ff9f24] text-black font-bold text-[10px] uppercase tracking-wider transition-all inline-flex items-center gap-1"
                    >
                      <span>Pedir</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA HERO BANNER PARA PEDIDOS REAIS NO ANOTA.AI */}
        <div className="mt-20 relative rounded-3xl bg-gradient-to-r from-neutral-950 via-[#141210] to-neutral-950 border border-neutral-800/80 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,150,25,0.1)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <EspartanosLogo className="h-20 sm:h-24 w-auto mx-auto mb-2" />

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight font-display text-white">
              BATEU A FOME? FAÇA SEU PEDIDO AGORA
            </h3>

            <p className="text-neutral-400 text-xs sm:text-sm">
              Peça online pelo nosso cardápio oficial no Anota.ai com entrega rápida e quentinha em sua casa.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={ESPARTANOS_INFO.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#f99619] hover:bg-[#ff9f24] text-black font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span>PEDIR AGORA NO ANOTA.AI</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href={`https://wa.me/${ESPARTANOS_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all border border-neutral-700 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#f99619]" />
                <span>WhatsApp: {ESPARTANOS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* RODAPÉ EDITORIAL COM DADOS REAIS DA ESPARTANOS */}
        <footer id="contato-section" className="mt-20 pt-10 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-neutral-400">
          <div className="space-y-3 md:col-span-1">
            <EspartanosLogo className="h-16 w-auto mb-1" />
            <p className="text-neutral-400 leading-relaxed">
              Hamburgueria artesanal com foco na qualidade dos ingredientes nobres e carnes no ponto certo.
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f99619]" />
              <span>ENDEREÇO</span>
            </h4>
            <p className="text-neutral-400 leading-relaxed">
              {ESPARTANOS_INFO.address}
            </p>
            <p className="text-neutral-500 text-[11px]">Vila Nova, Rio de Janeiro - RJ</p>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#f99619]" />
              <span>HORÁRIO</span>
            </h4>
            <p className="text-neutral-400 leading-relaxed font-semibold text-white">
              {ESPARTANOS_INFO.hours}
            </p>
            <p className="text-neutral-500 text-[11px]">Aberto todos os dias da semana para delivery e balcão</p>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#f99619]" />
              <span>CONTATO & REDES</span>
            </h4>
            <p>
              <a
                href={`https://wa.me/${ESPARTANOS_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors block text-white font-semibold"
              >
                {ESPARTANOS_INFO.phone}
              </a>
            </p>
            <p>
              <a
                href={ESPARTANOS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#f99619] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#f99619]" />
                <span>{ESPARTANOS_INFO.instagramHandle}</span>
              </a>
            </p>
            <p className="pt-1">
              <a
                href={ESPARTANOS_INFO.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#f99619] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Acessar cardápio digital</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </footer>

        {/* Linha final de copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-900/60 text-center text-[10px] text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Espartanos Hamburgueria · Todos os direitos reservados</span>
          <span>Estrada Santa Maria, 497 · Rio de Janeiro - RJ</span>
        </div>

      </div>
    </section>
  );
};
