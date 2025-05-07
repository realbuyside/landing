'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Navigation />
      
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              About Home Buyer Savings
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Founded in 2022, we're shaking up the real estate industry by offering a fairer, faster way to buy and sell property.
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The Game's Rigged, We're Changing the Rules
                </h2>
                <p className="text-gray-600">
                  Let's face it, the real estate market is booming, but are traditional agents working harder? 
                  Nope. Technology simplifies their job, yet fees remain sky-high, taking a huge chunk of your 
                  hard-earned cash.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome to the Real Estate Revolution
                </h2>
                <p className="text-gray-600">
                  Just like other industries, real estate is going digital. At Home Buyer Savings, 
                  we leverage technology to streamline the process, allowing our agents to focus on 
                  exceptional service, not paperwork.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  More than Flat Fees, We're About Fairness
                </h2>
                <p className="text-gray-600">
                  Home Buyer Savings isn't just about saving you money. We believe in transparency, 
                  integrity, and exceeding expectations. Our team is dedicated to providing a seamless, 
                  stress-free experience, leaving you with a smile - and a roof over your head.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Team
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Mike Zhou</h3>
                    <p className="text-gray-600">Real Estate Salesperson</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Elaine Su</h3>
                    <p className="text-gray-600">Real Estate Salesperson</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
} 