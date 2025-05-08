'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      
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
                  description: "Close on your accepted offer. HomeBuyer Savings would help you with full legal or mortgage support if required."
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

      {/* Properties Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Properties We've Helped Buy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here are some properties we've helped our clients purchase and the amount saved
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg"
            >
              <div className="h-64 bg-gray-200">
                <Image
                  src="/ottawa-property.jpg"
                  alt="Ottawa Property"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Saved: $16,875</h3>
                <p className="mt-2 text-lg">Ottawa</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg"
            >
              <div className="h-64 bg-gray-200">
                <Image
                  src="/kanata-property.jpg"
                  alt="Kanata Property"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Saved: $15,500</h3>
                <p className="mt-2 text-lg">Kanata</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg"
            >
              <div className="h-64 bg-gray-200">
                <Image
                  src="/orleans-property.jpg"
                  alt="Orleans Property"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Saved: $10,000</h3>
                <p className="mt-2 text-lg">Orleans</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl font-semibold text-gray-900">
              Total savings for our clients:
              <span className="text-blue-600 ml-2">Over $200,000</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real experiences from homebuyers who saved thousands
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">S</span>
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">Kanata</div>
                </div>
              </div>
              <p className="text-gray-600">
                "We saved over $11,500 on our home purchase in Kanata! The process was straightforward, 
                and we appreciated being in control of our home buying journey. The showing agent was 
                professional and gave us honest feedback about the properties."
              </p>
              <div className="mt-4 flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">M</span>
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">Michael & Lisa T.</div>
                  <div className="text-sm text-gray-500">Orleans</div>
                </div>
              </div>
              <p className="text-gray-600">
                "As first-time homebuyers, we were nervous about the process. HomeBuyer Savings made it 
                easy and transparent. Their fixed fee structure meant no surprises, and we received 
                excellent support during negotiations. Saved $14,000!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">R</span>
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">Raj & Priya P.</div>
                  <div className="text-sm text-gray-500">Nepean</div>
                </div>
              </div>
              <p className="text-gray-600">
                "The calculator was spot-on with our savings estimate. We viewed multiple properties 
                at our convenience without any pressure from agents. The professional service and flexibility 
                made the process easy. Ended up saving $18,300 on our dream home!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
