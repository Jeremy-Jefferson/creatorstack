import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  size = 'md',
  showCloseButton = true,
  className = '',
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const positions = {
    left: 'left-0',
    right: 'right-0',
  };

  const sizes = {
    sm: 'w-80',
    md: 'w-96',
    lg: 'w-[480px]',
    xl: 'w-[600px]',
    full: 'w-full',
  };

  return (
    <div
      className="fixed inset-0 z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'drawer-title' : undefined}
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        className={`fixed top-0 h-full ${positions[position]} ${sizes[size]} bg-[#111218] border-l border-white/[0.08] shadow-2xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
            {title && (
              <h2 id="drawer-title" className="text-lg font-semibold text-[#F5F7FB]">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#7C859A] hover:text-[#A8B0C2] hover:bg-white/[0.05] transition-colors"
                aria-label="Close drawer"
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}
        <div className="p-5 h-[calc(100%-73px)] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
