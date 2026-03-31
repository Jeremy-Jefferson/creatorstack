import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function FormControlBreadcrumb({
  items,
  className = '',
}) {
  return (
    <nav
      className={`flex items-center gap-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="text-[#7C859A] hover:text-[#A8B0C2] transition-colors"
        aria-label="Home"
      >
        <Home size={16} />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={14} className="text-[#7C859A]" />
          {index === items.length - 1 ? (
            <span className="text-[#F5F7FB]" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link
              to={item.href}
              className="text-[#7C859A] hover:text-[#A8B0C2] transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
