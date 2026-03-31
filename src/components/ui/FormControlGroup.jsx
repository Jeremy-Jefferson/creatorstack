export default function FormControlGroup({
  children,
  className = '',
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
}
