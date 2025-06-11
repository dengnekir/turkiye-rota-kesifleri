import React, { useState } from 'react';
import { turkeyProvinces, Province, District } from '../data/turkeyMapData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Check, X } from 'lucide-react';

interface TurkeyMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string | null) => void;
  visitedCities: Set<string>;
  onToggleCityVisited: (cityOrDistrict: string) => void;
}

export const TurkeyMap: React.FC<TurkeyMapProps> = ({
  selectedCity,
  onCitySelect,
  visitedCities,
  onToggleCityVisited
}) => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);

  const getRegionColor = (region: string, isSelected: boolean = false) => {
    if (isSelected) return '#FFD700';
    
    const colors = {
      'Marmara': '#E0F2FE',
      'Ege': '#DBEAFE', 
      'Akdeniz': '#FEF3C7',
      'İç Anadolu': '#F3E8FF',
      'Karadeniz': '#D1FAE5',
      'Doğu Anadolu': '#FEE2E2',
      'Güneydoğu Anadolu': '#FECACA'
    };
    return colors[region as keyof typeof colors] || '#F3F4F6';
  };

  const getRegionHoverColor = (region: string) => {
    const colors = {
      'Marmara': '#0EA5E9',
      'Ege': '#3B82F6',
      'Akdeniz': '#F59E0B',
      'İç Anadolu': '#8B5CF6',
      'Karadeniz': '#10B981',
      'Doğu Anadolu': '#EF4444',
      'Güneydoğu Anadolu': '#F97316'
    };
    return colors[region as keyof typeof colors] || '#6B7280';
  };

  const handleProvinceClick = (province: Province) => {
    if (selectedProvince?.id === province.id) {
      setSelectedProvince(null);
      onCitySelect(null);
    } else {
      setSelectedProvince(province);
      onCitySelect(province.name);
    }
  };

  const handleDistrictClick = (district: District) => {
    onCitySelect(district.name);
  };

  const handleToggleVisited = (cityOrDistrict: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onToggleCityVisited(cityOrDistrict);
  };

  return (
    <TooltipProvider>
      <div className="w-full">
        {selectedProvince ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedProvince.name} - İlçeler
              </h3>
              <button
                onClick={() => {
                  setSelectedProvince(null);
                  onCitySelect(null);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Geri Dön</span>
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 overflow-x-auto">
              <svg 
                viewBox="0 0 1200 800" 
                className="w-full max-w-4xl mx-auto"
                style={{ minHeight: '400px' }}
              >
                {/* İl merkezi */}
                <circle
                  cx={600}
                  cy={300}
                  r="35"
                  fill={visitedCities.has(selectedProvince.name) ? '#10B981' : '#6366F1'}
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="cursor-pointer hover:opacity-80 transition-all duration-300"
                  onClick={(e) => handleToggleVisited(selectedProvince.name, e)}
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
                />
                
                <text
                  x={600}
                  y={305}
                  textAnchor="middle"
                  className="text-sm font-bold pointer-events-none"
                  fill="white"
                >
                  {selectedProvince.plateCode}
                </text>
                
                <text
                  x={600}
                  y={350}
                  textAnchor="middle"
                  className="text-lg font-bold pointer-events-none"
                  fill="#1F2937"
                >
                  {selectedProvince.name} (Merkez)
                </text>

                {/* İlçeler */}
                {selectedProvince.districts.map((district, index) => {
                  const angle = (index * (360 / selectedProvince.districts.length)) * (Math.PI / 180);
                  const radius = 180;
                  const x = 600 + Math.cos(angle) * radius;
                  const y = 300 + Math.sin(angle) * radius;
                  const isVisited = visitedCities.has(district.name);

                  return (
                    <g key={district.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <circle
                            cx={x}
                            cy={y}
                            r="25"
                            fill={isVisited ? '#10B981' : '#94A3B8'}
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            className="cursor-pointer hover:opacity-80 transition-all duration-300"
                            onClick={() => handleDistrictClick(district)}
                            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-medium">{district.name}</p>
                          <p className="text-sm text-gray-600">
                            {isVisited ? 'Ziyaret edildi' : 'Henüz ziyaret edilmedi'}
                          </p>
                        </TooltipContent>
                      </Tooltip>

                      <text
                        x={x}
                        y={y + 35}
                        textAnchor="middle"
                        className="text-xs font-semibold pointer-events-none"
                        fill="#374151"
                      >
                        {district.name.length > 10 ? district.name.substring(0, 8) + '...' : district.name}
                      </text>

                      {/* Ziyaret edildi işareti */}
                      {isVisited && (
                        <g className="pointer-events-none">
                          <circle
                            cx={x + 15}
                            cy={y - 15}
                            r="8"
                            fill="#10B981"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                          />
                          <text
                            x={x + 15}
                            y={y - 12}
                            textAnchor="middle"
                            className="text-xs font-bold"
                            fill="white"
                          >
                            ✓
                          </text>
                        </g>
                      )}

                      {/* Ziyaret durumu toggle butonu */}
                      <circle
                        cx={x - 15}
                        cy={y - 15}
                        r="10"
                        fill={isVisited ? '#EF4444' : '#10B981'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="cursor-pointer hover:opacity-80 transition-all duration-300"
                        onClick={(e) => handleToggleVisited(district.name, e)}
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                      />
                      <text
                        x={x - 15}
                        y={y - 11}
                        textAnchor="middle"
                        className="text-xs font-bold pointer-events-none"
                        fill="white"
                      >
                        {isVisited ? '−' : '+'}
                      </text>
                    </g>
                  );
                })}

                {/* Bağlantı çizgileri */}
                {selectedProvince.districts.map((district, index) => {
                  const angle = (index * (360 / selectedProvince.districts.length)) * (Math.PI / 180);
                  const radius = 180;
                  const x = 600 + Math.cos(angle) * radius;
                  const y = 300 + Math.sin(angle) * radius;

                  return (
                    <line
                      key={`line-${district.id}`}
                      x1={600}
                      y1={300}
                      x2={x}
                      y2={y}
                      stroke="#E5E7EB"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      className="pointer-events-none"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-6 overflow-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Türkiye Haritası</h3>
            <div className="overflow-auto" style={{ maxHeight: '600px' }}>
              <svg 
                viewBox="0 0 2000 1400" 
                className="w-full"
                style={{ minWidth: '1200px', minHeight: '800px' }}
              >
                {/* Arka plan */}
                <rect width="2000" height="1400" fill="#F8FAFC" />
                
                {/* Türkiye ana hatları (basitleştirilmiş) */}
                <g className="pointer-events-none opacity-20">
                  {/* Marmara Bölgesi Kıyı Hatları */}
                  <path
                    d="M 200,300 Q 250,250 350,280 Q 450,290 500,320 Q 520,340 480,380 Q 420,400 350,390 Q 280,380 200,340 Z"
                    fill="#E0F2FE"
                    stroke="#0EA5E9"
                    strokeWidth="2"
                  />
                  
                  {/* Ege Kıyı Hatları */}
                  <path
                    d="M 180,400 Q 200,450 220,500 Q 240,580 260,650 Q 280,720 300,780 Q 250,800 200,770 Q 150,740 120,680 Q 100,620 110,560 Q 130,480 180,400 Z"
                    fill="#DBEAFE"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                  
                  {/* Akdeniz Kıyı Hatları */}
                  <path
                    d="M 300,780 Q 400,820 500,840 Q 650,860 800,850 Q 950,840 1100,820 Q 1200,800 1250,780 Q 1250,820 1200,850 Q 1100,880 950,890 Q 800,900 650,910 Q 500,920 350,900 Q 300,880 300,780 Z"
                    fill="#FEF3C7"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  
                  {/* Karadeniz Kıyı Hatları */}
                  <path
                    d="M 500,180 Q 650,160 800,170 Q 950,180 1100,190 Q 1250,200 1400,220 Q 1500,240 1550,260 Q 1550,300 1500,280 Q 1400,260 1250,250 Q 1100,240 950,230 Q 800,220 650,230 Q 500,240 500,180 Z"
                    fill="#D1FAE5"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  
                  {/* İç Anadolu Platosu */}
                  <ellipse
                    cx="900"
                    cy="500"
                    rx="400"
                    ry="200"
                    fill="#F3E8FF"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                </g>

                {/* İller */}
                {turkeyProvinces.map((province) => {
                  const isVisited = visitedCities.has(province.name);
                  
                  return (
                    <g key={province.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <circle
                            cx={(province.center.x * 4.4) + 100}
                            cy={(province.center.y * 3.6) + 60}
                            r={province.name === 'İstanbul' || province.name === 'Ankara' || province.name === 'İzmir' ? "18" : "15"}
                            fill={
                              isVisited 
                                ? "#10B981" 
                                : hoveredProvince === province.id 
                                  ? "#6B7280"
                                  : "#9CA3AF"
                            }
                            stroke={isVisited ? "#10B981" : hoveredProvince === province.id ? "#FFFFFF" : "#6B7280"}
                            strokeWidth={isVisited ? "3" : "2"}
                            className="cursor-pointer transition-all duration-300"
                            onMouseEnter={() => setHoveredProvince(province.id)}
                            onMouseLeave={() => setHoveredProvince(null)}
                            onClick={() => handleProvinceClick(province)}
                            style={{
                              filter: isVisited 
                                ? 'drop-shadow(0 4px 8px rgba(16, 185, 129, 0.4))' 
                                : hoveredProvince === province.id 
                                  ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' 
                                  : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                              transform: hoveredProvince === province.id 
                                ? 'scale(1.1)' 
                                : 'scale(1)',
                              transformOrigin: `${(province.center.x * 4.4) + 100}px ${(province.center.y * 3.6) + 60}px`
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-center">
                            <p className="font-semibold">{province.name}</p>
                            <p className="text-sm text-gray-600">Plaka: {province.plateCode}</p>
                            <p className="text-sm text-gray-600">Bölge: {province.region}</p>
                            <p className="text-sm text-gray-600">{province.districts.length} ilçe</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {isVisited ? 'Ziyaret edildi ✓' : 'Henüz ziyaret edilmedi'}
                            </p>
                            <p className="text-xs text-blue-600 mt-1">Detaylar için tıklayın</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                      
                      {/* İl Plaka Kodu */}
                      <text
                        x={(province.center.x * 4.4) + 100}
                        y={(province.center.y * 3.6) + 62}
                        textAnchor="middle"
                        className="text-xs font-bold pointer-events-none"
                        fill="white"
                        style={{
                          textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                          fontSize: province.name === 'İstanbul' || province.name === 'Ankara' || province.name === 'İzmir' ? '11px' : '10px'
                        }}
                      >
                        {province.plateCode}
                      </text>
                      
                      {/* İl İsmi */}
                      <text
                        x={(province.center.x * 4.4) + 100}
                        y={(province.center.y * 3.6) + 85}
                        textAnchor="middle"
                        className={`text-xs font-semibold pointer-events-none transition-all duration-700`}
                        fill={'#374151'}
                        style={{
                          fontSize: province.name === 'İstanbul' || province.name === 'Ankara' || province.name === 'İzmir' ? '12px' : '10px'
                        }}
                      >
                        {province.name.length > 8 ? province.name.substring(0, 6) + '...' : province.name}
                      </text>

                      {/* Ziyaret edildi işareti */}
                      {isVisited && (
                        <g className="pointer-events-none">
                          <circle
                            cx={(province.center.x * 4.4) + 115}
                            cy={(province.center.y * 3.6) + 45}
                            r="8"
                            fill="#10B981"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                          />
                          <text
                            x={(province.center.x * 4.4) + 115}
                            y={(province.center.y * 3.6) + 48}
                            textAnchor="middle"
                            className="text-xs font-bold"
                            fill="white"
                          >
                            ✓
                          </text>
                        </g>
                      )}

                      {/* Ziyaret durumu toggle butonu */}
                      <circle
                        cx={(province.center.x * 4.4) + 85}
                        cy={(province.center.y * 3.6) + 45}
                        r="8"
                        fill={isVisited ? '#EF4444' : '#10B981'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="cursor-pointer hover:opacity-80 transition-all duration-300"
                        onClick={(e) => handleToggleVisited(province.name, e)}
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                      />
                      <text
                        x={(province.center.x * 4.4) + 85}
                        y={(province.center.y * 3.6) + 48}
                        textAnchor="middle"
                        className="text-xs font-bold pointer-events-none"
                        fill="white"
                      >
                        {isVisited ? '−' : '+'}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};
