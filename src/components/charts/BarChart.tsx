import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types/dashboard';

interface BarChartProps {
  data: ChartData[];
  dataKey?: string;
  color?: string;
  gradient?: boolean;
  horizontal?: boolean;
}

export const BarChart = ({ 
  data, 
  dataKey = 'value', 
  color = 'hsl(var(--primary))',
  gradient = true,
  horizontal = false
}: BarChartProps) => {
  const gradientId = `bar-gradient-${dataKey}`;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart 
        data={data} 
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        layout={horizontal ? 'horizontal' : 'vertical'}
      >
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0.3}/>
            </linearGradient>
          </defs>
        )}
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey={horizontal ? dataKey : "name"}
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          type={horizontal ? 'number' : 'category'}
        />
        <YAxis 
          dataKey={horizontal ? "name" : dataKey}
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          type={horizontal ? 'category' : 'number'}
          tickFormatter={horizontal ? undefined : (value) => `${value}`}
        />
        <Tooltip 
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="floating-card p-3 border shadow-elevated">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-sm text-primary font-bold">
                    {payload[0].value?.toLocaleString()}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar 
          dataKey={dataKey} 
          fill={gradient ? `url(#${gradientId})` : color}
          radius={[4, 4, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};