export default function FormControlRow({
  children,
  className = '',
}) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {children}
    </div>
  );
}
