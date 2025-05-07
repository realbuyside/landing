const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Home Buyer Savings</h3>
            <p className="text-gray-400">Greater Ottawa Area</p>
            <p className="text-gray-400">(437)-755-2882</p>
            <p className="text-gray-400">general@HomeBuyerSavings.ca</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">AimHome Realty Inc.</h3>
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-md flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
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