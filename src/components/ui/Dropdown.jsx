import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({
  trigger,
  children,
  align = 'left',
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`absolute top-full mt-2 z-50 min-w-[200px] bg-[#111218] border border-white/[0.08] rounded-xl shadow-xl py-1 ${alignmentClasses[align]}`}
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export function DropdownItem({
  children,
  icon: Icon,
  onClick,
  disabled = false,
  className = '',
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
        disabled
          ? 'text-[#7C859A] cursor-not-allowed'
          : 'text-[#A8B0C2] hover:text-[#F5F7FB] hover:bg-white/[0.05]'
      } ${className}`}
      role="menuitem"
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}

export function DropdownDivider() {
  return <div className="my-1 border-t border-white/[0.08]" />;
}
