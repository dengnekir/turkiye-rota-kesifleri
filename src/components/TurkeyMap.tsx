
import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface TurkeyMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string) => void;
}

// Bölge renklerini tanımlama
const getRegionColor = (region: string) => {
  const colors = {
    'Marmara': '#3B82F6', // Mavi
    'Ege': '#22C55E', // Yeşil
    'Akdeniz': '#FB923C', // Turuncu
    'İç Anadolu': '#EAB308', // Sarı
    'Karadeniz': '#14B8A6', // Teal
    'Doğu Anadolu': '#A855F7', // Mor
    'Güneydoğu Anadolu': '#EF4444' // Kırmızı
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

export const TurkeyMap: React.FC<TurkeyMapProps> = ({ selectedCity, onCitySelect }) => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [showDistricts, setShowDistricts] = useState(false);

  const handleProvinceClick = (province: Province) => {
    if (selectedProvince?.id === province.id && showDistricts) {
      setShowDistricts(false);
      setSelectedProvince(null);
    } else {
      setSelectedProvince(province);
      setShowDistricts(true);
      onCitySelect(province.name);
    }
  };

  const handleDistrictClick = (district: District, province: Province) => {
    console.log('İlçe seçildi:', district.name, 'İl:', province.name);
    onCitySelect(`${district.name}, ${province.name}`);
  };

  const handleMapClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowDistricts(false);
      setSelectedProvince(null);
      setHoveredDistrict(null);
    }
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-[700px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden border-2 border-gray-200">
        {/* SVG Harita */}
        <svg
          viewBox="0 0 1100 600"
          className="absolute inset-0 w-full h-full cursor-pointer"
          preserveAspectRatio="xMidYMid meet"
          onClick={handleMapClick}
        >
          {/* Türkiye Genel Sınırları ve Gölge Efekti */}
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
          </defs>

          {/* İller */}
          {turkeyProvinces.map((province) => (
            <g key={province.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <path
                    d={province.path}
                    fill={
                      selectedProvince?.id === province.id 
                        ? "#FFD700" 
                        : hoveredProvince === province.id 
                          ? getRegionHoverColor(province.region)
                          : getRegionColor(province.region)
                    }
                    stroke="#FFFFFF"
                    strokeWidth={
                      selectedProvince?.id === province.id ? "3" :
                      hoveredProvince === province.id ? "2.5" : "1.5"
                    }
                    className="cursor-pointer transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProvinceClick(province);
                    }}
                    onMouseEnter={() => setHoveredProvince(province.id)}
                    onMouseLeave={() => setHoveredProvince(null)}
                    style={{
                      filter: selectedProvince?.id === province.id ? 'url(#glow)' : 'url(#shadow)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-white shadow-lg border border-gray-200">
                  <div className="p-3">
                    <div className="font-bold text-gray-800 text-lg">{province.name}</div>
                    <div className="text-sm text-gray-600">Plaka: {province.plateCode}</div>
                    <div className="text-sm text-gray-600">{province.region} Bölgesi</div>
                    <div className="text-xs text-blue-600 mt-2 font-medium">
                      {selectedProvince?.id === province.id && showDistricts 
                        ? "Tıklayın → İlçeleri gizle"
                        : "Tıklayın → İlçeleri görün"
                      }
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
              
              {/* İl Plaka Kodu */}
              <circle
                cx={province.center.x}
                cy={province.center.y - 15}
                r="18"
                fill={
                  selectedProvince?.id === province.id 
                    ? "#FFD700" 
                    : "#FFFFFF"
                }
                stroke={getRegionColor(province.region)}
                strokeWidth="2"
                className="pointer-events-none drop-shadow-lg"
              />
              <text
                x={province.center.x}
                y={province.center.y - 10}
                textAnchor="middle"
                className="text-sm font-bold pointer-events-none"
                fill={
                  selectedProvince?.id === province.id 
                    ? "#B45309" 
                    : getRegionColor(province.region)
                }
                style={{ fontSize: '12px' }}
              >
                {province.plateCode}
              </text>
              
              {/* İl İsmi */}
              <text
                x={province.center.x}
                y={province.center.y + 10}
                textAnchor="middle"
                className={`text-sm font-semibold pointer-events-none transition-all duration-300`}
                fill={
                  selectedProvince?.id === province.id ? '#B45309' : '#374151'
                }
                style={{
                  fontSize: hoveredProvince === province.id ? '14px' : '12px',
                  filter: 'drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.8))'
                }}
              >
                {province.name}
              </text>
            </g>
          ))}

          {/* İlçeler */}
          {showDistricts && selectedProvince && (
            <g className="animate-fade-in">
              {selectedProvince.districts.map((district, index) => (
                <g 
                  key={district.id}
                  className="animate-scale-in"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <path
                        d={district.path}
                        fill={
                          hoveredDistrict === district.id 
                            ? "#EC4899" 
                            : "#F472B6"
                        }
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDistrictClick(district, selectedProvince);
                        }}
                        onMouseEnter={() => setHoveredDistrict(district.id)}
                        onMouseLeave={() => setHoveredDistrict(null)}
                        style={{
                          filter: hoveredDistrict === district.id ? 'url(#glow)' : 'url(#shadow)',
                          transform: hoveredDistrict === district.id ? 'scale(1.02)' : 'scale(1)',
                          transformOrigin: `${district.center.x}px ${district.center.y}px`,
                          transition: 'all 0.2s ease'
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-white shadow-lg border border-gray-200">
                      <div className="p-2">
                        <div className="font-bold text-gray-800">{district.name}</div>
                        <div className="text-sm text-gray-600">{selectedProvince.name} / {district.name}</div>
                        <div className="text-xs text-pink-600 mt-1">Tıklayın → Seç</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                  
                  {/* İlçe İsmi */}
                  <text
                    x={district.center.x}
                    y={district.center.y + 3}
                    textAnchor="middle"
                    className={`text-xs font-medium pointer-events-none transition-all duration-200`}
                    fill={
                      hoveredDistrict === district.id ? '#BE185D' : '#BE185D'
                    }
                    style={{
                      fontSize: hoveredDistrict === district.id ? '11px' : '10px',
                      filter: 'drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.9))'
                    }}
                  >
                    {district.name}
                  </text>
                </g>
              ))}
            </g>
          )}
        </svg>

        {/* Harita bilgi paneli */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="text-lg font-bold text-gray-800 mb-3 flex items-center">
            🇹🇷 Türkiye Siyasi Haritası
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-400 rounded border border-blue-600"></div>
              <span className="text-gray-700">81 İl</span>
            </div>
            {showDistricts && selectedProvince && (
              <div className="flex items-center space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-400 rounded border border-pink-600"></div>
                  <span className="text-gray-700">{selectedProvince.districts.length} İlçe</span>
                </div>
              </div>
            )}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="text-xs text-gray-600 space-y-1">
                <div>📍 İl seçmek için tıklayın</div>
                <div>🏘️ İlçeleri görmek için ile tıklayın</div>
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
              <strong>{selectedProvince.districts.length}</strong> ilçe {showDistricts ? 'gösteriliyor' : 'mevcut'}
            </div>
            
            {showDistricts && (
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
            )}
            
            <button
              onClick={() => {
                setShowDistricts(false);
                setSelectedProvince(null);
                setHoveredDistrict(null);
              }}
              className="w-full text-sm text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded-md font-medium"
            >
              ✕ Seçimi Temizle
            </button>
          </div>
        )}

        {/* Bölge gösterge paneli */}
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
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
