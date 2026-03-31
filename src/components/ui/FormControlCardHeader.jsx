export default function FormControlCardHeader({
  title,
  description,
  actions,
  className = '',
}) {
  return (
    <div className={`flex items-start justify-between mb-4 ${className}`}>
      <div>
        {title && (
          <h3 className="text-base font-medium text-[#F5F7FB]">{title}</h3>
        )}
        {description && (
          <p className="text-sm text-[#7C859A] mt-0.5">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
