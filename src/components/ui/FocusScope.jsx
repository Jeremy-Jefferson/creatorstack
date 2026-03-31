import { useEffect, useRef } from 'react';

export default function FocusScope({
  children,
  trapped = false,
  autoFocus = true,
  restoreFocus = true,
  className = '',
}) {
  const containerRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (autoFocus && containerRef.current) {
      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }

    if (restoreFocus) {
      previousActiveElement.current = document.activeElement;
    }

    return () => {
      if (restoreFocus && previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [autoFocus, restoreFocus]);

  useEffect(() => {
    if (!trapped || !containerRef.current) return;

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [trapped]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
