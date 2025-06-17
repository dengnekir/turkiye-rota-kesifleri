
import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { ScrollArea } from './ui/scroll-area';
import { CheckCircle, ArrowLeft, ZoomIn } from 'lucide-react';

interface TurkeyVectorMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string) => void;
  visitedCities: Set<string>;
  onToggleCityVisited: (cityOrDistrict: string) => void;
}

// SVG path data for simplified Turkey provinces (positioned geographically)
const provincePathData: Record<string, { path: string; cx: number; cy: number }> = {
  'İstanbul': { path: 'M320,180 L340,175 L345,185 L340,195 L320,190 Z', cx: 332, cy: 185 },
  'Ankara': { path: 'M350,220 L380,215 L385,235 L380,245 L350,240 Z', cx: 367, cy: 230 },
  'İzmir': { path: 'M280,240 L300,235 L305,255 L300,265 L280,260 Z', cx: 292, cy: 250 },
  'Bursa': { path: 'M310,200 L330,195 L335,215 L330,225 L310,220 Z', cx: 322, cy: 210 },
  'Adana': { path: 'M420,280 L450,275 L455,295 L450,305 L420,300 Z', cx: 437, cy: 290 },
  'Gaziantep': { path: 'M450,290 L480,285 L485,305 L480,315 L450,310 Z', cx: 467, cy: 300 },
  'Konya': { path: 'M380,250 L420,245 L425,275 L420,285 L380,280 Z', cx: 402, cy: 265 },
  'Antalya': { path: 'M350,290 L380,285 L385,305 L380,315 L350,310 Z', cx: 367, cy: 300 },
  'Kayseri': { path: 'M400,230 L430,225 L435,245 L430,255 L400,250 Z', cx: 417, cy: 240 },
  'Mersin': { path: 'M400,300 L430,295 L435,315 L430,325 L400,320 Z', cx: 417, cy: 310 },
  'Samsun': { path: 'M380,160 L410,155 L415,175 L410,185 L380,180 Z', cx: 397, cy: 170 },
  'Trabzon': { path: 'M460,150 L490,145 L495,165 L490,175 L460,170 Z', cx: 477, cy: 160 },
  'Diyarbakır': { path: 'M500,260 L530,255 L535,275 L530,285 L500,280 Z', cx: 517, cy: 270 },
  'Erzurum': { path: 'M520,200 L550,195 L555,215 L550,225 L520,220 Z', cx: 537, cy: 210 },
  'Van': { path: 'M570,240 L600,235 L605,255 L600,265 L570,260 Z', cx: 587, cy: 250 },
  'Şanlıurfa': { path: 'M480,280 L510,275 L515,295 L510,305 L480,300 Z', cx: 497, cy: 290 },
  'Balıkesir': { path: 'M280,200 L310,195 L315,215 L310,225 L280,220 Z', cx: 297, cy: 210 },
  'Malatya': { path: 'M470,240 L500,235 L505,255 L500,265 L470,260 Z', cx: 487, cy: 250 },
  'Kahramanmaraş': { path: 'M440,260 L470,255 L475,275 L470,285 L440,280 Z', cx: 457, cy: 270 },
  'Denizli': { path: 'M320,260 L350,255 L355,275 L350,285 L320,280 Z', cx: 337, cy: 270 },
  'Sakarya': { path: 'M330,180 L350,175 L355,195 L350,205 L330,200 Z', cx: 342, cy: 190 },
  'Tekirdağ': { path: 'M300,170 L320,165 L325,185 L320,195 L300,190 Z', cx: 312, cy: 180 },
  'Muğla': { path: 'M300,280 L330,275 L335,295 L330,305 L300,300 Z', cx: 317, cy: 290 },
  'Manisa': { path: 'M270,220 L300,215 L305,235 L300,245 L270,240 Z', cx: 287, cy: 230 },
  'Kocaeli': { path: 'M320,170 L340,165 L345,185 L340,195 L320,190 Z', cx: 332, cy: 180 },
  'Aydın': { path: 'M290,250 L320,245 L325,265 L320,275 L290,270 Z', cx: 307, cy: 260 },
  'Hatay': { path: 'M450,320 L480,315 L485,335 L480,345 L450,340 Z', cx: 467, cy: 330 },
  'Sivas': { path: 'M420,200 L450,195 L455,215 L450,225 L420,220 Z', cx: 437, cy: 210 },
  'Ordu': { path: 'M420,160 L450,155 L455,175 L450,185 L420,180 Z', cx: 437, cy: 170 },
  'Çorum': { path: 'M370,180 L400,175 L405,195 L400,205 L370,200 Z', cx: 387, cy: 190 },
  'Afyonkarahisar': { path: 'M340,240 L370,235 L375,255 L370,265 L340,260 Z', cx: 357, cy: 250 },
  'Zonguldak': { path: 'M340,150 L370,145 L375,165 L370,175 L340,170 Z', cx: 357, cy: 160 },
  'Kütahya': { path: 'M310,230 L340,225 L345,245 L340,255 L310,250 Z', cx: 327, cy: 240 },
  'Elazığ': { path: 'M490,230 L520,225 L525,245 L520,255 L490,250 Z', cx: 507, cy: 240 },
  'Isparta': { path: 'M340,270 L370,265 L375,285 L370,295 L340,290 Z', cx: 357, cy: 280 },
  'Mardin': { path: 'M520,280 L550,275 L555,295 L550,305 L520,300 Z', cx: 537, cy: 290 },
  'Bolu': { path: 'M350,160 L380,155 L385,175 L380,185 L350,180 Z', cx: 367, cy: 170 },
  'Tokat': { path: 'M400,180 L430,175 L435,195 L430,205 L400,200 Z', cx: 417, cy: 190 },
  'Giresun': { path: 'M440,150 L470,145 L475,165 L470,175 L440,170 Z', cx: 457, cy: 160 },
  'Eskişehir': { path: 'M330,210 L360,205 L365,225 L360,235 L330,230 Z', cx: 347, cy: 220 },
  'Ağrı': { path: 'M550,220 L580,215 L585,235 L580,245 L550,240 Z', cx: 567, cy: 230 },
  'Çanakkale': { path: 'M250,180 L280,175 L285,195 L280,205 L250,200 Z', cx: 267, cy: 190 },
  'Yozgat': { path: 'M380,200 L410,195 L415,215 L410,225 L380,220 Z', cx: 397, cy: 210 },
  'Amasya': { path: 'M380,170 L410,165 L415,185 L410,195 L380,190 Z', cx: 397, cy: 180 },
  'Rize': { path: 'M480,140 L510,135 L515,155 L510,165 L480,160 Z', cx: 497, cy: 150 },
  'Karaman': { path: 'M390,280 L420,275 L425,295 L420,305 L390,300 Z', cx: 407, cy: 290 },
  'Kastamonu': { path: 'M360,140 L390,135 L395,155 L390,165 L360,160 Z', cx: 377, cy: 150 },
  'Uşak': { path: 'M300,240 L330,235 L335,255 L330,265 L300,260 Z', cx: 317, cy: 250 },
  'Düzce': { path: 'M340,160 L360,155 L365,175 L360,185 L340,180 Z', cx: 352, cy: 170 },
  'Nevşehir': { path: 'M390,240 L420,235 L425,255 L420,265 L390,260 Z', cx: 407, cy: 250 },
  'Aksaray': { path: 'M380,260 L410,255 L415,275 L410,285 L380,280 Z', cx: 397, cy: 270 },
  'Niğde': { path: 'M410,260 L440,255 L445,275 L440,285 L410,280 Z', cx: 427, cy: 270 },
  'Kırıkkale': { path: 'M360,200 L390,195 L395,215 L390,225 L360,220 Z', cx: 377, cy: 210 },
  'Bilecik': { path: 'M320,200 L340,195 L345,215 L340,225 L320,220 Z', cx: 332, cy: 210 },
  'Kırklareli': { path: 'M300,150 L320,145 L325,165 L320,175 L300,170 Z', cx: 312, cy: 160 },
  'Edirne': { path: 'M280,140 L300,135 L305,155 L300,165 L280,160 Z', cx: 292, cy: 150 },
  'Burdur': { path: 'M330,280 L360,275 L365,295 L360,305 L330,300 Z', cx: 347, cy: 290 },
  'Kırşehir': { path: 'M370,220 L400,215 L405,235 L400,245 L370,240 Z', cx: 387, cy: 230 },
  'Sinop': { path: 'M370,130 L400,125 L405,145 L400,155 L370,150 Z', cx: 387, cy: 140 },
  'Kars': { path: 'M560,180 L590,175 L595,195 L590,205 L560,200 Z', cx: 577, cy: 190 },
  'Batman': { path: 'M510,270 L540,265 L545,285 L540,295 L510,290 Z', cx: 527, cy: 280 },
  'Adıyaman': { path: 'M460,260 L490,255 L495,275 L490,285 L460,280 Z', cx: 477, cy: 270 },
  'Artvin': { path: 'M500,130 L530,125 L535,145 L530,155 L500,150 Z', cx: 517, cy: 140 },
  'Siirt': { path: 'L540,290 L570,285 L575,305 L570,315 L540,310 Z', cx: 557, cy: 300 },
  'Şırnak': { path: 'M550,300 L580,295 L585,315 L580,325 L550,320 Z', cx: 567, cy: 310 },
  'Bitlis': { path: 'M540,250 L570,245 L575,265 L570,275 L540,270 Z', cx: 557, cy: 260 },
  'Muş': { path: 'M530,230 L560,225 L565,245 L560,255 L530,250 Z', cx: 547, cy: 240 },
  'Hakkari': { path: 'M570,300 L600,295 L605,315 L600,325 L570,320 Z', cx: 587, cy: 310 },
  'Gümüşhane': { path: 'M450,160 L480,155 L485,175 L480,185 L450,180 Z', cx: 467, cy: 170 },
  'Bayburt': { path: 'M470,170 L500,165 L505,185 L500,195 L470,190 Z', cx: 487, cy: 180 },
  'Karabük': { path: 'M350,150 L370,145 L375,165 L370,175 L350,170 Z', cx: 362, cy: 160 },
  'Tunceli': { path: 'M480,220 L510,215 L515,235 L510,245 L480,240 Z', cx: 497, cy: 230 },
  'Yalova': { path: 'M325,185 L340,180 L345,200 L340,210 L325,205 Z', cx: 337, cy: 195 },
  'Osmaniye': { path: 'M440,290 L470,285 L475,305 L470,315 L440,310 Z', cx: 457, cy: 300 },
  'Bartın': { path: 'M340,140 L360,135 L365,155 L360,165 L340,160 Z', cx: 352, cy: 150 },
  'Kilis': { path: 'M470,300 L490,295 L495,315 L490,325 L470,320 Z', cx: 482, cy: 310 },
  'Iğdır': { path: 'M580,200 L600,195 L605,215 L600,225 L580,220 Z', cx: 592, cy: 210 },
  'Ardahan': { path: 'M540,160 L570,155 L575,175 L570,185 L540,180 Z', cx: 557, cy: 170 }
};

