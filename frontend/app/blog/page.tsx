"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

const categories = ["All", "Personal Loans", "Home Loans", "Business Loans", "Credit Score", "Investment", "Tax Planning", "Insurance", "Digital Banking"]

export default function BlogPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.slice(0, 4)
  const regularPosts = filteredPosts.slice(4)

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section ref={headerRef} className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4f7fa] via-white to-[#e8f4ff]" />

        {/* Floating shapes */}
        <div
          className="absolute top-20 left-[10%] w-64 h-64 bg-[#12D6E7]/10 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-10 right-[10%] w-80 h-80 bg-[#0064D6]/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center"
             : {}}
          >
            <span className="inline-block px-4 py-1.5 bg-[#0064D6]/10 text-[#0064D6] rounded-full text-sm font-medium mb-4">
              Finance Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6 text-balance">
              Insights for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
                Smarter Finances
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Expert advice, tips, and guides to help you make informed financial decisions
            </p>

            {/* Search Bar */}
            <div
              className="max-w-xl mx-auto relative"
               : {}}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-black/5 focus:outline-none focus:ring-2 focus:ring-[#0064D6]/20 focus:border-[#0064D6] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 horizontal-scroll">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#0064D6] text-white shadow-lg shadow-[#0064D6]/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl font-bold text-[#111111] mb-8"
            >
              Featured Articles
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  whileHover={{ y: -8 }}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      title={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-[#12D6E7] text-white text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#12D6E7] transition-colors duration-300">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        5 min read
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-bold text-[#111111] mb-8"
          >
            Latest Articles
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-[#0064D6]" />
                    <span className="text-sm text-[#0064D6] font-medium">{post.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] mb-3 group-hover:text-[#0064D6] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-[#0064D6] font-medium text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div
            className="text-center mt-12"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full font-semibold shadow-lg shadow-[#0064D6]/25"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(0, 100, 214, 0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Load More Articles
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative bg-gradient-to-br from-[#0064D6] to-[#002E9C] rounded-3xl p-8 sm:p-12 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#12D6E7]/20 rounded-full blur-2xl" />

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Financial Tips in Your Inbox</h2>
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter for weekly insights, tips, and exclusive offers
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <motion.button
                  className="px-8 py-4 bg-white text-[#0064D6] rounded-full font-semibold shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
