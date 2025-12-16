"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SEOContentPage() {
  const [seoContent, setSeoContent] = useState([])
  const [newContent, setNewContent] = useState({ page: '', title: '', description: '', keywords: '', content: '' })

  useEffect(() => {
    fetch('/api/admin/seo-content')
      .then(res => res.json())
      .then(data => setSeoContent(data))
  }, [])

  const createSEOContent = async () => {
    const res = await fetch('/api/admin/seo-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContent)
    })
    if (res.ok) {
      const content = await res.json()
      setSeoContent(prev => [...prev, content])
      setNewContent({ page: '', title: '', description: '', keywords: '', content: '' })
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SEO Content Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
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
                />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={newContent.description}
                  onChange={(e) => setNewContent(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
              <div>
                <Label>Keywords</Label>
                <Input
                  value={newContent.keywords}
                  onChange={(e) => setNewContent(prev => ({ ...prev, keywords: e.target.value }))}
                />
              </div>
              <Button onClick={createSEOContent} className="w-full">
                Create SEO Content
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

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
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {seoContent.map((content: any) => (
                <TableRow key={content._id}>
                  <TableCell>{content.page}</TableCell>
                  <TableCell className="max-w-xs truncate">{content.title}</TableCell>
                  <TableCell className="max-w-xs truncate">{content.description}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
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
  )
}