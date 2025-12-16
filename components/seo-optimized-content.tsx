"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SEOOptimizedContentProps {
  pageSlug: string;
  fallbackContent?: any;
}

export function SEOOptimizedContent({ pageSlug, fallbackContent }: SEOOptimizedContentProps) {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/seo/content/${pageSlug}`)
        if (response.ok) {
          const data = await response.json()
          setContent(data)
        } else {
          setContent(fallbackContent)
        }
      } catch (error) {
        setContent(fallbackContent)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [pageSlug, fallbackContent])

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
      </div>
    )
  }

  if (!content) {
    return <div>Content not available</div>
  }

  return (
    <div className="seo-optimized-content">
      {content.content?.features && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.content.features.map((feature: any, index: number) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {content.content?.benefits && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {content.content.benefits.map((benefit: any, index: number) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Badge className="bg-green-100 text-green-800">✓</Badge>
                <div>
                  <h4 className="font-semibold">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {content.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(content.schema.data)
          }}
        />
      )}
    </div>
  )
}