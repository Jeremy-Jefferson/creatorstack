import { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  helperText,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'text',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7C859A]">
            <Icon size={18} />
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={`
            w-full bg-[#171922] border border-white/[0.08] rounded-lg
            px-4 py-2.5 text-[#F5F7FB] text-sm
            placeholder:text-[#7C859A]
            focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 focus:border-[#6FE7E0]/40
            transition-all duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            ${Icon && iconPosition === 'left' ? 'pl-10' : ''}
            ${Icon && iconPosition === 'right' ? 'pr-10' : ''}
            ${error ? 'border-[#EF4444] focus:ring-[#EF4444]/40 focus:border-[#EF4444]/40' : ''}
            ${className}
          `}
          {...props}
        />
        {Icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7C859A]">
            <Icon size={18} />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[#7C859A]">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
