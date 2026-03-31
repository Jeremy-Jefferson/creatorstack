export default function FormControlCol({
  children,
  span = 1,
  className = '',
}) {
  const spans = {
    1: 'flex-1',
    2: 'flex-[2]',
    3: 'flex-[3]',
    4: 'flex-[4]',
    5: 'flex-[5]',
    6: 'flex-[6]',
  };

  return (
    <div className={`${spans[span] || 'flex-1'} ${className}`}>
      {children}
    </div>
  );
}
