import { CheckCircle } from "lucide-react";

// Footer Component
const Footer = () => (
  <footer className="bg-gray-950 font-segoe border-t border-gray-800 text-white py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <img src="image.png" alt="" className="w-40" />
          </div>
          <p className="text-gray-300 text-md md:text-lg font-extralight max-w-md mb-4 leading-relaxed">
            Building the future of team communication with subscription-based
            innovation. Get continuous updates, new features, and dedicated
            support.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-300 font-medium">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Regular feature updates included</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Product</h4>
          <ul className="space-y-2 text-sm text-gray-300 font-medium">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p className="text-sm font-medium">
          &copy; 2025 Dopebase chat. Built with passion for better team
          communication.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;