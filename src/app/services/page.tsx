'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Buyer Services",
      description: "Pay upfront for showings and offers, then save big with our cashback program.",
      features: [
        "$35 per showing",
        "$100 per offer",
        "$4,999 on closing",
        "Huge cashback on closing",
        "No commitment required",
        "Professional negotiation",
        "Full legal support",
        "Mortgage assistance"
      ]
    },
    {
      title: "Seller Services",
      description: "Pay a fixed low cost amount for full service, regardless of your property value.",
      features: [
        "$4,999 fixed fee",
        "Professional photos included",
        "MLS listing",
        "Marketing strategy",
        "Showing coordination",
        "Offer negotiation",
        "Closing support",
        "Legal assistance"
      ]
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transparent pricing and comprehensive real estate services
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-blue-600 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-8 bg-gray-50">
                  <a
                    href="/contact"
                    className="block w-full text-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to save on your real estate transaction?
            </h2>
            <p className="mt-4 text-gray-600">
              Contact us today to learn more about our services and how we can help you save money.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
} 