import { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { KPICard } from '../components/dashboard/KPICard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { LineChart } from '../components/charts/LineChart';
import { BarChart } from '../components/charts/BarChart';
import { PieChart } from '../components/charts/PieChart';
import { PromptBox } from '../components/ai/PromptBox';
import { 
  kpiData, 
  revenueData, 
  trafficData, 
  userGrowthData, 
  deviceData, 
  topPagesData,
  generateRealtimeData 
} from '../data/mockData';
import { AIInsight } from '../types/dashboard';
import { CalendarDays, Eye, Clock, ArrowUpRight } from 'lucide-react';

const Index = () => {
  const [realtimeData] = useState(generateRealtimeData());
  const [insights, setInsights] = useState<AIInsight[]>([]);

  const handleInsightGenerated = (insight: AIInsight) => {
    setInsights(prev => [insight, ...prev.slice(0, 4)]); // Keep last 5 insights
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Analytics Overview</h1>
            <p className="text-muted-foreground mt-2">
              Monitor your business performance and key metrics
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Live data
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <div key={kpi.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-up">
              <KPICard data={kpi} />
            </div>
          ))}
        </div>

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Trend */}
          <div className="lg:col-span-2">
            <ChartCard 
              title="Revenue Trend" 
              subtitle="Monthly revenue over the past year"
              fullHeight
            >
              <div className="h-80">
                <LineChart 
                  data={revenueData} 
                  dataKey="revenue"
                  color="hsl(var(--dashboard-revenue))"
                />
              </div>
            </ChartCard>
          </div>

          {/* AI Assistant */}
          <div className="space-y-6">
            <ChartCard title="AI Assistant" fullHeight>
              <PromptBox onInsightGenerated={handleInsightGenerated} />
            </ChartCard>
          </div>
        </div>

        {/* Secondary Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Traffic Sources */}
          <ChartCard title="Traffic Sources" subtitle="Where your visitors come from">
            <div className="h-64">
              <PieChart data={trafficData} />
            </div>
          </ChartCard>

          {/* User Growth */}
          <ChartCard title="User Growth" subtitle="New users acquisition">
            <div className="h-64">
              <BarChart 
                data={userGrowthData.slice(-6).map(item => ({
                  name: item.month,
                  value: item.newUsers
                }))} 
                dataKey="value"
                color="hsl(var(--dashboard-users))"
              />
            </div>
          </ChartCard>

          {/* Device Usage */}
          <ChartCard title="Device Usage" subtitle="User devices breakdown">
            <div className="h-64">
              <PieChart 
                data={deviceData} 
                innerRadius={40}
                outerRadius={80}
              />
            </div>
          </ChartCard>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Real-time Activity */}
          <ChartCard title="Real-time Activity" subtitle="Live user activity">
            <div className="h-64">
              <LineChart 
                data={realtimeData} 
                dataKey="value"
                color="hsl(var(--dashboard-sessions))"
                strokeWidth={2}
              />
            </div>
          </ChartCard>

          {/* Top Pages */}
          <ChartCard title="Top Pages" subtitle="Most visited pages">
            <div className="space-y-3">
              {topPagesData.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded bg-primary/10 text-primary text-xs font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{page.page}</p>
                      <p className="text-xs text-muted-foreground">{page.avgTime} avg time</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{page.views.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {page.uniqueViews.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
