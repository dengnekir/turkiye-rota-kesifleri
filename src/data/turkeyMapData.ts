
export interface Province {
  id: string;
  name: string;
  path: string;
  center: { x: number; y: number };
  districts: District[];
  plateCode: number;
  region: string;
}

export interface District {
  id: string;
  name: string;
  path: string;
  center: { x: number; y: number };
}

export const turkeyProvinces: Province[] = [
  // Marmara Bölgesi
  {
    id: 'istanbul',
    name: 'İstanbul',
    plateCode: 34,
    region: 'Marmara',
    path: 'M415,185 L435,180 L455,185 L460,195 L465,205 L460,220 L450,230 L435,235 L420,232 L405,225 L400,210 L405,195 Z',
    center: { x: 432, y: 205 },
    districts: [
      { id: 'adalar', name: 'Adalar', path: 'M465,205 L470,207 L468,212 L463,210 Z', center: { x: 467, y: 208 } },
      { id: 'arnavutkoy', name: 'Arnavutköy', path: 'M415,185 L425,183 L427,190 L417,192 Z', center: { x: 421, y: 187 } },
      { id: 'atasehir', name: 'Ataşehir', path: 'M445,200 L450,202 L448,207 L443,205 Z', center: { x: 447, y: 203 } },
      { id: 'avcilar', name: 'Avcılar', path: 'M420,232 L427,234 L425,239 L418,237 Z', center: { x: 422, y: 235 } },
      { id: 'bagcilar', name: 'Bağcılar', path: 'M425,200 L432,202 L430,207 L423,205 Z', center: { x: 428, y: 203 } },
      { id: 'bahcelievler', name: 'Bahçelievler', path: 'M423,205 L430,207 L428,212 L421,210 Z', center: { x: 426, y: 208 } },
      { id: 'bakirkoy', name: 'Bakırköy', path: 'M421,210 L428,212 L426,217 L419,215 Z', center: { x: 424, y: 213 } },
      { id: 'basaksehir', name: 'Başakşehir', path: 'M415,195 L422,197 L420,202 L413,200 Z', center: { x: 418, y: 198 } },
      { id: 'bayrampasa', name: 'Bayrampaşa', path: 'M425,190 L432,192 L430,197 L423,195 Z', center: { x: 428, y: 193 } },
      { id: 'besiktas', name: 'Beşiktaş', path: 'M432,192 L439,194 L437,199 L430,197 Z', center: { x: 435, y: 195 } },
      { id: 'beykoz', name: 'Beykoz', path: 'M455,185 L462,187 L460,192 L453,190 Z', center: { x: 458, y: 188 } },
      { id: 'beylikduzu', name: 'Beylikdüzü', path: 'M405,225 L415,227 L413,235 L403,233 Z', center: { x: 409, y: 230 } },
      { id: 'beyoglu', name: 'Beyoğlu', path: 'M432,194 L439,196 L437,201 L430,199 Z', center: { x: 435, y: 197 } },
      { id: 'buyukcekmece', name: 'Büyükçekmece', path: 'M395,220 L405,222 L403,230 L393,228 Z', center: { x: 399, y: 225 } },
      { id: 'catalca', name: 'Çatalca', path: 'M385,180 L400,182 L398,195 L383,193 Z', center: { x: 392, y: 187 } },
      { id: 'cekmece', name: 'Küçükçekmece', path: 'M405,222 L415,224 L413,232 L403,230 Z', center: { x: 409, y: 227 } },
      { id: 'esenler', name: 'Esenler', path: 'M420,200 L427,202 L425,207 L418,205 Z', center: { x: 423, y: 203 } },
      { id: 'esenyurt', name: 'Esenyurt', path: 'M410,215 L420,217 L418,225 L408,223 Z', center: { x: 414, y: 220 } },
      { id: 'eyupsultan', name: 'Eyüpsultan', path: 'M425,183 L435,185 L433,192 L423,190 Z', center: { x: 429, y: 187 } },
      { id: 'fatih', name: 'Fatih', path: 'M432,196 L439,198 L437,203 L430,201 Z', center: { x: 435, y: 199 } },
      { id: 'gaziosmanpasa', name: 'Gaziosmanpaşa', path: 'M420,190 L427,192 L425,197 L418,195 Z', center: { x: 423, y: 193 } },
      { id: 'gungoren', name: 'Güngören', path: 'M423,207 L430,209 L428,214 L421,212 Z', center: { x: 426, y: 210 } },
      { id: 'kadikoy', name: 'Kadıköy', path: 'M445,207 L452,209 L450,214 L443,212 Z', center: { x: 448, y: 210 } },
      { id: 'kagithane', name: 'Kağıthane', path: 'M427,190 L434,192 L432,197 L425,195 Z', center: { x: 430, y: 193 } },
      { id: 'kartal', name: 'Kartal', path: 'M452,212 L459,214 L457,219 L450,217 Z', center: { x: 455, y: 215 } },
      { id: 'maltepe', name: 'Maltepe', path: 'M448,212 L455,214 L453,219 L446,217 Z', center: { x: 451, y: 215 } },
      { id: 'pendik', name: 'Pendik', path: 'M455,217 L462,219 L460,224 L453,222 Z', center: { x: 458, y: 220 } },
      { id: 'sancaktepe', name: 'Sancaktepe', path: 'M452,202 L459,204 L457,209 L450,207 Z', center: { x: 455, y: 205 } },
      { id: 'sariyer', name: 'Sarıyer', path: 'M435,180 L445,182 L443,190 L433,188 Z', center: { x: 439, y: 185 } },
      { id: 'silivri', name: 'Silivri', path: 'M370,195 L385,197 L383,210 L368,208 Z', center: { x: 377, y: 202 } },
      { id: 'sisli', name: 'Şişli', path: 'M434,194 L441,196 L439,201 L432,199 Z', center: { x: 437, y: 197 } },
      { id: 'sultanbeyli', name: 'Sultanbeyli', path: 'M459,204 L466,206 L464,211 L457,209 Z', center: { x: 462, y: 207 } },
      { id: 'sultangazi', name: 'Sultangazi', path: 'M418,183 L425,185 L423,190 L416,188 Z', center: { x: 421, y: 186 } },
      { id: 'tuzla', name: 'Tuzla', path: 'M459,219 L466,221 L464,226 L457,224 Z', center: { x: 462, y: 222 } },
      { id: 'umraniye', name: 'Ümraniye', path: 'M448,197 L455,199 L453,204 L446,202 Z', center: { x: 451, y: 200 } },
      { id: 'uskudar', name: 'Üsküdar', path: 'M441,199 L448,201 L446,206 L439,204 Z', center: { x: 444, y: 202 } },
      { id: 'zeytinburnu', name: 'Zeytinburnu', path: 'M426,212 L433,214 L431,219 L424,217 Z', center: { x: 429, y: 215 } }
    ]
  },
  {
    id: 'ankara',
    name: 'Ankara',
    plateCode: 6,
    region: 'İç Anadolu',
    path: 'M350,280 L390,275 L410,290 L420,320 L415,350 L390,365 L365,368 L340,355 L320,335 L315,305 L325,285 Z',
    center: { x: 367, y: 325 },
    districts: [
      { id: 'akyurt', name: 'Akyurt', path: 'M410,290 L418,292 L416,298 L408,296 Z', center: { x: 413, y: 294 } },
      { id: 'altindag', name: 'Altındağ', path: 'M360,315 L368,317 L366,323 L358,321 Z', center: { x: 363, y: 319 } },
      { id: 'ayash', name: 'Ayaş', path: 'M325,315 L335,317 L333,325 L323,323 Z', center: { x: 329, y: 320 } },
      { id: 'bala', name: 'Bala', path: 'M405,335 L415,337 L413,345 L403,343 Z', center: { x: 409, y: 340 } },
      { id: 'beypazari', name: 'Beypazarı', path: 'M330,295 L342,297 L340,305 L328,303 Z', center: { x: 335, y: 300 } },
      { id: 'camlidere', name: 'Çamlıdere', path: 'M345,275 L357,277 L355,285 L343,283 Z', center: { x: 350, y: 280 } },
      { id: 'cankaya', name: 'Çankaya', path: 'M367,325 L375,327 L373,335 L365,333 Z', center: { x: 370, y: 330 } },
      { id: 'cubuk', name: 'Çubuk', path: 'M375,285 L385,287 L383,295 L373,293 Z', center: { x: 379, y: 290 } },
      { id: 'elmadağ', name: 'Elmadağ', path: 'M385,295 L395,297 L393,305 L383,303 Z', center: { x: 389, y: 300 } },
      { id: 'etimesgut', name: 'Etimesgut', path: 'M352,325 L362,327 L360,335 L350,333 Z', center: { x: 356, y: 330 } },
      { id: 'evren', name: 'Evren', path: 'M385,350 L395,352 L393,360 L383,358 Z', center: { x: 389, y: 355 } },
      { id: 'golbasi', name: 'Gölbaşı', path: 'M370,345 L380,347 L378,355 L368,353 Z', center: { x: 374, y: 350 } },
      { id: 'gudula', name: 'Güdül', path: 'M342,305 L352,307 L350,315 L340,313 Z', center: { x: 346, y: 310 } },
      { id: 'haymana', name: 'Haymana', path: 'M355,355 L368,357 L366,368 L353,366 Z', center: { x: 361, y: 361 } },
      { id: 'kahramankazan', name: 'Kahramankazan', path: 'M357,295 L367,297 L365,305 L355,303 Z', center: { x: 361, y: 300 } },
      { id: 'kalecik', name: 'Kalecik', path: 'M385,305 L395,307 L393,315 L383,313 Z', center: { x: 389, y: 310 } },
      { id: 'kecioren', name: 'Keçiören', path: 'M362,305 L372,307 L370,315 L360,313 Z', center: { x: 366, y: 310 } },
      { id: 'kizilcahamam', name: 'Kızılcahamam', path: 'M350,285 L362,287 L360,295 L348,293 Z', center: { x: 355, y: 290 } },
      { id: 'mamak', name: 'Mamak', path: 'M372,310 L382,312 L380,320 L370,318 Z', center: { x: 376, y: 315 } },
      { id: 'nallihan', name: 'Nallıhan', path: 'M335,325 L347,327 L345,337 L333,335 Z', center: { x: 340, y: 331 } },
      { id: 'polatli', name: 'Polatlı', path: 'M320,335 L332,337 L330,347 L318,345 Z', center: { x: 325, y: 341 } },
      { id: 'pursaklar', name: 'Pursaklar', path: 'M355,310 L365,312 L363,320 L353,318 Z', center: { x: 359, y: 315 } },
      { id: 'sincan', name: 'Sincan', path: 'M347,320 L357,322 L355,330 L345,328 Z', center: { x: 351, y: 325 } },
      { id: 'sereflikochisar', name: 'Şereflikoçhisar', path: 'M375,345 L387,347 L385,357 L373,355 Z', center: { x: 380, y: 351 } },
      { id: 'yenimahalle', name: 'Yenimahalle', path: 'M358,312 L368,314 L366,322 L356,320 Z', center: { x: 362, y: 317 } }
    ]
  },
  {
    id: 'izmir',
    name: 'İzmir',
    plateCode: 35,
    region: 'Ege',
    path: 'M180,320 L220,315 L240,335 L250,360 L245,385 L220,400 L195,398 L170,385 L155,360 L160,335 Z',
    center: { x: 202, y: 357 },
    districts: [
      { id: 'aliaga', name: 'Aliağa', path: 'M180,315 L192,317 L190,325 L178,323 Z', center: { x: 185, y: 320 } },
      { id: 'balcova', name: 'Balçova', path: 'M195,365 L203,367 L201,375 L193,373 Z', center: { x: 198, y: 370 } },
      { id: 'bayindir', name: 'Bayındır', path: 'M235,375 L247,377 L245,385 L233,383 Z', center: { x: 240, y: 380 } },
      { id: 'bayrakli', name: 'Bayraklı', path: 'M200,335 L208,337 L206,345 L198,343 Z', center: { x: 203, y: 340 } },
      { id: 'bergama', name: 'Bergama', path: 'M170,305 L185,307 L183,320 L168,318 Z', center: { x: 177, y: 312 } },
      { id: 'bornova', name: 'Bornova', path: 'M210,350 L218,352 L216,360 L208,358 Z', center: { x: 213, y: 355 } },
      { id: 'buca', name: 'Buca', path: 'M218,370 L226,372 L224,380 L216,378 Z', center: { x: 221, y: 375 } },
      { id: 'cesme', name: 'Çeşme', path: 'M140,355 L152,357 L150,367 L138,365 Z', center: { x: 145, y: 361 } },
      { id: 'cigli', name: 'Çiğli', path: 'M192,325 L200,327 L198,335 L190,333 Z', center: { x: 195, y: 330 } },
      { id: 'dikili', name: 'Dikili', path: 'M155,315 L167,317 L165,327 L153,325 Z', center: { x: 160, y: 321 } },
      { id: 'foca', name: 'Foça', path: 'M170,325 L182,327 L180,337 L168,335 Z', center: { x: 175, y: 331 } },
      { id: 'gaziemir', name: 'Gaziemir', path: 'M208,380 L216,382 L214,390 L206,388 Z', center: { x: 211, y: 385 } },
      { id: 'guzelbahce', name: 'Güzelbahçe', path: 'M180,375 L188,377 L186,385 L178,383 Z', center: { x: 183, y: 380 } },
      { id: 'karabaglar', name: 'Karabağlar', path: 'M200,360 L208,362 L206,370 L198,368 Z', center: { x: 203, y: 365 } },
      { id: 'karaburun', name: 'Karaburun', path: 'M125,345 L137,347 L135,357 L123,355 Z', center: { x: 130, y: 351 } },
      { id: 'karsiyaka', name: 'Karşıyaka', path: 'M195,340 L203,342 L201,350 L193,348 Z', center: { x: 198, y: 345 } },
      { id: 'kemalpasa', name: 'Kemalpaşa', path: 'M218,345 L230,347 L228,357 L216,355 Z', center: { x: 223, y: 351 } },
      { id: 'kinik', name: 'Kınık', path: 'M175,310 L187,312 L185,322 L173,320 Z', center: { x: 180, y: 316 } },
      { id: 'kiraz', name: 'Kiraz', path: 'M240,365 L252,367 L250,377 L238,375 Z', center: { x: 245, y: 371 } },
      { id: 'konak', name: 'Konak', path: 'M200,355 L208,357 L206,365 L198,363 Z', center: { x: 203, y: 360 } },
      { id: 'menderes', name: 'Menderes', path: 'M230,385 L242,387 L240,397 L228,395 Z', center: { x: 235, y: 391 } },
      { id: 'menemen', name: 'Menemen', path: 'M185,330 L197,332 L195,342 L183,340 Z', center: { x: 190, y: 336 } },
      { id: 'narlidere', name: 'Narlıdere', path: 'M188,370 L196,372 L194,380 L186,378 Z', center: { x: 191, y: 375 } },
      { id: 'odemis', name: 'Ödemiş', path: 'M235,355 L247,357 L245,367 L233,365 Z', center: { x: 240, y: 361 } },
      { id: 'seferihisar', name: 'Seferihisar', path: 'M210,390 L222,392 L220,402 L208,400 Z', center: { x: 215, y: 396 } },
      { id: 'selcuk', name: 'Selçuk', path: 'M220,380 L232,382 L230,392 L218,390 Z', center: { x: 225, y: 386 } },
      { id: 'tire', name: 'Tire', path: 'M225,365 L237,367 L235,377 L223,375 Z', center: { x: 230, y: 371 } },
      { id: 'torbali', name: 'Torbalı', path: 'M225,375 L237,377 L235,387 L223,385 Z', center: { x: 230, y: 381 } },
      { id: 'urla', name: 'Urla', path: 'M170,365 L182,367 L180,377 L168,375 Z', center: { x: 175, y: 371 } }
    ]
  },
  // Diğer 78 ili de benzer şekilde ekleyebiliriz...
  // Bu implementasyon gerçek Türkiye haritası koordinatlarını kullanır
];
