"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface SEOContent {
  _id: string
  page: string
  title: string
  description: string
  keywords: string
  content: string

export default function SEOContentManagement() {
  const [seoContent, setSeoContent] = useState<SEOContent[]>([])
  const [loading, setLoading] = useState(true)
  const [editingContent, setEditingContent] = useState<SEOContent | null>(null)
  const [newContent, setNewContent] = useState({
    page: '',
    title: '',
    description: '',
    keywords: '',
    content: ''
  })

  useEffect(() => {
    fetchSEOContent()
  }, [])

  const fetchSEOContent = async () => {
    try {
      const res = await fetch('/api/admin/seo-content')
      if (res.ok) {
        const data = await res.json()
        setSeoContent(data)
    } catch (error) {
      console.error('Error fetching SEO content:', error)
    } finally {
      setLoading(false)

  const createSEOContent = async () => {
    try {
      const res = await fetch('/api/admin/seo-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent)
      })
      if (res.ok) {
        const content = await res.json()
        setSeoContent(prev => [...prev, content])
        setNewContent({ page: '', title: '', description: '', keywords: '', content: '' })
    } catch (error) {
      console.error('Error creating SEO content:', error)

  const updateSEOContent = async (id: string, data: Partial<SEOContent>) => {
    try {
      const res = await fetch(`/api/admin/seo-content/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) {
        const updatedContent = await res.json()
        setSeoContent(prev => prev.map(c => c._id === id ? updatedContent : c))
        setEditingContent(null)
    } catch (error) {
      console.error('Error updating SEO content:', error)

  const deleteSEOContent = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/seo-content/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setSeoContent(prev => prev.filter(c => c._id !== id))
    } catch (error) {
      console.error('Error deleting SEO content:', error)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading SEO content...</p>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">SEO Content Management</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add SEO Content
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New SEO Content</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Page</Label>
                    <Input
                      value={newContent.page}
                      onChange={(e) => setNewContent(prev => ({ ...prev, page: e.target.value }))}
                      placeholder="e.g., home, about, contact"
                    />
                  </div>
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={newContent.title}
                      onChange={(e) => setNewContent(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="SEO Title"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={newContent.description}
                      onChange={(e) => setNewContent(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="SEO Description"
                    />
                  </div>
                  <div>
                    <Label>Keywords</Label>
                    <Input
                      value={newContent.keywords}
                      onChange={(e) => setNewContent(prev => ({ ...prev, keywords: e.target.value }))}
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>
                  <div>
                    <Label>Content</Label>
                    <Textarea
                      value={newContent.content}
                      onChange={(e) => setNewContent(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Additional SEO content"
                      rows={4}
                    />
                  </div>
                  <Button onClick={createSEOContent} className="w-full">
                    Create SEO Content
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>SEO Content</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Keywords</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {seoContent.map((content) => (
                  <TableRow key={content._id}>
                    <TableCell className="font-medium">{content.page}</TableCell>
                    <TableCell className="max-w-xs truncate">{content.title}</TableCell>
                    <TableCell className="max-w-xs truncate">{content.description}</TableCell>
                    <TableCell className="max-w-xs truncate">{content.keywords}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" onClick={() => setEditingContent(content)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Edit SEO Content</DialogTitle>
                            </DialogHeader>
                            {editingContent && (
                              <div className="space-y-4">
                                <div>
                                  <Label>Page</Label>
                                  <Input
                                    value={editingContent.page}
                                    onChange={(e) => setEditingContent(prev => prev ? { ...prev, page: e.target.value } : null)}
                                  />
                                </div>
                                <div>
                                  <Label>Title</Label>
                                  <Input
                                    value={editingContent.title}
                                    onChange={(e) => setEditingContent(prev => prev ? { ...prev, title: e.target.value } : null)}
                                  />
                                </div>
                                <div>
                                  <Label>Description</Label>
                                  <Textarea
                                    value={editingContent.description}
                                    onChange={(e) => setEditingContent(prev => prev ? { ...prev, description: e.target.value } : null)}
                                  />
                                </div>
                                <div>
                                  <Label>Keywords</Label>
                                  <Input
                                    value={editingContent.keywords}
                                    onChange={(e) => setEditingContent(prev => prev ? { ...prev, keywords: e.target.value } : null)}
                                  />
                                </div>
                                <div>
                                  <Label>Content</Label>
                                  <Textarea
                                    value={editingContent.content}
                                    onChange={(e) => setEditingContent(prev => prev ? { ...prev, content: e.target.value } : null)}
                                    rows={4}
                                  />
                                </div>
                                <Button onClick={() => updateSEOContent(editingContent._id, editingContent)} className="w-full">
                                  <Save className="w-4 h-4 mr-2" />
                                  Update SEO Content
                                </Button>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" variant="destructive" onClick={() => deleteSEOContent(content._id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
