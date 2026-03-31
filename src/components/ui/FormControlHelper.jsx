export default function FormControlHelper({
  children,
  className = '',
}) {
  return (
    <p className={`mt-1.5 text-sm text-[#7C859A] ${className}`}>
      {children}
    </p>
  );
}
