import { Bell, Search, User, Calendar, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface NavbarProps {
  sidebarCollapsed: boolean;
}

export const Navbar = ({ sidebarCollapsed }: NavbarProps) => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className={`
      fixed top-0 right-0 h-16 bg-card/80 backdrop-blur-xl border-b border-border/50 
      transition-all duration-300 z-30 flex items-center justify-between px-6
      ${sidebarCollapsed ? 'left-16' : 'left-64'}
    `}>
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">{today}</p>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search analytics, users, campaigns..."
            className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Date Range Picker */}
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" />
          Last 30 days
        </Button>

        {/* Filter */}
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4" />
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button variant="outline" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </Button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border/50">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};