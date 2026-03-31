import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const colors = {
  success: 'bg-[#22C55E]/10 border-[#22C55E]/20 text-[#22C55E]',
  error: 'bg-[#EF4444]/10 border-[#EF4444]/20 text-[#EF4444]',
  warning: 'bg-[#F59E0B]/10 border-[#F59E0B]/20 text-[#F59E0B]',
  info: 'bg-[#60A5FA]/10 border-[#60A5FA]/20 text-[#60A5FA]',
};

export default function Toast() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => {
        const Icon = icons[toast.type] || Info;
        return (
          <div
            key={toast.id}
            className={`flex items-center gap-3 p-4 rounded-lg border ${colors[toast.type] || colors.info} shadow-lg max-w-sm animate-in slide-in-from-right-full`}
          >
            <Icon size={20} className="flex-shrink-0" />
            <p className="flex-1 text-sm">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
