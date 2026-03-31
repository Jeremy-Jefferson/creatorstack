import { useState, useEffect, useRef } from 'react';
import { Search, Command as CommandIcon } from 'lucide-react';
import Kbd from './Kbd';

export default function Command({
  isOpen,
  onClose,
  placeholder = 'Type a command or search...',
  children,
  className = '',
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        className={`relative w-full max-w-xl bg-[#111218] border border-white/[0.08] rounded-xl shadow-2xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08]">
          <Search size={18} className="text-[#7C859A]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-[#F5F7FB] text-sm placeholder:text-[#7C859A] focus:outline-none"
          />
          <Kbd>ESC</Kbd>
        </div>
        <div className="max-h-[300px] overflow-y-auto p-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export function CommandGroup({ label, children, className = '' }) {
  return (
    <div className={className}>
      {label && (
        <div className="px-3 py-2 text-xs font-medium text-[#7C859A] uppercase tracking-wider">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

export function CommandItem({
  icon: Icon,
  label,
  shortcut,
  onSelect,
  className = '',
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left text-[#A8B0C2] hover:text-[#F5F7FB] hover:bg-white/[0.05] transition-colors ${className}`}
    >
      {Icon && <Icon size={16} />}
      <span className="flex-1">{label}</span>
      {shortcut && (
        <div className="flex items-center gap-1">
          {shortcut.map((key, index) => (
            <Kbd key={index}>{key}</Kbd>
          ))}
        </div>
      )}
    </button>
  );
}
