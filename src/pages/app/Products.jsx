import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Filter, Grid3X3, List, Download, Package, Truck, Edit, Trash2 } from 'lucide-react';
import { AppHeader, PageContainer, PageHeader } from '../../components/layout';
import { Card, Button, Badge, Input } from '../../components/ui';
import { products, productCategories } from '../../data';
import { useToast } from '../../hooks/useToast';

const typeColors = {
  digital: 'primary',
  print: 'info',
  merch: 'magenta',
};

const statusColors = {
  active: 'success',
  draft: 'warning',
  archived: 'default',
};

const typeIcons = {
  digital: Download,
  print: Package,
  merch: Truck,
};

export default function Products() {
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const toast = useToast();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDelete = (productId, productName) => {
    // In a real app, this would call the API
    toast.success(`${productName} deleted successfully`);
  };

  return (
    <>
      <AppHeader title="Products" subtitle="Manage your product catalog" />
      <PageContainer>
        <PageHeader
          title="Products"
          subtitle={`${products.length} products`}
          actions={
            <Link to="/app/products/new">
              <Button>
                <Plus size={16} />
                Add Product
              </Button>
            </Link>
          }
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-[#6FE7E0]/10 text-[#6FE7E0]'
                    : 'text-[#7C859A] hover:text-[#A8B0C2] hover:bg-white/[0.03]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7C859A]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 pl-9 pr-4 py-2 bg-[#171922] border border-white/[0.08] rounded-lg text-sm text-[#F5F7FB] placeholder:text-[#7C859A] focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40"
              />
            </div>
            <div className="flex items-center bg-[#171922] border border-white/[0.08] rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-[#1E2230] text-[#F5F7FB]' : 'text-[#7C859A]'
                }`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-[#1E2230] text-[#F5F7FB]' : 'text-[#7C859A]'
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Products grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => {
              const TypeIcon = typeIcons[product.type];
              return (
                <Card key={product.id} hover className="group">
                  <div className="aspect-[4/3] rounded-lg bg-[#1E2230] mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Badge variant={typeColors[product.type]} size="sm">{product.type}</Badge>
                      <Badge variant={statusColors[product.status]} dot size="sm">{product.status}</Badge>
                    </div>
                    <TypeIcon size={14} className="text-[#7C859A]" />
                  </div>
                  <h3 className="text-sm font-medium text-[#F5F7FB] mb-1 group-hover:text-[#6FE7E0] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#7C859A] mb-3 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#F5F7FB]">${product.price.toFixed(2)}</span>
                    <div className="flex items-center gap-1">
                      <Link to={`/app/products/${product.id}/edit`}>
                        <Button variant="ghost" size="sm" className="p-1">
                          <Edit size={14} />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-1 text-[#7C859A] hover:text-[#EF4444]"
                        onClick={() => handleDelete(product.id, product.name)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Product</th>
                  <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Type</th>
                  <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Price</th>
                  <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Sales</th>
                  <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Revenue</th>
                  <th className="text-left text-xs font-medium text-[#7C859A] uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#1E2230] overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <Link to={`/app/products/${product.id}`} className="text-sm text-[#F5F7FB] hover:text-[#6FE7E0] transition-colors">
                            {product.name}
                          </Link>
                          <p className="text-xs text-[#7C859A]">{product.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <Badge variant={typeColors[product.type]} size="sm">{product.type}</Badge>
                    </td>
                    <td className="px-5 py-4">
                      <Badge variant={statusColors[product.status]} dot size="sm">{product.status}</Badge>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-[#F5F7FB]">${product.price.toFixed(2)}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-[#A8B0C2]">{product.sales}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-[#F5F7FB]">${product.revenue.toLocaleString()}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <Link to={`/app/products/${product.id}/edit`}>
                          <Button variant="ghost" size="sm" className="p-1">
                            <Edit size={14} />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1 text-[#7C859A] hover:text-[#EF4444]"
                          onClick={() => handleDelete(product.id, product.name)}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </PageContainer>
    </>
  );
}
