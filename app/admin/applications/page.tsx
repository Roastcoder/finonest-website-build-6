"use client"

import { useState, useEffect } from "react"
import { Search, Eye, CheckCircle, XCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('/api/admin/applications')
      .then(res => res.json())
      .then(data => setApplications(data))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Applications Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>All Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app: any) => (
                <TableRow key={app._id}>
                  <TableCell>{app.personalInfo?.fullName}</TableCell>
                  <TableCell>{app.productId}</TableCell>
                  <TableCell>₹{app.financialInfo?.loanAmount?.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge>{app.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
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