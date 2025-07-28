import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ChartCard } from '../components/dashboard/ChartCard';
import { LineChart } from '../components/charts/LineChart';
import { BarChart } from '../components/charts/BarChart';
import { revenueData, userGrowthData, campaignData } from '../data/mockData';

const Analytics = () => {
  const campaignChartData = campaignData.map(campaign => ({
    name: campaign.name.split(' ')[0], // Shortened name
    value: campaign.conversions
  }));

  const retentionData = userGrowthData.map(item => ({
    name: item.month,
    value: item.retentionRate
  }));

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Advanced Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Deep dive into your performance metrics and trends
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Revenue Growth" subtitle="Year-over-year comparison">
            <div className="h-80">
              <LineChart 
                data={revenueData} 
                dataKey="revenue"
                color="hsl(var(--dashboard-revenue))"
              />
            </div>
          </ChartCard>

          <ChartCard title="Campaign Performance" subtitle="Conversions by campaign">
            <div className="h-80">
              <BarChart 
                data={campaignChartData}
                dataKey="value"
                color="hsl(var(--dashboard-growth))"
              />
            </div>
          </ChartCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="User Retention Rate" subtitle="Monthly retention percentage">
            <div className="h-80">
              <LineChart 
                data={retentionData}
                dataKey="value"
                color="hsl(var(--dashboard-users))"
              />
            </div>
          </ChartCard>

          <ChartCard title="Growth Trends" subtitle="User acquisition over time">
            <div className="h-80">
              <BarChart 
                data={userGrowthData.map(item => ({
                  name: item.month,
                  value: item.totalUsers
                }))}
                dataKey="value"
                color="hsl(var(--primary))"
              />
            </div>
          </ChartCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;