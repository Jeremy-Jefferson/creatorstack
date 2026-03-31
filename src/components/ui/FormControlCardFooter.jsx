export default function FormControlCardFooter({
  children,
  className = '',
}) {
  return (
    <div className={`flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08] mt-4 ${className}`}>
      {children}
    </div>
  );
}
