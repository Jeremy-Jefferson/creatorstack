import { forwardRef, useState } from 'react';
import { Star } from 'lucide-react';
import { useForm } from './Form';

const FormControlRating = forwardRef(({
  name,
  label,
  maxRating = 5,
  className = '',
  ...props
}, ref) => {
  const { values, errors, touched, handleChange, handleBlur } = useForm();
  const [hoverRating, setHoverRating] = useState(0);

  const value = values[name] || 0;
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
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }).map((_, index) => {
          const rating = index + 1;
          const isFilled = rating <= (hoverRating || value);

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleChange(name, rating)}
              onMouseEnter={() => setHoverRating(rating)}
              onMouseLeave={() => setHoverRating(0)}
              onBlur={() => handleBlur(name)}
              className="p-1 focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 rounded"
              aria-label={`Rate ${rating} out of ${maxRating}`}
              {...props}
            >
              <Star
                size={24}
                className={`transition-colors ${
                  isFilled
                    ? 'text-[#F59E0B] fill-[#F59E0B]'
                    : 'text-[#7C859A]'
                }`}
              />
            </button>
          );
        })}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
});

FormControlRating.displayName = 'FormControlRating';

export default FormControlRating;
