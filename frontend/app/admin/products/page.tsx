"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({ title: '', description: '', rate: '', maxAmount: '', tenure: '', processingFee: '' })

  useEffect(() => {
    fetch('/api/admin/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const createProduct = async () => {
    const res = await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newProduct, id: newProduct.title.toLowerCase().replace(/\s+/g, '-'), isActive: true })
    })
    if (res.ok) {
      const product = await res.json()
      setProducts(prev => [...prev, product])
      setNewProduct({ title: '', description: '', rate: '', maxAmount: '', tenure: '', processingFee: '' })

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Product
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
              </div>
              <Button onClick={createProduct} className="w-full">
                Create Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <Card key={product._id}>
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
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
