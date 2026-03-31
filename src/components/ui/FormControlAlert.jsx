import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export default function FormControlAlert({
  children,
  variant = 'info',
  title,
  onClose,
  className = '',
}) {
  const variants = {
    success: 'bg-[#22C55E]/10 border-[#22C55E]/20 text-[#22C55E]',
    error: 'bg-[#EF4444]/10 border-[#EF4444]/20 text-[#EF4444]',
    warning: 'bg-[#F59E0B]/10 border-[#F59E0B]/20 text-[#F59E0B]',
    info: 'bg-[#60A5FA]/10 border-[#60A5FA]/20 text-[#60A5FA]',
  };

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const Icon = icons[variant];

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl border ${variants[variant]} ${className}`}
      role="alert"
    >
      <Icon size={20} className="flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        {title && (
          <h4 className="font-medium mb-1">{title}</h4>
        )}
        <div className="text-sm">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
