
import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { ScrollArea } from './ui/scroll-area';
import { CheckCircle } from 'lucide-react';

interface TurkeyMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string) => void;
  visitedCities: Set<string>;
  onToggleCityVisited: (cityOrDistrict: string) => void;
}

// Bölge renklerini tanımlama
const getRegionColor = (region: string) => {
  const colors = {
    'Marmara': '#3B82F6',
    'Ege': '#22C55E',
    'Akdeniz': '#FB923C',
    'İç Anadolu': '#EAB308',
    'Karadeniz': '#14B8A6',
    'Doğu Anadolu': '#A855F7',
    'Güneydoğu Anadolu': '#EF4444'
  };
  return colors[region as keyof typeof colors] || '#9CA3AF';
};

const getRegionHoverColor = (region: string) => {
  const colors = {
    'Marmara': '#2563EB',
    'Ege': '#16A34A',
    'Akdeniz': '#EA580C',
    'İç Anadolu': '#CA8A04',
    'Karadeniz': '#0F766E',
    'Doğu Anadolu': '#9333EA',
    'Güneydoğu Anadolu': '#DC2626'
  };
  return colors[region as keyof typeof colors] || '#6B7280';
};

export const TurkeyMap: React.FC<TurkeyMapProps> = ({ 
  selectedCity, 
  onCitySelect, 
  visitedCities, 
  onToggleCityVisited 
}) => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  const handleProvinceClick = (province: Province) => {
    if (selectedProvince?.id === province.id) {
      setSelectedProvince(null);
      setHoveredDistrict(null);
      onCitySelect(province.name);
    } else {
      setSelectedProvince(province);
      onCitySelect(province.name);
    }
  };

  const handleDistrictClick = (district: District, province: Province) => {
    console.log('İlçe seçildi:', district.name, 'İl:', province.name);
    onCitySelect(`${district.name}, ${province.name}`);
  };

  const handleProvinceRightClick = (e: React.MouseEvent, province: Province) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleCityVisited(province.name);
  };

  const handleDistrictRightClick = (e: React.MouseEvent, district: District, province: Province) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleCityVisited(`${district.name}, ${province.name}`);
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-[700px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border-2 border-gray-200">
        <ScrollArea className="w-full h-full">
          <div className="relative min-w-[1400px] min-h-[900px] p-8">
            {/* Ana Türkiye Haritası Grid Görünümü */}
            {!selectedProvince && (
              <div className="w-full h-full relative">
                {/* Türkiye harita şekli simülasyonu */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="relative bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl shadow-2xl border-4 border-blue-200"
                    style={{
                      width: '1200px',
                      height: '600px',
                      clipPath: 'polygon(15% 25%, 25% 15%, 40% 10%, 60% 8%, 75% 12%, 85% 20%, 92% 35%, 95% 50%, 90% 70%, 80% 85%, 65% 90%, 45% 88%, 25% 82%, 10% 65%, 5% 45%, 8% 30%)'
                    }}
                  >
                    {/* İller Grid Layout */}
                    <div className="absolute inset-0 p-16">
                      <div className="grid grid-cols-11 gap-3 h-full">
                        {turkeyProvinces.map((province, index) => {
                          const isVisited = visitedCities.has(province.name);
                          const row = Math.floor(index / 11);
                          const col = index % 11;
                          
                          return (
                            <div
                              key={province.id}
                              className="relative flex items-center justify-center"
                              style={{
                                gridColumn: col + 1,
                                gridRow: row + 1
                              }}
                            >
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div
                                    className="relative w-full h-full min-h-[50px] rounded-xl cursor-pointer transition-all duration-500 flex flex-col items-center justify-center p-2 shadow-lg hover:shadow-xl transform hover:scale-110 hover:rotate-3"
                                    style={{
                                      backgroundColor: isVisited 
                                        ? '#10B981'
                                        : hoveredProvince === province.id 
                                          ? getRegionHoverColor(province.region)
                                          : getRegionColor(province.region),
                                      border: `3px solid ${isVisited ? '#065F46' : '#FFFFFF'}`
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleProvinceClick(province);
                                    }}
                                    onContextMenu={(e) => handleProvinceRightClick(e, province)}
                                    onMouseEnter={() => setHoveredProvince(province.id)}
                                    onMouseLeave={() => setHoveredProvince(null)}
                                  >
                                    {/* Plaka Kodu */}
                                    <div className="text-white font-bold text-lg mb-1">
                                      {province.plateCode}
                                    </div>
                                    
                                    {/* İl İsmi */}
                                    <div className="text-white text-xs font-medium text-center leading-tight">
                                      {province.name}
                                    </div>
                                    
                                    {/* Ziyaret edildi işareti */}
                                    {isVisited && (
                                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                      </div>
                                    )}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent side="top" className="bg-white shadow-lg border border-gray-200">
                                  <div className="p-3">
                                    <div className="font-bold text-gray-800 text-lg flex items-center">
                                      {province.name}
                                      {isVisited && <CheckCircle className="ml-2 h-4 w-4 text-green-500" />}
                                    </div>
                                    <div className="text-sm text-gray-600">Plaka: {province.plateCode}</div>
                                    <div className="text-sm text-gray-600">{province.region} Bölgesi</div>
                                    <div className="text-xs text-blue-600 mt-2 font-medium">
                                      Sol tık → İlçeleri görün
                                    </div>
                                    <div className="text-xs text-green-600 font-medium">
                                      Sağ tık → {isVisited ? "Ziyaret işaretini kaldır" : "Ziyaret edildi olarak işaretle"}
                                    </div>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Seçili İl - İlçeler Görünümü */}
            {selectedProvince && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-[800px] h-[600px] bg-white rounded-2xl shadow-2xl border-4 border-gray-200 p-8">
                  {/* İl Başlığı */}
                  <div className="text-center mb-8">
                    <div 
                      className="inline-flex items-center space-x-3 px-6 py-3 rounded-full text-white font-bold text-2xl shadow-lg"
                      style={{ backgroundColor: getRegionColor(selectedProvince.region) }}
                    >
                      <span>{selectedProvince.plateCode}</span>
                      <span>{selectedProvince.name}</span>
                    </div>
                    <div className="text-gray-600 mt-2">{selectedProvince.region} Bölgesi</div>
                  </div>
                  
                  {/* İlçeler Grid */}
                  <div className="relative h-[400px] overflow-auto">
                    <div className="grid grid-cols-4 gap-4 p-4">
                      {selectedProvince.districts.map((district, index) => {
                        const isVisited = visitedCities.has(`${district.name}, ${selectedProvince.name}`);
                        
                        return (
                          <Tooltip key={district.id}>
                            <TooltipTrigger asChild>
                              <div
                                className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-pink-200 hover:border-pink-400"
                                style={{
                                  backgroundColor: isVisited ? '#10B981' : undefined,
                                  borderColor: isVisited ? '#065F46' : undefined,
                                  color: isVisited ? 'white' : undefined
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDistrictClick(district, selectedProvince);
                                }}
                                onContextMenu={(e) => handleDistrictRightClick(e, district, selectedProvince)}
                                onMouseEnter={() => setHoveredDistrict(district.id)}
                                onMouseLeave={() => setHoveredDistrict(null)}
                              >
                                <div className={`text-center font-medium ${isVisited ? 'text-white' : 'text-gray-800'}`}>
                                  {district.name}
                                </div>
                                
                                {isVisited && (
                                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center border-2 border-white">
                                    <CheckCircle className="w-3 h-3 text-white" />
                                  </div>
                                )}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="bg-white shadow-lg border border-gray-200">
                              <div className="p-2">
                                <div className="font-bold text-gray-800 flex items-center">
                                  {district.name}
                                  {isVisited && <CheckCircle className="ml-1 h-3 w-3 text-green-500" />}
                                </div>
                                <div className="text-sm text-gray-600">{selectedProvince.name} / {district.name}</div>
                                <div className="text-xs text-pink-600 mt-1">Sol tık → Seç</div>
                                <div className="text-xs text-green-600">Sağ tık → {isVisited ? "Ziyaret işaretini kaldır" : "Ziyaret edildi"}</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Geri Dön Butonu */}
                  <div className="text-center mt-4">
                    <button
                      onClick={() => {
                        setSelectedProvince(null);
                        setHoveredDistrict(null);
                      }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      ↩️ Ana Haritaya Dön
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Bilgi Paneli */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            🇹🇷 Türkiye Haritası
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-400 rounded border border-gray-600"></div>
              <span className="text-gray-700">{selectedProvince ? '1 İl' : '81 İl'}</span>
            </div>
            {selectedProvince && (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-pink-400 rounded border border-pink-600"></div>
                <span className="text-gray-700">{selectedProvince.districts.length} İlçe</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded border border-green-600"></div>
              <span className="text-gray-700">{visitedCities.size} Ziyaret Edildi</span>
            </div>
          </div>
        </div>

        {/* Bölge Renk Açıklaması */}
        {!selectedProvince && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-sm font-semibold text-gray-800 mb-2">Bölgeler</div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#3B82F6' }}></div>
                <span>Marmara</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#22C55E' }}></div>
                <span>Ege</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#FB923C' }}></div>
                <span>Akdeniz</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#EAB308' }}></div>
                <span>İç Anadolu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#14B8A6' }}></div>
                <span>Karadeniz</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#A855F7' }}></div>
                <span>Doğu Anadolu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#EF4444' }}></div>
                <span>Güneydoğu Anadolu</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};
