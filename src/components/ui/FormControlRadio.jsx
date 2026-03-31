import { forwardRef } from 'react';

const FormControlRadio = forwardRef(({
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
            type="radio"
            className="peer sr-only"
            {...props}
          />
          <div className="w-5 h-5 rounded-full border border-white/[0.08] bg-[#171922] peer-checked:border-[#6FE7E0] peer-focus:ring-2 peer-focus:ring-[#6FE7E0]/40 transition-all">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#6FE7E0] opacity-0 peer-checked:opacity-100 transition-opacity" />
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

FormControlRadio.displayName = 'FormControlRadio';

export default FormControlRadio;
