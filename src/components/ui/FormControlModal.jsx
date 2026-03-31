import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function FormControlModal({
  isOpen,
  onClose,
  title,
  children,
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

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-[calc(100vw-2rem)]',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        className={`relative w-full ${sizes[size]} bg-[#111218] border border-white/[0.08] rounded-xl shadow-2xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
            {title && (
              <h2 id="modal-title" className="text-lg font-semibold text-[#F5F7FB]">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#7C859A] hover:text-[#A8B0C2] hover:bg-white/[0.05] transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export function ModalFooter({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08] ${className}`}>
      {children}
    </div>
  );
}
