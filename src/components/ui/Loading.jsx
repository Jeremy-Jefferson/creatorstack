import { Loader2 } from 'lucide-react';

export function Spinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <Loader2
      size={size === 'sm' ? 16 : size === 'md' ? 24 : size === 'lg' ? 32 : 48}
      className={`animate-spin text-[#6FE7E0] ${sizeClasses[size]} ${className}`}
    />
  );
}

export function LoadingOverlay({ message = 'Loading...' }) {
  return (
    <div className="fixed inset-0 bg-[#0B0B0F]/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" />
        <p className="text-[#A8B0C2] text-sm">{message}</p>
      </div>
    </div>
  );
}

export function LoadingCard() {
  return (
    <div className="bg-[#111218] border border-white/[0.08] rounded-xl p-6 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#1E2230]" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-[#1E2230] rounded w-3/4" />
          <div className="h-3 bg-[#1E2230] rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}

export function LoadingTable({ rows = 5 }) {
  return (
    <div className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden">
      <div className="animate-pulse">
        {/* Header */}
        <div className="border-b border-white/[0.08] px-5 py-3">
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-3 bg-[#1E2230] rounded flex-1" />
            ))}
          </div>
        </div>
        {/* Rows */}
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="border-b border-white/[0.05] px-5 py-4">
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="h-3 bg-[#1E2230] rounded flex-1" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Loading({ type = 'spinner', ...props }) {
  switch (type) {
    case 'overlay':
      return <LoadingOverlay {...props} />;
    case 'card':
      return <LoadingCard {...props} />;
    case 'table':
      return <LoadingTable {...props} />;
    case 'spinner':
    default:
      return <Spinner {...props} />;
  }
}
