'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, Calculator, CheckCircle2, Wallet, Home, FileCheck, PiggyBank } from 'lucide-react';
import { ProductCards } from '@/components/product-cards';
import { FinancialProductsCards } from '@/components/financial-products-cards';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#01035B]">
      <HeroBanner />
      <CreditScoreBanner />
      <FinancialProductsSection />
      <CreditCardsSection />
      <LoanStepsSection />
      <FinancialCalculators />
      <TrustedPartnersSection />
      <FAQSection />
      <BankingPartners />
    </main>
  );
}



function HeroBanner() {
  return (
    <div className="relative w-full bg-gray-50 overflow-hidden font-sans">
      <section className="relative w-full pb-10 pt-[60px] md:pb-20 md:pt-[60px]">


        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="w-full">
            <BannerCarousel />
          </div>

          <div className="mt-12 md:mt-20">
            <ProductCards />
          </div>
        </div>
      </section>
    </div>
  );
}

function TextRotator() {
  const [index, setIndex] = useState(0);
  const words = ["Solutions", "Expertise", "Support"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative h-[1.3em] overflow-hidden md:h-[1.4em] inline-block min-w-[200px] align-bottom">
      <span className="text-gray-800 block animate-slide-up-down">
        {words[index]}
      </span>
      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up-down {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function MilestoneItem({ icon, value, suffix, label, width }: { icon: string, value: string, suffix: string, label: string, width?: number }) {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <div className="shrink-0 pt-1">
        <img src={icon} alt="" width={width || 24} height={width || 24} className="h-auto w-8 md:w-10" />
      </div>
      <div>
        <p className="mb-1 text-lg font-bold text-gray-800 md:text-xl md:mb-2">
          {value} <span className="text-gray-800">{suffix}</span>
        </p>
        <p className="text-sm font-normal text-gray-600 md:text-[14px]">{label}</p>
      </div>
    </div>
  );
}

function BannerCarousel() {
  const banners = [
    { id: 1, src: "https://cdn.urbanmoney.com/homepageimages/creditscorebanner.svg", link: "/credit-score" },
    { id: 2, src: "https://cdn.urbanmoney.com/homepageimages/personaloanbanner.svg", link: "/personal-loan" },
    { id: 3, src: "https://cdn.urbanmoney.com/homepageimages/carloanbanner.svg", link: "/car-loan" },
    { id: 4, src: "https://cdn.urbanmoney.com/homepageimages/creditcardbanner.svg", link: "/credit-card" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex === banners.length - 1 ? 0 : prevIndex + 1);
    }, 4000);
    return () => { resetTimeout(); };
  }, [currentIndex, banners.length]);

  if (!mounted) {
    return (
      <div className="group relative w-full overflow-hidden rounded-xl">
        <div className="flex transition-transform duration-700 ease-out">
          <div className="min-w-full cursor-pointer px-1">
            <img src={banners[0].src} alt="Banner 1" className="h-auto w-full object-contain rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative w-full overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full cursor-pointer px-1">
            <a href={banner.link} className="block w-full">
              <img src={banner.src} alt={`Banner ${banner.id}`} className="h-auto w-full object-contain rounded-xl hover:opacity-95 transition-opacity" />
            </a>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-white' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white opacity-0 transition hover:bg-black/40 group-hover:opacity-100"
        onClick={() => setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1)}
      >
        <ChevronRight className="h-5 w-5 rotate-180" />
      </button>
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white opacity-0 transition hover:bg-black/40 group-hover:opacity-100"
        onClick={() => setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1)}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}



