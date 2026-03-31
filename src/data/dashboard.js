export const dashboardMetrics = {
  totalRevenue: 48750,
  revenueChange: 12.5,
  totalOrders: 1247,
  ordersChange: 8.3,
  totalCustomers: 892,
  customersChange: 15.2,
  conversionRate: 3.8,
  conversionChange: 0.4,
};

export const revenueOverview = [
  { month: 'Jan', revenue: 3200, orders: 89 },
  { month: 'Feb', revenue: 4100, orders: 112 },
  { month: 'Mar', revenue: 3800, orders: 98 },
  { month: 'Apr', revenue: 5200, orders: 145 },
  { month: 'May', revenue: 4800, orders: 132 },
  { month: 'Jun', revenue: 6100, orders: 168 },
  { month: 'Jul', revenue: 5900, orders: 161 },
  { month: 'Aug', revenue: 7200, orders: 198 },
  { month: 'Sep', revenue: 6800, orders: 185 },
  { month: 'Oct', revenue: 8100, orders: 221 },
  { month: 'Nov', revenue: 9200, orders: 252 },
  { month: 'Dec', revenue: 10500, orders: 288 },
];

export const recentOrders = [
  {
    id: 'ORD-2847',
    customer: 'Maya Chen',
    email: 'maya.chen@email.com',
    product: 'Nebula Brush Pack v3',
    amount: 34.00,
    status: 'completed',
    date: '2026-03-30',
  },
  {
    id: 'ORD-2846',
    customer: 'James Rivera',
    email: 'j.rivera@email.com',
    product: 'Cosmic Texture Bundle',
    amount: 49.00,
    status: 'processing',
    date: '2026-03-30',
  },
  {
    id: 'ORD-2845',
    customer: 'Sophie Laurent',
    email: 'sophie.l@email.com',
    product: 'Astral Drift Art Print',
    amount: 65.00,
    status: 'completed',
    date: '2026-03-29',
  },
  {
    id: 'ORD-2844',
    customer: 'Alex Kim',
    email: 'alex.kim@email.com',
    product: 'Void Walker Hoodie',
    amount: 58.00,
    status: 'shipped',
    date: '2026-03-29',
  },
  {
    id: 'ORD-2843',
    customer: 'Priya Sharma',
    email: 'priya.s@email.com',
    product: 'Digital Ink Toolkit',
    amount: 29.00,
    status: 'completed',
    date: '2026-03-28',
  },
];

export const topProducts = [
  {
    id: 'prod-001',
    name: 'Nebula Brush Pack v3',
    type: 'digital',
    sales: 342,
    revenue: 11628,
    trend: 'up',
  },
  {
    id: 'prod-002',
    name: 'Cosmic Texture Bundle',
    type: 'digital',
    sales: 289,
    revenue: 14161,
    trend: 'up',
  },
  {
    id: 'prod-003',
    name: 'Astral Drift Art Print',
    type: 'print',
    sales: 156,
    revenue: 10140,
    trend: 'stable',
  },
  {
    id: 'prod-004',
    name: 'Void Walker Hoodie',
    type: 'merch',
    sales: 98,
    revenue: 5684,
    trend: 'up',
  },
  {
    id: 'prod-005',
    name: 'Digital Ink Toolkit',
    type: 'digital',
    sales: 267,
    revenue: 7743,
    trend: 'down',
  },
];

export const trafficSources = [
  { source: 'Direct', visitors: 4230, percentage: 35 },
  { source: 'Instagram', visitors: 2890, percentage: 24 },
  { source: 'Twitter/X', visitors: 1920, percentage: 16 },
  { source: 'Pinterest', visitors: 1560, percentage: 13 },
  { source: 'Google', visitors: 1440, percentage: 12 },
];

export const quickActions = [
  { label: 'Add Product', icon: 'Plus', href: '/app/products/new' },
  { label: 'View Orders', icon: 'ShoppingBag', href: '/app/orders' },
  { label: 'Customize Store', icon: 'Palette', href: '/app/storefront' },
  { label: 'Check Analytics', icon: 'BarChart3', href: '/app/analytics' },
];
