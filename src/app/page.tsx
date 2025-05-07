'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      
      {/* Fixed Fee Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Say Hello To Fixed Fees
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-2xl font-bold text-blue-600">$4,999</div>
                <div className="mt-2 text-gray-600">flat fee</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-2xl font-bold text-blue-600">$35</div>
                <div className="mt-2 text-gray-600">per showing</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-2xl font-bold text-blue-600">$100</div>
                <div className="mt-2 text-gray-600">per offer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
              {[
                {
                  title: "Explore",
                  description: "Explore MLS house listings using your favourite application and shortlist interested properties."
                },
                {
                  title: "Schedule Showings",
                  description: "Use our web portal (or chat/call) to schedule showings for the shortlisted properties as per your convenience."
                },
                {
                  title: "Submit an Offer",
                  description: "Submit an offer request from our web portal and our realtor would contact you to send in your offer."
                },
                {
                  title: "Close the deal",
                  description: "Close on your accepted offer. Robinhood Properties would help you with full legal or mortgage support if required."
                },
                {
                  title: "Receive cashback",
                  description: "Receive your cashback which would depend on the property commission."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Calculate Your Savings
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Use our calculator to estimate your potential savings
            </p>
            <Calculator />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
