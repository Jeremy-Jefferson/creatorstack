import { forwardRef } from 'react';
import { Search } from 'lucide-react';
import { useForm } from './Form';

const FormControlSearch = forwardRef(({
  name,
  label,
  placeholder = 'Search...',
  className = '',
  ...props
}, ref) => {
  const { values, errors, touched, handleChange, handleBlur } = useForm();

  const value = values[name] || '';
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
      <div className="relative">
        <input
          ref={ref}
          type="search"
          name={name}
          value={value}
          onChange={(e) => handleChange(name, e.target.value)}
          onBlur={() => handleBlur(name)}
          placeholder={placeholder}
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
          <Search size={18} />
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
});

FormControlSearch.displayName = 'FormControlSearch';

export default FormControlSearch;
