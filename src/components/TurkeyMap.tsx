
import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { ScrollArea } from './ui/scroll-area';
import { CheckCircle, ArrowLeft } from 'lucide-react';

interface TurkeyMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string) => void;
  visitedCities: Set<string>;
  onToggleCityVisited: (cityOrDistrict: string) => void;
}

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

export const TurkeyMap: React.FC<TurkeyMapProps> = ({ 
  selectedCity, 
  onCitySelect, 
  visitedCities, 
  onToggleCityVisited 
}) => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);

  const handleProvinceClick = (province: Province) => {
    if (selectedProvince?.id === province.id) {
      setSelectedProvince(null);
    } else {
      setSelectedProvince(province);
    }
    onCitySelect(province.name);
  };

  const handleDistrictClick = (district: District, province: Province) => {
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
      <div className="relative w-full h-[700px] bg-gradient-to-br from-blue-50 via-sky-50 to-emerald-50 rounded-xl border-2 border-gray-200 overflow-hidden">
        <ScrollArea className="w-full h-full">
          <div className="p-6">
            {/* Ana İller Grid Görünümü */}
            {!selectedProvince && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">🇹🇷 Türkiye Haritası</h2>
                  <p className="text-gray-600">81 İl • 7 Bölge • {visitedCities.size} Ziyaret Edildi</p>
                </div>
                
                <div className="grid grid-cols-9 gap-3 max-w-6xl mx-auto">
                  {turkeyProvinces.map((province) => {
                    const isVisited = visitedCities.has(province.name);
                    
                    return (
                      <Tooltip key={province.id}>
                        <TooltipTrigger asChild>
                          <div
                            className="relative group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProvinceClick(province);
                            }}
                            onContextMenu={(e) => handleProvinceRightClick(e, province)}
                          >
                            <div
                              className="w-16 h-16 rounded-xl shadow-md hover:shadow-xl border-2 border-white flex flex-col items-center justify-center text-white font-bold transition-all duration-300"
                              style={{
                                backgroundColor: isVisited 
                                  ? '#10B981'
                                  : getRegionColor(province.region),
                                borderColor: isVisited ? '#065F46' : '#FFFFFF',
                              }}
                            >
                              <div className="text-xs">{province.plateCode}</div>
                              <div className="text-xs leading-none text-center px-1">
                                {province.name.length > 6 
                                  ? province.name.slice(0, 6) + '.'
                                  : province.name
                                }
                              </div>
                              
                              {isVisited && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center border-2 border-white">
                                  <CheckCircle className="w-2 h-2 text-white" />
                                </div>
                              )}
                            </div>
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
                    );
                  })}
                </div>
              </div>
            )}

            {/* Seçili İl - İlçeler Görünümü */}
            {selectedProvince && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  <div 
                    className="inline-flex items-center space-x-3 px-6 py-3 rounded-full text-white font-bold text-xl shadow-lg mb-4"
                    style={{ backgroundColor: getRegionColor(selectedProvince.region) }}
                  >
                    <span className="text-2xl">{selectedProvince.plateCode}</span>
                    <span>{selectedProvince.name}</span>
                  </div>
                  <div className="text-gray-600 text-sm">{selectedProvince.region} Bölgesi • {selectedProvince.districts.length} İlçe</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {selectedProvince.districts.map((district) => {
                    const isVisited = visitedCities.has(`${district.name}, ${selectedProvince.name}`);
                    
                    return (
                      <Tooltip key={district.id}>
                        <TooltipTrigger asChild>
                          <div
                            className="relative bg-white rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-gray-200 hover:border-blue-400 group"
                            style={{
                              backgroundColor: isVisited ? '#10B981' : 'white',
                              borderColor: isVisited ? '#065F46' : undefined,
                              color: isVisited ? 'white' : 'black',
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDistrictClick(district, selectedProvince);
                            }}
                            onContextMenu={(e) => handleDistrictRightClick(e, district, selectedProvince)}
                          >
                            <div className={`text-center font-medium text-sm ${isVisited ? 'text-white' : 'text-gray-800'}`}>
                              {district.name}
                            </div>
                            
                            {isVisited && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center border-2 border-white">
                                <CheckCircle className="w-2 h-2 text-white" />
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
                            <div className="text-xs text-gray-600">{selectedProvince.name} / {district.name}</div>
                            <div className="text-xs text-blue-600 mt-1">Sol tık → Seç</div>
                            <div className="text-xs text-green-600">Sağ tık → {isVisited ? "Ziyaret işaretini kaldır" : "Ziyaret edildi"}</div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setSelectedProvince(null)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Ana Haritaya Dön</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Bilgi Paneli */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            📊 İstatistikler
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Toplam İl:</span>
              <span className="font-bold">81</span>
            </div>
            {selectedProvince && (
              <div className="flex items-center justify-between">
                <span className="text-gray-700">İlçe Sayısı:</span>
                <span className="font-bold">{selectedProvince.districts.length}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Ziyaret Edildi:</span>
              <span className="font-bold text-green-600">{visitedCities.size}</span>
            </div>
          </div>
        </div>

        {/* Bölge Renk Açıklaması */}
        {!selectedProvince && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-sm font-semibold text-gray-800 mb-2">🎨 Bölgeler</div>
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
