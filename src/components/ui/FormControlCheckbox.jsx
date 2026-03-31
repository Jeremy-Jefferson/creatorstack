import { forwardRef } from 'react';
import { Check } from 'lucide-react';

const FormControlCheckbox = forwardRef(({
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
          <div className="w-5 h-5 rounded border border-white/[0.08] bg-[#171922] peer-checked:bg-[#6FE7E0] peer-checked:border-[#6FE7E0] peer-focus:ring-2 peer-focus:ring-[#6FE7E0]/40 transition-all">
            <Check
              size={14}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0B0B0F] opacity-0 peer-checked:opacity-100 transition-opacity"
            />
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

FormControlCheckbox.displayName = 'FormControlCheckbox';

export default FormControlCheckbox;
