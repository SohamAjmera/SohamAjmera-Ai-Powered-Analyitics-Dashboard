import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ChartCard } from '../components/dashboard/ChartCard';
import { BarChart } from '../components/charts/BarChart';
import { campaignData } from '../data/mockData';
import { Badge } from '../components/ui/badge';

const Campaigns = () => {
  const campaignChartData = campaignData.map(campaign => ({
    name: campaign.name.replace('Campaign', '').replace('Promo', '').trim(),
    value: campaign.conversions
  }));

  const ctrData = campaignData.map(campaign => ({
    name: campaign.name.replace('Campaign', '').replace('Promo', '').trim(),
    value: campaign.ctr
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success';
      case 'paused': return 'bg-warning';
      case 'completed': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Campaign Performance</h1>
          <p className="text-muted-foreground mt-2">
            Monitor and analyze your marketing campaign effectiveness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Campaign Conversions" subtitle="Total conversions by campaign">
            <div className="h-80">
              <BarChart 
                data={campaignChartData}
                dataKey="value"
                color="hsl(var(--dashboard-growth))"
              />
            </div>
          </ChartCard>

          <ChartCard title="Click-Through Rates" subtitle="CTR performance comparison">
            <div className="h-80">
              <BarChart 
                data={ctrData}
                dataKey="value"
                color="hsl(var(--dashboard-users))"
              />
            </div>
          </ChartCard>
        </div>

        <ChartCard title="Campaign Details" subtitle="Complete campaign overview">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Campaign</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Clicks</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Impressions</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">CTR</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Cost</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Conversions</th>
                </tr>
              </thead>
              <tbody>
                {campaignData.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-border/30 hover:bg-accent/30 transition-colors">
                    <td className="py-3 px-4 font-medium">{campaign.name}</td>
                    <td className="text-right py-3 px-4">
                      <Badge className={`${getStatusColor(campaign.status)} text-white capitalize`}>
                        {campaign.status}
                      </Badge>
                    </td>
                    <td className="text-right py-3 px-4">{campaign.clicks.toLocaleString()}</td>
                    <td className="text-right py-3 px-4">{campaign.impressions.toLocaleString()}</td>
                    <td className="text-right py-3 px-4">{campaign.ctr.toFixed(1)}%</td>
                    <td className="text-right py-3 px-4">${campaign.cost.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 font-bold text-primary">{campaign.conversions.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;