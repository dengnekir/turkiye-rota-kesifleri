
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

  // İlleri spiralde yerleştirme fonksiyonu - içi dolu daire
  const getProvincePosition = (index: number, total: number) => {
    const centerX = 350;
    const centerY = 350;
    
    // Spiral parametreleri
    const maxRadius = 280;
    const turns = 4; // Spiral tur sayısı
    const t = (index / total) * turns * 2 * Math.PI;
    const radius = (index / total) * maxRadius;
    
    const x = radius * Math.cos(t) + centerX;
    const y = radius * Math.sin(t) + centerY;
    
    return { x, y };
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-[700px] bg-gradient-to-br from-blue-50 via-sky-50 to-emerald-50 rounded-xl border-2 border-gray-200 overflow-hidden">
        <ScrollArea className="w-full h-full">
          <div className="relative min-w-[700px] min-h-[700px] p-4">
            {/* Ana Türkiye Haritası - Spiral Görünüm */}
            {!selectedProvince && (
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[700px] h-[700px]">
                  {/* Merkez Türkiye Logosu */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex flex-col items-center justify-center shadow-xl border-3 border-white">
                      <div className="text-white font-bold text-2xl">🇹🇷</div>
                      <div className="text-white font-semibold text-xs">TÜRKİYE</div>
                    </div>
                  </div>
                  
                  {/* Spiral şeklinde yerleştirilmiş iller */}
                  {turkeyProvinces.map((province, index) => {
                    const isVisited = visitedCities.has(province.name);
                    const position = getProvincePosition(index, turkeyProvinces.length);
                    
                    return (
                      <div
                        key={province.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                        style={{
                          left: `${position.x}px`,
                          top: `${position.y}px`,
                          animationDelay: `${index * 0.02}s`
                        }}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="relative group">
                              <div
                                className="w-12 h-12 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center shadow-md hover:shadow-xl transform hover:scale-110 hover:z-30 border-2"
                                style={{
                                  backgroundColor: isVisited 
                                    ? '#10B981'
                                    : hoveredProvince === province.id 
                                      ? getRegionHoverColor(province.region)
                                      : getRegionColor(province.region),
                                  borderColor: isVisited ? '#065F46' : '#FFFFFF',
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
                                <div className="text-white font-bold text-xs">
                                  {province.plateCode}
                                </div>
                                
                                {/* İl adının ilk 2 harfi */}
                                <div className="text-white font-semibold text-xs leading-none">
                                  {province.name.slice(0, 2).toUpperCase()}
                                </div>
                                
                                {/* Ziyaret edildi işareti */}
                                {isVisited && (
                                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                                    <CheckCircle className="w-1.5 h-1.5 text-white" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="bg-white shadow-lg border border-gray-200 max-w-xs">
                            <div className="p-3">
                              <div className="font-bold text-gray-800 text-lg flex items-center">
                                {province.name}
                                {isVisited && <CheckCircle className="ml-2 h-4 w-4 text-green-500" />}
                              </div>
                              <div className="text-sm text-gray-600">Plaka: {province.plateCode}</div>
                              <div className="text-sm text-gray-600">{province.region} Bölgesi</div>
                              <div className="text-sm text-gray-600">{province.districts.length} İlçe</div>
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
                  
                  {/* Arka plan daire çizgileri */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {[100, 150, 200, 250, 300].map((radius, index) => (
                      <div
                        key={radius}
                        className="absolute border border-gray-200/30 rounded-full animate-pulse"
                        style={{
                          width: `${radius * 2}px`,
                          height: `${radius * 2}px`,
                          left: `-${radius}px`,
                          top: `-${radius}px`,
                          animationDelay: `${index * 0.5}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Seçili İl - İlçeler Görünümü */}
            {selectedProvince && (
              <div className="w-full h-full flex items-center justify-center animate-scale-in">
                <div className="relative w-[650px] h-[580px] bg-white rounded-2xl shadow-2xl border-4 border-gray-200 p-6 overflow-hidden">
                  {/* İl Başlığı */}
                  <div className="text-center mb-6">
                    <div 
                      className="inline-flex items-center space-x-3 px-6 py-3 rounded-full text-white font-bold text-xl shadow-lg"
                      style={{ backgroundColor: getRegionColor(selectedProvince.region) }}
                    >
                      <span className="text-2xl">{selectedProvince.plateCode}</span>
                      <span>{selectedProvince.name}</span>
                    </div>
                    <div className="text-gray-600 mt-2 text-sm">{selectedProvince.region} Bölgesi • {selectedProvince.districts.length} İlçe</div>
                  </div>
                  
                  {/* İlçeler Grid */}
                  <ScrollArea className="h-[400px] w-full">
                    <div className="grid grid-cols-3 gap-3 p-2">
                      {selectedProvince.districts.map((district, index) => {
                        const isVisited = visitedCities.has(`${district.name}, ${selectedProvince.name}`);
                        
                        return (
                          <Tooltip key={district.id}>
                            <TooltipTrigger asChild>
                              <div
                                className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-blue-200 hover:border-blue-400 animate-fade-in group"
                                style={{
                                  backgroundColor: isVisited ? '#10B981' : undefined,
                                  borderColor: isVisited ? '#065F46' : undefined,
                                  color: isVisited ? 'white' : undefined,
                                  animationDelay: `${index * 0.05}s`
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDistrictClick(district, selectedProvince);
                                }}
                                onContextMenu={(e) => handleDistrictRightClick(e, district, selectedProvince)}
                                onMouseEnter={() => setHoveredDistrict(district.id)}
                                onMouseLeave={() => setHoveredDistrict(null)}
                              >
                                <div className={`text-center font-medium text-sm ${isVisited ? 'text-white' : 'text-gray-800'}`}>
                                  {district.name}
                                </div>
                                
                                {isVisited && (
                                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                                    <CheckCircle className="w-2 h-2 text-white" />
                                  </div>
                                )}
                                
                                {/* Hover efekti */}
                                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="bg-white shadow-lg border border-gray-200">
                              <div className="p-2">
                                <div className="font-bold text-gray-800 flex items-center">
                                  {district.name}
                                  {isVisited && <CheckCircle className="ml-1 h-3 w-3 text-green-500" />}
                                </div>
                                <div className="text-xs text-gray-600">{selectedProvince.name} / {district.name}</div>
                                <div className="text-xs text-blue-600 mt-1">Sol tık → Seç</div>
                                <div className="text-xs text-green-600">Sağ tık → {isVisited ? "Ziyaret işaretini kaldır" : "Ziyaret edildi"}</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </ScrollArea>
                  
                  {/* Geri Dön Butonu */}
                  <div className="text-center mt-4">
                    <button
                      onClick={() => {
                        setSelectedProvince(null);
                        setHoveredDistrict(null);
                      }}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
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
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200 animate-slide-in-right">
          <div className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            🗺️ Türkiye Haritası
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-400 rounded border border-gray-600"></div>
              <span className="text-gray-700">{selectedProvince ? '1 İl' : '81 İl'}</span>
            </div>
            {selectedProvince && (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-400 rounded border border-blue-600"></div>
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
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 animate-fade-in">
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
