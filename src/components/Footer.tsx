const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Home Buyer Savings</h3>
            <p className="text-gray-400">Greater Ottawa Area</p>
            <p className="text-gray-400">(613)-794-2889</p>
            <p className="text-gray-400">general@homebuyersavings.ca</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Home Buyer savings</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Ottawa</li>
              <li>Kanata</li>
              <li>Nepean</li>
              <li>Greater Ottawa Area and Surrounding Areas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Home Buyer Savings. All rights reserved.
          </p>
          <div className="mt-4 text-center text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white mx-2">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms" className="hover:text-white mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 