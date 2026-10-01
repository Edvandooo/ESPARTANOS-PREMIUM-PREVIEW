import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, ExternalLink } from 'lucide-react';
import { CartItem } from '../types/burger';
import { ESPARTANOS_INFO } from '../data/burgers';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (burgerId: string, delta: number) => void;
  onRemoveItem: (burgerId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.burger.price * item.quantity, 0);
  const total = subtotal;

  const handleCheckout = () => {
    // Redireciona para o link oficial de pedidos da Espartanos no Anota.ai
    window.open(ESPARTANOS_INFO.orderUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md h-full bg-[#0e0d0c] text-white border-l border-neutral-800 p-6 flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-300"
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#f99619]" />
            <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase text-white">SEU CARRINHO</h3>
            <span className="text-xs text-neutral-400">
              ({items.reduce((sum, i) => sum + i.quantity, 0)} {items.reduce((sum, i) => sum + i.quantity, 0) === 1 ? 'item' : 'itens'})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto py-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <ShoppingBag className="w-12 h-12 text-neutral-700 mb-3" />
              <p className="text-neutral-300 text-sm font-semibold">Seu carrinho está vazio.</p>
              <p className="text-neutral-500 text-xs mt-1.5 max-w-[220px]">
                Escolha um de nossos hambúrgueres artesanais para adicionar ao seu pedido.
              </p>
              <button
                onClick={onClose}
                className="mt-5 px-4 py-2 rounded-full border border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white hover:border-[#f99619] transition-colors"
              >
                Ver cardápio
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemName = 'name' in item.burger 
                ? item.burger.name 
                : `${item.burger.titleLine1} ${item.burger.titleLine2}`;
              const itemImage = item.burger.image;

              return (
                <div
                  key={item.burger.id}
                  className="flex items-center gap-3.5 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800/80"
                >
                  {itemImage ? (
                    <img
                      src={itemImage}
                      alt={itemName}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-contain rounded-lg bg-black/40 p-1 shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-neutral-800 flex items-center justify-center text-[#f99619] font-bold text-xs shrink-0">
                      BURGER
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate uppercase">
                      {itemName}
                    </h4>
                    <p className="text-xs text-neutral-400 font-medium mt-0.5 tabular-nums">
                      R$ {item.burger.price.toFixed(2).replace('.', ',')} cada
                    </p>
                    
                    {/* Controle de Quantidade */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.burger.id, -1)}
                        className="w-6 h-6 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold text-white px-1.5 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.burger.id, 1)}
                        className="w-6 h-6 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.burger.id)}
                      className="text-neutral-500 hover:text-red-400 p-1 transition-colors"
                      aria-label="Remover item"
                      title="Remover"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs sm:text-sm font-bold text-[#f99619] tabular-nums">
                      R$ {(item.burger.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Rodapé & Finalizar Pedido */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-white tabular-nums">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400 text-[11px]">
                <span>Entrega</span>
                <span className="text-neutral-300">Calculada no pedido</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-800/80 text-sm font-bold text-white">
                <span>Total Estimado</span>
                <span className="text-[#f99619] text-base tabular-nums">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-[#f99619] hover:bg-[#ff9f24] text-neutral-950 font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.01]"
              >
                <span>FINALIZAR NO ANOTA.AI</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                onClick={onClearCart}
                className="w-full py-2 text-neutral-500 hover:text-neutral-300 text-[11px] font-medium text-center transition-colors"
              >
                Limpar carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

