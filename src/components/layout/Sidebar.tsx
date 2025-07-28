import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Home,
  PieChart,
  Activity,
  ChevronLeft,
  ChevronRight,
  Target,
  FileText
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { name: 'Overview', href: '/', icon: Home },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Revenue', href: '/revenue', icon: DollarSign },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Campaigns', href: '/campaigns', icon: Target },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Real-time', href: '/realtime', icon: Activity },
];

const secondaryItems = [
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className={`
      fixed left-0 top-0 h-full bg-gradient-to-b from-card via-card/95 to-card/90 
      border-r border-border/50 backdrop-blur-xl transition-all duration-300 z-40
      ${collapsed ? 'w-16' : 'w-64'}
    `}>
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <PieChart className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">
              Analytics Pro
            </span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-accent/50 transition-colors"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 custom-scrollbar overflow-y-auto h-[calc(100vh-80px)]">
        {/* Main Navigation */}
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={`
                sidebar-item relative group
                ${isActive(item.href) ? 'active' : ''}
              `}
            >
              <item.icon className={`h-5 w-5 ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground'}`} />
              {!collapsed && (
                <span className={`font-medium ${isActive(item.href) ? 'text-primary' : 'text-foreground'}`}>
                  {item.name}
                </span>
              )}
              
              {/* Active indicator */}
              {isActive(item.href) && (
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-primary rounded-r-full" />
              )}
              
              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="
                  absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground 
                  text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity
                  pointer-events-none whitespace-nowrap z-50
                ">
                  {item.name}
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-border/50"></div>

        {/* Secondary Navigation */}
        <div className="space-y-1">
          {secondaryItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={`
                sidebar-item relative group
                ${isActive(item.href) ? 'active' : ''}
              `}
            >
              <item.icon className={`h-5 w-5 ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground'}`} />
              {!collapsed && (
                <span className={`font-medium ${isActive(item.href) ? 'text-primary' : 'text-foreground'}`}>
                  {item.name}
                </span>
              )}
              
              {collapsed && (
                <div className="
                  absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground 
                  text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity
                  pointer-events-none whitespace-nowrap z-50
                ">
                  {item.name}
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Status indicator */}
        {!collapsed && (
          <div className="mt-8 p-3 rounded-lg bg-gradient-to-r from-success/10 to-success/5 border border-success/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-success">System Status</span>
            </div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </div>
        )}
      </nav>
    </div>
  );
};