export default function FormControlTabPanel({
  children,
  tabId,
  activeTab,
  className = '',
}) {
  if (tabId !== activeTab) return null;
  return <div className={`py-4 ${className}`}>{children}</div>;
}
