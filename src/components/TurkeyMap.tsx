
import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';

interface TurkeyMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string) => void;
}

export const TurkeyMap: React.FC<TurkeyMapProps> = ({ selectedCity, onCitySelect }) => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [showDistricts, setShowDistricts] = useState(false);

  const handleProvinceClick = (province: Province) => {
    setSelectedProvince(province);
    setShowDistricts(true);
    onCitySelect(province.name);
  };

  const handleDistrictClick = (district: District) => {
    console.log('İlçe seçildi:', district.name);
  };

  const handleMapClick = (e: React.MouseEvent) => {
    // Harita boş alanına tıklandığında ilçeleri gizle
    if (e.target === e.currentTarget) {
      setShowDistricts(false);
      setSelectedProvince(null);
    }
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden">
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full cursor-pointer"
        preserveAspectRatio="xMidYMid meet"
        onClick={handleMapClick}
      >
        {/* Türkiye ana sınırları */}
        <path
          d="M50,150 Q80,100 120,110 Q160,80 200,90 Q240,70 280,85 Q320,75 350,100 Q380,120 370,160 Q380,200 350,220 Q320,240 280,235 Q240,250 200,245 Q160,260 120,250 Q80,265 50,240 Q20,220 30,180 Q20,160 50,150 Z"
          fill="rgba(59, 130, 246, 0.1)"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="2"
          className="transition-all duration-300"
        />

        {/* İller */}
        {turkeyProvinces.map((province) => (
          <g key={province.id}>
            <path
              d={province.path}
              fill={selectedProvince?.id === province.id ? "rgba(34, 197, 94, 0.6)" : hoveredProvince === province.id ? "rgba(59, 130, 246, 0.4)" : "rgba(59, 130, 246, 0.2)"}
              stroke={selectedProvince?.id === province.id ? "rgb(34, 197, 94)" : "rgba(59, 130, 246, 0.6)"}
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:fill-opacity-60"
              onClick={(e) => {
                e.stopPropagation();
                handleProvinceClick(province);
              }}
              onMouseEnter={() => setHoveredProvince(province.id)}
              onMouseLeave={() => setHoveredProvince(null)}
              style={{
                filter: selectedProvince?.id === province.id ? 'drop-shadow(0 4px 8px rgba(34, 197, 94, 0.3))' : 'none',
                transform: hoveredProvince === province.id ? 'scale(1.02)' : 'scale(1)',
                transformOrigin: `${province.center.x}px ${province.center.y}px`
              }}
            />
            
            {/* İl ismi */}
            <text
              x={province.center.x}
              y={province.center.y}
              textAnchor="middle"
              className={`text-xs font-medium pointer-events-none transition-all duration-300 ${
                selectedProvince?.id === province.id ? 'text-green-700 font-bold' : 'text-blue-700'
              }`}
              style={{
                fontSize: hoveredProvince === province.id ? '14px' : '12px'
              }}
            >
              {province.name}
            </text>
          </g>
        ))}

        {/* İlçeler - Animasyonlu gösterim */}
        {showDistricts && selectedProvince && (
          <g className="animate-fade-in">
            {selectedProvince.districts.map((district, index) => (
              <g 
                key={district.id}
                className="animate-scale-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <path
                  d={district.path}
                  fill="rgba(239, 68, 68, 0.3)"
                  stroke="rgba(239, 68, 68, 0.7)"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-all duration-200 hover:fill-opacity-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDistrictClick(district);
                  }}
                />
                <text
                  x={district.center.x}
                  y={district.center.y}
                  textAnchor="middle"
                  className="text-xs font-medium text-red-700 pointer-events-none"
                >
                  {district.name}
                </text>
              </g>
            ))}
          </g>
        )}
      </svg>

      {/* Harita kontrolleri */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
        <div className="text-xs text-gray-600 mb-2">Harita Kontrolü</div>
        <div className="flex flex-col space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-300 rounded-sm"></div>
            <span className="text-gray-600">İller</span>
          </div>
          {showDistricts && (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-300 rounded-sm"></div>
              <span className="text-gray-600">İlçeler</span>
            </div>
          )}
        </div>
      </div>

      {/* Seçili il bilgisi */}
      {selectedProvince && (
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm animate-slide-in-right">
          <div className="text-sm font-semibold text-gray-800">{selectedProvince.name}</div>
          <div className="text-xs text-gray-600">
            {selectedProvince.districts.length} ilçe gösteriliyor
          </div>
          <button
            onClick={() => {
              setShowDistricts(false);
              setSelectedProvince(null);
            }}
            className="mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors"
          >
            İlçeleri Gizle
          </button>
        </div>
      )}
    </div>
  );
};
