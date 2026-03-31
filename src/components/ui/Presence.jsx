import { useState, useEffect, useRef } from 'react';

export default function Presence({
  present,
  children,
  className = '',
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (present) {
        setMounted(true);
        requestAnimationFrame(() => {
          setVisible(true);
        });
      }
      return;
    }

    if (present) {
      setMounted(true);
      requestAnimationFrame(() => {
        setVisible(true);
      });
    } else {
      setVisible(false);
      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [present]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
