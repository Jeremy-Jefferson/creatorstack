import { forwardRef } from 'react';
import { Hash } from 'lucide-react';
import { useForm } from './Form';

const FormControlNumber = forwardRef(({
  name,
  label,
  placeholder = '0',
  min,
  max,
  step = 1,
  className = '',
  ...props
}, ref) => {
  const { values, errors, touched, handleChange, handleBlur } = useForm();

  const value = values[name] || '';
  const error = touched[name] ? errors[name] : undefined;

  const handleInputChange = (e) => {
    const v = e.target.value;
    if (v === '' || !isNaN(v)) {
      handleChange(name, v);
    }
  };

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
      <div className="relative">
        <input
          ref={ref}
          type="number"
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={() => handleBlur(name)}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          className={`
            w-full bg-[#171922] border border-white/[0.08] rounded-lg
            px-4 py-2.5 pl-10 text-[#F5F7FB] text-sm
            placeholder:text-[#7C859A]
            focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 focus:border-[#6FE7E0]/40
            transition-all duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-[#EF4444] focus:ring-[#EF4444]/40 focus:border-[#EF4444]/40' : ''}
          `}
          {...props}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7C859A]">
          <Hash size={18} />
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
});

FormControlNumber.displayName = 'FormControlNumber';

export default FormControlNumber;
