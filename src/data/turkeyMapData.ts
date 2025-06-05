
export interface Province {
  id: string;
  name: string;
  path: string;
  center: { x: number; y: number };
  districts: District[];
}

export interface District {
  id: string;
  name: string;
  path: string;
  center: { x: number; y: number };
}

export const turkeyProvinces: Province[] = [
  {
    id: 'istanbul',
    name: 'İstanbul',
    path: 'M180,120 L190,115 L195,125 L185,130 Z',
    center: { x: 187, y: 122 },
    districts: [
      { id: 'fatih', name: 'Fatih', path: 'M180,120 L185,118 L187,123 L182,125 Z', center: { x: 183, y: 121 } },
      { id: 'beyoglu', name: 'Beyoğlu', path: 'M185,118 L190,115 L192,120 L187,123 Z', center: { x: 188, y: 119 } }
    ]
  },
  {
    id: 'ankara',
    name: 'Ankara',
    path: 'M220,160 L235,155 L240,170 L225,175 Z',
    center: { x: 230, y: 165 },
    districts: [
      { id: 'cankaya', name: 'Çankaya', path: 'M220,160 L227,158 L230,165 L223,167 Z', center: { x: 225, y: 162 } },
      { id: 'kecioren', name: 'Keçiören', path: 'M227,158 L235,155 L237,162 L230,165 Z', center: { x: 232, y: 160 } }
    ]
  },
  {
    id: 'izmir',
    name: 'İzmir',
    path: 'M120,180 L135,175 L140,190 L125,195 Z',
    center: { x: 130, y: 185 },
    districts: [
      { id: 'konak', name: 'Konak', path: 'M120,180 L127,178 L130,185 L123,187 Z', center: { x: 125, y: 182 } },
      { id: 'bornova', name: 'Bornova', path: 'M127,178 L135,175 L137,182 L130,185 Z', center: { x: 132, y: 180 } }
    ]
  },
  {
    id: 'antalya',
    name: 'Antalya',
    path: 'M200,220 L215,215 L220,230 L205,235 Z',
    center: { x: 210, y: 225 },
    districts: [
      { id: 'muratpasa', name: 'Muratpaşa', path: 'M200,220 L207,218 L210,225 L203,227 Z', center: { x: 205, y: 222 } },
      { id: 'kepez', name: 'Kepez', path: 'M207,218 L215,215 L217,222 L210,225 Z', center: { x: 212, y: 220 } }
    ]
  },
  {
    id: 'bursa',
    name: 'Bursa',
    path: 'M160,140 L175,135 L180,150 L165,155 Z',
    center: { x: 170, y: 145 },
    districts: [
      { id: 'nilufer', name: 'Nilüfer', path: 'M160,140 L167,138 L170,145 L163,147 Z', center: { x: 165, y: 142 } },
      { id: 'osmangazi', name: 'Osmangazi', path: 'M167,138 L175,135 L177,142 L170,145 Z', center: { x: 172, y: 140 } }
    ]
  }
];
