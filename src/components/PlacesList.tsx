
import React from 'react';
import { MapPin, Star, Heart, Camera } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  city: string;
  district: string;
  rating: number;
  image: string;
  description: string;
  tags: string[];
}

interface PlacesListProps {
  selectedCity: string | null;
  searchQuery: string;
  onCitySelect: (city: string) => void;
}

const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Ayasofya Camii',
    city: 'İstanbul',
    district: 'Fatih',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'Tarihi ve mimari harikası',
    tags: ['Tarihi', 'Mimari', 'Dini']
  },
  {
    id: '2',
    name: 'Kapalıçarşı',
    city: 'İstanbul',
    district: 'Fatih',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Geleneksel alışveriş merkezi',
    tags: ['Alışveriş', 'Tarihi', 'Kültürel']
  },
  {
    id: '3',
    name: 'Anıtkabir',
    city: 'Ankara',
    district: 'Çankaya',
    rating: 4.9,
    image: '/placeholder.svg',
    description: 'Atatürk\'ün mausolesi',
    tags: ['Tarihi', 'Anıt', 'Müze']
  },
  {
    id: '4',
    name: 'Kordon',
    city: 'İzmir',
    district: 'Konak',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Sahil boyunca yürüyüş',
    tags: ['Doğa', 'Yürüyüş', 'Sahil']
  },
  {
    id: '5',
    name: 'Kaleiçi',
    city: 'Antalya',
    district: 'Muratpaşa',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Tarihi Antalya merkezi',
    tags: ['Tarihi', 'Yürüyüş', 'Mimari']
  }
];

export const PlacesList: React.FC<PlacesListProps> = ({ selectedCity, searchQuery, onCitySelect }) => {
  const filteredPlaces = mockPlaces.filter(place => {
    const matchesCity = !selectedCity || place.city === selectedCity;
    const matchesSearch = !searchQuery || 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.district.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCity && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-fit">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            {selectedCity ? `${selectedCity} - Gezilecek Yerler` : 'Tüm Gezilecek Yerler'}
          </h2>
          {selectedCity && (
            <button
              onClick={() => onCitySelect('')}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Tümünü Göster
            </button>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {filteredPlaces.length} yer bulundu
        </p>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            className="p-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => onCitySelect(place.city)}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-16 h-16 rounded-lg object-cover bg-gray-200"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 truncate">{place.name}</h3>
                
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{place.district}, {place.city}</span>
                </div>
                
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{place.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {place.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {place.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPlaces.length === 0 && (
        <div className="p-8 text-center">
          <div className="text-gray-400 text-4xl mb-2">🗺️</div>
          <h3 className="text-gray-600 font-medium mb-1">Henüz yer bulunamadı</h3>
          <p className="text-gray-500 text-sm">
            {selectedCity ? `${selectedCity} için henüz öneri yok` : 'Arama kriterlerinizi değiştirmeyi deneyin'}
          </p>
        </div>
      )}
    </div>
  );
};