export const TurkeyVectorMap: React.FC<TurkeyVectorMapProps> = ({ 
  selectedCity, 
  onCitySelect, 
  visitedCities, 
  onToggleCityVisited 
}) => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
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

  const getProvinceColor = (provinceName: string) => {
    const isVisited = visitedCities.has(provinceName);
    const isHovered = hoveredProvince === provinceName;
    const isSelected = selectedProvince?.name === provinceName;
    
    if (isSelected) return '#3B82F6';
    if (isVisited) return '#10B981';
    if (isHovered) return '#60A5FA';
    return '#E0E7FF';
  };

  const getStrokeColor = (provinceName: string) => {
    const isVisited = visitedCities.has(provinceName);
    const isSelected = selectedProvince?.name === provinceName;
    
    if (isSelected) return '#1E40AF';
    if (isVisited) return '#047857';
    return '#C7D2FE';
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-[700px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-gray-200 overflow-hidden">
        <ScrollArea className="w-full h-full">
          <div className="p-6">
            {!selectedProvince && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">🇹🇷 Türkiye Haritası</h2>
                  <p className="text-gray-600">Etkileşimli Vektör Harita • {visitedCities.size} Ziyaret Edildi</p>
                </div>

                {/* SVG Harita */}
                <div className="flex justify-center">
                  <svg 
                    width="650" 
                    height="400" 
                    viewBox="0 0 650 400" 
                    className="max-w-full h-auto border border-gray-300 rounded-lg bg-white shadow-lg"
                  >
                    {/* Arka plan gradyanı */}
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F8FAFC" />
                        <stop offset="100%" stopColor="#E2E8F0" />
                      </linearGradient>
                    </defs>
                    
                    <rect width="650" height="400" fill="url(#mapGradient)" />
                    
                    {/* İller */}
                    {turkeyProvinces.map((province) => {
                      const pathData = provincePathData[province.name];
                      if (!pathData) return null;
                      
                      const isVisited = visitedCities.has(province.name);
                      
                      return (
                        <Tooltip key={province.id}>
                          <TooltipTrigger asChild>
                            <g>
                              <path
                                d={pathData.path}
                                fill={getProvinceColor(province.name)}
                                stroke={getStrokeColor(province.name)}
                                strokeWidth="1.5"
                                className="cursor-pointer transition-all duration-300 hover:opacity-80 transform-origin-center"
                                style={{
                                  filter: hoveredProvince === province.name ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none',
                                  transform: hoveredProvince === province.name ? 'scale(1.05)' : 'scale(1)',
                                }}
                                onMouseEnter={() => setHoveredProvince(province.name)}
                                onMouseLeave={() => setHoveredProvince(null)}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleProvinceClick(province);
                                }}
                                onContextMenu={(e) => handleProvinceRightClick(e, province)}
                              />
                              
                              {/* İl adı */}
                              <text
                                x={pathData.cx}
                                y={pathData.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="10"
                                fontWeight="600"
                                fill={isVisited || hoveredProvince === province.name ? 'white' : '#374151'}
                                className="pointer-events-none select-none"
                              >
                                {province.plateCode}
                              </text>
                              
                              {/* Ziyaret edildi ikonu */}
                              {isVisited && (
                                <circle
                                  cx={pathData.cx + 15}
                                  cy={pathData.cy - 15}
                                  r="6"
                                  fill="#065F46"
                                  stroke="white"
                                  strokeWidth="2"
                                  className="pointer-events-none"
                                />
                              )}
                            </g>
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
                              <div className="text-xs text-blue-600 mt-2 font-medium flex items-center">
                                <ZoomIn className="w-3 h-3 mr-1" />
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
                  </svg>
                </div>
              </div>
            )}

            {/* İlçeler Görünümü */}
            {selectedProvince && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl shadow-lg mb-4">
                    <span className="text-2xl">{selectedProvince.plateCode}</span>
                    <span>{selectedProvince.name}</span>
                  </div>
                  <div className="text-gray-600 text-sm">{selectedProvince.region} Bölgesi • {selectedProvince.districts.length} İlçe</div>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                  {selectedProvince.districts.map((district) => {
                    const isVisited = visitedCities.has(`${district.name}, ${selectedProvince.name}`);
                    
                    return (
                      <Tooltip key={district.id}>
                        <TooltipTrigger asChild>
                          <div
                            className={`relative bg-white rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 group ${
                              isVisited 
                                ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white border-green-600' 
                                : 'border-gray-200 hover:border-blue-400 text-gray-800'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDistrictClick(district, selectedProvince);
                            }}
                            onContextMenu={(e) => handleDistrictRightClick(e, district, selectedProvince)}
                          >
                            <div className="text-center font-medium text-sm">
                              {district.name}
                            </div>
                            
                            {isVisited && (
                              <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-700 rounded-full flex items-center justify-center border-2 border-white">
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
                            <div className="text-xs text-gray-600">{selectedProvince.name} / {district.name}</div>
                            <div className="text-xs text-green-600 mt-1">
                              Sağ tık → {isVisited ? "Ziyaret işaretini kaldır" : "Ziyaret edildi"}
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setSelectedProvince(null)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Ana Haritaya Dön</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* İstatistik Paneli */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200">
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

        {/* Kullanım Kılavuzu */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200">
          <div className="text-sm font-semibold text-gray-800 mb-2">💡 Nasıl Kullanılır</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-blue-500"></div>
              <span>Sol tık → İl/İlçe seçimi</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-green-500"></div>
              <span>Sağ tık → Ziyaret işareti</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-purple-400"></div>
              <span>Hover → Detay bilgisi</span>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
