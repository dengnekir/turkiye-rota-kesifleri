
import React from 'react';
import { MapPin, Heart, Star } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Türkiye Rehberi</h1>
              <p className="text-sm text-gray-600">Gezilecek Yerler</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Heart className="h-4 w-4" />
              <span>Favorilerim</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Star className="h-4 w-4" />
              <span>Öneriler</span>
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all">
              Giriş Yap
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
