import Link from "next/link"

// Add to your global CSS or Tailwind config:
// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }

const products = [
  {
    title: "Home Loans",
    subtitle: "Dream home financing with best rates",
    badge: "Instant Disbursal",
    href: "/products/home-loans"
  },
  {
    title: "Personal Loans", 
    subtitle: "Quick personal financing hassle-free",
    badge: "Free Service",
    href: "/products/personal-loans"
  },
  {
    title: "Car Valuation",
    subtitle: "AI-powered car value assessment", 
    badge: "Apply Now",
    href: "/products/car-valuation"
  },
  {
    title: "Credit Cards",
    subtitle: "Premium rewards and benefits",
    badge: "Best Offers", 
    href: "/products/credit-cards"
  }
]

export function ProductCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <div key={index} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50">
          <div className="absolute left-0 top-0">
            <span className="inline-block rounded-br-xl px-3 py-1 text-[10px] font-bold uppercase tracking-wide bg-[#FFD700] text-[#01035B]">
              {product.badge}
            </span>
          </div>

          <div className="mt-6 flex flex-col items-start">
            <Link href={product.href} className="block">
              <h3 className="mb-3 text-[20px] font-bold text-gray-900 transition-colors group-hover:text-[#00BCD6]">{product.title}</h3>
            </Link>
            
            <p className="mb-5 text-[16px] leading-[1.4] text-gray-600">
              {product.subtitle}
            </p>
          </div>

          <div className="mt-auto">
            <Link href={product.href} className="inline-flex items-center text-[14px] font-bold text-[#00BCD6] hover:underline">
              Apply Now
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      ))}
    </div>
  )
}