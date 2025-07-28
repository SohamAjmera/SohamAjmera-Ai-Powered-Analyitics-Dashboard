import { DashboardLayout } from '../components/layout/DashboardLayout';
import { KPICard } from '../components/dashboard/KPICard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { LineChart } from '../components/charts/LineChart';
import { BarChart } from '../components/charts/BarChart';
import { revenueData } from '../data/mockData';

const Revenue = () => {
  const revenueKPIs = [
    {
      id: 'mrr',
      title: 'Monthly Recurring Revenue',
      value: '$485,394',
      change: 8.2,
      changeType: 'increase' as const,
      icon: 'DollarSign',
      gradient: 'gradient-revenue',
      description: 'Current month MRR'
    },
    {
      id: 'arr',
      title: 'Annual Recurring Revenue',
      value: '$5.82M',
      change: 15.4,
      changeType: 'increase' as const,
      icon: 'TrendingUp',
      gradient: 'gradient-growth',
      description: 'Projected annual revenue'
    },
    {
      id: 'arpu',
      title: 'Average Revenue Per User',
      value: '$127.50',
      change: -2.1,
      changeType: 'decrease' as const,
      icon: 'Users',
      gradient: 'gradient-users',
      description: 'Monthly ARPU'
    }
  ];

  const quarterlyData = [
    { name: 'Q1', value: 1420000 },
    { name: 'Q2', value: 1680000 },
    { name: 'Q3', value: 1890000 },
    { name: 'Q4', value: 2150000 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Revenue Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Track revenue performance and financial metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueKPIs.map((kpi, index) => (
            <div key={kpi.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-up">
              <KPICard data={kpi} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Monthly Revenue" subtitle="Revenue trend over the year" fullHeight>
            <div className="h-96">
              <LineChart 
                data={revenueData} 
                dataKey="revenue"
                color="hsl(var(--dashboard-revenue))"
              />
            </div>
          </ChartCard>

          <ChartCard title="Quarterly Performance" subtitle="Revenue by quarter" fullHeight>
            <div className="h-96">
              <BarChart 
                data={quarterlyData}
                dataKey="value"
                color="hsl(var(--dashboard-growth))"
              />
            </div>
          </ChartCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Revenue;