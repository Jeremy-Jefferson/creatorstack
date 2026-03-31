import { useEffect, useRef } from 'react';

export default function DismissableLayer({
  children,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  className = '',
}) {
  const layerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onEscapeKeyDown?.(e);
      }
    };

    const handlePointerDown = (e) => {
      if (layerRef.current && !layerRef.current.contains(e.target)) {
        onPointerDownOutside?.(e);
      }
    };

    const handleFocus = (e) => {
      if (layerRef.current && !layerRef.current.contains(e.target)) {
        onFocusOutside?.(e);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('focusin', handleFocus);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('focusin', handleFocus);
    };
  }, [onEscapeKeyDown, onPointerDownOutside, onFocusOutside]);

  return (
    <div ref={layerRef} className={className}>
      {children}
    </div>
  );
}
