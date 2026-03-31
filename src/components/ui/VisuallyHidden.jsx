export default function VisuallyHidden({
  children,
  as: Component = 'span',
  className = '',
}) {
  return (
    <Component
      className={`absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 ${className}`}
      style={{
        clip: 'rect(0, 0, 0, 0)',
        clipPath: 'inset(50%)',
      }}
    >
      {children}
    </Component>
  );
}
