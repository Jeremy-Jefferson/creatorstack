import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2, ExternalLink } from 'lucide-react';
import { AppHeader, PageContainer } from '../../components/layout';
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '../../components/ui';
import { products } from '../../data';

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

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <>
        <AppHeader title="Product Not Found" />
        <PageContainer>
          <div className="text-center py-16">
            <p className="text-[#7C859A] mb-4">Product not found</p>
            <Link to="/app/products">
              <Button variant="secondary">
                <ArrowLeft size={16} />
                Back to Products
              </Button>
            </Link>
          </div>
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <AppHeader title={product.name} subtitle="Product Details" />
      <PageContainer>
        <div className="flex items-center justify-between mb-6">
          <Link to="/app/products" className="flex items-center gap-2 text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">
            <ArrowLeft size={16} />
            Back to Products
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              <ExternalLink size={14} />
              View in Store
            </Button>
            <Button variant="secondary" size="sm">
              <Edit size={14} />
              Edit
            </Button>
            <Button variant="ghost" size="sm" className="text-[#EF4444] hover:text-[#DC2626]">
              <Trash2 size={14} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-[#7C859A] uppercase tracking-wider">Name</label>
                    <p className="text-[#F5F7FB] mt-1">{product.name}</p>
                  </div>
                  <div>
                    <label className="text-xs text-[#7C859A] uppercase tracking-wider">Description</label>
                    <p className="text-[#A8B0C2] text-sm mt-1">{product.description}</p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <label className="text-xs text-[#7C859A] uppercase tracking-wider">Price</label>
                      <p className="text-[#F5F7FB] text-lg font-semibold mt-1">${product.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <label className="text-xs text-[#7C859A] uppercase tracking-wider">Category</label>
                      <p className="text-[#F5F7FB] mt-1">{product.category}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7C859A]">Type</span>
                    <Badge variant={typeColors[product.type]} size="sm">{product.type}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7C859A]">Status</span>
                    <Badge variant={statusColors[product.status]} dot size="sm">{product.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7C859A]">Sales</span>
                    <span className="text-sm text-[#F5F7FB]">{product.sales}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7C859A]">Revenue</span>
                    <span className="text-sm text-[#F5F7FB]">${product.revenue.toLocaleString()}</span>
                  </div>
                  {product.stock !== null && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#7C859A]">Stock</span>
                      <span className="text-sm text-[#F5F7FB]">{product.stock}</span>
                    </div>
                  )}
                  {product.fileSize && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#7C859A]">File Size</span>
                      <span className="text-sm text-[#F5F7FB]">{product.fileSize}</span>
                    </div>
                  )}
                  {product.format && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#7C859A]">Format</span>
                      <span className="text-sm text-[#F5F7FB]">{product.format}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7C859A]">Created</span>
                    <span className="text-sm text-[#A8B0C2]">
                      {new Date(product.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7C859A]">Updated</span>
                    <span className="text-sm text-[#A8B0C2]">
                      {new Date(product.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
