import { forwardRef } from 'react';

const Toggle = forwardRef(({
  label,
  error,
  helperText,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={className}>
      <label className="flex items-start gap-3 cursor-pointer">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />
          <div className="w-11 h-6 rounded-full bg-[#1E2230] border border-white/[0.08] peer-checked:bg-[#6FE7E0] peer-checked:border-[#6FE7E0] peer-focus:ring-2 peer-focus:ring-[#6FE7E0]/40 transition-all">
            <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-[#7C859A] peer-checked:bg-[#0B0B0F] peer-checked:translate-x-5 transition-all" />
          </div>
        </div>
        {label && (
          <span className="text-sm text-[#A8B0C2]">{label}</span>
        )}
      </label>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[#7C859A]">{helperText}</p>
      )}
    </div>
  );
});

Toggle.displayName = 'Toggle';

export default Toggle;
