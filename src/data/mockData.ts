import { KPIData, RevenueData, TrafficData, CampaignData, UserGrowthData, ChartData } from '../types/dashboard';

// KPI Mock Data
export const kpiData: KPIData[] = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$2,847,394',
    change: 12.5,
    changeType: 'increase',
    icon: 'DollarSign',
    gradient: 'gradient-revenue',
    description: 'Monthly recurring revenue growth'
  },
  {
    id: 'users',
    title: 'Active Users',
    value: '12,847',
    change: 8.2,
    changeType: 'increase',
    icon: 'Users',
    gradient: 'gradient-users',
    description: 'Daily active users this month'
  },
  {
    id: 'growth',
    title: 'Growth Rate',
    value: '23.1%',
    change: -2.4,
    changeType: 'decrease',
    icon: 'TrendingUp',
    gradient: 'gradient-growth',
    description: 'Month-over-month growth'
  },
  {
    id: 'sessions',
    title: 'Sessions',
    value: '47,293',
    change: 15.3,
    changeType: 'increase',
    icon: 'Activity',
    gradient: 'gradient-sessions',
    description: 'Total sessions this quarter'
  }
];

// Revenue Chart Data
export const revenueData: RevenueData[] = [
  { name: 'Jan', value: 185000, revenue: 185000, month: 'January' },
  { name: 'Feb', value: 205000, revenue: 205000, month: 'February' },
  { name: 'Mar', value: 235000, revenue: 235000, month: 'March' },
  { name: 'Apr', value: 278000, revenue: 278000, month: 'April' },
  { name: 'May', value: 312000, revenue: 312000, month: 'May' },
  { name: 'Jun', value: 294000, revenue: 294000, month: 'June' },
  { name: 'Jul', value: 356000, revenue: 356000, month: 'July' },
  { name: 'Aug', value: 398000, revenue: 398000, month: 'August' },
  { name: 'Sep', value: 425000, revenue: 425000, month: 'September' },
  { name: 'Oct', value: 467000, revenue: 467000, month: 'October' },
  { name: 'Nov', value: 502000, revenue: 502000, month: 'November' },
  { name: 'Dec', value: 485000, revenue: 485000, month: 'December' }
];

// Traffic Sources Data
export const trafficData: TrafficData[] = [
  { 
    name: 'Organic Search', 
    value: 42, 
    sessions: 19847, 
    pageViews: 47293, 
    bounceRate: 34.2, 
    source: 'Google' 
  },
  { 
    name: 'Direct Traffic', 
    value: 28, 
    sessions: 13294, 
    pageViews: 28475, 
    bounceRate: 28.7, 
    source: 'Direct' 
  },
  { 
    name: 'Social Media', 
    value: 18, 
    sessions: 8547, 
    pageViews: 19283, 
    bounceRate: 45.1, 
    source: 'Social' 
  },
  { 
    name: 'Paid Ads', 
    value: 8, 
    sessions: 3794, 
    pageViews: 8947, 
    bounceRate: 52.3, 
    source: 'Ads' 
  },
  { 
    name: 'Email', 
    value: 4, 
    sessions: 1896, 
    pageViews: 4250, 
    bounceRate: 25.8, 
    source: 'Email' 
  }
];

// Campaign Performance Data
export const campaignData: CampaignData[] = [
  {
    id: 'camp1',
    name: 'Summer Sale 2024',
    clicks: 15847,
    impressions: 247583,
    ctr: 6.4,
    cost: 12450,
    conversions: 1247,
    status: 'active'
  },
  {
    id: 'camp2',
    name: 'Black Friday Promo',
    clicks: 28394,
    impressions: 456789,
    ctr: 6.2,
    cost: 18750,
    conversions: 2156,
    status: 'completed'
  },
  {
    id: 'camp3',
    name: 'New Year Campaign',
    clicks: 9847,
    impressions: 187432,
    ctr: 5.3,
    cost: 8940,
    conversions: 894,
    status: 'active'
  },
  {
    id: 'camp4',
    name: 'Product Launch',
    clicks: 6754,
    impressions: 98567,
    ctr: 6.9,
    cost: 5670,
    conversions: 567,
    status: 'paused'
  }
];

