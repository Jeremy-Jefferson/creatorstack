import { Link } from 'react-router-dom';
import { DollarSign, ShoppingBag, Users, TrendingUp, ArrowUpRight, ArrowRight, Plus, Palette, BarChart3 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AppHeader, PageContainer } from '../../components/layout';
import { Card, CardHeader, CardTitle, CardContent, Button, Badge, Avatar } from '../../components/ui';
import { dashboardMetrics, revenueOverview, recentOrders, topProducts, trafficSources } from '../../data';

const metrics = [
  {
    label: 'Total Revenue',
    value: `$${dashboardMetrics.totalRevenue.toLocaleString()}`,
    change: dashboardMetrics.revenueChange,
    icon: DollarSign,
    color: 'text-[#6FE7E0]',
    bgColor: 'bg-[#6FE7E0]/10',
  },
  {
    label: 'Total Orders',
    value: dashboardMetrics.totalOrders.toLocaleString(),
    change: dashboardMetrics.ordersChange,
    icon: ShoppingBag,
    color: 'text-[#60A5FA]',
    bgColor: 'bg-[#60A5FA]/10',
  },
  {
    label: 'Total Customers',
    value: dashboardMetrics.totalCustomers.toLocaleString(),
    change: dashboardMetrics.customersChange,
    icon: Users,
    color: 'text-[#A78BFA]',
    bgColor: 'bg-[#A78BFA]/10',
  },
  {
    label: 'Conversion Rate',
    value: `${dashboardMetrics.conversionRate}%`,
    change: dashboardMetrics.conversionChange,
    icon: TrendingUp,
    color: 'text-[#22C55E]',
    bgColor: 'bg-[#22C55E]/10',
  },
];

const statusColors = {
  completed: 'success',
  processing: 'warning',
  shipped: 'info',
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E2230] border border-white/[0.08] rounded-lg px-3 py-2 shadow-xl">
        <p className="text-xs text-[#7C859A] mb-1">{label}</p>
        <p className="text-sm font-medium text-[#F5F7FB]">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  return (
    <>
      <AppHeader title="Dashboard" subtitle="Welcome back to Astra Vale Studio" />
      <PageContainer>
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric) => (
            <Card key={metric.label}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[#7C859A] mb-1">{metric.label}</p>
                  <p className="text-2xl font-semibold text-[#F5F7FB]">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowUpRight size={14} className="text-[#22C55E]" />
                    <span className="text-xs text-[#22C55E]">+{metric.change}%</span>
                    <span className="text-xs text-[#7C859A]">vs last month</span>
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                  <metric.icon size={20} className={metric.color} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue chart */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <Link to="/app/analytics" className="text-xs text-[#6FE7E0] hover:underline flex items-center gap-1">
                  View Details <ArrowRight size={12} />
                </Link>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueOverview}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6FE7E0" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#6FE7E0" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#7C859A', fontSize: 12 }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#7C859A', fontSize: 12 }}
                        tickFormatter={(value) => `$${value / 1000}k`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#6FE7E0"
                        strokeWidth={2}
                        fill="url(#revenueGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link to="/app/products" className="flex items-center gap-3 p-3 rounded-lg bg-[#171922] hover:bg-[#1E2230] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-[#6FE7E0]/10 flex items-center justify-center">
                    <Plus size={18} className="text-[#6FE7E0]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#F5F7FB] group-hover:text-[#6FE7E0] transition-colors">Add Product</p>
                    <p className="text-xs text-[#7C859A]">Create a new listing</p>
                  </div>
                </Link>
                <Link to="/app/storefront" className="flex items-center gap-3 p-3 rounded-lg bg-[#171922] hover:bg-[#1E2230] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-[#E1066D]/10 flex items-center justify-center">
                    <Palette size={18} className="text-[#E1066D]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#F5F7FB] group-hover:text-[#E1066D] transition-colors">Customize Store</p>
                    <p className="text-xs text-[#7C859A]">Update your storefront</p>
                  </div>
                </Link>
                <Link to="/app/analytics" className="flex items-center gap-3 p-3 rounded-lg bg-[#171922] hover:bg-[#1E2230] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-[#60A5FA]/10 flex items-center justify-center">
                    <BarChart3 size={18} className="text-[#60A5FA]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#F5F7FB] group-hover:text-[#60A5FA] transition-colors">View Analytics</p>
                    <p className="text-xs text-[#7C859A]">Check your performance</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Recent orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <Link to="/app/orders" className="text-xs text-[#6FE7E0] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-white/[0.05]">
                {recentOrders.slice(0, 5).map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <Avatar name={order.customer} size="sm" />
                      <div>
                        <p className="text-sm text-[#F5F7FB]">{order.customer}</p>
                        <p className="text-xs text-[#7C859A]">{order.product}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#F5F7FB]">${order.amount.toFixed(2)}</p>
                      <Badge variant={statusColors[order.status]} size="sm">{order.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <Link to="/app/products" className="text-xs text-[#6FE7E0] hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-white/[0.05]">
                {topProducts.slice(0, 5).map((product, index) => (
                  <div key={product.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#7C859A] w-5">{index + 1}</span>
                      <div>
                        <p className="text-sm text-[#F5F7FB]">{product.name}</p>
                        <p className="text-xs text-[#7C859A]">{product.sales} sales</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#F5F7FB]">${product.revenue.toLocaleString()}</p>
                      <span className={`text-xs ${product.trend === 'up' ? 'text-[#22C55E]' : product.trend === 'down' ? 'text-[#EF4444]' : 'text-[#7C859A]'}`}>
                        {product.trend === 'up' ? '↑' : product.trend === 'down' ? '↓' : '→'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Traffic sources */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="flex items-center gap-4">
                  <span className="text-sm text-[#A8B0C2] w-24">{source.source}</span>
                  <div className="flex-1 h-2 bg-[#1E2230] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#6FE7E0] rounded-full transition-all duration-500"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-[#7C859A] w-20 text-right">{source.visitors.toLocaleString()}</span>
                  <span className="text-sm text-[#7C859A] w-12 text-right">{source.percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PageContainer>
    </>
  );
}
