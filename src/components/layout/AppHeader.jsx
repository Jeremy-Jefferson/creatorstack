import { Bell, Search, LogOut, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../ui';

export default function AppHeader({ title, subtitle }) {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 border-b border-white/[0.08] bg-[#0B0B0F]/80 backdrop-blur-md sticky top-0 z-30">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left side */}
        <div>
          <h1 className="text-lg font-semibold text-[#F5F7FB]">{title}</h1>
          {subtitle && (
            <p className="text-sm text-[#7C859A]">{subtitle}</p>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-[#171922] border border-white/[0.08] rounded-lg px-3 py-2">
            <Search size={16} className="text-[#7C859A]" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-[#F5F7FB] placeholder:text-[#7C859A] focus:outline-none w-40"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-[#7C859A] hover:text-[#A8B0C2] transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full" />
          </button>

          {/* User menu */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-[#F5F7FB]">{user?.name || 'User'}</p>
              <p className="text-xs text-[#7C859A]">{user?.email || ''}</p>
            </div>
            <Avatar name={user?.name || 'User'} size="sm" />
            <button
              onClick={logout}
              className="p-2 text-[#7C859A] hover:text-[#EF4444] transition-colors"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
