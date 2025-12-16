"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Users, 
  CreditCard, 
  FileText, 
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Download
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface DashboardStats {
  totalUsers: number
  totalProducts: number
  totalApplications: number
  pendingApplications: number
  approvedApplications: number
}

interface Application {
  _id: string
  userId: { _id: string; name: string; email: string }
  productId: string
  personalInfo: { fullName: string; email: string; phone: string }
  financialInfo: { loanAmount: number; monthlyIncome: number }
  status: 'pending' | 'under_review' | 'approved' | 'rejected'
  createdAt: string
  reviewNotes?: string
}

interface User {
  _id: string
  name: string
  email: string
  role: 'customer' | 'employee' | 'manager' | 'admin'
  isVerified: boolean
  createdAt: string
}

interface Product {
  _id: string
  id: string
  title: string
  description: string
  rate: string
  maxAmount: string
  tenure: string
  processingFee: string
  isActive: boolean
}

interface SEOContent {
  _id: string
  page: string
  title: string
  description: string
  keywords: string
  content: string
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalProducts: 0,
    totalApplications: 0,
    pendingApplications: 0,
    approvedApplications: 0
  })
  const [applications, setApplications] = useState<Application[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [seoContent, setSeoContent] = useState<SEOContent[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null)
  const [newProduct, setNewProduct] = useState({ title: '', description: '', rate: '', maxAmount: '', tenure: '', processingFee: '' })
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [statsRes, appsRes, usersRes, productsRes, seoRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/admin/applications'),
        fetch('/api/admin/users'),
        fetch('/api/admin/products'),
        fetch('/api/admin/seo-content')
      ])

      if (statsRes.ok) setStats(await statsRes.json())
      if (appsRes.ok) setApplications(await appsRes.json())
      if (usersRes.ok) setUsers(await usersRes.json())
      if (productsRes.ok) setProducts(await productsRes.json())
      if (seoRes.ok) setSeoContent(await seoRes.json())
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-yellow-100 text-yellow-800',
      under_review: 'bg-blue-100 text-blue-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    }
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800'
  }

  const updateApplicationStatus = async (id: string, newStatus: string, reviewNotes?: string) => {
    try {
      const res = await fetch(`/api/admin/applications/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus, reviewNotes })
      })
      if (res.ok) {
        const updatedApp = await res.json()
        setApplications(prev => prev.map(app => app._id === id ? updatedApp : app))
      }
    } catch (error) {
      console.error('Error updating application:', error)
    }
  }

  const deleteUser = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setUsers(prev => prev.filter(user => user._id !== id))
      }
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const updateUserRole = async (id: string, role: string) => {
    try {
      const res = await fetch(`/api/admin/users/${id}/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role })
      })
      if (res.ok) {
        const updatedUser = await res.json()
        setUsers(prev => prev.map(user => user._id === id ? updatedUser : user))
      }
    } catch (error) {
      console.error('Error updating user role:', error)
    }
  }

  const createProduct = async () => {
    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newProduct, id: newProduct.title.toLowerCase().replace(/\s+/g, '-'), isActive: true })
      })
      if (res.ok) {
        const product = await res.json()
        setProducts(prev => [...prev, product])
        setNewProduct({ title: '', description: '', rate: '', maxAmount: '', tenure: '', processingFee: '' })
      }
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  const updateProduct = async (id: string, data: Partial<Product>) => {
    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) {
        const updatedProduct = await res.json()
        setProducts(prev => prev.map(p => p._id === id ? updatedProduct : p))
        setEditingProduct(null)
      }
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  const deleteProduct = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setProducts(prev => prev.filter(p => p._id !== id))
      }
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.personalInfo?.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.userId?.email?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter
    return matchesSearch && matchesStatus
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Products</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                  </div>
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Applications</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
                  </div>
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingApplications}</p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Approved</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.approvedApplications}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Applications Management</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Search applications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 w-64"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Income</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((app) => (
                      <TableRow key={app._id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{app.personalInfo.fullName}</div>
                            <div className="text-sm text-gray-500">{app.personalInfo.email}</div>
                            <div className="text-sm text-gray-500">{app.personalInfo.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell className="capitalize">{app.productId} Loan</TableCell>
                        <TableCell>₹{app.financialInfo.loanAmount.toLocaleString()}</TableCell>
                        <TableCell>₹{app.financialInfo.monthlyIncome?.toLocaleString() || 'N/A'}</TableCell>
                        <TableCell>
                          <Badge className={getStatusBadge(app.status)}>
                            {app.status.replace('_', ' ')}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(app.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" onClick={() => setSelectedApplication(app)}>
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Application Details</DialogTitle>
                                </DialogHeader>
                                {selectedApplication && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label>Full Name</Label>
                                        <p className="text-sm">{selectedApplication.personalInfo.fullName}</p>
                                      </div>
                                      <div>
                                        <Label>Email</Label>
                                        <p className="text-sm">{selectedApplication.personalInfo.email}</p>
                                      </div>
                                      <div>
                                        <Label>Phone</Label>
                                        <p className="text-sm">{selectedApplication.personalInfo.phone}</p>
                                      </div>
                                      <div>
                                        <Label>Product</Label>
                                        <p className="text-sm capitalize">{selectedApplication.productId} Loan</p>
                                      </div>
                                      <div>
                                        <Label>Loan Amount</Label>
                                        <p className="text-sm">₹{selectedApplication.financialInfo.loanAmount.toLocaleString()}</p>
                                      </div>
                                      <div>
                                        <Label>Monthly Income</Label>
                                        <p className="text-sm">₹{selectedApplication.financialInfo.monthlyIncome?.toLocaleString() || 'N/A'}</p>
                                      </div>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button 
                                        className="bg-green-600 hover:bg-green-700"
                                        onClick={() => updateApplicationStatus(selectedApplication._id, 'approved')}
                                      >
                                        Approve
                                      </Button>
                                      <Button 
                                        variant="destructive"
                                        onClick={() => updateApplicationStatus(selectedApplication._id, 'rejected')}
                                      >
                                        Reject
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            {app.status === 'pending' && (
                              <>
                                <Button 
                                  size="sm" 
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => updateApplicationStatus(app._id, 'approved')}
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="destructive"
                                  onClick={() => updateApplicationStatus(app._id, 'rejected')}
                                >
                                  <XCircle className="w-4 h-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Product Management
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Add New Product
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Product</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Title</Label>
                            <Input
                              value={newProduct.title}
                              onChange={(e) => setNewProduct(prev => ({ ...prev, title: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label>Description</Label>
                            <Textarea
                              value={newProduct.description}
                              onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>Rate</Label>
                              <Input
                                value={newProduct.rate}
                                onChange={(e) => setNewProduct(prev => ({ ...prev, rate: e.target.value }))}
                              />
                            </div>
                            <div>
                              <Label>Max Amount</Label>
                              <Input
                                value={newProduct.maxAmount}
                                onChange={(e) => setNewProduct(prev => ({ ...prev, maxAmount: e.target.value }))}
                              />
                            </div>
                            <div>
                              <Label>Tenure</Label>
                              <Input
                                value={newProduct.tenure}
                                onChange={(e) => setNewProduct(prev => ({ ...prev, tenure: e.target.value }))}
                              />
                            </div>
                            <div>
                              <Label>Processing Fee</Label>
                              <Input
                                value={newProduct.processingFee}
                                onChange={(e) => setNewProduct(prev => ({ ...prev, processingFee: e.target.value }))}
                              />
                            </div>
                          </div>
                          <Button onClick={createProduct} className="w-full">
                            Create Product
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button className="bg-green-600 hover:bg-green-700" asChild>
                      <Link href="/admin/dashboard/seo-content">
                        <Edit className="w-4 h-4 mr-2" />
                        Manage SEO Content
                      </Link>
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <Card key={product._id} className="border-2">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{product.title}</h3>
                          <Badge className={product.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                            {product.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <div className="text-xs space-y-1 mb-3">
                          <div>Rate: {product.rate}</div>
                          <div>Max: {product.maxAmount}</div>
                          <div>Tenure: {product.tenure}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline" onClick={() => setEditingProduct(product)}>
                                <Edit className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Product</DialogTitle>
                              </DialogHeader>
                              {editingProduct && (
                                <div className="space-y-4">
                                  <div>
                                    <Label>Title</Label>
                                    <Input
                                      value={editingProduct.title}
                                      onChange={(e) => setEditingProduct(prev => prev ? { ...prev, title: e.target.value } : null)}
                                    />
                                  </div>
                                  <div>
                                    <Label>Description</Label>
                                    <Textarea
                                      value={editingProduct.description}
                                      onChange={(e) => setEditingProduct(prev => prev ? { ...prev, description: e.target.value } : null)}
                                    />
                                  </div>
                                  <Button onClick={() => updateProduct(editingProduct._id, editingProduct)} className="w-full">
                                    Update Product
                                  </Button>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button 
                            size="sm" 
                            variant={product.isActive ? "destructive" : "default"}
                            onClick={() => updateProduct(product._id, { isActive: !product.isActive })}
                          >
                            {product.isActive ? 'Deactivate' : 'Activate'}
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => deleteProduct(product._id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user._id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Select value={user.role} onValueChange={(role) => updateUserRole(user._id, role)}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="customer">Customer</SelectItem>
                              <SelectItem value="employee">Employee</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Badge className={user.isVerified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                            {user.isVerified ? 'Verified' : 'Pending'}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="destructive" onClick={() => deleteUser(user._id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Analytics dashboard will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}