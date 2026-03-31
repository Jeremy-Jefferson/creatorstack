import { User, Bell, Shield, Globe, Palette } from 'lucide-react';
import { AppHeader, PageContainer, PageHeader } from '../../components/layout';
import { Card, CardHeader, CardTitle, CardContent, Button, Input, Badge } from '../../components/ui';
import { storefrontConfig } from '../../data';

const settingsSections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'domain', label: 'Custom Domain', icon: Globe },
  { id: 'appearance', label: 'Appearance', icon: Palette },
];

export default function Settings() {
  return (
    <>
      <AppHeader title="Settings" subtitle="Manage your account and preferences" />
      <PageContainer>
        <PageHeader title="Settings" />

        <div className="flex gap-6">
          {/* Sidebar nav */}
          <div className="w-48 flex-shrink-0">
            <nav className="space-y-1">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                    section.id === 'profile'
                      ? 'bg-[#6FE7E0]/10 text-[#6FE7E0]'
                      : 'text-[#7C859A] hover:text-[#A8B0C2] hover:bg-white/[0.03]'
                  }`}
                >
                  <section.icon size={16} />
                  {section.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Studio Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-w-md">
                  <Input
                    label="Studio Name"
                    defaultValue={storefrontConfig.brand.name}
                  />
                  <Input
                    label="Tagline"
                    defaultValue={storefrontConfig.brand.tagline}
                  />
                  <Input
                    label="Email"
                    type="email"
                    defaultValue="studio@astravale.com"
                  />
                  <div className="pt-2">
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Store URL</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-[#171922] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#A8B0C2]">
                    creatorstack.com/store/astra-vale
                  </div>
                  <Button variant="secondary" size="sm">Copy</Button>
                </div>
                <p className="text-xs text-[#7C859A] mt-2">
                  Upgrade to Creator Pro to use a custom domain
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Danger Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#F5F7FB]">Delete Account</p>
                    <p className="text-xs text-[#7C859A]">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="danger" size="sm">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
