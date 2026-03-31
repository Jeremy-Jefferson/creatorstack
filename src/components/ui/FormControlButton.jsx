import { forwardRef } from 'react';

const variants = {
  primary: 'bg-[#6FE7E0] text-[#0B0B0F] hover:bg-[#5DD9D2] active:bg-[#4BCBC4]',
  secondary: 'bg-[#1E2230] text-[#F5F7FB] hover:bg-[#262B3A] active:bg-[#2E3446] border border-white/[0.08]',
  ghost: 'bg-transparent text-[#A8B0C2] hover:bg-white/[0.05] hover:text-[#F5F7FB]',
  danger: 'bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C]',
  outline: 'bg-transparent border border-[#6FE7E0] text-[#6FE7E0] hover:bg-[#6FE7E0]/10',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-5 py-2.5 text-base gap-2',
  icon: 'p-2',
};

const FormControlButton = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-medium rounded-lg
        transition-all duration-150 ease-out
        focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 focus:ring-offset-2 focus:ring-offset-[#0B0B0F]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
});

FormControlButton.displayName = 'FormControlButton';

export default FormControlButton;
