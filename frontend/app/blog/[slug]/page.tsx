import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'

interface BlogPostPageProps {
  params: { slug: string }

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Finonest'

  return {
    title: `${post.title} | Finonest`,
    description: post.description,
    keywords: `${post.category.toLowerCase()}, finance, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://finonest.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://finonest.com/blog/${post.slug}`

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-4">{post.description}</p>
            <time className="text-gray-500">{post.date}</time>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p>This is a comprehensive guide about {post.title.toLowerCase()}. Our expert team has compiled detailed information to help you make informed financial decisions.</p>
            
            <h2>Key Points</h2>
            <ul>
              <li>Detailed analysis of {post.category.toLowerCase()} options</li>
              <li>Step-by-step guidance and best practices</li>
              <li>Expert tips and recommendations</li>
              <li>Latest market trends and updates</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Understanding {post.title.toLowerCase()} is crucial for your financial success. For personalized advice and assistance, contact our expert team at Finonest.</p>
          </div>
        </article>
      </div>
    </main>
  )

export function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug
  }))
