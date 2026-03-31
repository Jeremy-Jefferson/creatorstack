export default function PageContainer({ children, className = '' }) {
  return (
    <div className={`p-6 max-w-[1400px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({ title, subtitle, actions, className = '' }) {
  return (
    <div className={`flex items-start justify-between mb-6 ${className}`}>
      <div>
        <h2 className="text-xl font-semibold text-[#F5F7FB]">{title}</h2>
        {subtitle && (
          <p className="text-sm text-[#7C859A] mt-0.5">{subtitle}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}

export function PageSection({ title, subtitle, children, className = '' }) {
  return (
    <section className={className}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-base font-medium text-[#F5F7FB]">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-[#7C859A] mt-0.5">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
