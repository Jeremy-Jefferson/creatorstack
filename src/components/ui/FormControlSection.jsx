export default function FormControlSection({
  title,
  description,
  children,
  className = '',
}) {
  return (
    <div className={className}>
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-base font-medium text-[#F5F7FB]">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-[#7C859A] mt-0.5">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
