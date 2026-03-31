export default function FormControlActions({
  children,
  className = '',
}) {
  return (
    <div className={`flex items-center justify-end gap-3 pt-4 ${className}`}>
      {children}
    </div>
  );
}
