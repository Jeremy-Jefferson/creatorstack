export default function FormControlCardContent({
  children,
  className = '',
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
