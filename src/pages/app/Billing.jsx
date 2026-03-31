import { CreditCard, Check } from 'lucide-react';
import { AppHeader, PageContainer, PageHeader } from '../../components/layout';
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '../../components/ui';
import { billingSummary, plans, invoices } from '../../data';

export default function Billing() {
  return (
    <>
      <AppHeader title="Billing" subtitle="Manage your subscription and invoices" />
      <PageContainer>
        <PageHeader title="Billing & Plans" />

        {/* Current plan */}
        <Card className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#7C859A] mb-1">Current Plan</p>
              <h3 className="text-xl font-semibold text-[#F5F7FB]">{billingSummary.currentPlan}</h3>
              <p className="text-sm text-[#A8B0C2] mt-1">
                ${billingSummary.planPrice}/month · Next billing {new Date(billingSummary.nextBillingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success" dot>Active</Badge>
              <Button variant="secondary" size="sm">Manage</Button>
            </div>
          </div>
        </Card>

        {/* Plans grid */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-[#F5F7FB] mb-4">Available Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.current ? 'border-[#6FE7E0]/30' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" size="sm">Most Popular</Badge>
                  </div>
                )}
                <div className="mb-4">
                  <h4 className="text-base font-semibold text-[#F5F7FB]">{plan.name}</h4>
                  <p className="text-xs text-[#7C859A] mt-0.5">{plan.description}</p>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#F5F7FB]">${plan.price}</span>
                  <span className="text-sm text-[#7C859A]">/month</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {plan.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#A8B0C2]">
                      <Check size={14} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.current ? 'secondary' : 'outline'}
                  size="sm"
                  className="w-full"
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Invoices */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-white/[0.05]">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-[#F5F7FB]">{invoice.id}</p>
                    <p className="text-xs text-[#7C859A]">{invoice.period}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#A8B0C2]">
                      {new Date(invoice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-sm font-medium text-[#F5F7FB]">${invoice.amount.toFixed(2)}</span>
                    <Badge variant="success" size="sm">{invoice.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PageContainer>
    </>
  );
}
