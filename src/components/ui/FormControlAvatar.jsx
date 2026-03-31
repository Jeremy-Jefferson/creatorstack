const sizes = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-11 h-11 text-base',
  xl: 'w-14 h-14 text-lg',
};

function getInitials(name) {
  if (!name) return '?';
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getColorFromName(name) {
  const colors = [
    'bg-[#6FE7E0]/20 text-[#6FE7E0]',
    'bg-[#E1066D]/20 text-[#E1066D]',
    'bg-[#60A5FA]/20 text-[#60A5FA]',
    'bg-[#22C55E]/20 text-[#22C55E]',
    'bg-[#F59E0B]/20 text-[#F59E0B]',
    'bg-[#A78BFA]/20 text-[#A78BFA]',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function FormControlAvatar({
  name,
  src,
  size = 'md',
  className = '',
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={name || 'Avatar'}
        className={`${sizes[size]} rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`
        ${sizes[size]}
        ${getColorFromName(name || '')}
        rounded-full flex items-center justify-center font-medium
        ${className}
      `}
    >
      {getInitials(name)}
    </div>
  );
}