// User Growth Data
export const userGrowthData: UserGrowthData[] = [
  { month: 'Jan', newUsers: 1847, totalUsers: 8945, retentionRate: 78.4 },
  { month: 'Feb', newUsers: 2156, totalUsers: 11101, retentionRate: 81.2 },
  { month: 'Mar', newUsers: 2847, totalUsers: 13948, retentionRate: 83.7 },
  { month: 'Apr', newUsers: 3294, totalUsers: 17242, retentionRate: 85.1 },
  { month: 'May', newUsers: 2987, totalUsers: 20229, retentionRate: 82.9 },
  { month: 'Jun', newUsers: 3456, totalUsers: 23685, retentionRate: 84.6 },
  { month: 'Jul', newUsers: 4123, totalUsers: 27808, retentionRate: 86.3 },
  { month: 'Aug', newUsers: 3847, totalUsers: 31655, retentionRate: 85.7 },
  { month: 'Sep', newUsers: 4294, totalUsers: 35949, retentionRate: 87.2 },
  { month: 'Oct', newUsers: 4756, totalUsers: 40705, retentionRate: 88.4 },
  { month: 'Nov', newUsers: 4932, totalUsers: 45637, retentionRate: 89.1 },
  { month: 'Dec', newUsers: 5124, totalUsers: 50761, retentionRate: 90.2 }
];

// Device Usage Data
export const deviceData: ChartData[] = [
  { name: 'Desktop', value: 58 },
  { name: 'Mobile', value: 34 },
  { name: 'Tablet', value: 8 }
];

// Top Pages Data
export const topPagesData = [
  { page: '/dashboard', views: 12847, uniqueViews: 8945, avgTime: '3:24' },
  { page: '/products', views: 9876, uniqueViews: 7234, avgTime: '2:18' },
  { page: '/analytics', views: 7654, uniqueViews: 5832, avgTime: '4:12' },
  { page: '/settings', views: 4321, uniqueViews: 3654, avgTime: '1:45' },
  { page: '/profile', views: 3456, uniqueViews: 2987, avgTime: '2:03' }
];

// Real-time activity data (simulates live updates)
export const generateRealtimeData = (): ChartData[] => {
  const baseValue = Math.floor(Math.random() * 100) + 50;
  return Array.from({ length: 20 }, (_, i) => ({
    name: new Date(Date.now() - (19 - i) * 60000).toLocaleTimeString(),
    value: baseValue + Math.floor(Math.random() * 40) - 20
  }));
};

// Sample AI responses for different query types
export const aiResponses = {
  campaigns: {
    question: "What are our top performing campaigns this month?",
    answer: "Based on the data, your top performing campaigns are: 1) Summer Sale 2024 with 1,247 conversions and 6.4% CTR, 2) Black Friday Promo with 2,156 conversions, and 3) Product Launch with the highest CTR at 6.9%. The Summer Sale campaign shows the best cost efficiency.",
    confidence: 92
  },
  revenue: {
    question: "How is our revenue trending?",
    answer: "Revenue is showing strong growth with a 12.5% increase this month. October peaked at $467K, with consistent growth since July. The trend indicates healthy business expansion with December showing slight seasonal adjustment.",
    confidence: 88
  },
  traffic: {
    question: "Where is most of our traffic coming from?",
    answer: "Organic search dominates with 42% of traffic (19,847 sessions), followed by direct traffic at 28%. Social media contributes 18% but has a higher bounce rate at 45.1%. Consider optimizing social content for better engagement.",
    confidence: 95
  },
  users: {
    question: "How are our user metrics performing?",
    answer: "User growth is excellent with 12,847 active users and consistent retention rates averaging 85%+. New user acquisition peaked in November with 4,932 new users. Retention rate improved to 90.2% in December, indicating strong product-market fit.",
    confidence: 91
  }
};