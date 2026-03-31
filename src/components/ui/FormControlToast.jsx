import { useState, createContext, useRef, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const toastIdRef = useRef(0);

  const addToast = useCallback((message, type = 'info', duration = 5000) => {
    const id = toastIdRef.current++;
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, onRemove }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

function Toast({ toast, onRemove }) {
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

  const Icon = icons[toast.type] || Info;

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg min-w-[300px] max-w-[400px] ${colors[toast.type]}`}
      role="alert"
    >
      <Icon size={18} className="flex-shrink-0" />
      <p className="flex-1 text-sm">{toast.message}</p>
      <button
        onClick={() => onRemove(toast.id)}
        className="p-1 rounded hover:bg-white/10 transition-colors"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export default Toast;
