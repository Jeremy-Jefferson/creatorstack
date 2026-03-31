import { useState } from 'react';

export default function Tooltip({
  children,
  content,
  position = 'top',
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-50 px-3 py-2 text-xs font-medium text-[#F5F7FB] bg-[#1E2230] border border-white/[0.08] rounded-lg shadow-xl whitespace-nowrap ${positions[position]}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}