function CreditScoreBanner() {
  return (
    <section className="w-full py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-[1170px]">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <div className="w-full relative">
            <img src="https://www.urbanmoney.com/assets/images/homepageimages/cibilbannerbg.png" alt="CIBIL Banner Background" width={1170} height={300} className="hidden md:block w-full h-auto object-cover min-h-[220px]" />
            <img src="https://www.urbanmoney.com/assets/images/homepageimages/cibilbannerbgmobile.png" alt="CIBIL Banner Background Mobile" width={400} height={300} className="block md:hidden w-full h-auto object-cover min-h-[340px]" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 md:px-12">
            <h2 className="text-[#222222] font-medium text-[22px] md:text-[28px] leading-[1.3] md:leading-[36px] mb-3 md:mb-4">
              Check your <span className="font-bold text-[#00BCD6]">Credit Score</span> <span className="hidden md:inline"> </span>
              <br className="block md:hidden" />
              <span className="relative inline-block">
                <span className="relative z-10">
                  <span className="line-through decoration-gray-500 decoration-1 opacity-70">worth ₹500</span> for FREE
                </span>
              </span>
            </h2>

            <p className="text-[#222222] text-[15px] md:text-[16px] leading-[1.4] md:leading-[1.5] mb-5 opacity-90">
              10K+ customers have improved their <span className="md:inline block">financial health with us!</span>
            </p>

            <Link href="/cibil-credit-score" className="inline-flex items-center justify-center bg-[#00BCD6] hover:bg-[#1bc4ac] transition-colors text-white font-bold text-[14px] py-3 px-6 rounded-full shadow-sm hover:shadow-md group">
              Get Free Credit Score
              <ChevronRight className="w-4 h-4 ml-1 stroke-[3px] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinancialProductsSection() {
  const products = [
    { title: "Business Loans", description: "Business growth capital solutions", icon: "https://cdn.urbanmoney.com/homepageimages/buisnessloanicon.svg", link: "/products/business-loans", cta: "Apply Now" },
    { title: "Used Car Loan", description: "Pre-owned car financing with best rates", icon: "https://cdn.urbanmoney.com/homepageimages/lapicon.svg", link: "/used-car-loan", cta: "Apply Now" },
    { title: "Education Loans", description: "Study financing for India & abroad", icon: "https://cdn.urbanmoney.com/homepageimages/creditscoreicon.svg", link: "/products/education-loans", cta: "Apply Now", badge: "Study Abroad" },
    { title: "Car Valuation", description: "Free AI-powered car assessment", icon: "https://cdn.urbanmoney.com/homepageimages/allcalcicon.svg", link: "/products/car-valuation", cta: "Check Value" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F5F5F5] text-[#222222]">
      <div className="container mx-auto px-4 max-w-[1170px]">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[20px] md:text-[36px] font-bold text-[#222222] mb-3 leading-tight">
            Find the Right Financial <span className="text-[#00BCD6]">Product</span>
          </h2>
          <p className="text-[12px] md:text-[16px] text-[#222222] opacity-80 leading-relaxed max-w-2xl mx-auto">
            Get started in minutes with our simple, fast, and convenient application process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div key={index} className="group relative bg-white rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center h-full border border-transparent hover:border-[#00BCD6]/20">
              {product.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#01035B] text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full shadow-sm z-10 uppercase tracking-wide whitespace-nowrap">
                  {product.badge}
                </span>
              )}

              <div className="mb-4 md:mb-5 w-[35px] h-[30px] flex items-center justify-center relative">
                <img src={product.icon} alt={product.title} width={35} height={30} className="w-auto h-full object-contain" />
              </div>

              <div className="flex-1 flex flex-col items-center w-full">
                <a href={product.link} className="block group-hover:text-[#00BCD6] transition-colors">
                  <h3 className="text-[16px] md:text-[20px] font-bold text-[#222222] mb-2 md:mb-3 group-hover:text-[#00BCD6] transition-colors">
                    {product.title}
                  </h3>
                </a>
                <p className="text-[12px] md:text-[16px] text-[#222222] mb-6 leading-normal min-h-[3rem] line-clamp-2 md:line-clamp-none">
                  {product.description}
                </p>
              </div>

              <button className="mt-auto bg-[#00BCD6] hover:bg-[#1bc1a9] text-white text-[12px] md:text-[14px] font-medium px-6 py-2.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group-hover:scale-105 active:scale-95">
                {product.cta}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-3.5 md:h-3.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreditCardsSection() {
  return (
    <section className="bg-[#2C2C2C] py-10 md:py-20 overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-[1170px]">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[24px] md:text-[36px] font-bold text-white mb-4 md:mb-5 leading-tight">
            Complete <span className="text-[#00BCD6]">Financial Solutions</span> For Your Needs
          </h2>
          <p className="text-white/60 text-[14px] md:text-[16px] leading-6 md:leading-relaxed max-w-[900px] mx-auto">
            From personal loans to home financing, credit cards to business capital - Finonest provides comprehensive <span className="md:block">financial services tailored to your goals and requirements.</span>
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">
            <figure className="w-full md:w-auto flex-shrink-0 flex justify-center md:justify-start">
              <img src="https://cdn.urbanmoney.com/homepageimages/creditcardimg.svg" alt="Credit Cards" width={280} height={325} className="w-[240px] md:w-[280px] h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300" />
            </figure>

            <div className="flex-1 text-center md:text-left">
              <a href="#" className="inline-block group">
                <h3 className="text-[20px] md:text-[26px] font-bold text-white mb-4 group-hover:text-[#00BCD6] transition-colors">
                  Credit Cards
                </h3>
              </a>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                  <img src="https://cdn.urbanmoney.com/homepageimages/whitetick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                  <p className="text-white text-[14px] md:text-[16px] leading-6 text-left">Global Acceptance – Use your card anywhere in the world.</p>
                </li>
                <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                  <img src="https://cdn.urbanmoney.com/homepageimages/whitetick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                  <p className="text-white text-[14px] md:text-[16px] leading-6 text-left">24/7 Concierge Service – Personal travel assistance anytime.</p>
                </li>
                <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                  <img src="https://cdn.urbanmoney.com/homepageimages/whitetick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                  <p className="text-white text-[14px] md:text-[16px] leading-6 text-left">Accelerated Rewards - Double points on flight & hotel bookings.</p>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#" className="bg-[#00BCD6] text-white hover:bg-opacity-90 rounded-full px-6 py-3 text-[14px] md:text-[16px] font-medium flex items-center gap-2 transition-all">
                  Apply Now
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                    <path d="M4 1L9 6L4 11" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="border border-white/30 text-white hover:bg-white hover:text-[#222222] rounded-full px-6 py-3 text-[14px] md:text-[16px] font-medium flex items-center gap-2 transition-all">
                  Explore More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                    <path d="M4 1L9 6L4 11" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-6 md:p-8 shadow-lg flex flex-col md:flex-row-reverse items-center gap-6 md:gap-14">
            <figure className="w-full md:w-auto flex-shrink-0 flex justify-center md:justify-end">
              <img src="https://cdn.urbanmoney.com/homepageimages/personalloancard.svg" alt="Personal Loan" width={280} height={325} className="w-[240px] md:w-[280px] h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300" />
            </figure>

            <div className="flex-1 text-center md:text-left">
              <a href="#" className="inline-block group">
                <h3 className="text-[20px] md:text-[26px] font-bold text-[#222222] mb-4 group-hover:text-[#00BCD6] transition-colors">
                  Personal Loan
                </h3>
              </a>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                  <img src="https://cdn.urbanmoney.com/homepageimages/blacktick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                  <p className="text-[#222222] text-[14px] md:text-[16px] leading-6 text-left">Loan amounts up to <span className="font-bold">₹40 Lakhs</span> with flexible repayment options</p>
                </li>
                <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                  <img src="https://cdn.urbanmoney.com/homepageimages/blacktick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                  <p className="text-[#222222] text-[14px] md:text-[16px] leading-6 text-left">Competitive interest rates starting from <span className="font-bold">10.99% per annum</span></p>
                </li>
                <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                  <img src="https://cdn.urbanmoney.com/homepageimages/blacktick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                  <p className="text-[#222222] text-[14px] md:text-[16px] leading-6 text-left">Fast disbursal within <span className="font-bold">24 hours</span> of document verification</p>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#" className="bg-[#00BCD6] text-white hover:bg-opacity-90 rounded-full px-6 py-3 text-[14px] md:text-[16px] font-medium flex items-center gap-2 transition-all">
                  Apply Now
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                    <path d="M4 1L9 6L4 11" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="border border-[#222222]/20 text-[#222222] hover:bg-[#222222] hover:text-white rounded-full px-6 py-3 text-[14px] md:text-[16px] font-medium flex items-center gap-2 transition-all">
                  Explore More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                    <path d="M4 1L9 6L4 11" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 md:my-14 w-full">
          <a href="#" className="block cursor-pointer hover:opacity-95 transition-opacity">
            <img src="https://www.urbanmoney.com/assets/images/CheckPoonaWallaBanner.jpg" alt="Poonawalla Fincorp Banner" width={1170} height={104} className="w-full h-auto rounded-lg shadow-sm" />
          </a>
        </div>

        <div className="bg-white rounded-[12px] p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-14">
          <figure className="w-full md:w-auto flex-shrink-0 flex justify-center md:justify-start">
            <img src="https://cdn.urbanmoney.com/homepageimages/homeloancard.svg" alt="Home Loan" width={280} height={325} className="w-[240px] md:w-[280px] h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300" />
          </figure>

          <div className="flex-1 text-center md:text-left">
            <a href="#" className="inline-block group">
              <h3 className="text-[20px] md:text-[26px] font-bold text-[#222222] mb-4 group-hover:text-[#00BCD6] transition-colors">
                Home Loan
              </h3>
            </a>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                <img src="https://cdn.urbanmoney.com/homepageimages/blacktick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                <p className="text-[#222222] text-[14px] md:text-[16px] leading-6 text-left">Up to <span className="font-bold">₹5 Crore</span> Loan Amount</p>
              </li>
              <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                <img src="https://cdn.urbanmoney.com/homepageimages/blacktick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                <p className="text-[#222222] text-[14px] md:text-[16px] leading-6 text-left">Low Interest Rates Starting at <span className="font-bold">8.50% p.a.</span></p>
              </li>
              <li className="flex items-start gap-3 md:gap-4 justify-center md:justify-start">
                <img src="https://cdn.urbanmoney.com/homepageimages/blacktick.svg" alt="tick" width={15} height={15} className="mt-1.5 flex-shrink-0" />
                <p className="text-[#222222] text-[14px] md:text-[16px] leading-6 text-left">Quick Approval in <span className="font-bold">48 Hours*</span></p>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#" className="bg-[#00BCD6] text-white hover:bg-opacity-90 rounded-full px-6 py-3 text-[14px] md:text-[16px] font-medium flex items-center gap-2 transition-all">
                Apply Now
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                  <path d="M4 1L9 6L4 11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="border border-[#222222]/20 text-[#222222] hover:bg-[#222222] hover:text-white rounded-full px-6 py-3 text-[14px] md:text-[16px] font-medium flex items-center gap-2 transition-all">
                Explore More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                  <path d="M4 1L9 6L4 11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LoanStepsSection() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 overflow-hidden relative font-sans">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#222222] mb-4">
            Simple. Fast. <span className="text-[#00BCD6]">Reliable.</span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] max-w-2xl mx-auto">
            Your journey to financial success in 4 easy steps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
            <div className="text-[80px] md:text-[120px] lg:text-[150px] font-bold text-[#e5e5e5] opacity-60 md:opacity-80 leading-none whitespace-nowrap tracking-tighter">
              finonest
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-20 gap-y-12 md:gap-y-24">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-end text-center md:text-right md:justify-end gap-6 group">
              <div className="flex-1 order-2 md:order-1 flex flex-col items-center md:items-end">
                <div className="relative mb-2">
                  <span className="absolute -top-6 -right-4 text-6xl font-bold text-[#eeeeee] select-none -z-10 group-hover:text-[#e0e0e0] transition-colors">01</span>
                  <span className="text-[40px] font-bold text-[#222222] leading-none block">01</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#222222] mb-2">Apply Online</h3>
                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[240px]">Fill your details in our secure online application form</p>
              </div>
              <div className="order-1 md:order-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#01035B] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <UserCheckIcon className="w-8 h-8 text-[#00BCD6]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group md:translate-y-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#01035B] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <HandCoinsIcon className="w-8 h-8 text-[#00BCD6]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="relative mb-2">
                  <span className="absolute -top-6 -left-4 text-6xl font-bold text-[#eeeeee] select-none -z-10 group-hover:text-[#e0e0e0] transition-colors">02</span>
                  <span className="text-[40px] font-bold text-[#222222] leading-none block">02</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#222222] mb-2">Get Matched</h3>
                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[240px]">Our AI matches you with the best lenders and rates</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-end text-center md:text-right md:justify-end gap-6 group md:-mt-8">
              <div className="flex-1 order-2 md:order-1 flex flex-col items-center md:items-end">
                <div className="relative mb-2">
                  <span className="absolute -top-6 -right-4 text-6xl font-bold text-[#eeeeee] select-none -z-10 group-hover:text-[#e0e0e0] transition-colors">03</span>
                  <span className="text-[40px] font-bold text-[#222222] leading-none block">03</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#222222] mb-2">Documentation</h3>
                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[240px]">Upload documents and complete verification process</p>
              </div>
              <div className="order-1 md:order-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#01035B] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <ClipboardCheckIcon className="w-8 h-8 text-[#00BCD6]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group md:translate-y-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#01035B] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <LandmarkIcon className="w-8 h-8 text-[#00BCD6]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="relative mb-2">
                  <span className="absolute -top-6 -left-4 text-6xl font-bold text-[#eeeeee] select-none -z-10 group-hover:text-[#e0e0e0] transition-colors">04</span>
                  <span className="text-[40px] font-bold text-[#222222] leading-none block">04</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#222222] mb-2">Get Funded</h3>
                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[240px]">Receive funds directly in your bank account</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center relative z-20">
          <button className="bg-[#01035B] hover:bg-black text-white text-[14px] md:text-[16px] font-medium py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Get Started <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function UserCheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function HandCoinsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <circle cx="16" cy="9" r="2.9" />
      <circle cx="6" cy="5" r="3" />
    </svg>
  );
}

function ClipboardCheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function LandmarkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}

function FinancialCalculators() {
  const calculators = [
    { title: "Personal Loan EMI Calculator", description: "Calculate your EMIs and plan your repayments in advance", icon: Calculator, iconColor: "text-[#5B7FFF]", href: "#" },
    { title: "Personal Loan Eligibility Calculator", description: "Check how much personal loan you can borrow in just a few clicks.", icon: CheckCircle2, iconColor: "text-[#5B7FFF]", href: "#" },
    { title: "Personal Loan Prepayment Calculator", description: "Estimate savings and adjust your prepayments easily.", icon: Wallet, iconColor: "text-[#1B5E3F]", href: "#" },
    { title: "Home Loan EMI Calculator", description: "Work out your monthly home loan EMI quickly and accurately", icon: Home, iconColor: "text-[#FF6B35]", href: "#" },
    { title: "Home Loan Eligibility Calculator", description: "Discover your home loan eligibility and plan your budget.", icon: FileCheck, iconColor: "text-[#00BCD6]", href: "#" },
    { title: "Home Loan Prepayment Calculator", description: "See how prepaying your home loan cuts interest and reduces tenure.", icon: PiggyBank, iconColor: "text-[#DB2777]", href: "#" }
  ];

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-[#2C2C2C] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-[1170px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Smart Financial <span className="text-[#00BCD6]">Tools</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Use our advanced calculators and tools to plan your finances, estimate EMIs, and make informed financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {calculators.map((calc, index) => {
            const Icon = calc.icon;
            return (
              <Link key={index} href={calc.href} className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-8 h-8 ${calc.iconColor}`} strokeWidth={2} />
                </div>

                <h3 className="text-white text-xl font-bold mb-3 leading-tight group-hover:text-[#00BCD6] transition-colors">
                  {calc.title.split(' ').map((word, i, arr) => (
                    <span key={i}>
                      {word}
                      {i === 1 && <br className="hidden md:block" />}
                      {i !== arr.length - 1 && ' '}
                    </span>
                  ))}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed px-2">
                  {calc.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-600 text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm font-medium group">
            Explore More Calculators
            <span className="bg-gray-800 rounded-full p-1 group-hover:bg-black group-hover:text-white transition-colors">
              <ChevronRight className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

const LOCATIONS = [
  { top: "26%", left: "32%" }, { top: "34%", left: "26%" }, { top: "32%", left: "38%" }, { top: "36%", left: "55%" },
  { top: "40%", left: "76%" }, { top: "44%", left: "16%" }, { top: "48%", left: "35%" }, { top: "56%", left: "22%" },
  { top: "55%", left: "28%" }, { top: "62%", left: "38%" }, { top: "72%", left: "32%" }, { top: "78%", left: "38%" },
  { top: "82%", left: "30%" }, { top: "84%", left: "35%" }, { top: "20%", left: "28%" }, { top: "42%", left: "45%" },
];

function TrustedPartnersSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1170px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6 relative w-[168px] h-[42px]">
              <svg width="168" height="42" viewBox="0 0 168 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="5" y="30" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#00BCD6">
                  Finonest
                </text>
              </svg>
            </div>

            <h3 className="text-[28px] md:text-[36px] font-bold text-[#222222] mb-4 leading-tight">
              Trusted By <span className="text-[#00BCD6]">10K+</span> Customers
            </h3>

            <p className="text-[16px] text-[#222222] opacity-60 leading-[24px] mb-8 md:mb-10 max-w-lg lg:max-w-xl">
              Join thousands of satisfied customers who have achieved their financial goals with Finonest. Our comprehensive platform offers personalized solutions for all your financial needs.
            </p>

            <p className="text-[16px] font-bold text-[#222222] mb-4">
              Scan or click to Download App on your mobile
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.squareyards.squarecapital.channelpartner&hl=en_IN&gl=US&pli=1" target="_blank" className="transition-transform hover:scale-105">
                <Image src="https://cdn.urbanmoney.com/homepageimages/playStore.svg" alt="Get it on Google Play" width={135} height={40} className="h-[40px] w-auto" />
              </Link>
              
              <div className="text-[14px] text-[#666666] font-medium px-1">Or</div>

              <Link href="https://apps.apple.com/in/app/urban-money-partner/id1552550186" target="_blank" className="transition-transform hover:scale-105">
                <Image src="https://cdn.urbanmoney.com/homepageimages/appStore.svg" alt="Download on the App Store" width={120} height={40} className="h-[40px] w-auto" />
              </Link>

              <div className="ml-2 bg-white p-1 rounded-sm shadow-sm hidden sm:block">
                <Image src="https://cdn.urbanmoney.com/appPage/qrCode.svg" alt="QR Code" width={50} height={50} className="w-[50px] h-[50px]" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[678px] aspect-[678/615]">
              <Image src="https://cdn.urbanmoney.com/homepageimages/indiaMap.svg" alt="India Map with Coverage" fill className="object-contain" priority />

              {LOCATIONS.map((loc, index) => (
                <div key={index} className="absolute" style={{ top: loc.top, left: loc.left }}>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BCD6] opacity-75 md:h-4 md:w-4 -top-0.5 -left-0.5"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00BCD6] border-[1.5px] border-white ring-1 ring-[#00BCD6]/20"></span>
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5] font-sans">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#222222] mb-4 leading-tight">
            Frequently Asked <span className="text-[#00BCD6]">Questions</span>
          </h2>
          <p className="text-[#666666] text-base md:text-lg leading-relaxed">
            Get answers to common questions about our financial services and loan processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          <div className="lg:col-span-5 xl:col-span-4 w-full h-full min-h-[400px] lg:min-h-[540px] bg-[#01035B] rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-white text-2xl font-bold leading-snug">
                Frequently Asked<br />Questions
              </h3>
            </div>

            <div className="relative flex-1 flex items-center justify-center min-h-[200px]">
              <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
                <div className="absolute left-[20%] top-[30%] text-[#333] text-[80px] font-bold opacity-50 transform -rotate-12 select-none">?</div>
                <div className="absolute right-[20%] top-[20%] text-[#333] text-[60px] font-bold opacity-50 transform rotate-12 select-none">?</div>
                <div className="relative z-10 text-[#00BCD6] text-[120px] font-bold drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 select-none leading-none">?</div>
                <div className="absolute inset-0 bg-[#00BCD6]/10 blur-xl rounded-full z-0 animate-pulse"></div>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h4 className="text-white text-xl font-bold mb-2">We're here to help</h4>
              <p className="text-[#CCCCCC] text-sm leading-relaxed">
                Explore answers to common questions about loans, investments, and your account.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-8 w-full bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E5E5]">
            <Accordion />
          </div>

        </div>
      </div>
    </section>
  );
}

function Accordion() {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleItem = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  const faqData = [
    { id: "item-1", question: "What is Finonest?", answer: "Finonest is a fintech loan aggregator that assists millions in achieving their dream of owning a home. Since 2015, Finonest has changed how lending works by offering personalised loan options from various banks and NBFCs. It guides clients through every loan process step—from selecting the right loan to handling paperwork, legal support, insurance, and disbursing the loan. Finonest uses modern technology to check eligibility, connect with credit bureaus, and work smoothly with loan systems." },
    { id: "item-2", question: "How does Finonest work?", answer: "Finonest simplifies borrowing by connecting individuals with various financial products. Finonest offers personal loans, home loans, business loans, and loans against property. Through its digital platform, users can compare loan options from over 95 lenders, ensuring they find the best fit for their financial needs. The platform offers tools like EMI calculators and eligibility checkers to assist users in making informed decisions. By streamlining the application process and providing personalised recommendations, Finonest aims to make accessing financial services more efficient and user-friendly." },
    { id: "item-3", question: "Is Finonest safe?", answer: "Finonest is a reputable fintech company in India, partnering with over 95 trusted banks and financial institutions to deliver reliable services. With advanced technology, Finonest safeguards user data and transactions, following strict security protocols to ensure privacy. Offering transparent loan options and personalised financial advice, it provides a secure, trustworthy platform for financial products. For every CIBIL score check, Finonest questions your consent, ensuring your information remains private. No data is shared without permission, making Finonest a trusted choice for borrowers seeking safe, efficient financial solutions." },
    { id: "item-4", question: "Does Finonest store my bank login credentials?", answer: "No, Finonest does not store your bank login credentials. Users are requested to create their own accounts, wherein the login credentials are strictly private and should not be shared with others, as account access and credits are exclusively available to each user individually. The platform prioritises user privacy and security, ensuring that sensitive information, such as login details, remains confidential and is not retained on their systems. This approach aligns with industry best practices to protect users' financial data." },
    { id: "item-5", question: "Will my information be shared with third parties?", answer: "Finonest may share your information with other companies when necessary. This can include sharing with banks or lenders to help process your loan application and with service providers for customer support or marketing. They may also share details if required by law or to prevent fraud. Finonest ensures that any company receiving your information will keep it safe and use it only for the intended purpose so your privacy remains protected. Refer to the Finonest website to learn more about privacy and policy." }
  ];

  return (
    <div className="flex flex-col space-y-4">
      {faqData.map((item) => {
        const isOpen = openItem === item.id;
        return (
          <div key={item.id} className={`border-b border-[#E5E5E5] last:border-0 pb-4 ${isOpen ? 'pt-2' : 'pt-4'}`}>
            <button onClick={() => toggleItem(item.id)} className="flex w-full items-start justify-between text-left group focus:outline-none" aria-expanded={isOpen}>
              <span className={`text-[#222222] font-bold text-lg leading-7 transition-colors group-hover:text-[#00BCD6] ${isOpen ? 'text-[#00BCD6]' : ''}`}>
                {item.question}
              </span>
              <span className="ml-4 flex-shrink-0 pt-1">
                <ChevronDownIcon className={`h-5 w-5 text-[#222222] transition-transform duration-300 ease-out ${isOpen ? 'rotate-180 text-[#00BCD6]' : ''}`} />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <p className="text-[#666666] text-base leading-7 pr-4">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const partners = [
  { name: "HDFC Bank", short: "HDFC" }, { name: "L&T Financial Services", short: "L&T" }, { name: "Tata Capital", short: "Tata" },
  { name: "Piramal Finance", short: "Piramal" }, { name: "InCred", short: "InCred" }, { name: "Zype", short: "Zype" },
  { name: "Privo", short: "Privo" }, { name: "Fi", short: "Fi" }, { name: "Standard Chartered", short: "SC" },
  { name: "Bank of Baroda", short: "BoB" }, { name: "SBI", short: "SBI" }, { name: "Bank of Baroda", short: "BoB" },
  { name: "Canara Bank", short: "Canara" }, { name: "Punjab National Bank", short: "PNB" }, { name: "Bank of Maharashtra", short: "BOM" },
  { name: "Indian Bank", short: "Indian" }, { name: "Bank of India", short: "BOI" }, { name: "Punjab & Sind Bank", short: "P&S" },
  { name: "Union Bank", short: "Union" }, { name: "Axis Bank", short: "Axis" }, { name: "Kotak Mahindra Bank", short: "Kotak" },
  { name: "IndusInd Bank", short: "IndusInd" }, { name: "DCB Bank", short: "DCB" }, { name: "IDFC First Bank", short: "IDFC" },
  { name: "ICICI Bank", short: "ICICI" }, { name: "Yes Bank", short: "Yes" }, { name: "Deutsche Bank", short: "Deutsche" },
  { name: "Reliance", short: "Reliance" }, { name: "HDFC Sales", short: "HDFC" }, { name: "Citi", short: "Citi" },
  { name: "RBL Bank", short: "RBL" }, { name: "Federal Bank", short: "Federal" }, { name: "Karur Vysya Bank", short: "KVB" },
  { name: "Karnataka Bank", short: "Karnataka" }, { name: "IDBI Bank", short: "IDBI" }, { name: "LIC HFL", short: "LIC" },
  { name: "HSBC", short: "HSBC" }, { name: "HDFC", short: "HDFC" }, { name: "U GRO Capital", short: "U GRO" },
  { name: "DHFL", short: "DHFL" }, { name: "SMFG India Credit", short: "SMFG" }, { name: "Bajaj Finserv", short: "Bajaj" },
];

function BankingPartners() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#01035B] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <svg className="absolute left-[-10%] top-0 h-full w-1/2 text-[#333]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 C 30 20, 40 40, 30 60 C 20 80, 40 100, 50 100 L 0 100 Z" fill="currentColor" />
          <path d="M0 0 C 40 30, 50 50, 40 70 C 30 90, 50 100, 60 100 L 0 100 Z" fill="currentColor" className="opacity-50" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-4/12 flex-shrink-0 pt-4">
            <h2 className="text-3xl md:text-[40px] leading-[1.2] font-bold text-white mb-6">
              Our <span className="text-[#00BCD6]">50+</span> Banking Partners
            </h2>
            <p className="text-gray-400 text-base md:text-[16px] leading-relaxed mb-8 max-w-md">
              We partner with leading banks and financial institutions to bring you the best rates and terms for your financial needs.
            </p>
            <Link href="/banking-partners" className="inline-flex items-center justify-center bg-[#00BCD6] hover:bg-[#1abea6] text-[#01035B] text-sm md:text-base font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 group">
              View All Banks
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="w-full lg:w-8/12">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
              {partners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="bg-white h-12 md:h-14 rounded-md md:rounded-lg shadow-sm flex items-center justify-center p-2 hover:shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden group" title={partner.name}>
                  <span className="text-[10px] md:text-xs font-bold text-gray-700 text-center leading-tight group-hover:text-[#00BCD6] transition-colors truncate w-full px-1">
                    {partner.short}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#001B84] text-white">
      <MostSearchedLinks />

      <div className="container mx-auto px-4 lg:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="mb-2">
              <svg width="150" height="32" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="5" y="24" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#FFFFFF">
                  Finonest
                </text>
              </svg>
            </div>

            <p className="text-[12px] leading-relaxed text-gray-400 text-justify">
              Finonest is India&apos;s one of the unbiased loan advisor for best deals in loans and unmatched advisory services. We are one stop shop for all types of lending solutions. We manage the entire borrowing process for clients, starting by assisting our clients to choose the right product from the appropriate lending organization,till the time, the entire loan is disbursed.
            </p>

            <div className="space-y-4">
              <h3 className="text-white font-bold text-sm">Contact Us</h3>
              <div className="space-y-2 text-[12px] text-gray-400">
                <p>1st Floor, Tower A, M3M Urbana Business Park,<br />Sector 67, near M3M Urbana,<br />Gurugram, Haryana 122001</p>
                <p><span className="text-gray-400">Toll free number : </span><span className="text-white">1800 208 3344</span></p>
                <p><span className="text-gray-400">Write to us at : </span>
                  <a href="mailto:connect@finonest.com" className="text-white hover:text-[#00BCD6] transition-colors">connect@finonest.com</a>
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-white font-bold text-sm">Keep in Touch</h3>
              <div className="flex space-x-3">
                <SocialLink href="#" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>} />
                <SocialLink href="#" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>} />
                <SocialLink href="#" icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.065c.636-.247 1.363-.416 2.427-.465C8.901 1.534 9.28 1.5 12.315 1.5h.08zm1.88 5.766a5.44 5.44 0 11-5.44 0 5.44 5.44 0 015.44 0zM12 7.77a4.23 4.23 0 100 8.46 4.23 4.23 0 000-8.46z " clipRule="evenodd" /></svg>} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-[12px] uppercase tracking-wide">Products</h3>
              <ul className="space-y-2">
                {["Home Loan", "Personal Loan", "Business Loan", "Loan Against Property", "Car Loan", "Two Wheeler Loan", "Commercial Vehicle Loan"].map((item) => (
                  <li key={item}><FooterLink href="#" text={item} /></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-[12px] uppercase tracking-wide">Group Company</h3>
              <ul className="space-y-2">
                {["Square Yards", "Square Yards Canada", "Square Yards Australia", "Square Yards UAE", "Interior Company", "Urban Money Australia", "PropVR"].map((item) => (
                  <li key={item}><FooterLink href="#" text={item} /></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-[12px] uppercase tracking-wide">Company</h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Contact Us", "Blog", "Careers", "FAQs", "Become a Partner"].map((item) => (
                  <li key={item}><FooterLink href="#" text={item} /></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-[12px] uppercase tracking-wide">Useful Links</h3>
              <ul className="space-y-2">
                {["DLG Guidelines", "RBI Sachet"].map((item) => (
                  <li key={item}><FooterLink href="#" text={item} /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500">
          <div className="mb-2 md:mb-0 text-center md:text-left">© 2025 www.finonest.com. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#00BCD6] transition-colors">Terms and Conditions</a>
            <span>-</span>
            <a href="#" className="hover:text-[#00BCD6] transition-colors">Policy of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MostSearchedLinks() {
  return (
    <div className="w-full bg-[#01035B] border-b border-[#444444]">
      <div className="container mx-auto px-4 lg:px-6">
        <details className="group">
          <summary className="flex items-center justify-center py-3 cursor-pointer list-none text-white text-[13px] font-medium hover:text-[#00BCD6] transition-colors">
            <span>Most Searched Links</span>
            <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="py-4 pb-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-accordion-down">
            {["Personal Loan", "Home Loan", "Business Loan", "Loan Against Property", "Vehicle Loan", "CIBIL Score", "Interest Rates", "Calculators", "Knowledge Hub", "Tools & Utilities"].map((link, idx) => (
              <a key={idx} href="#" className="text-gray-400 hover:text-[#00BCD6] text-[12px] transition-colors text-center">{link}</a>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-gray-400 hover:text-white hover:border-[#00BCD6] hover:bg-[#00BCD6] transition-all duration-300">
      {icon}
    </a>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} className="text-gray-400 hover:text-[#00BCD6] text-[12px] transition-colors block">{text}</a>
  );
}

function FloatIcon() {
  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 pointer-events-none md:bottom-10 md:right-10">
        
        <div className="pointer-events-auto relative mr-4 mb-2 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <button className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#CCCCCC] text-white hover:bg-gray-400 transition-colors shadow-sm" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>

          <div className="relative bg-white rounded-xl py-3 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex flex-col items-center gap-2 min-w-[180px]">
            <a href="#" className="flex items-center justify-center gap-1 bg-[#FF6B35] hover:bg-[#ff8c61] text-white text-[12px] font-bold py-1.5 px-4 rounded-full transition-all duration-300">
              Connect Now
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>

            <div className="absolute top-1/2 -right-[6px] -mt-1.5 h-3 w-3 rotate-45 bg-white border-t border-r border-transparent shadow-[2px_-2px_2px_rgba(0,0,0,0.02)]"></div>
          </div>
        </div>

        <button className="pointer-events-auto group relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#00BCD6] shadow-[0_4px_12px_rgba(31,210,184,0.4)] transition-transform hover:scale-105 active:scale-95" aria-label="Open Chat">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00BCD6] opacity-20 duration-1000"></span>
          
          <div className="relative h-[24px] w-[24px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="9" cy="10" r="1" fill="white"/>
              <circle cx="12" cy="10" r="1" fill="white"/>
              <circle cx="15" cy="10" r="1" fill="white"/>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}
