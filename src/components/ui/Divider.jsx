export default function Divider({
  orientation = 'horizontal',
  className = '',
}) {
  if (orientation === 'vertical') {
    return (
      <div
        className={`w-px h-full bg-white/[0.08] ${className}`}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  return (
    <div
      className={`h-px w-full bg-white/[0.08] ${className}`}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}
