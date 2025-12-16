"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Company Name</Label>
              <Input defaultValue="Finonest" />
            </div>
            <div>
              <Label>Support Email</Label>
              <Input defaultValue="support@finonest.com" />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input defaultValue="1800-123-4567" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Email Notifications</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label>SMS Notifications</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label>Auto Approval</Label>
              <Switch />
            </div>
            <Button>Update Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
