import { Users } from 'lucide-react';
import { AppHeader, PageContainer, PageHeader } from '../../components/layout';
import { Badge, Avatar } from '../../components/ui';
import { customers } from '../../data';

export default function Customers() {
  return (
    <>
      <AppHeader title="Customers" subtitle="View and manage your customers" />
      <PageContainer>
        <PageHeader
          title="All Customers"
          subtitle={`${customers.length} customers total`}
        />

        <div className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Customer</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Location</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Orders</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Total Spent</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Tags</th>
                <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Last Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={customer.name} size="sm" />
                      <div>
                        <p className="text-sm text-[#F5F7FB]">{customer.name}</p>
                        <p className="text-xs text-[#7C859A]">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-[#A8B0C2]">{customer.location}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-[#F5F7FB]">{customer.totalOrders}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-[#F5F7FB]">${customer.totalSpent.toFixed(2)}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-1.5 flex-wrap">
                      {customer.tags.map((tag) => (
                        <Badge key={tag} variant={tag === 'vip' ? 'primary' : 'default'} size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-[#7C859A]">
                      {new Date(customer.lastOrder).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
