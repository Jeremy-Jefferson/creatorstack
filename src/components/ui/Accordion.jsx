import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({
  items,
  allowMultiple = false,
  className = '',
}) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);

        return (
          <div
            key={index}
            className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-[#F5F7FB]">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={`text-[#7C859A] transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-[#A8B0C2]">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
