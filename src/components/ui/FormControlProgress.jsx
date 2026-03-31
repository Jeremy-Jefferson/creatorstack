export default function FormControlProgress({
  value,
  max = 100,
  size = 'md',
  showLabel = false,
  className = '',
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-[#7C859A]">Progress</span>
          <span className="text-xs text-[#A8B0C2]">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full bg-[#1E2230] rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className="h-full bg-[#6FE7E0] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
