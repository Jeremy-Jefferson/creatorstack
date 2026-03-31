import { useState } from 'react';

export default function FormControlTabs({
  tabs,
  defaultTab,
  onChange,
  className = '',
}) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={className}>
      <div className="flex border-b border-white/[0.08]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              relative px-4 py-3 text-sm font-medium transition-colors duration-150
              ${
                activeTab === tab.id
                  ? 'text-[#6FE7E0]'
                  : 'text-[#7C859A] hover:text-[#A8B0C2]'
              }
            `}
          >
            <span className="flex items-center gap-2">
              {tab.icon && <tab.icon size={16} />}
              {tab.label}
              {tab.count !== undefined && (
                <span className="text-xs text-[#7C859A]">({tab.count})</span>
              )}
            </span>
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6FE7E0] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
