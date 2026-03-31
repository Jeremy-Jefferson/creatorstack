export default function ScrollArea({
  children,
  className = '',
  maxHeight = '400px',
}) {
  return (
    <div
      className={`overflow-y-auto ${className}`}
      style={{ maxHeight }}
    >
      {children}
    </div>
  );
}
