import { useState, useRef, useEffect } from 'react';

export default function HoverCard({
  trigger,
  children,
  position = 'bottom',
  align = 'center',
  openDelay = 200,
  closeDelay = 200,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hoverCardRef = useRef(null);
  const triggerRef = useRef(null);
  const openTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    openTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, openDelay);
  };

  const handleMouseLeave = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  };

  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  const alignClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={triggerRef}>{trigger}</div>
      {isOpen && (
        <div
          ref={hoverCardRef}
          className={`absolute z-50 ${positionClasses[position]} ${alignClasses[align]} min-w-[200px] bg-[#111218] border border-white/[0.08] rounded-xl shadow-xl p-4`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
