import { DashboardLayout } from '../components/layout/DashboardLayout';
import { KPICard } from '../components/dashboard/KPICard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { LineChart } from '../components/charts/LineChart';
import { PieChart } from '../components/charts/PieChart';
import { userGrowthData, deviceData } from '../data/mockData';

const Users = () => {
  const userKPIs = [
    {
      id: 'total-users',
      title: 'Total Users',
      value: '50,761',
      change: 12.4,
      changeType: 'increase' as const,
      icon: 'Users',
      gradient: 'gradient-users',
      description: 'All registered users'
    },
    {
      id: 'active-users',
      title: 'Monthly Active Users',
      value: '42,847',
      change: 8.7,
      changeType: 'increase' as const,
      icon: 'Activity',
      gradient: 'gradient-sessions',
      description: 'Users active this month'
    },
    {
      id: 'retention',
      title: 'Retention Rate',
      value: '90.2%',
      change: 5.1,
      changeType: 'increase' as const,
      icon: 'TrendingUp',
      gradient: 'gradient-growth',
      description: '30-day retention'
    }
  ];

  const ageGroupData = [
    { name: '18-25', value: 28 },
    { name: '26-35', value: 35 },
    { name: '36-45', value: 22 },
    { name: '46-55', value: 10 },
    { name: '55+', value: 5 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold gradient-text">User Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Understand your user base and engagement patterns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userKPIs.map((kpi, index) => (
            <div key={kpi.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-up">
              <KPICard data={kpi} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="User Growth" subtitle="Total users over time" fullHeight>
            <div className="h-80">
              <LineChart 
                data={userGrowthData.map(item => ({
                  name: item.month,
                  value: item.totalUsers
                }))} 
                dataKey="value"
                color="hsl(var(--dashboard-users))"
              />
            </div>
          </ChartCard>

          <ChartCard title="Device Usage" subtitle="User device preferences">
            <div className="h-80">
              <PieChart data={deviceData} />
            </div>
          </ChartCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Retention Rate" subtitle="Monthly retention percentage">
            <div className="h-80">
              <LineChart 
                data={userGrowthData.map(item => ({
                  name: item.month,
                  value: item.retentionRate
                }))}
                dataKey="value"
                color="hsl(var(--dashboard-growth))"
              />
            </div>
          </ChartCard>

          <ChartCard title="Age Demographics" subtitle="User age distribution">
            <div className="h-80">
              <PieChart data={ageGroupData} />
            </div>
          </ChartCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Users;