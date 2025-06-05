
import React from 'react';

interface TurkeyMapProps {
  selectedCity: string | null;
  onCitySelect: (city: string) => void;
}

const cities = [
  { name: 'İstanbul', x: 60, y: 35, color: 'bg-red-500' },
  { name: 'Ankara', x: 50, y: 45, color: 'bg-blue-500' },
  { name: 'İzmir', x: 25, y: 55, color: 'bg-green-500' },
  { name: 'Antalya', x: 45, y: 70, color: 'bg-orange-500' },
  { name: 'Bursa', x: 45, y: 40, color: 'bg-purple-500' },
  { name: 'Adana', x: 65, y: 65, color: 'bg-pink-500' },
  { name: 'Konya', x: 50, y: 60, color: 'bg-indigo-500' },
  { name: 'Gaziantep', x: 75, y: 65, color: 'bg-yellow-500' },
  { name: 'Trabzon', x: 75, y: 25, color: 'bg-teal-500' },
  { name: 'Erzurum', x: 85, y: 35, color: 'bg-cyan-500' },
  { name: 'Diyarbakır', x: 80, y: 55, color: 'bg-rose-500' },
  { name: 'Denizli', x: 35, y: 60, color: 'bg-emerald-500' }
];

export const TurkeyMap: React.FC<TurkeyMapProps> = ({ selectedCity, onCitySelect }) => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl overflow-hidden">
      {/* Simplified Turkey outline */}
      <svg
        viewBox="0 0 100 80"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M10 40 Q15 25 25 30 Q35 20 45 25 Q55 15 65 20 Q75 15 85 25 Q95 30 90 40 Q95 50 85 55 Q75 65 65 60 Q55 70 45 65 Q35 75 25 65 Q15 70 10 55 Z"
          fill="rgba(34, 197, 94, 0.2)"
          stroke="rgba(34, 197, 94, 0.4)"
          strokeWidth="1"
          className="drop-shadow-sm"
        />
      </svg>

      {/* City markers */}
      {cities.map((city) => (
        <button
          key={city.name}
          onClick={() => onCitySelect(city.name)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg hover:scale-125 transition-all duration-200 ${
            selectedCity === city.name ? 'ring-4 ring-blue-300 scale-125' : ''
          } ${city.color}`}
          style={{
            left: `${city.x}%`,
            top: `${city.y}%`,
          }}
          title={city.name}
        >
          <div className="sr-only">{city.name}</div>
        </button>
      ))}

      {/* City labels */}
      {cities.map((city) => (
        <div
          key={`label-${city.name}`}
          className={`absolute transform -translate-x-1/2 text-xs font-medium text-gray-700 pointer-events-none transition-all duration-200 ${
            selectedCity === city.name ? 'text-blue-600 font-bold' : ''
          }`}
          style={{
            left: `${city.x}%`,
            top: `${city.y + 8}%`,
          }}
        >
          {city.name}
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
        <div className="text-xs text-gray-600 mb-2">Şehirler</div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Seçili şehir</span>
        </div>
      </div>
    </div>
  );
};
