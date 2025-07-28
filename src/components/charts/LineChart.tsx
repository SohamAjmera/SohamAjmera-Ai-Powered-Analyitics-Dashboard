import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types/dashboard';

interface LineChartProps {
  data: ChartData[];
  dataKey?: string;
  color?: string;
  strokeWidth?: number;
  gradient?: boolean;
}

export const LineChart = ({ 
  data, 
  dataKey = 'value', 
  color = 'hsl(var(--primary))',
  strokeWidth = 3,
  gradient = true 
}: LineChartProps) => {
  const gradientId = `gradient-${dataKey}`;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
        )}
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="name" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip 
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="floating-card p-3 border shadow-elevated">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-sm text-primary font-bold">
                    ${payload[0].value?.toLocaleString()}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Line 
          type="monotone" 
          dataKey={dataKey} 
          stroke={color}
          strokeWidth={strokeWidth}
          dot={{ fill: color, strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: color, strokeWidth: 2, fill: 'hsl(var(--background))' }}
          fillOpacity={1}
          fill={gradient ? `url(#${gradientId})` : 'none'}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};