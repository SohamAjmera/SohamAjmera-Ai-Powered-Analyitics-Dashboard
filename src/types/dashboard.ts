// Dashboard Types for the Analytics Application

export interface KPIData {
  id: string;
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  gradient: string;
  description: string;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
  category?: string;
}

export interface RevenueData extends ChartData {
  revenue: number;
  month: string;
}

export interface TrafficData extends ChartData {
  sessions: number;
  pageViews: number;
  bounceRate: number;
  source: string;
}

export interface CampaignData {
  id: string;
  name: string;
  clicks: number;
  impressions: number;
  ctr: number;
  cost: number;
  conversions: number;
  status: 'active' | 'paused' | 'completed';
}

export interface UserGrowthData {
  month: string;
  newUsers: number;
  totalUsers: number;
  retentionRate: number;
}

export interface AIInsight {
  id: string;
  question: string;
  answer: string;
  timestamp: Date;
  confidence: number;
  data?: any;
}

export interface DashboardState {
  dateRange: {
    start: Date;
    end: Date;
  };
  selectedMetrics: string[];
  viewMode: 'overview' | 'detailed';
}