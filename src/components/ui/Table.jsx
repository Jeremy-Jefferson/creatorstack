import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function Table({
  columns,
  data,
  sortable = false,
  className = '',
}) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    if (!sortable) return;

    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const sortedData = sortable && sortConfig.key
    ? [...data].sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      })
    : data;

  return (
    <div className={`bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/[0.08]">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3 ${
                  sortable && column.sortable !== false
                    ? 'cursor-pointer hover:text-[#A8B0C2]'
                    : ''
                }`}
                onClick={() => column.sortable !== false && handleSort(column.key)}
              >
                <div className="flex items-center gap-1">
                  {column.label}
                  {sortable && column.sortable !== false && sortConfig.key === column.key && (
                    sortConfig.direction === 'asc' ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.05]">
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-white/[0.02] transition-colors">
              {columns.map((column) => (
                <td key={column.key} className="px-5 py-4">
                  {column.render
                    ? column.render(row[column.key], row)
                    : <span className="text-sm text-[#A8B0C2]">{row[column.key]}</span>
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
