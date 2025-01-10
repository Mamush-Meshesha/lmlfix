import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-gray-400">
              Professional device repair services with quick turnaround times
              and premium quality parts.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-2">
              <a
                href="tel:206-832-5834"
                className="flex items-center space-x-2 text-gray-400 hover:text-brand-yellow transition-colors"
              >
                <Phone size={18} />
                <span>(206) 832-5834</span>
              </a>
              <a
                href="mailto:contact@lmlrepair.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-brand-yellow transition-colors"
              >
                <Mail size={18} />
                <span>contact@lmlrepair.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} />
                <span>3400 Harbor Ave SW STE #301, Seattle, WA 98126</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-brand-yellow transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-yellow transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-yellow transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} LML Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
