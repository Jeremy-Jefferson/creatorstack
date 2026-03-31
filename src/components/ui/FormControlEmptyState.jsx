import Button from './Button';

export default function FormControlEmptyState({
  icon: Icon,
  title,
  description,
  action,
  actionLabel,
  className = '',
}) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-[#1E2230] flex items-center justify-center mb-4">
          <Icon size={24} className="text-[#7C859A]" />
        </div>
      )}
      <h3 className="text-lg font-medium text-[#F5F7FB] mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-[#7C859A] max-w-sm mb-6">{description}</p>
      )}
      {action && (
        <Button onClick={action} variant="primary" size="md">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
