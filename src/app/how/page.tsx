'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function How() {
  const steps = [
    {
      number: 1,
      title: "Explore",
      description: "Explore MLS house listings using your favourite application and shortlist interested properties.",
      details: [
        "Browse listings at your own pace",
        "No pressure or pushy sales tactics",
        "Use any MLS platform you prefer",
        "Save your favorite properties"
      ]
    },
    {
      number: 2,
      title: "Schedule Showings",
      description: "Use our web portal (or chat/call) to schedule showings for the shortlisted properties as per your convenience.",
      details: [
        "Only $35 per showing",
        "Flexible scheduling",
        "No cancellation fees",
        "Professional guidance during viewings"
      ]
    },
    {
      number: 3,
      title: "Submit an Offer",
      description: "Submit an offer request from our web portal and our realtor would contact you to send in your offer with your terms and conditions.",
      details: [
        "$100 per offer submission",
        "Expert negotiation support",
        "Includes counter-offers",
        "Professional advice on terms"
      ]
    },
    {
      number: 4,
      title: "Close the deal",
      description: "Close on your accepted offer. Robinhood Properties would help you with full legal or mortgage support if required.",
      details: [
        "Full closing support",
        "Legal assistance available",
        "Mortgage guidance",
        "Document preparation help"
      ]
    },
    {
      number: 5,
      title: "Receive cashback",
      description: "Receive your cashback which would depend on the property commission.",
      details: [
        "Transparent fee structure",
        "Only $4,999 flat fee",
        "Maximum cashback guaranteed",
        "Quick payment processing"
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
              How It Works
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Our simple 5-step process to help you save money on your home purchase
            </p>
          </motion.div>

          <div className="mt-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mb-16 last:mb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                          {step.number}
                        </div>
                        <h2 className="ml-4 text-2xl font-bold text-gray-900">{step.title}</h2>
                      </div>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center text-gray-600">
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
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`}>
                    <div className="h-64 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg opacity-75" />
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-8">
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
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
              Ready to get started?
            </h2>
            <p className="mt-4 text-gray-600">
              Contact us today to begin your home buying journey with Robin Hood Properties.
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