export default function FormControlSpinner({
  size = 'md',
  className = '',
}) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <div
      className={`${sizes[size]} animate-spin rounded-full border-2 border-[#6FE7E0]/20 border-t-[#6FE7E0] ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
