import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSidebar from '../components/layout/AppSidebar';
import AppHeader from '../components/layout/AppHeader';

export default function AppShell() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      <AppSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div
        className={`transition-all duration-200 ${
          sidebarCollapsed ? 'ml-[68px]' : 'ml-[240px]'
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
