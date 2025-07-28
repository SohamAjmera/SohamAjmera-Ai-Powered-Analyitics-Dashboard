import { ReactNode } from 'react';
import { MoreHorizontal, Download, Maximize2 } from 'lucide-react';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  actions?: ReactNode;
  fullHeight?: boolean;
}

export const ChartCard = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  actions,
  fullHeight = false 
}: ChartCardProps) => {
  return (
    <div className={`chart-card ${fullHeight ? 'h-full' : ''} ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {actions}
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Download className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Maximize2 className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
};