import React, { useState } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { BurgerItem } from '../types/burger';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  burger: BurgerItem;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, burger }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${currentUrl}#${burger.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-white shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#f99619]" />
            <h3 className="font-bold text-sm tracking-wider uppercase">COMPARTILHAR</h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1"
            aria-label="Fechar compartilhamento"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-4 space-y-3">
          <p className="text-xs text-neutral-300">
            Compartilhe <span className="font-bold text-white">{burger.titleLine1} {burger.titleLine2}</span> com seus amigos.
          </p>

          <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-lg border border-neutral-800">
            <input
              type="text"
              readOnly
              value={`${currentUrl}#${burger.id}`}
              className="bg-transparent text-xs text-neutral-400 flex-1 outline-none truncate"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-[#f99619] hover:bg-[#ffa32b] text-neutral-950 font-bold text-[10px] tracking-wider rounded-md transition-colors flex items-center gap-1 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>COPIADO</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>COPIAR</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
