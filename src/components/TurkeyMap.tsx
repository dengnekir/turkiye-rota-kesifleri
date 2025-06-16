
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

          {/* Türkiye harita sınırları */}
          {!selectedProvince && (
            <g>
              <path
                d="M150,150 Q200,140 250,145 Q300,148 350,152 Q400,155 450,160 Q500,165 550,168 Q600,170 650,175 Q700,180 750,185 Q800,190 850,195 Q900,200 950,205 Q1000,210 1020,220 Q1040,230 1050,250 Q1055,270 1050,290 Q1045,310 1040,330 Q1035,350 1030,370 Q1025,390 1020,410 Q1015,430 1000,445 Q985,460 970,470 Q955,480 940,485 Q925,490 910,492 Q895,494 880,495 Q865,496 850,495 Q835,494 820,492 Q805,490 790,487 Q775,484 760,480 Q745,476 730,471 Q715,466 700,460 Q685,454 670,447 Q655,440 640,432 Q625,424 610,415 Q595,406 580,396 Q565,386 550,375 Q535,364 520,352 Q505,340 490,327 Q475,314 460,300 Q445,286 430,271 Q415,256 400,240 Q385,224 370,207 Q355,190 340,172 Q325,154 310,135 Q295,116 280,96 Q265,76 250,55 Q235,34 220,12 Q205,-10 190,-33 Q175,-56 160,-80 Q145,-104 135,-129 Q125,-154 120,-180 Q118,-206 120,-232 Q122,-258 128,-284 Q134,-310 142,-336 Q150,-362 160,-388 Q170,-414 182,-440 Q194,-466 208,-492 Q222,-518 238,-544 Q254,-570 272,-596 Q290,-622 310,-648 Q330,-674 352,-700 Q374,-726 398,-752 Q422,-778 448,-804 Q474,-830 502,-856 Q530,-882 560,-908 Q590,-934 622,-960 Q654,-986 688,-1012 Q722,-1038 758,-1064 Q794,-1090 832,-1116 Q870,-1142 910,-1168 Q950,-1194 992,-1220 Q1034,-1246 1078,-1272 Q1122,-1298 1168,-1324 Q1214,-1350 1262,-1376 Q1310,-1402 1360,-1428 Q1410,-1454 1462,-1480 Q1514,-1506 1568,-1532 Q1622,-1558 1678,-1584 Q1734,-1610 1792,-1636 Q1850,-1662 1910,-1688 Q1970,-1714 2032,-1740 Q2094,-1766 2158,-1792 Q2222,-1818 2288,-1844 Q2354,-1870 2422,-1896 Q2490,-1922 2560,-1948 Q2630,-1974 2702,-2000"
                stroke="#4A90E2"
                strokeWidth="4"
                fill="rgba(74, 144, 226, 0.1)"
                className="transition-all duration-300"
              />
              
              {/* Gerçek Türkiye harita sınırları - basitleştirilmiş */}
              <path
                d="M200,280 C220,275 240,270 260,268 C300,265 340,263 380,262 C420,261 460,261 500,262 C540,263 580,265 620,268 C660,271 700,275 740,280 C780,285 820,291 860,298 C900,305 940,313 970,325 C985,331 1000,338 1010,348 C1020,358 1025,371 1025,385 C1025,399 1020,414 1010,428 C1000,442 985,455 970,467 C955,479 940,490 920,498 C900,506 875,512 850,516 C825,520 800,522 775,523 C750,524 725,524 700,523 C675,522 650,520 625,517 C600,514 575,510 550,505 C525,500 500,494 475,487 C450,480 425,472 405,462 C385,452 370,440 360,426 C350,412 345,396 345,380 C345,364 350,347 360,332 C370,317 385,303 405,291 C425,279 450,269 475,261 C500,253 525,247 550,243 C575,239 600,237 625,236 C650,235 675,235 700,236 C725,237 750,239 775,242 C800,245 825,249 850,254 C875,259 900,265 920,273 C940,281 955,291 965,303 C975,315 980,329 980,344 C980,359 975,375 965,390 C955,405 940,419 920,431 C900,443 875,453 850,461 C825,469 800,475 775,479 C750,483 725,485 700,486 C675,487 650,487 625,486 C600,485 575,483 550,480 C525,477 500,473 475,468 C450,463 425,457 405,449 C385,441 370,431 360,419 C350,407 345,393 345,378 C345,363 350,347 360,332 C370,317 385,303 405,291 C425,279 450,269 475,261 Z"
                stroke="#2563EB"
                strokeWidth="3"
                fill="rgba(37, 99, 235, 0.05)"
                className="transition-all duration-300"
              />
            </g>
          )}

          {/* İller */}
          {provincesToShow.map((province) => {
            const isVisited = visitedCities.has(province.name);
            
            return (
              <g key={province.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <circle
                      cx={selectedProvince ? 600 : (province.center.x * 2.2) + 200}
                      cy={selectedProvince ? 300 : (province.center.y * 1.8) + 150}
                      r={selectedProvince ? "30" : (province.name === 'İstanbul' || province.name === 'Ankara' || province.name === 'İzmir' ? "18" : "15")}
                      fill={
                        isVisited 
                          ? "url(#visitedPattern)"
                          : selectedProvince 
                            ? "#FFD700" 
                            : hoveredProvince === province.id 
                              ? getRegionHoverColor(province.region)
                              : getRegionColor(province.region)
                      }
                      stroke={isVisited ? "#10B981" : hoveredProvince === province.id ? "#FFFFFF" : "#FFFFFF"}
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
                        transformOrigin: `${selectedProvince ? 600 : (province.center.x * 2.2) + 200}px ${selectedProvince ? 300 : (province.center.y * 1.8) + 150}px`
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
                  x={selectedProvince ? 600 : (province.center.x * 2.2) + 200}
                  y={selectedProvince ? 302 : (province.center.y * 1.8) + 152}
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
                  x={selectedProvince ? 600 : (province.center.x * 2.2) + 200}
                  y={selectedProvince ? 340 : (province.center.y * 1.8) + 175}
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
                      cx={(province.center.x * 2.2) + 215}
                      cy={(province.center.y * 1.8) + 135}
                      r="8"
                      fill="#10B981"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                    />
                    <text
                      x={(province.center.x * 2.2) + 215}
                      y={(province.center.y * 1.8) + 138}
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
