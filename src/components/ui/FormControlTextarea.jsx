import { forwardRef } from 'react';

const FormControlTextarea = forwardRef(({
  label,
  error,
  helperText,
  className = '',
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full bg-[#171922] border border-white/[0.08] rounded-lg
          px-4 py-2.5 text-[#F5F7FB] text-sm
          placeholder:text-[#7C859A]
          focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 focus:border-[#6FE7E0]/40
          transition-all duration-150
          disabled:opacity-50 disabled:cursor-not-allowed
          resize-none
          ${error ? 'border-[#EF4444] focus:ring-[#EF4444]/40 focus:border-[#EF4444]/40' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[#7C859A]">{helperText}</p>
      )}
    </div>
  );
});

FormControlTextarea.displayName = 'FormControlTextarea';

export default FormControlTextarea;
