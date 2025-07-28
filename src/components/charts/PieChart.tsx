import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ChartData } from '../../types/dashboard';

interface PieChartProps {
  data: ChartData[];
  colors?: string[];
  showLegend?: boolean;
  innerRadius?: number;
  outerRadius?: number;
}

const defaultColors = [
  'hsl(var(--primary))',
  'hsl(var(--dashboard-revenue))',
  'hsl(var(--dashboard-growth))',
  'hsl(var(--dashboard-sessions))',
  'hsl(var(--muted-foreground))'
];

export const PieChart = ({ 
  data, 
  colors = defaultColors,
  showLegend = true,
  innerRadius = 60,
  outerRadius = 100
}: PieChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
          dataKey="value"
          animationBegin={0}
          animationDuration={800}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length]}
              stroke="hsl(var(--background))"
              strokeWidth={2}
            />
          ))}
        </Pie>
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="floating-card p-3 border shadow-elevated">
                  <p className="text-sm font-medium">{data.name}</p>
                  <p className="text-sm text-primary font-bold">
                    {data.value}%
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        {showLegend && (
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-sm text-foreground">{value}</span>}
          />
        )}
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};