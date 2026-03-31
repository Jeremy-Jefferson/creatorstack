import { ArrowUpRight, ArrowDownRight, DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AppHeader, PageContainer, PageHeader } from '../../components/layout';
import { Card, CardHeader, CardTitle, CardContent, Badge } from '../../components/ui';
import { analyticsOverview, revenueByMonth, productPerformance, channelBreakdown, conversionFunnel, topCountries } from '../../data';

const overviewCards = [
  {
    label: 'Total Revenue',
    value: `$${analyticsOverview.totalRevenue.toLocaleString()}`,
    change: 12.5,
    icon: DollarSign,
    color: 'text-[#6FE7E0]',
    bgColor: 'bg-[#6FE7E0]/10',
  },
  {
    label: 'Total Orders',
    value: analyticsOverview.totalOrders.toLocaleString(),
    change: 8.3,
    icon: ShoppingBag,
    color: 'text-[#60A5FA]',
    bgColor: 'bg-[#60A5FA]/10',
  },
  {
    label: 'Avg Order Value',
    value: `$${analyticsOverview.avgOrderValue.toFixed(2)}`,
    change: 3.2,
    icon: TrendingUp,
    color: 'text-[#22C55E]',
    bgColor: 'bg-[#22C55E]/10',
  },
  {
    label: 'Returning Customers',
    value: `${analyticsOverview.returningCustomerRate}%`,
    change: 5.1,
    icon: Users,
    color: 'text-[#A78BFA]',
    bgColor: 'bg-[#A78BFA]/10',
  },
];

const COLORS = ['#6FE7E0', '#60A5FA', '#E1066D', '#22C55E', '#F59E0B'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E2230] border border-white/[0.08] rounded-lg px-3 py-2 shadow-xl">
        <p className="text-xs text-[#7C859A] mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm font-medium text-[#F5F7FB]">
            {entry.name}: {entry.name === 'revenue' ? `$${entry.value.toLocaleString()}` : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  return (
    <>
      <AppHeader title="Analytics" subtitle="Track your store performance" />
      <PageContainer>
        <PageHeader title="Analytics" subtitle="Last 12 months" />

        {/* Overview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {overviewCards.map((card) => (
            <Card key={card.label}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[#7C859A] mb-1">{card.label}</p>
                  <p className="text-2xl font-semibold text-[#F5F7FB]">{card.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {card.change >= 0 ? (
                      <ArrowUpRight size={14} className="text-[#22C55E]" />
                    ) : (
                      <ArrowDownRight size={14} className="text-[#EF4444]" />
                    )}
                    <span className={`text-xs ${card.change >= 0 ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
                      {card.change >= 0 ? '+' : ''}{card.change}%
                    </span>
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                  <card.icon size={20} className={card.color} />
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
                <CardTitle>Revenue Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueByMonth}>
                      <defs>
                        <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6FE7E0" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#6FE7E0" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#7C859A', fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#7C859A', fontSize: 12 }} tickFormatter={(v) => `$${v / 1000}k`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="revenue" stroke="#6FE7E0" strokeWidth={2} fill="url(#revenueGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Channel breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Channel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={channelBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="revenue"
                    >
                      {channelBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `$${value.toLocaleString()}`}
                      contentStyle={{ backgroundColor: '#1E2230', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px' }}
                      itemStyle={{ color: '#F5F7FB' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {channelBreakdown.map((channel, index) => (
                  <div key={channel.channel} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                      <span className="text-sm text-[#A8B0C2]">{channel.channel}</span>
                    </div>
                    <span className="text-sm text-[#F5F7FB]">{channel.percentage}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Product performance */}
          <Card>
            <CardHeader>
              <CardTitle>Product Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {productPerformance.slice(0, 6).map((product) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0 mr-4">
                      <p className="text-sm text-[#F5F7FB] truncate">{product.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-[#7C859A]">{product.sales} sales</span>
                        <span className={`text-xs ${product.growth >= 0 ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
                          {product.growth >= 0 ? '+' : ''}{product.growth}%
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-[#F5F7FB]">${product.revenue.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conversion funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {conversionFunnel.map((stage, index) => (
                  <div key={stage.stage}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-[#A8B0C2]">{stage.stage}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#F5F7FB]">{stage.count.toLocaleString()}</span>
                        <span className="text-xs text-[#7C859A]">{stage.percentage}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1E2230] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${stage.percentage}%`,
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top countries */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Top Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topCountries.slice(0, 4).map((country) => (
                <div key={country.country} className="bg-[#171922] rounded-lg p-4">
                  <p className="text-sm text-[#A8B0C2] mb-1">{country.country}</p>
                  <p className="text-lg font-semibold text-[#F5F7FB]">${country.revenue.toLocaleString()}</p>
                  <p className="text-xs text-[#7C859A]">{country.orders} orders</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PageContainer>
    </>
  );
}
