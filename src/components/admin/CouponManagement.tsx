'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Package, Plus, Search, Edit, Trash2, ArrowLeft, Copy, ToggleRight, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Coupon {
  id: number;
  code: string;
  description: string;
  discountType: string;
  discountValue: number;
  minBookingAmount: number | null;
  maxDiscount: number | null;
  validFrom: string;
  validUntil: string;
  usageLimit: number | null;
  usedCount: number;
  status: string;
  createdAt: string;
}

export default function CouponManagement() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/coupons?limit=100');
      if (!response.ok) throw new Error('Failed to fetch coupons');
      const data = await response.json();
      setCoupons(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load coupons');
    } finally {
      setLoading(false);
    }
  };

  const handleAddCoupon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const couponData = {
      code: (formData.get('code') as string).toUpperCase(),
      description: formData.get('description') as string,
      discountType: formData.get('discountType') as string,
      discountValue: parseInt(formData.get('discountValue') as string),
      minBookingAmount: formData.get('minBookingAmount') ? parseInt(formData.get('minBookingAmount') as string) : null,
      maxDiscount: formData.get('maxDiscount') ? parseInt(formData.get('maxDiscount') as string) : null,
      validFrom: formData.get('validFrom') as string,
      validUntil: formData.get('validUntil') as string,
      usageLimit: formData.get('usageLimit') ? parseInt(formData.get('usageLimit') as string) : null,
    };

    try {
      const response = await fetch('/api/coupons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(couponData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to add coupon');
      }

      toast.success('Coupon created successfully!');
      setIsAddModalOpen(false);
      fetchCoupons();
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to add coupon');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteCoupon = async (id: number) => {
    if (!confirm('Are you sure you want to delete this coupon?')) return;

    try {
      const response = await fetch(`/api/coupons?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete coupon');
      }

      toast.success('Coupon deleted successfully!');
      fetchCoupons();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete coupon');
    }
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`Copied ${code} to clipboard!`);
  };

  const statusCounts = {
    total: coupons.length,
    active: coupons.filter(c => c.status === 'active').length,
    totalUses: coupons.reduce((sum, c) => sum + c.usedCount, 0),
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading coupons...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="max-w-md w-full">
          <CardContent className="p-6 text-center">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Coupons</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={fetchCoupons}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Link href="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Coupon Management</h1>
            <p className="text-gray-600">Create and manage discount coupons and promotional offers</p>
          </div>
          <Button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Coupon
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Coupons</p>
                  <p className="text-3xl font-bold text-gray-900">{statusCounts.total}</p>
                </div>
                <Package className="w-10 h-10 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Coupons</p>
                  <p className="text-3xl font-bold text-green-600">{statusCounts.active}</p>
                </div>
                <ToggleRight className="w-10 h-10 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Uses</p>
                  <p className="text-3xl font-bold text-blue-600">{statusCounts.totalUses.toLocaleString()}</p>
                </div>
                <Copy className="w-10 h-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coupons Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Coupons</CardTitle>
          </CardHeader>
          <CardContent>
            {coupons.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No coupons created yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Value</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Uses</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Valid Until</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coupons.map((coupon) => (
                      <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <code className="font-mono font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                              {coupon.code}
                            </code>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="p-1"
                              onClick={() => copyToClipboard(coupon.code)}
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm">{coupon.description}</td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 capitalize">
                            {coupon.discountType}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-semibold">
                          {coupon.discountType === 'percentage' ? `${coupon.discountValue}%` : `₹${coupon.discountValue}`}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div>
                            <p className="font-semibold">{coupon.usedCount}</p>
                            {coupon.usageLimit && <p className="text-xs text-gray-500">/ {coupon.usageLimit}</p>}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm">
                          {new Date(coupon.validUntil).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                            coupon.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {coupon.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleDeleteCoupon(coupon.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Add Coupon Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>Create New Coupon</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddCoupon} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="code">Coupon Code *</Label>
                      <Input id="code" name="code" placeholder="SAVE20" className="uppercase" required />
                    </div>
                    <div>
                      <Label htmlFor="discountType">Discount Type *</Label>
                      <select id="discountType" name="discountType" required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed Amount</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Input id="description" name="description" placeholder="20% off on first booking" required />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="discountValue">Value *</Label>
                      <Input id="discountValue" name="discountValue" type="number" placeholder="20" required />
                    </div>
                    <div>
                      <Label htmlFor="maxDiscount">Max Discount (₹)</Label>
                      <Input id="maxDiscount" name="maxDiscount" type="number" placeholder="500" />
                    </div>
                    <div>
                      <Label htmlFor="minBookingAmount">Min Booking (₹)</Label>
                      <Input id="minBookingAmount" name="minBookingAmount" type="number" placeholder="299" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="validFrom">Start Date *</Label>
                      <Input id="validFrom" name="validFrom" type="date" required />
                    </div>
                    <div>
                      <Label htmlFor="validUntil">End Date *</Label>
                      <Input id="validUntil" name="validUntil" type="date" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="usageLimit">Usage Limit</Label>
                    <Input id="usageLimit" name="usageLimit" type="number" placeholder="Leave empty for unlimited" />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="button" 
                      onClick={() => setIsAddModalOpen(false)}
                      variant="outline"
                      className="flex-1"
                      disabled={submitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        'Create Coupon'
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
