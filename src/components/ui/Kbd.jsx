export default function Kbd({
  children,
  className = '',
}) {
  return (
    <kbd
      className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#1E2230] text-[#7C859A] text-xs font-mono ${className}`}
    >
      {children}
    </kbd>
  );
}
