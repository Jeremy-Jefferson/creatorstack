import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  BarChart3,
  Palette,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/app/dashboard' },
  { label: 'Products', icon: Package, path: '/app/products' },
  { label: 'Orders', icon: ShoppingBag, path: '/app/orders' },
  { label: 'Customers', icon: Users, path: '/app/customers' },
  { label: 'Analytics', icon: BarChart3, path: '/app/analytics' },
  { label: 'Storefront', icon: Palette, path: '/app/storefront' },
  { label: 'Billing', icon: CreditCard, path: '/app/billing' },
  { label: 'Settings', icon: Settings, path: '/app/settings' },
];

export default function AppSidebar({ collapsed, onToggle }) {
  const location = useLocation();

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen bg-[#0B0B0F] border-r border-white/[0.08]
        flex flex-col z-40 transition-all duration-200
        ${collapsed ? 'w-[68px]' : 'w-[240px]'}
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6FE7E0] to-[#6FE7E0]/60 flex items-center justify-center flex-shrink-0">
            <span className="text-[#0B0B0F] font-bold text-sm">AV</span>
          </div>
          {!collapsed && (
            <span className="font-semibold text-[#F5F7FB] text-sm whitespace-nowrap">
              Astra Vale
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/app/dashboard' && location.pathname.startsWith(item.path));
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg
                text-sm font-medium transition-all duration-150
                ${
                  isActive
                    ? 'bg-[#6FE7E0]/10 text-[#6FE7E0]'
                    : 'text-[#7C859A] hover:text-[#A8B0C2] hover:bg-white/[0.03]'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : undefined}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="p-3 border-t border-white/[0.08]">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg
            text-[#7C859A] hover:text-[#A8B0C2] hover:bg-white/[0.03]
            transition-colors duration-150 text-sm"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
