const variants = {
  default: 'bg-[#1E2230] text-[#A8B0C2] border-white/[0.08]',
  primary: 'bg-[#6FE7E0]/10 text-[#6FE7E0] border-[#6FE7E0]/20',
  success: 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20',
  warning: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20',
  danger: 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20',
  info: 'bg-[#60A5FA]/10 text-[#60A5FA] border-[#60A5FA]/20',
  magenta: 'bg-[#E1066D]/10 text-[#E1066D] border-[#E1066D]/20',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1 text-sm',
};

export default function FormControlBadge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dot = false,
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-full border
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'success'
              ? 'bg-[#22C55E]'
              : variant === 'warning'
              ? 'bg-[#F59E0B]'
              : variant === 'danger'
              ? 'bg-[#EF4444]'
              : variant === 'info'
              ? 'bg-[#60A5FA]'
              : variant === 'primary'
              ? 'bg-[#6FE7E0]'
              : variant === 'magenta'
              ? 'bg-[#E1066D]'
              : 'bg-[#7C859A]'
          }`}
        />
      )}
      {children}
    </span>
  );
}
