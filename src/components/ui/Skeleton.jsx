export default function Skeleton({
  className = '',
  variant = 'rectangular',
}) {
  const variants = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded',
  };

  return (
    <div
      className={`animate-pulse bg-[#1E2230] ${variants[variant]} ${className}`}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-[#111218] border border-white/[0.08] rounded-xl p-5">
      <Skeleton className="h-4 w-24 mb-3" variant="text" />
      <Skeleton className="h-8 w-32 mb-2" variant="text" />
      <Skeleton className="h-3 w-20" variant="text" />
    </div>
  );
}

export function SkeletonTable({ rows = 5 }) {
  return (
    <div className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden">
      <div className="border-b border-white/[0.08] px-5 py-3">
        <Skeleton className="h-4 w-full" variant="text" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="border-b border-white/[0.05] px-5 py-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10" variant="circular" />
            <div className="flex-1">
              <Skeleton className="h-4 w-32 mb-2" variant="text" />
              <Skeleton className="h-3 w-24" variant="text" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
