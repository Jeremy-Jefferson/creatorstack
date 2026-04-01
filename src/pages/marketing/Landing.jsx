import { Link } from 'react-router-dom';
import { ArrowRight, Palette, ShoppingBag, BarChart3, Globe, Zap, Shield, Check } from 'lucide-react';
import { Button, Badge } from '../../components/ui';
import { AppFooter } from '../../components/layout';
import CreatorStackLockLogo from '../../assets/CreatorStackLock.svg';
import DashboardImage from '../../assets/CREATOR-STACK-DASHBOARD.webp';

const features = [
  {
    icon: ShoppingBag,
    title: 'Sell Anything',
    description: 'Digital products, art prints, merchandise — all from one unified storefront.',
  },
  {
    icon: Palette,
    title: 'Beautiful Storefronts',
    description: 'Customizable themes that make your work shine. No coding required.',
  },
  {
    icon: BarChart3,
    title: 'Real Analytics',
    description: 'Track revenue, orders, and customer behavior with actionable insights.',
  },
  {
    icon: Globe,
    title: 'Custom Domain',
    description: 'Use your own domain for a fully branded creator experience.',
  },
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Digital products delivered automatically. Physical items tracked end-to-end.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Industry-standard encryption and fraud protection for every transaction.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For creators just getting started',
    features: ['Up to 5 products', '1 GB storage', 'Basic analytics', 'CreatorStack subdomain'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Creator',
    price: '$12',
    period: '/month',
    description: 'For growing creator businesses',
    features: ['Up to 50 products', '10 GB storage', 'Advanced analytics', 'Custom domain', 'Remove branding'],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Creator Pro',
    price: '$29',
    period: '/month',
    description: 'For serious creator commerce',
    features: ['Unlimited products', '50 GB storage', 'Full analytics suite', 'Priority support', 'API access', 'Advanced customization'],
    cta: 'Start Free Trial',
    popular: true,
  },
];

function DashboardMockup() {
  return (
    <div className="relative max-w-4xl mx-auto mt-16">
      <img
        src={DashboardImage}
        alt="CreatorStack Dashboard"
        className="w-full rounded-xl border border-white/[0.08] shadow-[0_8px_40px_rgba(111,231,224,0.1)]"
      />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      {/* Nav */}
      <nav className="border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={CreatorStackLockLogo} alt="Creator Stack" className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">Pricing</a>
            <Link to="/store/astra-vale" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">Demo Store</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#6FE7E0]/[0.04] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#6FE7E0]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#6FE7E0]/[0.06] rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center relative">
          <Badge variant="primary" size="lg" className="mb-6">
            Now in Public Beta
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-[#F5F7FB] mb-6 leading-[1.1] tracking-tight">
            The commerce platform<br />
            <span className="text-[#6FE7E0] drop-shadow-[0_0_20px_rgba(111,231,224,0.3)]">creators deserve</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A8B0C2] max-w-2xl mx-auto mb-10 leading-relaxed">
            Sell digital products, prints, and merchandise from one beautiful dashboard.
            Built for illustrators, designers, and independent brands who care about craft.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg">
                Start Selling Free
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/store/astra-vale">
              <Button variant="secondary" size="lg">
                View Demo Store
              </Button>
            </Link>
          </div>

          {/* Dashboard Mockup */}
          <DashboardMockup />

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-[#A8B0C2]">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['MC', 'JR', 'SL'].map((initials) => (
                  <div key={initials} className="w-8 h-8 rounded-full bg-[#1E2230] border-2 border-[#0B0B0F] flex items-center justify-center text-[11px] text-[#F5F7FB] font-medium">
                    {initials}
                  </div>
                ))}
              </div>
              <span className="font-medium">2,400+ creators</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/[0.12]" />
            <span className="font-medium">$2.4M+ processed</span>
            <div className="hidden md:block w-px h-4 bg-white/[0.12]" />
            <span className="font-medium">99.9% uptime</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FB] mb-4 tracking-tight">Everything you need to sell</h2>
            <p className="text-[#A8B0C2] max-w-lg mx-auto text-lg">
              A complete toolkit for creator commerce, from storefront to analytics to payments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-[#111218] border border-white/[0.06] rounded-xl p-7 hover:border-[#6FE7E0]/20 hover:bg-[#14151D] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(111,231,224,0.06)] hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1E2230] flex items-center justify-center mb-5 group-hover:bg-[#6FE7E0]/10 transition-colors duration-300">
                  <feature.icon size={22} className="text-[#6FE7E0]" />
                </div>
                <h3 className="text-[#F5F7FB] font-semibold mb-2 text-[15px]">{feature.title}</h3>
                <p className="text-sm text-[#7C859A] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FB] mb-4 tracking-tight">Simple, transparent pricing</h2>
            <p className="text-[#A8B0C2] max-w-lg mx-auto text-lg">
              Start free. Upgrade when you're ready. No hidden fees, ever.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-[#111218] border rounded-xl p-7 relative flex flex-col ${plan.popular ? 'border-[#6FE7E0]/30 shadow-[0_0_40px_rgba(111,231,224,0.08)] md:-mt-4 md:py-9' : 'border-white/[0.06]'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" size="sm">Most Popular</Badge>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-[#F5F7FB] mb-1">{plan.name}</h3>
                <p className="text-sm text-[#7C859A] mb-5">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#F5F7FB]">{plan.price}</span>
                  {plan.period && <span className="text-[#7C859A] text-base">{plan.period}</span>}
                </div>
                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-[#A8B0C2]">
                      <Check size={15} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className="block">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FB] mb-5 tracking-tight">
            Ready to start selling?
          </h2>
          <p className="text-[#A8B0C2] mb-10 text-lg max-w-xl mx-auto">
            Join thousands of creators who trust CreatorStack to power their business. Set up your store in minutes.
          </p>
          <Link to="/signup">
            <Button size="lg">
              Create Your Store
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <AppFooter />
    </div>
  );
}
