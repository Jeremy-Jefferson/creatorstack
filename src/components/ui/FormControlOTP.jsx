import { forwardRef, useState, useRef, useEffect } from 'react';
import { useForm } from './Form';

const FormControlOTP = forwardRef(({
  name,
  label,
  length = 6,
  className = '',
  ...props
}, ref) => {
  const { values, errors, touched, handleChange, handleBlur } = useForm();
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  const error = touched[name] ? errors[name] : undefined;

  useEffect(() => {
    const value = values[name] || '';
    if (value.length <= length) {
      const newOtp = Array(length).fill('');
      for (let i = 0; i < value.length; i++) {
        newOtp[i] = value[i];
      }
      setOtp(newOtp);
    }
  }, [values[name], length]);

  const handleInputChange = (index, value) => {
    if (value.length > 1) {
      value = value[0];
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    handleChange(name, newOtp.join(''));

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);
    const newOtp = Array(length).fill('');
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
    handleChange(name, newOtp.join(''));
    inputRefs.current[Math.min(pastedData.length, length - 1)]?.focus();
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
      <div className="flex items-center gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onBlur={() => handleBlur(name)}
            className={`
              w-12 h-12 text-center bg-[#171922] border border-white/[0.08] rounded-lg
              text-[#F5F7FB] text-lg font-medium
              focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 focus:border-[#6FE7E0]/40
              transition-all duration-150
              ${error ? 'border-[#EF4444] focus:ring-[#EF4444]/40 focus:border-[#EF4444]/40' : ''}
            `}
            {...props}
          />
        ))}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
});

FormControlOTP.displayName = 'FormControlOTP';

export default FormControlOTP;
