
import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Şehir, ilçe veya mekan arayın..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
        />
      </div>
      
      <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
        <Filter className="h-5 w-5 text-gray-600" />
        <span className="text-gray-600">Filtrele</span>
      </button>
    </div>
  );
};
