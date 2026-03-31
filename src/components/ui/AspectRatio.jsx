export default function AspectRatio({
  ratio = 1,
  children,
  className = '',
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}
