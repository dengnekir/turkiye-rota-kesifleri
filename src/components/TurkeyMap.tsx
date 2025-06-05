
import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface TurkeyMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string) => void;
}

export const TurkeyMap: React.FC<TurkeyMapProps> = ({ selectedCity, onCitySelect }) => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [showDistricts, setShowDistricts] = useState(false);

  const handleProvinceClick = (province: Province) => {
    setSelectedProvince(province);
    setShowDistricts(true);
    onCitySelect(province.name);
  };

  const handleDistrictClick = (district: District, province: Province) => {
    console.log('İlçe seçildi:', district.name, 'İl:', province.name);
    onCitySelect(`${district.name}, ${province.name}`);
  };

  const handleMapClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowDistricts(false);
      setSelectedProvince(null);
    }
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-[700px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden border-2 border-gray-200">
        <svg
          viewBox="0 0 600 500"
          className="absolute inset-0 w-full h-full cursor-pointer"
          preserveAspectRatio="xMidYMid meet"
          onClick={handleMapClick}
        >
          {/* Türkiye genel sınırları - Gerçek koordinatlar */}
          <path
            d="M80,220 Q120,180 180,185 Q240,170 300,175 Q360,160 420,170 Q480,155 540,175 Q580,190 570,240 Q580,290 540,315 Q480,340 420,335 Q360,350 300,345 Q240,360 180,355 Q120,370 80,340 Q40,315 50,270 Q40,240 80,220 Z"
            fill="rgba(59, 130, 246, 0.05)"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="2"
            className="transition-all duration-300"
          />

          {/* İller - Gerçek il sınırları */}
          {turkeyProvinces.map((province) => (
            <g key={province.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <path
                    d={province.path}
                    fill={
                      selectedProvince?.id === province.id 
                        ? "rgba(34, 197, 94, 0.7)" 
                        : hoveredProvince === province.id 
                          ? "rgba(59, 130, 246, 0.6)" 
                          : "rgba(59, 130, 246, 0.4)"
                    }
                    stroke={
                      selectedProvince?.id === province.id 
                        ? "rgb(34, 197, 94)" 
                        : "rgba(59, 130, 246, 0.8)"
                    }
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:stroke-width-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProvinceClick(province);
                    }}
                    onMouseEnter={() => setHoveredProvince(province.id)}
                    onMouseLeave={() => setHoveredProvince(null)}
                    style={{
                      filter: selectedProvince?.id === province.id ? 'drop-shadow(0 6px 12px rgba(34, 197, 94, 0.4))' : 'none',
                      transform: hoveredProvince === province.id ? 'scale(1.02)' : 'scale(1)',
                      transformOrigin: `${province.center.x}px ${province.center.y}px`,
                      transition: 'all 0.3s ease'
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-white shadow-lg border border-gray-200">
                  <div className="p-2">
                    <div className="font-bold text-gray-800">{province.name}</div>
                    <div className="text-sm text-gray-600">Plaka: {province.plateCode}</div>
                    <div className="text-sm text-gray-600">{province.region} Bölgesi</div>
                    <div className="text-xs text-blue-600 mt-1">Tıklayın → İlçeleri görün</div>
                  </div>
                </TooltipContent>
              </Tooltip>
              
              {/* İl plaka kodu */}
              <circle
                cx={province.center.x}
                cy={province.center.y - 12}
                r="15"
                fill={selectedProvince?.id === province.id ? "rgb(34, 197, 94)" : "rgba(59, 130, 246, 0.9)"}
                className="pointer-events-none"
              />
              <text
                x={province.center.x}
                y={province.center.y - 8}
                textAnchor="middle"
                className="text-sm font-bold text-white pointer-events-none"
              >
                {province.plateCode}
              </text>
              
              {/* İl ismi */}
              <text
                x={province.center.x}
                y={province.center.y + 18}
                textAnchor="middle"
                className={`text-sm font-semibold pointer-events-none transition-all duration-300 ${
                  selectedProvince?.id === province.id ? 'text-green-700 font-bold' : 'text-blue-700'
                }`}
                style={{
                  fontSize: hoveredProvince === province.id ? '16px' : '14px'
                }}
              >
                {province.name}
              </text>

              {/* Bölge etiketi */}
              <text
                x={province.center.x}
                y={province.center.y + 32}
                textAnchor="middle"
                className="text-xs text-gray-500 pointer-events-none"
                style={{ fontSize: '11px' }}
              >
                {province.region}
              </text>
            </g>
          ))}

          {/* İlçeler - Detaylı animasyonlu gösterim */}
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
                            ? "rgba(239, 68, 68, 0.7)" 
                            : "rgba(239, 68, 68, 0.5)"
                        }
                        stroke="rgba(239, 68, 68, 0.9)"
                        strokeWidth="1.5"
                        className="cursor-pointer transition-all duration-200 hover:stroke-width-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDistrictClick(district, selectedProvince);
                        }}
                        onMouseEnter={() => setHoveredDistrict(district.id)}
                        onMouseLeave={() => setHoveredDistrict(null)}
                        style={{
                          filter: hoveredDistrict === district.id ? 'drop-shadow(0 3px 6px rgba(239, 68, 68, 0.4))' : 'none',
                          transform: hoveredDistrict === district.id ? 'scale(1.1)' : 'scale(1)',
                          transformOrigin: `${district.center.x}px ${district.center.y}px`
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-white shadow-lg border border-gray-200">
                      <div className="p-2">
                        <div className="font-bold text-gray-800">{district.name}</div>
                        <div className="text-sm text-gray-600">{selectedProvince.name} / {district.name}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                  <text
                    x={district.center.x}
                    y={district.center.y}
                    textAnchor="middle"
                    className={`text-xs font-medium pointer-events-none transition-all duration-200 ${
                      hoveredDistrict === district.id ? 'text-red-800 font-bold' : 'text-red-700'
                    }`}
                    style={{
                      fontSize: hoveredDistrict === district.id ? '12px' : '11px'
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
                  <div className="w-4 h-4 bg-red-400 rounded border border-red-600"></div>
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
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
                  className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full hover:bg-red-200 cursor-pointer transition-colors"
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
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Marmara</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Ege</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Akdeniz</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>İç Anadolu</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span>Karadeniz</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Doğu Anadolu</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Güneydoğu Anadolu</span>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
