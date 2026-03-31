import { forwardRef, useState } from 'react';
import { useForm } from './Form';

const FormControlColorPicker = forwardRef(({
  name,
  label,
  className = '',
  ...props
}, ref) => {
  const { values, errors, touched, handleChange, handleBlur } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const value = values[name] || '#6FE7E0';
  const error = touched[name] ? errors[name] : undefined;

  const presetColors = [
    '#6FE7E0',
    '#E1066D',
    '#60A5FA',
    '#22C55E',
    '#F59E0B',
    '#EF4444',
    '#A78BFA',
    '#F472B6',
  ];

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
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full flex items-center gap-3 bg-[#171922] border border-white/[0.08] rounded-lg
            px-4 py-2.5 text-sm text-left
            focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 focus:border-[#6FE7E0]/40
            transition-all duration-150
            ${error ? 'border-[#EF4444] focus:ring-[#EF4444]/40 focus:border-[#EF4444]/40' : ''}
          `}
        >
          <div
            className="w-6 h-6 rounded border border-white/[0.08]"
            style={{ backgroundColor: value }}
          />
          <span className="text-[#F5F7FB]">{value}</span>
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 z-50 p-3 bg-[#111218] border border-white/[0.08] rounded-xl shadow-xl">
            <div className="grid grid-cols-4 gap-2 mb-3">
              {presetColors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => {
                    handleChange(name, color);
                    setIsOpen(false);
                  }}
                  className="w-8 h-8 rounded border border-white/[0.08] hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <input
              ref={ref}
              type="color"
              name={name}
              value={value}
              onChange={(e) => handleChange(name, e.target.value)}
              onBlur={() => handleBlur(name)}
              className="w-full h-8 cursor-pointer"
              {...props}
            />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
});

FormControlColorPicker.displayName = 'FormControlColorPicker';

export default FormControlColorPicker;
