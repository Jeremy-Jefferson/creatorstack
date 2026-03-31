import { ShoppingBag } from 'lucide-react';
import { AppHeader, PageContainer, PageHeader } from '../../components/layout';
import { Badge } from '../../components/ui';
import { orders } from '../../data';

const statusColors = {
  completed: 'success',
  processing: 'warning',
  shipped: 'info',
  pending: 'default',
  cancelled: 'danger',
  refunded: 'danger',
};

export default function Orders() {
  return (
    <>
      <AppHeader title="Orders" subtitle="Manage and track your orders" />
      <PageContainer>
        <PageHeader
          title="All Orders"
          subtitle={`${orders.length} orders total`}
        />

        <div className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Order</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Customer</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Product</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Amount</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Status</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-[#6FE7E0]">{order.id}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm text-[#F5F7FB]">{order.customer.name}</p>
                      <p className="text-xs text-[#7C859A]">{order.customer.email}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-[#A8B0C2]">
                      {order.items.map(i => i.name).join(', ')}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-[#F5F7FB]">${order.total.toFixed(2)}</span>
                  </td>
                  <td className="px-5 py-4">
                    <Badge variant={statusColors[order.status]} dot size="sm">
                      {order.status}
                    </Badge>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-[#7C859A]">
                      {new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageContainer>
    </>
  );
}
