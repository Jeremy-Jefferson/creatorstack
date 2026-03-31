import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FormControlCollapsible({
  trigger,
  children,
  defaultOpen = false,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
        aria-expanded={isOpen}
      >
        {trigger}
        <ChevronDown
          size={18}
          className={`text-[#7C859A] transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );
}
