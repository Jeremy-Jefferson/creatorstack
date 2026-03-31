import { forwardRef } from 'react';
import { useForm } from './Form';

const FormControlColor = forwardRef(({
  name,
  label,
  className = '',
  ...props
}, ref) => {
  const { values, errors, touched, handleChange, handleBlur } = useForm();

  const value = values[name] || '#6FE7E0';
  const error = touched[name] ? errors[name] : undefined;

  return (
    <div className={className}>
      {label && (
        <label
          className={`block text-sm font-medium mb-1.5 ${
            error ? 'text-[#EF4444]' : 'text-[#A8B0C2]'
          }`}
        >
          {label}
        </label>
      )}
      <div className="flex items-center gap-3">
        <input
          ref={ref}
          type="color"
          name={name}
          value={value}
          onChange={(e) => handleChange(name, e.target.value)}
          onBlur={() => handleBlur(name)}
          className={`
            w-12 h-12 rounded-lg border border-white/[0.08] cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40
            ${error ? 'border-[#EF4444] focus:ring-[#EF4444]/40' : ''}
          `}
          {...props}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(name, e.target.value)}
          onBlur={() => handleBlur(name)}
          className={`
            flex-1 bg-[#171922] border border-white/[0.08] rounded-lg
            px-4 py-2.5 text-[#F5F7FB] text-sm
            placeholder:text-[#7C859A]
            focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 focus:border-[#6FE7E0]/40
            transition-all duration-150
            ${error ? 'border-[#EF4444] focus:ring-[#EF4444]/40 focus:border-[#EF4444]/40' : ''}
          `}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
});

FormControlColor.displayName = 'FormControlColor';

export default FormControlColor;
