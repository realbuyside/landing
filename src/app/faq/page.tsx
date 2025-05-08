'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6">
          <svg
            className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "How Does The Cashback Process Work?",
      answer: "Once we receive the commission from the seller agent, we immediately split it 50/50 with you. You receive half of the total commission as cashback. We can try to negotiate a reduction in the overall purchase price, but this is not always possible."
    },
    {
      question: "What Is The Process for Showings?",
      answer: "To schedule a property viewing, you can use our web portal or reach out to us via email or phone. We'll work to accommodate your preferred time based on the property's availability. All showings are completely free, and we will not pressure you into seeing properties. Additionally, there is NO charge for cancelled showings at any time."
    },
    {
      question: "When Do I Receive My Cashback?",
      answer: "You don't have to pay us directly. When we receive a commission from the listing brokerage, we split it 50/50 with you. Your half of the commission will be given to you as cashback. If you want to fully remove the listing brokerage's commission and pay us directly we can try to work it out."
    },
    {
      question: "Areas Of Service?",
      answer: "We serve around the Greater Ottawa Area. Our main areas are Ottawa, Kanata, Nepean, and Orleans. We're willing to go a bit further as well depending on the circumstances (such as multiple showings in one day)."
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
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Find answers to common questions about our services and process
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
            <p className="mt-4 text-gray-600">
              Contact us directly at{' '}
              <a href="mailto:general@HomeBuyerSavings.ca" className="text-blue-600 hover:text-blue-800">
                general@HomeBuyerSavings.ca
              </a>
              {' '}or call us at{' '}
              <a href="tel:(613)-794-2889" className="text-blue-600 hover:text-blue-800">
                (613)-794-2889
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
} 