
import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';

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
    <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden border-2 border-gray-200">
      <svg
        viewBox="0 0 600 400"
        className="absolute inset-0 w-full h-full cursor-pointer"
        preserveAspectRatio="xMidYMid meet"
        onClick={handleMapClick}
      >
        {/* Türkiye genel sınırı */}
        <path
          d="M80,180 Q120,120 180,130 Q240,100 300,110 Q360,90 420,105 Q480,85 540,110 Q580,130 570,180 Q580,230 540,250 Q480,270 420,265 Q360,280 300,275 Q240,290 180,285 Q120,300 80,270 Q40,250 50,210 Q40,190 80,180 Z"
          fill="rgba(59, 130, 246, 0.05)"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="2"
          className="transition-all duration-300"
        />

        {/* İller */}
        {turkeyProvinces.map((province) => (
          <g key={province.id}>
            <path
              d={province.path}
              fill={
                selectedProvince?.id === province.id 
                  ? "rgba(34, 197, 94, 0.7)" 
                  : hoveredProvince === province.id 
                    ? "rgba(59, 130, 246, 0.5)" 
                    : "rgba(59, 130, 246, 0.3)"
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
                transform: hoveredProvince === province.id ? 'scale(1.05)' : 'scale(1)',
                transformOrigin: `${province.center.x}px ${province.center.y}px`,
                transition: 'all 0.3s ease'
              }}
            />
            
            {/* İl plaka kodu */}
            <circle
              cx={province.center.x}
              cy={province.center.y - 8}
              r="12"
              fill={selectedProvince?.id === province.id ? "rgb(34, 197, 94)" : "rgba(59, 130, 246, 0.8)"}
              className="pointer-events-none"
            />
            <text
              x={province.center.x}
              y={province.center.y - 5}
              textAnchor="middle"
              className="text-xs font-bold text-white pointer-events-none"
            >
              {province.plateCode}
            </text>
            
            {/* İl ismi */}
            <text
              x={province.center.x}
              y={province.center.y + 15}
              textAnchor="middle"
              className={`text-xs font-semibold pointer-events-none transition-all duration-300 ${
                selectedProvince?.id === province.id ? 'text-green-700 font-bold' : 'text-blue-700'
              }`}
              style={{
                fontSize: hoveredProvince === province.id ? '14px' : '12px'
              }}
            >
              {province.name}
            </text>

            {/* Bölge etiketi */}
            <text
              x={province.center.x}
              y={province.center.y + 25}
              textAnchor="middle"
              className="text-xs text-gray-500 pointer-events-none"
              style={{ fontSize: '10px' }}
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
                <path
                  d={district.path}
                  fill={
                    hoveredDistrict === district.id 
                      ? "rgba(239, 68, 68, 0.6)" 
                      : "rgba(239, 68, 68, 0.4)"
                  }
                  stroke="rgba(239, 68, 68, 0.8)"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-all duration-200 hover:stroke-width-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDistrictClick(district, selectedProvince);
                  }}
                  onMouseEnter={() => setHoveredDistrict(district.id)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                  style={{
                    filter: hoveredDistrict === district.id ? 'drop-shadow(0 3px 6px rgba(239, 68, 68, 0.3))' : 'none',
                    transform: hoveredDistrict === district.id ? 'scale(1.1)' : 'scale(1)',
                    transformOrigin: `${district.center.x}px ${district.center.y}px`
                  }}
                />
                <text
                  x={district.center.x}
                  y={district.center.y}
                  textAnchor="middle"
                  className={`text-xs font-medium pointer-events-none transition-all duration-200 ${
                    hoveredDistrict === district.id ? 'text-red-800 font-bold' : 'text-red-700'
                  }`}
                  style={{
                    fontSize: hoveredDistrict === district.id ? '11px' : '10px'
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
        <div className="text-sm font-semibold text-gray-800 mb-3">Türkiye Siyasi Haritası</div>
        <div className="flex flex-col space-y-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-400 rounded border border-blue-600"></div>
            <span className="text-gray-700">İller ({turkeyProvinces.length})</span>
          </div>
          {showDistricts && selectedProvince && (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-400 rounded border border-red-600"></div>
              <span className="text-gray-700">İlçeler ({selectedProvince.districts.length})</span>
            </div>
          )}
          <div className="mt-2 pt-2 border-t border-gray-200">
            <div className="text-xs text-gray-600">
              📍 İl seçmek için tıklayın
            </div>
            <div className="text-xs text-gray-600">
              🏘️ İlçeleri görmek için ile tıklayın
            </div>
          </div>
        </div>
      </div>

      {/* Seçili il detay bilgisi */}
      {selectedProvince && (
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200 animate-slide-in-right max-w-xs">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {selectedProvince.plateCode}
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">{selectedProvince.name}</div>
              <div className="text-sm text-gray-600">{selectedProvince.region} Bölgesi</div>
            </div>
          </div>
          
          <div className="text-sm text-gray-700 mb-3">
            <strong>{selectedProvince.districts.length}</strong> ilçe gösteriliyor
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {selectedProvince.districts.slice(0, 6).map((district) => (
              <span
                key={district.id}
                className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full"
              >
                {district.name}
              </span>
            ))}
            {selectedProvince.districts.length > 6 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{selectedProvince.districts.length - 6} daha
              </span>
            )}
          </div>
          
          <button
            onClick={() => {
              setShowDistricts(false);
              setSelectedProvince(null);
              setHoveredDistrict(null);
            }}
            className="w-full text-sm text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded-md"
          >
            ✕ Seçimi Temizle
          </button>
        </div>
      )}

      {/* Zoom kontrolleri */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button className="w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-lg flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors">
          <span className="text-lg font-bold">+</span>
        </button>
        <button className="w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-lg flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors">
          <span className="text-lg font-bold">−</span>
        </button>
      </div>
    </div>
  );
};
