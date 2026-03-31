import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye, Type, Image, Layout, ShoppingBag, Mail, Share2 } from 'lucide-react';
import { AppHeader, PageContainer, PageHeader } from '../../components/layout';
import { Card, CardHeader, CardTitle, CardContent, Button, Input, Badge } from '../../components/ui';
import { storefrontConfig, products } from '../../data';

const tabs = [
  { id: 'hero', label: 'Hero', icon: Layout },
  { id: 'products', label: 'Featured', icon: ShoppingBag },
  { id: 'about', label: 'About', icon: Type },
  { id: 'newsletter', label: 'Newsletter', icon: Mail },
];

export default function Storefront() {
  const [activeTab, setActiveTab] = useState('hero');
  const featuredProducts = products.filter((p) => storefrontConfig.sections.featuredProducts.productIds.includes(p.id));

  return (
    <>
      <AppHeader title="Storefront" subtitle="Customize your public store" />
      <PageContainer>
        <PageHeader
          title="Storefront Customizer"
          subtitle="Design your public-facing store"
          actions={
            <Link to="/store/astra-vale">
              <Button variant="secondary">
                <ExternalLink size={16} />
                View Live Store
              </Button>
            </Link>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Editor panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex gap-1 bg-[#111218] border border-white/[0.08] rounded-xl p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#1E2230] text-[#F5F7FB]'
                      : 'text-[#7C859A] hover:text-[#A8B0C2]'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === 'hero' && (
              <Card>
                <CardHeader>
                  <CardTitle>Hero Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Headline"
                      defaultValue={storefrontConfig.hero.headline}
                    />
                    <div>
                      <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">Subheadline</label>
                      <textarea
                        defaultValue={storefrontConfig.hero.subheadline}
                        rows={3}
                        className="w-full bg-[#171922] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#F5F7FB] placeholder:text-[#7C859A] focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 resize-none"
                      />
                    </div>
                    <Input
                      label="CTA Text"
                      defaultValue={storefrontConfig.hero.ctaText}
                    />
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2 text-sm text-[#A8B0C2]">
                        <input
                          type="checkbox"
                          defaultChecked={storefrontConfig.hero.enabled}
                          className="rounded border-white/[0.08] bg-[#171922] text-[#6FE7E0] focus:ring-[#6FE7E0]/40"
                        />
                        Show hero section
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'products' && (
              <Card>
                <CardHeader>
                  <CardTitle>Featured Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Section Title"
                      defaultValue={storefrontConfig.sections.featuredProducts.title}
                    />
                    <Input
                      label="Subtitle"
                      defaultValue={storefrontConfig.sections.featuredProducts.subtitle}
                    />
                    <div>
                      <label className="block text-sm font-medium text-[#A8B0C2] mb-2">Selected Products</label>
                      <div className="space-y-2">
                        {featuredProducts.map((product) => (
                          <div key={product.id} className="flex items-center gap-3 p-2 rounded-lg bg-[#171922]">
                            <div className="w-8 h-8 rounded bg-[#1E2230] flex items-center justify-center text-sm">🎨</div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-[#F5F7FB] truncate">{product.name}</p>
                              <p className="text-xs text-[#7C859A]">${product.price.toFixed(2)}</p>
                            </div>
                            <Badge variant={product.type === 'digital' ? 'primary' : product.type === 'print' ? 'info' : 'magenta'} size="sm">
                              {product.type}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'about' && (
              <Card>
                <CardHeader>
                  <CardTitle>About Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Section Title"
                      defaultValue={storefrontConfig.sections.about.title}
                    />
                    <div>
                      <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">Content</label>
                      <textarea
                        defaultValue={storefrontConfig.sections.about.content}
                        rows={5}
                        className="w-full bg-[#171922] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#F5F7FB] placeholder:text-[#7C859A] focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 resize-none"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2 text-sm text-[#A8B0C2]">
                        <input
                          type="checkbox"
                          defaultChecked={storefrontConfig.sections.about.enabled}
                          className="rounded border-white/[0.08] bg-[#171922] text-[#6FE7E0] focus:ring-[#6FE7E0]/40"
                        />
                        Show about section
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'newsletter' && (
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      label="Section Title"
                      defaultValue={storefrontConfig.sections.newsletter.title}
                    />
                    <Input
                      label="Subtitle"
                      defaultValue={storefrontConfig.sections.newsletter.subtitle}
                    />
                    <Input
                      label="Button Text"
                      defaultValue={storefrontConfig.sections.newsletter.buttonText}
                    />
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2 text-sm text-[#A8B0C2]">
                        <input
                          type="checkbox"
                          defaultChecked={storefrontConfig.sections.newsletter.enabled}
                          className="rounded border-white/[0.08] bg-[#171922] text-[#6FE7E0] focus:ring-[#6FE7E0]/40"
                        />
                        Show newsletter section
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Social links */}
            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input
                    label="Instagram"
                    defaultValue={storefrontConfig.social.instagram}
                    icon={Share2}
                  />
                  <Input
                    label="Twitter/X"
                    defaultValue={storefrontConfig.social.twitter}
                    icon={Share2}
                  />
                </div>
              </CardContent>
            </Card>

            <Button className="w-full">Save Changes</Button>
          </div>

          {/* Preview panel */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-3">
                <Eye size={16} className="text-[#7C859A]" />
                <span className="text-sm text-[#7C859A]">Live Preview</span>
              </div>
              <div className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden">
                {/* Mini browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-[#0B0B0F]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                  </div>
                  <div className="flex-1 bg-[#171922] rounded-md px-3 py-1 text-xs text-[#7C859A] text-center">
                    astravale.creatorstack.com
                  </div>
                </div>

                {/* Preview content */}
                <div className="aspect-[16/10] bg-[#0B0B0F] p-6 overflow-hidden">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#6FE7E0] to-[#6FE7E0]/60 flex items-center justify-center">
                        <span className="text-[#0B0B0F] font-bold text-[8px]">AV</span>
                      </div>
                      <span className="text-xs font-medium text-[#F5F7FB]">{storefrontConfig.brand.name}</span>
                    </div>
                    <h2 className="text-lg font-bold text-[#F5F7FB] mb-1">{storefrontConfig.hero.headline}</h2>
                    <p className="text-[10px] text-[#7C859A] max-w-xs mx-auto mb-3">
                      {storefrontConfig.hero.subheadline.substring(0, 80)}...
                    </p>
                    <div className="inline-flex px-3 py-1 rounded-md bg-[#6FE7E0] text-[#0B0B0F] text-[10px] font-medium">
                      {storefrontConfig.hero.ctaText}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {featuredProducts.slice(0, 4).map((product) => (
                      <div key={product.id} className="bg-[#111218] border border-white/[0.08] rounded-lg p-2">
                        <div className="aspect-square rounded bg-[#1E2230] mb-1.5 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-[8px] text-[#F5F7FB] truncate">{product.name}</p>
                        <p className="text-[8px] text-[#6FE7E0]">${product.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
