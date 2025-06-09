
import React from 'react';
import { MapPin, Star, Heart, Camera, Clock, Users } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  city: string;
  district: string;
  rating: number;
  image: string;
  description: string;
  tags: string[];
  historicalPeriod?: string;
  visitDuration?: string;
}

interface PlacesListProps {
  selectedCity: string | null;
  searchQuery: string;
  onCitySelect: (city: string) => void;
}

const mockPlaces: Place[] = [
  // Mardin Tarihi Yerleri
  {
    id: 'mardin-1',
    name: 'Mardin Kalesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Artuklu döneminden kalma tarihi kale, Mardin\'in simgesi',
    tags: ['Tarihi', 'Kale', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (12. yy)',
    visitDuration: '2-3 saat'
  },
  {
    id: 'mardin-2',
    name: 'Deyrü\'z-Zafaran Manastırı',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'Safran Manastırı olarak da bilinen, Süryani Ortodoks kilisesi',
    tags: ['Tarihi', 'Manastır', 'Süryani'],
    historicalPeriod: 'MS 493',
    visitDuration: '1-2 saat'
  },
  {
    id: 'mardin-3',
    name: 'Kasımiye Medresesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Artuklu döneminin en güzel medrese örneklerinden biri',
    tags: ['Tarihi', 'Medrese', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1469)',
    visitDuration: '1 saat'
  },
  {
    id: 'mardin-4',
    name: 'Mardin Ulu Camii',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Mardin\'in en eski ve büyük camisi, Artuklu mimarisi',
    tags: ['Tarihi', 'Cami', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1176)',
    visitDuration: '45 dakika'
  },
  {
    id: 'mardin-5',
    name: 'Zinciriye Medresesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Sultan İsa Medresesi olarak da bilinen, taş işçiliğiyle ünlü',
    tags: ['Tarihi', 'Medrese', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1385)',
    visitDuration: '1 saat'
  },
  {
    id: 'mardin-6',
    name: 'Latifiye Camii',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Abdüllatif Camii olarak da bilinen, benzersiz taş süslemeler',
    tags: ['Tarihi', 'Cami', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1371)',
    visitDuration: '30 dakika'
  },
  {
    id: 'mardin-7',
    name: 'Şehidiye Camii ve Külliyesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Melik Mansur Camii, türbe ve medrese kompleksi',
    tags: ['Tarihi', 'Külliye', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1214)',
    visitDuration: '1-2 saat'
  },
  {
    id: 'mardin-8',
    name: 'Forty Martyrs Kilisesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.3,
    image: '/placeholder.svg',
    description: 'Kırk Şehitler Kilisesi, Süryani Ortodoks kilisesi',
    tags: ['Tarihi', 'Kilise', 'Süryani'],
    historicalPeriod: 'MS 6. yüzyıl',
    visitDuration: '45 dakika'
  },
  {
    id: 'mardin-9',
    name: 'Mardin Müzesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Eski Ortodoks Patrikhanesi binasında, bölge tarihi',
    tags: ['Müze', 'Tarihi', 'Kültür'],
    historicalPeriod: '19. yüzyıl binası',
    visitDuration: '1-2 saat'
  },
  {
    id: 'mardin-10',
    name: 'Revaklı Çarşı',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Tarihi çarşı, geleneksel el sanatları ve alışveriş',
    tags: ['Tarihi', 'Çarşı', 'Alışveriş'],
    historicalPeriod: 'Osmanlı Dönemi',
    visitDuration: '1 saat'
  },
  {
    id: 'mardin-11',
    name: 'Savurkapı',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.2,
    image: '/placeholder.svg',
    description: 'Mardin\'in tarihi giriş kapılarından biri',
    tags: ['Tarihi', 'Kapı', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi',
    visitDuration: '20 dakika'
  },
  {
    id: 'mardin-12',
    name: 'Midyat Mor Gabriel Manastırı',
    city: 'Mardin',
    district: 'Midyat',
    rating: 4.9,
    image: '/placeholder.svg',
    description: 'Dünyanın en eski faal manastırlarından, Süryani merkezi',
    tags: ['Tarihi', 'Manastır', 'Süryani'],
    historicalPeriod: 'MS 397',
    visitDuration: '2-3 saat'
  },
  {
    id: 'mardin-13',
    name: 'Midyat Eski Şehir',
    city: 'Mardin',
    district: 'Midyat',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Taş evler ve dar sokaklar, geleneksel mimari',
    tags: ['Tarihi', 'Şehir', 'Mimari'],
    historicalPeriod: 'Çeşitli dönemler',
    visitDuration: '2-4 saat'
  },
  {
    id: 'mardin-14',
    name: 'Dara Antik Kenti',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'Bizans döneminin önemli kalıntıları, nekropol alanı',
    tags: ['Antik', 'Bizans', 'Arkeoloji'],
    historicalPeriod: 'Bizans Dönemi (MS 6. yy)',
    visitDuration: '2-3 saat'
  },
  {
    id: 'mardin-15',
    name: 'Nusaybin Zeynel Abidin Camii',
    city: 'Mardin',
    district: 'Nusaybin',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Türk-İslam mimarisinin güzel örneklerinden',
    tags: ['Tarihi', 'Cami', 'İslami'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '45 dakika'
  },

  // Diğer şehirlerden örnekler
  {
    id: '1',
    name: 'Ayasofya Camii',
    city: 'İstanbul',
    district: 'Fatih',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'Tarihi ve mimari harikası',
    tags: ['Tarihi', 'Mimari', 'Dini'],
    historicalPeriod: 'Bizans-Osmanlı',
    visitDuration: '2 saat'
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
    const matchesCity = !selectedCity || 
      place.city === selectedCity || 
      selectedCity.includes(place.city) ||
      (selectedCity.includes(place.district) && selectedCity.includes(place.city));
    
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
          {selectedCity?.includes('Mardin') && (
            <span className="text-amber-600 ml-2">✨ Tarihi Hazineler</span>
          )}
        </p>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            className="p-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-md"
            onClick={() => onCitySelect(place.city)}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-16 h-16 rounded-lg object-cover bg-gray-200 transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 truncate flex items-center">
                  {place.name}
                  {place.city === 'Mardin' && <span className="ml-2 text-amber-500">⭐</span>}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{place.district}, {place.city}</span>
                </div>
                
                <div className="flex items-center mt-1 space-x-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{place.rating}</span>
                  </div>
                  {place.historicalPeriod && (
                    <div className="flex items-center text-xs text-amber-600">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{place.historicalPeriod}</span>
                    </div>
                  )}
                  {place.visitDuration && (
                    <div className="flex items-center text-xs text-blue-600">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{place.visitDuration}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {place.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {place.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs rounded-full transition-colors duration-200 ${
                        place.city === 'Mardin' 
                          ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <button className="p-1 text-gray-400 hover:text-red-500 transition-all duration-200 hover:scale-110">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-blue-500 transition-all duration-200 hover:scale-110">
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
