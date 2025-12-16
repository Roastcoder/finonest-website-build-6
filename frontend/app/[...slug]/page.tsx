import { notFound } from 'next/navigation'
import { Metadata } from 'next'

const pageData: Record<string, any> = {
  about: () => import('../about/page').then(m => m.default),
  contact: () => import('../contact/page').then(m => m.default),
  blog: () => import('../blog/page').then(m => m.default),
  eligibility: () => import('../eligibility/page').then(m => m.default),
  products: () => import('../products/page').then(m => m.default),
  'products/personal-loans': () => import('../products/personal-loans/page').then(m => m.default),
  'products/home-loans': () => import('../products/home-loans/page').then(m => m.default),
  'products/business-loans': () => import('../products/business-loans/page').then(m => m.default),
  'products/credit-cards': () => import('../products/credit-cards/page').then(m => m.default),
  'products/vehicle-loans': () => import('../products/vehicle-loans/page').then(m => m.default),
  'products/education-loans': () => import('../products/education-loans/page').then(m => m.default),
  'products/car-valuation': () => import('../products/car-valuation/page').then(m => m.default)
}

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const pageLoader = pageData[slug]
  
  if (!pageLoader) {
    notFound()
  }
  
  const Component = await pageLoader()
  return <Component />
}