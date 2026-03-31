import { forwardRef } from 'react';
import { useForm } from './Form';

const FormControlSlider = forwardRef(({
  name,
  label,
  min = 0,
  max = 100,
  step = 1,
  className = '',
  ...props
}, ref) => {
  const { values, errors, touched, handleChange, handleBlur } = useForm();

  const value = values[name] || min;
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
      <div className="flex items-center gap-4">
        <input
          ref={ref}
          type="range"
          name={name}
          value={value}
          onChange={(e) => handleChange(name, Number(e.target.value))}
          onBlur={() => handleBlur(name)}
          min={min}
          max={max}
          step={step}
          className="flex-1 h-2 bg-[#1E2230] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6FE7E0] [&::-webkit-slider-thumb]:cursor-pointer"
          {...props}
        />
        <span className="text-sm text-[#A8B0C2] w-12 text-right">{value}</span>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
});

FormControlSlider.displayName = 'FormControlSlider';

export default FormControlSlider;
