export default function FormControlCard({
  children,
  className = '',
}) {
  return (
    <div className={`bg-[#111218] border border-white/[0.08] rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
