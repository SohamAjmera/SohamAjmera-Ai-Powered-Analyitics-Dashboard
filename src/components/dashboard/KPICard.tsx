import { TrendingUp, TrendingDown, DollarSign, Users, Activity } from 'lucide-react';
import { KPIData } from '../../types/dashboard';

interface KPICardProps {
  data: KPIData;
  className?: string;
}

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  Activity
};

export const KPICard = ({ data, className = '' }: KPICardProps) => {
  const Icon = iconMap[data.icon as keyof typeof iconMap] || TrendingUp;
  const TrendIcon = data.changeType === 'increase' ? TrendingUp : TrendingDown;

  return (
    <div className={`kpi-card group ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-${data.gradient} shadow-glow group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${
          data.changeType === 'increase' ? 'text-success' : 'text-destructive'
        }`}>
          <TrendIcon className="h-4 w-4" />
          {Math.abs(data.change)}%
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground font-medium">
          {data.title}
        </p>
        <p className="text-3xl font-bold gradient-text">
          {data.value}
        </p>
        <p className="text-xs text-muted-foreground">
          {data.description}
        </p>
      </div>
    </div>
  );
};