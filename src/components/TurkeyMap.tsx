
import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { CheckCircle } from 'lucide-react';

interface TurkeyMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string) => void;
  visitedCities: Set<string>;
  onToggleCityVisited: (cityOrDistrict: string) => void;
}

// Bölge renklerini tanımlama - daha soft tonlar
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

  const handleMapClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedProvince(null);
      setHoveredDistrict(null);
    }
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

  const provincesToShow = selectedProvince ? [selectedProvince] : turkeyProvinces;

  return (
    <TooltipProvider>
      <div className="relative w-full h-[700px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden border-2 border-gray-200">
        <svg
          viewBox="0 0 1200 600"
          className="absolute inset-0 w-full h-full cursor-pointer"
          preserveAspectRatio="xMidYMid meet"
          onClick={handleMapClick}
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
            </filter>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="districtGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <pattern id="visitedPattern" patternUnits="userSpaceOnUse" width="4" height="4">
              <rect width="4" height="4" fill="#10B981"/>
              <path d="M 0,4 l 4,-4 M -1,1 l 2,-2 M 3,5 l 2,-2" stroke="#065F46" strokeWidth="0.5"/>
            </pattern>
          </defs>

          {/* İller */}
          {provincesToShow.map((province) => {
            const isVisited = visitedCities.has(province.name);
            
            return (
              <g key={province.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <circle
                      cx={selectedProvince ? 600 : (province.center.x * 1.8) + 120}
                      cy={selectedProvince ? 300 : (province.center.y * 1.5) + 80}
                      r={selectedProvince ? "30" : (province.name === 'İstanbul' || province.name === 'Ankara' || province.name === 'İzmir' ? "18" : "15")}
                      fill={
                        isVisited 
                          ? "url(#visitedPattern)"
                          : selectedProvince 
                            ? "#FFD700" 
                            : hoveredProvince === province.id 
                              ? getRegionHoverColor(province.region)
                              : "#9CA3AF"
                      }
                      stroke={isVisited ? "#10B981" : hoveredProvince === province.id ? "#FFFFFF" : "#6B7280"}
                      strokeWidth={selectedProvince ? "6" : hoveredProvince === province.id ? "4" : "3"}
                      className="cursor-pointer transition-all duration-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProvinceClick(province);
                      }}
                      onContextMenu={(e) => handleProvinceRightClick(e, province)}
                      onMouseEnter={() => setHoveredProvince(province.id)}
                      onMouseLeave={() => setHoveredProvince(null)}
                      style={{
                        filter: selectedProvince || hoveredProvince === province.id ? 'url(#glow)' : 'url(#shadow)',
                        transition: 'all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        transform: hoveredProvince === province.id 
                          ? 'scale(1.2) rotate(10deg)' 
                          : selectedProvince 
                            ? 'scale(1)' 
                            : 'scale(1)',
                        transformOrigin: `${selectedProvince ? 600 : (province.center.x * 1.8) + 120}px ${selectedProvince ? 300 : (province.center.y * 1.5) + 80}px`
                      }}
                    />
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
                        Sol tık → {selectedProvince ? "Ana haritaya dön" : "İlçeleri görün"}
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Sağ tık → {isVisited ? "Ziyaret işaretini kaldır" : "Ziyaret edildi olarak işaretle"}
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
                
                {/* İl Plaka Kodu */}
                <text
                  x={selectedProvince ? 600 : (province.center.x * 1.8) + 120}
                  y={selectedProvince ? 302 : (province.center.y * 1.5) + 82}
                  textAnchor="middle"
                  className="text-xs font-bold pointer-events-none"
                  fill="white"
                  style={{ 
                    fontSize: selectedProvince ? '16px' : '10px',
                    filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.7))'
                  }}
                >
                  {province.plateCode}
                </text>
                
                {/* İl İsmi */}
                <text
                  x={selectedProvince ? 600 : (province.center.x * 1.8) + 120}
                  y={selectedProvince ? 340 : (province.center.y * 1.5) + 105}
                  textAnchor="middle"
                  className={`text-xs font-semibold pointer-events-none transition-all duration-700`}
                  fill={selectedProvince ? '#B45309' : '#374151'}
                  style={{
                    fontSize: selectedProvince ? '18px' : hoveredProvince === province.id ? '12px' : '11px',
                    filter: 'drop-shadow(1px 1px 3px rgba(255, 255, 255, 0.9))'
                  }}
                >
                  {province.name}
                </text>

                {/* Ziyaret edildi işareti */}
                {isVisited && !selectedProvince && (
                  <g className="pointer-events-none">
                    <circle
                      cx={(province.center.x * 1.8) + 135}
                      cy={(province.center.y * 1.5) + 65}
                      r="8"
                      fill="#10B981"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                    />
                    <text
                      x={(province.center.x * 1.8) + 135}
                      y={(province.center.y * 1.5) + 68}
                      textAnchor="middle"
                      className="text-xs font-bold"
                      fill="white"
                      style={{ fontSize: '10px' }}
                    >
                      ✓
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* İlçeler - sadece seçili il varsa göster */}
          {selectedProvince && (
            <g className="animate-fade-in">
              {selectedProvince.districts.map((district, index) => {
                const isVisited = visitedCities.has(`${district.name}, ${selectedProvince.name}`);
                const angle = (index * 2 * Math.PI) / selectedProvince.districts.length;
                const radius = 140 + (index % 3) * 50;
                const x = 600 + Math.cos(angle) * radius;
                const y = 300 + Math.sin(angle) * radius;

                return (
                  <g 
                    key={district.id}
                    className="animate-scale-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <circle
                          cx={x}
                          cy={y}
                          r="12"
                          fill={
                            isVisited 
                              ? "url(#visitedPattern)"
                              : hoveredDistrict === district.id 
                                ? "#EC4899" 
                                : "#F472B6"
                          }
                          stroke={isVisited ? "#10B981" : "#FFFFFF"}
                          strokeWidth="4"
                          className="cursor-pointer transition-all duration-1000"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDistrictClick(district, selectedProvince);
                          }}
                          onContextMenu={(e) => handleDistrictRightClick(e, district, selectedProvince)}
                          onMouseEnter={() => setHoveredDistrict(district.id)}
                          onMouseLeave={() => setHoveredDistrict(null)}
                          style={{
                            filter: hoveredDistrict === district.id ? 'url(#districtGlow)' : 'url(#shadow)',
                            transform: hoveredDistrict === district.id 
                              ? 'scale(2.5) rotate(1080deg)' 
                              : 'scale(1)',
                            transformOrigin: `${x}px ${y}px`,
                            transition: 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.675)'
                          }}
                        />
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
                    
                    {/* İlçe İsmi */}
                    <text
                      x={x}
                      y={y + 26}
                      textAnchor="middle"
                      className={`text-xs font-medium pointer-events-none transition-all duration-1000`}
                      fill={hoveredDistrict === district.id ? '#BE185D' : '#BE185D'}
                      style={{
                        fontSize: hoveredDistrict === district.id ? '14px' : '10px',
                        filter: 'drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.9))',
                        transform: hoveredDistrict === district.id 
                          ? 'scale(1.6) translateY(-6px) rotate(15deg)' 
                          : 'scale(1)',
                        transformOrigin: `${x}px ${y + 26}px`,
                        transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                      }}
                    >
                      {district.name}
                    </text>

                    {/* Ziyaret edildi işareti */}
                    {isVisited && (
                      <g className="pointer-events-none">
                        <circle
                          cx={x + 14}
                          cy={y - 10}
                          r="5"
                          fill="#10B981"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}
                        />
                        <text
                          x={x + 14}
                          y={y - 7}
                          textAnchor="middle"
                          className="text-xs font-bold"
                          fill="white"
                          style={{ fontSize: '7px' }}
                        >
                          ✓
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          )}
        </svg>

        {/* Harita bilgi paneli */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            🇹🇷 Türkiye Haritası
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-gray-600"></div>
              <span className="text-gray-700">{selectedProvince ? '1 İl' : '81 İl'}</span>
            </div>
            {selectedProvince && (
              <div className="flex items-center space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-400 rounded-full border border-pink-600"></div>
                  <span className="text-gray-700">{selectedProvince.districts.length} İlçe</span>
                </div>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded-full border border-green-600"></div>
              <span className="text-gray-700">{visitedCities.size} Ziyaret Edildi</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="text-xs text-gray-600 space-y-1">
                {selectedProvince ? (
                  <>
                    <div>📍 İlçe seçmek için sol tık</div>
                    <div>✅ Ziyaret işareti için sağ tık</div>
                    <div>↩️ Ana haritaya dönmek için ile tıklayın</div>
                  </>
                ) : (
                  <>
                    <div>📍 İl seçmek için sol tık</div>
                    <div>✅ Ziyaret işareti için sağ tık</div>
                    <div>🏘️ İlçeleri görmek için ile tıklayın</div>
                  </>
                )}
                <div>ℹ️ Detaylar için üzerine gelin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Seçili il detay bilgisi */}
        {selectedProvince && (
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200 animate-slide-in-right max-w-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ backgroundColor: getRegionColor(selectedProvince.region) }}
              >
                {selectedProvince.plateCode}
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">{selectedProvince.name}</div>
                <div className="text-sm text-gray-600">{selectedProvince.region} Bölgesi</div>
              </div>
            </div>
            
            <div className="text-sm text-gray-700 mb-3">
              <strong>{selectedProvince.districts.length}</strong> ilçe gösteriliyor
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4 max-h-20 overflow-y-auto">
              {selectedProvince.districts.slice(0, 8).map((district) => (
                <span
                  key={district.id}
                  className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full hover:bg-pink-200 cursor-pointer transition-colors"
                  onClick={() => handleDistrictClick(district, selectedProvince)}
                >
                  {district.name}
                </span>
              ))}
              {selectedProvince.districts.length > 8 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{selectedProvince.districts.length - 8} daha
                </span>
              )}
            </div>
            
            <button
              onClick={() => {
                setSelectedProvince(null);
                setHoveredDistrict(null);
              }}
              className="w-full text-sm text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded-md font-medium"
            >
              ↩️ Ana Haritaya Dön
            </button>
          </div>
        )}

        {!selectedProvince && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-sm font-semibold text-gray-800 mb-2">Bölgeler</div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3B82F6' }}></div>
                <span>Marmara</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22C55E' }}></div>
                <span>Ege</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FB923C' }}></div>
                <span>Akdeniz</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EAB308' }}></div>
                <span>İç Anadolu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#14B8A6' }}></div>
                <span>Karadeniz</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#A855F7' }}></div>
                <span>Doğu Anadolu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }}></div>
                <span>Güneydoğu Anadolu</span>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="text-gray-600">Ziyaret Edilmemiş</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};
