import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import { AppHeader, PageContainer } from '../../components/layout';
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../../components/ui';
import { useToast } from '../../hooks/useToast';
import { productsApi } from '../../services/api';
import { productCategories } from '../../data';

export default function ProductForm() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const toast = useToast();
  const isEditing = !!productId;

  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    description: '',
    price: '',
    category: productCategories[0] || '',
    type: 'digital',
    status: 'draft',
    fileSize: '',
    format: '',
    dimensions: '',
    paper: '',
    material: '',
    stock: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isEditing) {
      loadProduct();
    }
  }, [productId]);

  const loadProduct = async () => {
    setIsLoading(true);
    try {
      const product = await productsApi.getById(productId);
      if (product) {
        setFormData({
          name: product.name || '',
          shortDescription: product.shortDescription || '',
          description: product.description || '',
          price: product.price?.toString() || '',
          category: product.category || '',
          type: product.type || 'digital',
          status: product.status || 'draft',
          fileSize: product.fileSize || '',
          format: product.format || '',
          dimensions: product.dimensions || '',
          paper: product.paper || '',
          material: product.material || '',
          stock: product.stock?.toString() || '',
        });
      }
    } catch {
      toast.error('Failed to load product');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Product name is required';
    }

    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) < 0) {
      newErrors.price = 'Price must be a valid positive number';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSaving(true);

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: formData.stock ? parseInt(formData.stock, 10) : null,
      };

      if (isEditing) {
        await productsApi.update(productId, productData);
        toast.success('Product updated successfully!');
      } else {
        await productsApi.create(productData);
        toast.success('Product created successfully!');
      }

      navigate('/app/products');
    } catch {
      toast.error(isEditing ? 'Failed to update product' : 'Failed to create product');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <AppHeader title={isEditing ? 'Edit Product' : 'Add Product'} />
        <PageContainer>
          <div className="flex items-center justify-center py-12">
            <Loader2 size={32} className="animate-spin text-[#6FE7E0]" />
          </div>
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <AppHeader title={isEditing ? 'Edit Product' : 'Add Product'} />
      <PageContainer>
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate('/app/products')}>
            <ArrowLeft size={16} />
            Back to Products
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  label="Product Name"
                  name="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                <Input
                  label="Short Description"
                  name="shortDescription"
                  placeholder="Brief description for product cards"
                  value={formData.shortDescription}
                  onChange={handleChange}
                />

                <div>
                  <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">
                    Full Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Detailed product description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#171922] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#F5F7FB] placeholder:text-[#7C859A] focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Price"
                    name="price"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleChange}
                    error={errors.price}
                  />

                  <div>
                    <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-[#171922] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#F5F7FB] focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40"
                    >
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-xs text-[#EF4444] mt-1">{errors.category}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">
                      Product Type
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-[#171922] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#F5F7FB] focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40"
                    >
                      <option value="digital">Digital</option>
                      <option value="print">Print</option>
                      <option value="merch">Merchandise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#A8B0C2] mb-1.5">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full bg-[#171922] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#F5F7FB] focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40"
                    >
                      <option value="draft">Draft</option>
                      <option value="active">Active</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Type-specific fields */}
          {formData.type === 'digital' && (
            <Card>
              <CardHeader>
                <CardTitle>Digital Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="File Size"
                    name="fileSize"
                    placeholder="e.g., 2.5 MB"
                    value={formData.fileSize}
                    onChange={handleChange}
                  />
                  <Input
                    label="Format"
                    name="format"
                    placeholder="e.g., PNG, PDF, PSD"
                    value={formData.format}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {formData.type === 'print' && (
            <Card>
              <CardHeader>
                <CardTitle>Print Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Dimensions"
                    name="dimensions"
                    placeholder="e.g., 12x16 inches"
                    value={formData.dimensions}
                    onChange={handleChange}
                  />
                  <Input
                    label="Paper Type"
                    name="paper"
                    placeholder="e.g., Matte, Glossy"
                    value={formData.paper}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {formData.type === 'merch' && (
            <Card>
              <CardHeader>
                <CardTitle>Merchandise Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Material"
                    name="material"
                    placeholder="e.g., 100% Cotton"
                    value={formData.material}
                    onChange={handleChange}
                  />
                  <Input
                    label="Stock"
                    name="stock"
                    type="number"
                    min="0"
                    placeholder="Available quantity"
                    value={formData.stock}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-3">
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={16} />
                  {isEditing ? 'Update Product' : 'Create Product'}
                </>
              )}
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate('/app/products')}>
              Cancel
            </Button>
          </div>
        </form>
      </PageContainer>
    </>
  );
}
