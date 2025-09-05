import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Katta Nagaraju. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center justify-center">
              Built with passion for engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;