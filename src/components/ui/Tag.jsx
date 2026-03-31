import { X } from 'lucide-react';

export default function Tag({
  children,
  onRemove,
  variant = 'default',
  className = '',
}) {
  const variants = {
    default: 'bg-[#1E2230] text-[#A8B0C2] border-white/[0.08]',
    primary: 'bg-[#6FE7E0]/10 text-[#6FE7E0] border-[#6FE7E0]/20',
    success: 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20',
    warning: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20',
    danger: 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="p-0.5 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Remove"
        >
          <X size={12} />
        </button>
      )}
    </span>
  );
}
