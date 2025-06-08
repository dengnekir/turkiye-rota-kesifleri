
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
    path: 'M269,138 L293,135 L315,142 L325,155 L318,172 L298,185 L275,182 L255,175 L248,160 L255,145 Z',
    center: { x: 282, y: 160 },
    districts: [
      { id: 'adalar', name: 'Adalar', path: 'M318,172 L325,174 L323,180 L316,178 Z', center: { x: 321, y: 176 } },
      { id: 'arnavutkoy', name: 'Arnavutköy', path: 'M255,145 L265,143 L267,150 L257,152 Z', center: { x: 261, y: 147 } },
      { id: 'avcilar', name: 'Avcılar', path: 'M275,182 L285,184 L283,190 L273,188 Z', center: { x: 279, y: 186 } },
      { id: 'bagcilar', name: 'Bağcılar', path: 'M270,160 L280,162 L278,168 L268,166 Z', center: { x: 274, y: 164 } },
      { id: 'bakirkoy', name: 'Bakırköy', path: 'M268,166 L278,168 L276,174 L266,172 Z', center: { x: 272, y: 170 } },
      { id: 'basaksehir', name: 'Başakşehir', path: 'M255,155 L265,157 L263,163 L253,161 Z', center: { x: 259, y: 159 } },
      { id: 'beykoz', name: 'Beykoz', path: 'M315,142 L325,144 L323,150 L313,148 Z', center: { x: 319, y: 146 } },
      { id: 'beyoglu', name: 'Beyoğlu', path: 'M280,150 L290,152 L288,158 L278,156 Z', center: { x: 284, y: 154 } },
      { id: 'fatih', name: 'Fatih', path: 'M275,155 L285,157 L283,163 L273,161 Z', center: { x: 279, y: 159 } },
      { id: 'kadikoy', name: 'Kadıköy', path: 'M295,165 L305,167 L303,173 L293,171 Z', center: { x: 299, y: 169 } },
      { id: 'sariyer', name: 'Sarıyer', path: 'M285,140 L295,142 L293,148 L283,146 Z', center: { x: 289, y: 144 } },
      { id: 'sisli', name: 'Şişli', path: 'M278,147 L288,149 L286,155 L276,153 Z', center: { x: 282, y: 151 } },
      { id: 'uskudar', name: 'Üsküdar', path: 'M290,160 L300,162 L298,168 L288,166 Z', center: { x: 294, y: 164 } }
    ]
  },
  {
    id: 'ankara',
    name: 'Ankara',
    plateCode: 6,
    region: 'İç Anadolu',
    path: 'M200,250 L250,245 L280,265 L290,295 L285,325 L250,340 L215,343 L180,328 L160,298 L165,268 L185,253 Z',
    center: { x: 225, y: 295 },
    districts: [
      { id: 'altindag', name: 'Altındağ', path: 'M220,285 L230,287 L228,293 L218,291 Z', center: { x: 224, y: 289 } },
      { id: 'cankaya', name: 'Çankaya', path: 'M225,295 L235,297 L233,303 L223,301 Z', center: { x: 229, y: 299 } },
      { id: 'etimesgut', name: 'Etimesgut', path: 'M210,295 L220,297 L218,303 L208,301 Z', center: { x: 214, y: 299 } },
      { id: 'kecioren', name: 'Keçiören', path: 'M220,275 L230,277 L228,283 L218,281 Z', center: { x: 224, y: 279 } },
      { id: 'mamak', name: 'Mamak', path: 'M235,285 L245,287 L243,293 L233,291 Z', center: { x: 239, y: 289 } },
      { id: 'sincan', name: 'Sincan', path: 'M205,285 L215,287 L213,293 L203,291 Z', center: { x: 209, y: 289 } },
      { id: 'yenimahalle', name: 'Yenimahalle', path: 'M215,275 L225,277 L223,283 L213,281 Z', center: { x: 219, y: 279 } }
    ]
  },
  {
    id: 'izmir',
    name: 'İzmir',
    plateCode: 35,
    region: 'Ege',
    path: 'M50,290 L90,285 L110,305 L120,330 L115,355 L90,370 L65,368 L40,355 L25,330 L30,305 Z',
    center: { x: 72, y: 327 },
    districts: [
      { id: 'bayrakli', name: 'Bayraklı', path: 'M70,305 L80,307 L78,313 L68,311 Z', center: { x: 74, y: 309 } },
      { id: 'bornova', name: 'Bornova', path: 'M80,320 L90,322 L88,328 L78,326 Z', center: { x: 84, y: 324 } },
      { id: 'buca', name: 'Buca', path: 'M88,340 L98,342 L96,348 L86,346 Z', center: { x: 92, y: 344 } },
      { id: 'konak', name: 'Konak', path: 'M70,325 L80,327 L78,333 L68,331 Z', center: { x: 74, y: 329 } },
      { id: 'karsiyaka', name: 'Karşıyaka', path: 'M65,315 L75,317 L73,323 L63,321 Z', center: { x: 69, y: 319 } }
    ]
  },
  {
    id: 'adana',
    name: 'Adana',
    plateCode: 1,
    region: 'Akdeniz',
    path: 'M320,360 L370,355 L390,375 L400,405 L395,435 L370,450 L345,448 L320,435 L300,405 L305,375 Z',
    center: { x: 350, y: 402 },
    districts: [
      { id: 'seyhan', name: 'Seyhan', path: 'M345,395 L355,397 L353,403 L343,401 Z', center: { x: 349, y: 399 } },
      { id: 'yuregir', name: 'Yüreğir', path: 'M355,405 L365,407 L363,413 L353,411 Z', center: { x: 359, y: 409 } },
      { id: 'ceyhan', name: 'Ceyhan', path: 'M370,420 L380,422 L378,428 L368,426 Z', center: { x: 374, y: 424 } }
    ]
  },
  {
    id: 'adiyaman',
    name: 'Adıyaman',
    plateCode: 2,
    region: 'Güneydoğu Anadolu',
    path: 'M410,330 L450,325 L470,345 L480,375 L475,405 L450,420 L425,418 L400,405 L390,375 L395,345 Z',
    center: { x: 435, y: 372 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M430,365 L440,367 L438,373 L428,371 Z', center: { x: 434, y: 369 } }
    ]
  },
  {
    id: 'afyonkarahisar',
    name: 'Afyonkarahisar',
    plateCode: 3,
    region: 'Ege',
    path: 'M140,270 L180,265 L200,285 L210,315 L205,345 L180,360 L155,358 L130,345 L120,315 L125,285 Z',
    center: { x: 165, y: 312 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M160,305 L170,307 L168,313 L158,311 Z', center: { x: 164, y: 309 } }
    ]
  },
  {
    id: 'agri',
    name: 'Ağrı',
    plateCode: 4,
    region: 'Doğu Anadolu',
    path: 'M590,250 L630,245 L650,265 L660,295 L655,325 L630,340 L605,338 L580,325 L570,295 L575,265 Z',
    center: { x: 615, y: 292 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M610,285 L620,287 L618,293 L608,291 Z', center: { x: 614, y: 289 } }
    ]
  },
  {
    id: 'amasya',
    name: 'Amasya',
    plateCode: 5,
    region: 'Karadeniz',
    path: 'M340,180 L380,175 L400,195 L410,225 L405,255 L380,270 L355,268 L330,255 L320,225 L325,195 Z',
    center: { x: 365, y: 222 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M360,215 L370,217 L368,223 L358,221 Z', center: { x: 364, y: 219 } }
    ]
  },
  {
    id: 'antalya',
    name: 'Antalya',
    plateCode: 7,
    region: 'Akdeniz',
    path: 'M200,400 L250,395 L270,415 L280,445 L275,475 L250,490 L225,488 L200,475 L180,445 L185,415 Z',
    center: { x: 230, y: 442 },
    districts: [
      { id: 'muratpasa', name: 'Muratpaşa', path: 'M225,435 L235,437 L233,443 L223,441 Z', center: { x: 229, y: 439 } },
      { id: 'konyaalti', name: 'Konyaaltı', path: 'M215,440 L225,442 L223,448 L213,446 Z', center: { x: 219, y: 444 } },
      { id: 'kepez', name: 'Kepez', path: 'M230,430 L240,432 L238,438 L228,436 Z', center: { x: 234, y: 434 } }
    ]
  },
  {
    id: 'artvin',
    name: 'Artvin',
    plateCode: 8,
    region: 'Karadeniz',
    path: 'M500,120 L540,115 L560,135 L570,165 L565,195 L540,210 L515,208 L490,195 L480,165 L485,135 Z',
    center: { x: 525, y: 162 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M520,155 L530,157 L528,163 L518,161 Z', center: { x: 524, y: 159 } }
    ]
  },
  {
    id: 'aydin',
    name: 'Aydın',
    plateCode: 9,
    region: 'Ege',
    path: 'M80,350 L120,345 L140,365 L150,395 L145,425 L120,440 L95,438 L70,425 L60,395 L65,365 Z',
    center: { x: 105, y: 392 },
    districts: [
      { id: 'efeler', name: 'Efeler', path: 'M100,385 L110,387 L108,393 L98,391 Z', center: { x: 104, y: 389 } }
    ]
  },
  {
    id: 'balikesir',
    name: 'Balıkesir',
    plateCode: 10,
    region: 'Marmara',
    path: 'M120,180 L160,175 L180,195 L190,225 L185,255 L160,270 L135,268 L110,255 L100,225 L105,195 Z',
    center: { x: 145, y: 222 },
    districts: [
      { id: 'karesi', name: 'Karesi', path: 'M140,215 L150,217 L148,223 L138,221 Z', center: { x: 144, y: 219 } }
    ]
  },
  {
    id: 'bilecik',
    name: 'Bilecik',
    plateCode: 11,
    region: 'Marmara',
    path: 'M180,200 L210,195 L230,215 L240,245 L235,275 L210,290 L185,288 L160,275 L150,245 L155,215 Z',
    center: { x: 195, y: 242 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M190,235 L200,237 L198,243 L188,241 Z', center: { x: 194, y: 239 } }
    ]
  },
  {
    id: 'bingol',
    name: 'Bingöl',
    plateCode: 12,
    region: 'Doğu Anadolu',
    path: 'M550,280 L590,275 L610,295 L620,325 L615,355 L590,370 L565,368 L540,355 L530,325 L535,295 Z',
    center: { x: 575, y: 322 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M570,315 L580,317 L578,323 L568,321 Z', center: { x: 574, y: 319 } }
    ]
  },
  {
    id: 'bitlis',
    name: 'Bitlis',
    plateCode: 13,
    region: 'Doğu Anadolu',
    path: 'M560,330 L600,325 L620,345 L630,375 L625,405 L600,420 L575,418 L550,405 L540,375 L545,345 Z',
    center: { x: 585, y: 372 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M580,365 L590,367 L588,373 L578,371 Z', center: { x: 584, y: 369 } }
    ]
  },
  {
    id: 'bolu',
    name: 'Bolu',
    plateCode: 14,
    region: 'Karadeniz',
    path: 'M260,160 L300,155 L320,175 L330,205 L325,235 L300,250 L275,248 L250,235 L240,205 L245,175 Z',
    center: { x: 285, y: 202 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M280,195 L290,197 L288,203 L278,201 Z', center: { x: 284, y: 199 } }
    ]
  },
  {
    id: 'burdur',
    name: 'Burdur',
    plateCode: 15,
    region: 'Akdeniz',
    path: 'M160,330 L200,325 L220,345 L230,375 L225,405 L200,420 L175,418 L150,405 L140,375 L145,345 Z',
    center: { x: 185, y: 372 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M180,365 L190,367 L188,373 L178,371 Z', center: { x: 184, y: 369 } }
    ]
  },
  {
    id: 'bursa',
    name: 'Bursa',
    plateCode: 16,
    region: 'Marmara',
    path: 'M200,180 L240,175 L260,195 L270,225 L265,255 L240,270 L215,268 L190,255 L180,225 L185,195 Z',
    center: { x: 225, y: 222 },
    districts: [
      { id: 'osmangazi', name: 'Osmangazi', path: 'M220,215 L230,217 L228,223 L218,221 Z', center: { x: 224, y: 219 } },
      { id: 'nilufer', name: 'Nilüfer', path: 'M225,225 L235,227 L233,233 L223,231 Z', center: { x: 229, y: 229 } },
      { id: 'yildirim', name: 'Yıldırım', path: 'M215,225 L225,227 L223,233 L213,231 Z', center: { x: 219, y: 229 } }
    ]
  },
  {
    id: 'canakkale',
    name: 'Çanakkale',
    plateCode: 17,
    region: 'Marmara',
    path: 'M60,180 L100,175 L120,195 L130,225 L125,255 L100,270 L75,268 L50,255 L40,225 L45,195 Z',
    center: { x: 85, y: 222 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M80,215 L90,217 L88,223 L78,221 Z', center: { x: 84, y: 219 } }
    ]
  },
  {
    id: 'cankiri',
    name: 'Çankırı',
    plateCode: 18,
    region: 'İç Anadolu',
    path: 'M240,200 L280,195 L300,215 L310,245 L305,275 L280,290 L255,288 L230,275 L220,245 L225,215 Z',
    center: { x: 265, y: 242 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M260,235 L270,237 L268,243 L258,241 Z', center: { x: 264, y: 239 } }
    ]
  },
  {
    id: 'corum',
    name: 'Çorum',
    plateCode: 19,
    region: 'Karadeniz',
    path: 'M320,200 L360,195 L380,215 L390,245 L385,275 L360,290 L335,288 L310,275 L300,245 L305,215 Z',
    center: { x: 345, y: 242 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M340,235 L350,237 L348,243 L338,241 Z', center: { x: 344, y: 239 } }
    ]
  },
  {
    id: 'denizli',
    name: 'Denizli',
    plateCode: 20,
    region: 'Ege',
    path: 'M120,320 L160,315 L180,335 L190,365 L185,395 L160,410 L135,408 L110,395 L100,365 L105,335 Z',
    center: { x: 145, y: 362 },
    districts: [
      { id: 'pamukkale', name: 'Pamukkale', path: 'M140,355 L150,357 L148,363 L138,361 Z', center: { x: 144, y: 359 } },
      { id: 'merkezefendi', name: 'Merkezefendi', path: 'M145,365 L155,367 L153,373 L143,371 Z', center: { x: 149, y: 369 } }
    ]
  },
  {
    id: 'diyarbakir',
    name: 'Diyarbakır',
    plateCode: 21,
    region: 'Güneydoğu Anadolu',
    path: 'M480,330 L520,325 L540,345 L550,375 L545,405 L520,420 L495,418 L470,405 L460,375 L465,345 Z',
    center: { x: 505, y: 372 },
    districts: [
      { id: 'baglar', name: 'Bağlar', path: 'M500,365 L510,367 L508,373 L498,371 Z', center: { x: 504, y: 369 } },
      { id: 'sur', name: 'Sur', path: 'M505,370 L515,372 L513,378 L503,376 Z', center: { x: 509, y: 374 } },
      { id: 'yenisehir', name: 'Yenişehir', path: 'M495,370 L505,372 L503,378 L493,376 Z', center: { x: 499, y: 374 } },
      { id: 'kayapinar', name: 'Kayapınar', path: 'M510,365 L520,367 L518,373 L508,371 Z', center: { x: 514, y: 369 } }
    ]
  },
  {
    id: 'edirne',
    name: 'Edirne',
    plateCode: 22,
    region: 'Marmara',
    path: 'M180,100 L220,95 L240,115 L250,145 L245,175 L220,190 L195,188 L170,175 L160,145 L165,115 Z',
    center: { x: 205, y: 142 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M200,135 L210,137 L208,143 L198,141 Z', center: { x: 204, y: 139 } }
    ]
  },
  {
    id: 'elazig',
    name: 'Elazığ',
    plateCode: 23,
    region: 'Doğu Anadolu',
    path: 'M450,300 L490,295 L510,315 L520,345 L515,375 L490,390 L465,388 L440,375 L430,345 L435,315 Z',
    center: { x: 475, y: 342 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M470,335 L480,337 L478,343 L468,341 Z', center: { x: 474, y: 339 } }
    ]
  },
  {
    id: 'erzincan',
    name: 'Erzincan',
    plateCode: 24,
    region: 'Doğu Anadolu',
    path: 'M500,250 L540,245 L560,265 L570,295 L565,325 L540,340 L515,338 L490,325 L480,295 L485,265 Z',
    center: { x: 525, y: 292 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M520,285 L530,287 L528,293 L518,291 Z', center: { x: 524, y: 289 } }
    ]
  },
  {
    id: 'erzurum',
    name: 'Erzurum',
    plateCode: 25,
    region: 'Doğu Anadolu',
    path: 'M540,220 L580,215 L600,235 L610,265 L605,295 L580,310 L555,308 L530,295 L520,265 L525,235 Z',
    center: { x: 565, y: 262 },
    districts: [
      { id: 'yakutiye', name: 'Yakutiye', path: 'M560,255 L570,257 L568,263 L558,261 Z', center: { x: 564, y: 259 } },
      { id: 'palandoken', name: 'Palandöken', path: 'M565,265 L575,267 L573,273 L563,271 Z', center: { x: 569, y: 269 } },
      { id: 'aziziye', name: 'Aziziye', path: 'M570,250 L580,252 L578,258 L568,256 Z', center: { x: 574, y: 254 } }
    ]
  },
  {
    id: 'eskisehir',
    name: 'Eskişehir',
    plateCode: 26,
    region: 'İç Anadolu',
    path: 'M160,240 L200,235 L220,255 L230,285 L225,315 L200,330 L175,328 L150,315 L140,285 L145,255 Z',
    center: { x: 185, y: 282 },
    districts: [
      { id: 'tepebasi', name: 'Tepebaşı', path: 'M180,275 L190,277 L188,283 L178,281 Z', center: { x: 184, y: 279 } },
      { id: 'odunpazari', name: 'Odunpazarı', path: 'M175,285 L185,287 L183,293 L173,291 Z', center: { x: 179, y: 289 } }
    ]
  },
  {
    id: 'gaziantep',
    name: 'Gaziantep',
    plateCode: 27,
    region: 'Güneydoğu Anadolu',
    path: 'M380,380 L420,375 L440,395 L450,425 L445,455 L420,470 L395,468 L370,455 L360,425 L365,395 Z',
    center: { x: 405, y: 422 },
    districts: [
      { id: 'sahinbey', name: 'Şahinbey', path: 'M400,415 L410,417 L408,423 L398,421 Z', center: { x: 404, y: 419 } },
      { id: 'sehitkamil', name: 'Şehitkamil', path: 'M405,425 L415,427 L413,433 L403,431 Z', center: { x: 409, y: 429 } }
    ]
  },
  {
    id: 'giresun',
    name: 'Giresun',
    plateCode: 28,
    region: 'Karadeniz',
    path: 'M440,140 L480,135 L500,155 L510,185 L505,215 L480,230 L455,228 L430,215 L420,185 L425,155 Z',
    center: { x: 465, y: 182 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M460,175 L470,177 L468,183 L458,181 Z', center: { x: 464, y: 179 } }
    ]
  },
  {
    id: 'gumushane',
    name: 'Gümüşhane',
    plateCode: 29,
    region: 'Karadeniz',
    path: 'M480,160 L520,155 L540,175 L550,205 L545,235 L520,250 L495,248 L470,235 L460,205 L465,175 Z',
    center: { x: 505, y: 202 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M500,195 L510,197 L508,203 L498,201 Z', center: { x: 504, y: 199 } }
    ]
  },
  {
    id: 'hakkari',
    name: 'Hakkari',
    plateCode: 30,
    region: 'Doğu Anadolu',
    path: 'M600,380 L640,375 L660,395 L670,425 L665,455 L640,470 L615,468 L590,455 L580,425 L585,395 Z',
    center: { x: 625, y: 422 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M620,415 L630,417 L628,423 L618,421 Z', center: { x: 624, y: 419 } }
    ]
  },
  {
    id: 'hatay',
    name: 'Hatay',
    plateCode: 31,
    region: 'Akdeniz',
    path: 'M340,430 L380,425 L400,445 L410,475 L405,505 L380,520 L355,518 L330,505 L320,475 L325,445 Z',
    center: { x: 365, y: 472 },
    districts: [
      { id: 'antakya', name: 'Antakya', path: 'M360,465 L370,467 L368,473 L358,471 Z', center: { x: 364, y: 469 } },
      { id: 'defne', name: 'Defne', path: 'M365,475 L375,477 L373,483 L363,481 Z', center: { x: 369, y: 479 } },
      { id: 'arsuz', name: 'Arsuz', path: 'M350,480 L360,482 L358,488 L348,486 Z', center: { x: 354, y: 484 } }
    ]
  },
  {
    id: 'isparta',
    name: 'Isparta',
    plateCode: 32,
    region: 'Akdeniz',
    path: 'M180,350 L220,345 L240,365 L250,395 L245,425 L220,440 L195,438 L170,425 L160,395 L165,365 Z',
    center: { x: 205, y: 392 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M200,385 L210,387 L208,393 L198,391 Z', center: { x: 204, y: 389 } }
    ]
  },
  {
    id: 'mersin',
    name: 'Mersin',
    plateCode: 33,
    region: 'Akdeniz',
    path: 'M280,400 L320,395 L340,415 L350,445 L345,475 L320,490 L295,488 L270,475 L260,445 L265,415 Z',
    center: { x: 305, y: 442 },
    districts: [
      { id: 'mezitli', name: 'Mezitli', path: 'M300,435 L310,437 L308,443 L298,441 Z', center: { x: 304, y: 439 } },
      { id: 'toroslar', name: 'Toroslar', path: 'M305,445 L315,447 L313,453 L303,451 Z', center: { x: 309, y: 449 } },
      { id: 'yenisehir', name: 'Yenişehir', path: 'M295,445 L305,447 L303,453 L293,451 Z', center: { x: 299, y: 449 } },
      { id: 'akdeniz', name: 'Akdeniz', path: 'M310,440 L320,442 L318,448 L308,446 Z', center: { x: 314, y: 444 } }
    ]
  },
  {
    id: 'kocaeli',
    name: 'Kocaeli',
    plateCode: 41,
    region: 'Marmara',
    path: 'M240,160 L280,155 L300,175 L310,205 L305,235 L280,250 L255,248 L230,235 L220,205 L225,175 Z',
    center: { x: 265, y: 202 },
    districts: [
      { id: 'izmit', name: 'İzmit', path: 'M260,195 L270,197 L268,203 L258,201 Z', center: { x: 264, y: 199 } },
      { id: 'gebze', name: 'Gebze', path: 'M275,200 L285,202 L283,208 L273,206 Z', center: { x: 279, y: 204 } }
    ]
  },
  {
    id: 'konya',
    name: 'Konya',
    plateCode: 42,
    region: 'İç Anadolu',
    path: 'M220,280 L280,275 L320,295 L340,325 L335,375 L300,400 L265,398 L220,375 L200,325 L205,295 Z',
    center: { x: 270, y: 337 },
    districts: [
      { id: 'meram', name: 'Meram', path: 'M265,330 L275,332 L273,338 L263,336 Z', center: { x: 269, y: 334 } },
      { id: 'selcuklu', name: 'Selçuklu', path: 'M270,340 L280,342 L278,348 L268,346 Z', center: { x: 274, y: 344 } },
      { id: 'karatay', name: 'Karatay', path: 'M260,340 L270,342 L268,348 L258,346 Z', center: { x: 264, y: 344 } }
    ]
  },
  {
    id: 'kutahya',
    name: 'Kütahya',
    plateCode: 43,
    region: 'Ege',
    path: 'M140,240 L180,235 L200,255 L210,285 L205,315 L180,330 L155,328 L130,315 L120,285 L125,255 Z',
    center: { x: 165, y: 282 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M160,275 L170,277 L168,283 L158,281 Z', center: { x: 164, y: 279 } }
    ]
  },
  {
    id: 'malatya',
    name: 'Malatya',
    plateCode: 44,
    region: 'Doğu Anadolu',
    path: 'M420,300 L460,295 L480,315 L490,345 L485,375 L460,390 L435,388 L410,375 L400,345 L405,315 Z',
    center: { x: 445, y: 342 },
    districts: [
      { id: 'battalgazi', name: 'Battalgazi', path: 'M440,335 L450,337 L448,343 L438,341 Z', center: { x: 444, y: 339 } },
      { id: 'yesilyurt', name: 'Yeşilyurt', path: 'M445,345 L455,347 L453,353 L443,351 Z', center: { x: 449, y: 349 } }
    ]
  },
  {
    id: 'manisa',
    name: 'Manisa',
    plateCode: 45,
    region: 'Ege',
    path: 'M90,260 L130,255 L150,275 L160,305 L155,335 L130,350 L105,348 L80,335 L70,305 L75,275 Z',
    center: { x: 115, y: 302 },
    districts: [
      { id: 'yunusemre', name: 'Yunusemre', path: 'M110,295 L120,297 L118,303 L108,301 Z', center: { x: 114, y: 299 } },
      { id: 'sehzadeler', name: 'Şehzadeler', path: 'M115,305 L125,307 L123,313 L113,311 Z', center: { x: 119, y: 309 } }
    ]
  },
  {
    id: 'kahramanmaras',
    name: 'Kahramanmaraş',
    plateCode: 46,
    region: 'Akdeniz',
    path: 'M360,340 L400,335 L420,355 L430,385 L425,415 L400,430 L375,428 L350,415 L340,385 L345,355 Z',
    center: { x: 385, y: 382 },
    districts: [
      { id: 'dulkadiroglu', name: 'Dulkadiroğlu', path: 'M380,375 L390,377 L388,383 L378,381 Z', center: { x: 384, y: 379 } },
      { id: 'onikisubat', name: 'Onikişubat', path: 'M385,385 L395,387 L393,393 L383,391 Z', center: { x: 389, y: 389 } }
    ]
  },
  {
    id: 'mardin',
    name: 'Mardin',
    plateCode: 47,
    region: 'Güneydoğu Anadolu',
    path: 'M520,380 L560,375 L580,395 L590,425 L585,455 L560,470 L535,468 L510,455 L500,425 L505,395 Z',
    center: { x: 545, y: 422 },
    districts: [
      { id: 'artuklu', name: 'Artuklu', path: 'M540,415 L550,417 L548,423 L538,421 Z', center: { x: 544, y: 419 } }
    ]
  },
  {
    id: 'mugla',
    name: 'Muğla',
    plateCode: 48,
    region: 'Ege',
    path: 'M80,380 L120,375 L140,395 L150,425 L145,455 L120,470 L95,468 L70,455 L60,425 L65,395 Z',
    center: { x: 105, y: 422 },
    districts: [
      { id: 'mentese', name: 'Menteşe', path: 'M100,415 L110,417 L108,423 L98,421 Z', center: { x: 104, y: 419 } }
    ]
  },
  {
    id: 'mus',
    name: 'Muş',
    plateCode: 49,
    region: 'Doğu Anadolu',
    path: 'M540,300 L580,295 L600,315 L610,345 L605,375 L580,390 L555,388 L530,375 L520,345 L525,315 Z',
    center: { x: 565, y: 342 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M560,335 L570,337 L568,343 L558,341 Z', center: { x: 564, y: 339 } }
    ]
  },
  {
    id: 'nevsehir',
    name: 'Nevşehir',
    plateCode: 50,
    region: 'İç Anadolu',
    path: 'M300,300 L340,295 L360,315 L370,345 L365,375 L340,390 L315,388 L290,375 L280,345 L285,315 Z',
    center: { x: 325, y: 342 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M320,335 L330,337 L328,343 L318,341 Z', center: { x: 324, y: 339 } }
    ]
  },
  {
    id: 'nigde',
    name: 'Niğde',
    plateCode: 51,
    region: 'İç Anadolu',
    path: 'M280,340 L320,335 L340,355 L350,385 L345,415 L320,430 L295,428 L270,415 L260,385 L265,355 Z',
    center: { x: 305, y: 382 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M300,375 L310,377 L308,383 L298,381 Z', center: { x: 304, y: 379 } }
    ]
  },
  {
    id: 'ordu',
    name: 'Ordu',
    plateCode: 52,
    region: 'Karadeniz',
    path: 'M400,140 L440,135 L460,155 L470,185 L465,215 L440,230 L415,228 L390,215 L380,185 L385,155 Z',
    center: { x: 425, y: 182 },
    districts: [
      { id: 'altinordu', name: 'Altınordu', path: 'M420,175 L430,177 L428,183 L418,181 Z', center: { x: 424, y: 179 } }
    ]
  },
  {
    id: 'rize',
    name: 'Rize',
    plateCode: 53,
    region: 'Karadeniz',
    path: 'M520,120 L560,115 L580,135 L590,165 L585,195 L560,210 L535,208 L510,195 L500,165 L505,135 Z',
    center: { x: 545, y: 162 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M540,155 L550,157 L548,163 L538,161 Z', center: { x: 544, y: 159 } }
    ]
  },
  {
    id: 'sakarya',
    name: 'Sakarya',
    plateCode: 54,
    region: 'Marmara',
    path: 'M280,180 L320,175 L340,195 L350,225 L345,255 L320,270 L295,268 L270,255 L260,225 L265,195 Z',
    center: { x: 305, y: 222 },
    districts: [
      { id: 'adapazari', name: 'Adapazarı', path: 'M300,215 L310,217 L308,223 L298,221 Z', center: { x: 304, y: 219 } },
      { id: 'serdivan', name: 'Serdivan', path: 'M305,225 L315,227 L313,233 L303,231 Z', center: { x: 309, y: 229 } }
    ]
  },
  {
    id: 'samsun',
    name: 'Samsun',
    plateCode: 55,
    region: 'Karadeniz',
    path: 'M360,140 L400,135 L420,155 L430,185 L425,215 L400,230 L375,228 L350,215 L340,185 L345,155 Z',
    center: { x: 385, y: 182 },
    districts: [
      { id: 'ilkadim', name: 'İlkadım', path: 'M380,175 L390,177 L388,183 L378,181 Z', center: { x: 384, y: 179 } },
      { id: 'canik', name: 'Canik', path: 'M385,185 L395,187 L393,193 L383,191 Z', center: { x: 389, y: 189 } },
      { id: 'atakum', name: 'Atakum', path: 'M375,175 L385,177 L383,183 L373,181 Z', center: { x: 379, y: 179 } }
    ]
  },
  {
    id: 'siirt',
    name: 'Siirt',
    plateCode: 56,
    region: 'Güneydoğu Anadolu',
    path: 'M560,350 L600,345 L620,365 L630,395 L625,425 L600,440 L575,438 L550,425 L540,395 L545,365 Z',
    center: { x: 585, y: 392 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M580,385 L590,387 L588,393 L578,391 Z', center: { x: 584, y: 389 } }
    ]
  },
  {
    id: 'sinop',
    name: 'Sinop',
    plateCode: 57,
    region: 'Karadeniz',
    path: 'M320,120 L360,115 L380,135 L390,165 L385,195 L360,210 L335,208 L310,195 L300,165 L305,135 Z',
    center: { x: 345, y: 162 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M340,155 L350,157 L348,163 L338,161 Z', center: { x: 344, y: 159 } }
    ]
  },
  {
    id: 'sivas',
    name: 'Sivas',
    plateCode: 58,
    region: 'İç Anadolu',
    path: 'M380,240 L440,235 L470,255 L490,285 L485,325 L450,350 L415,348 L380,325 L360,285 L365,255 Z',
    center: { x: 425, y: 292 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M420,285 L430,287 L428,293 L418,291 Z', center: { x: 424, y: 289 } }
    ]
  },
  {
    id: 'tekirdag',
    name: 'Tekirdağ',
    plateCode: 59,
    region: 'Marmara',
    path: 'M160,140 L200,135 L220,155 L230,185 L225,215 L200,230 L175,228 L150,215 L140,185 L145,155 Z',
    center: { x: 185, y: 182 },
    districts: [
      { id: 'suleymanpasa', name: 'Süleymanpaşa', path: 'M180,175 L190,177 L188,183 L178,181 Z', center: { x: 184, y: 179 } }
    ]
  },
  {
    id: 'tokat',
    name: 'Tokat',
    plateCode: 60,
    region: 'Karadeniz',
    path: 'M380,200 L420,195 L440,215 L450,245 L445,275 L420,290 L395,288 L370,275 L360,245 L365,215 Z',
    center: { x: 405, y: 242 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M400,235 L410,237 L408,243 L398,241 Z', center: { x: 404, y: 239 } }
    ]
  },
  {
    id: 'trabzon',
    name: 'Trabzon',
    plateCode: 61,
    region: 'Karadeniz',
    path: 'M480,120 L520,115 L540,135 L550,165 L545,195 L520,210 L495,208 L470,195 L460,165 L465,135 Z',
    center: { x: 505, y: 162 },
    districts: [
      { id: 'ortahisar', name: 'Ortahisar', path: 'M500,155 L510,157 L508,163 L498,161 Z', center: { x: 504, y: 159 } }
    ]
  },
  {
    id: 'tunceli',
    name: 'Tunceli',
    plateCode: 62,
    region: 'Doğu Anadolu',
    path: 'M480,280 L520,275 L540,295 L550,325 L545,355 L520,370 L495,368 L470,355 L460,325 L465,295 Z',
    center: { x: 505, y: 322 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M500,315 L510,317 L508,323 L498,321 Z', center: { x: 504, y: 319 } }
    ]
  },
  {
    id: 'sanliurfa',
    name: 'Şanlıurfa',
    plateCode: 63,
    region: 'Güneydoğu Anadolu',
    path: 'M440,380 L480,375 L500,395 L510,425 L505,455 L480,470 L455,468 L430,455 L420,425 L425,395 Z',
    center: { x: 465, y: 422 },
    districts: [
      { id: 'haliliye', name: 'Haliliye', path: 'M460,415 L470,417 L468,423 L458,421 Z', center: { x: 464, y: 419 } },
      { id: 'eyyubiye', name: 'Eyyübiye', path: 'M465,425 L475,427 L473,433 L463,431 Z', center: { x: 469, y: 429 } }
    ]
  },
  {
    id: 'usak',
    name: 'Uşak',
    plateCode: 64,
    region: 'Ege',
    path: 'M120,300 L160,295 L180,315 L190,345 L185,375 L160,390 L135,388 L110,375 L100,345 L105,315 Z',
    center: { x: 145, y: 342 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M140,335 L150,337 L148,343 L138,341 Z', center: { x: 144, y: 339 } }
    ]
  },
  {
    id: 'van',
    name: 'Van',
    plateCode: 65,
    region: 'Doğu Anadolu',
    path: 'M580,320 L620,315 L640,335 L650,365 L645,395 L620,410 L595,408 L570,395 L560,365 L565,335 Z',
    center: { x: 605, y: 362 },
    districts: [
      { id: 'ipekyolu', name: 'İpekyolu', path: 'M600,355 L610,357 L608,363 L598,361 Z', center: { x: 604, y: 359 } },
      { id: 'tusba', name: 'Tuşba', path: 'M605,365 L615,367 L613,373 L603,371 Z', center: { x: 609, y: 369 } }
    ]
  },
  {
    id: 'yozgat',
    name: 'Yozgat',
    plateCode: 66,
    region: 'İç Anadolu',
    path: 'M340,240 L380,235 L400,255 L410,285 L405,315 L380,330 L355,328 L330,315 L320,285 L325,255 Z',
    center: { x: 365, y: 282 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M360,275 L370,277 L368,283 L358,281 Z', center: { x: 364, y: 279 } }
    ]
  },
  {
    id: 'zonguldak',
    name: 'Zonguldak',
    plateCode: 67,
    region: 'Karadeniz',
    path: 'M280,120 L320,115 L340,135 L350,165 L345,195 L320,210 L295,208 L270,195 L260,165 L265,135 Z',
    center: { x: 305, y: 162 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M300,155 L310,157 L308,163 L298,161 Z', center: { x: 304, y: 159 } }
    ]
  },
  {
    id: 'aksaray',
    name: 'Aksaray',
    plateCode: 68,
    region: 'İç Anadolu',
    path: 'M260,320 L300,315 L320,335 L330,365 L325,395 L300,410 L275,408 L250,395 L240,365 L245,335 Z',
    center: { x: 285, y: 362 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M280,355 L290,357 L288,363 L278,361 Z', center: { x: 284, y: 359 } }
    ]
  },
  {
    id: 'bayburt',
    name: 'Bayburt',
    plateCode: 69,
    region: 'Karadeniz',
    path: 'M520,180 L560,175 L580,195 L590,225 L585,255 L560,270 L535,268 L510,255 L500,225 L505,195 Z',
    center: { x: 545, y: 222 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M540,215 L550,217 L548,223 L538,221 Z', center: { x: 544, y: 219 } }
    ]
  },
  {
    id: 'karaman',
    name: 'Karaman',
    plateCode: 70,
    region: 'İç Anadolu',
    path: 'M240,380 L280,375 L300,395 L310,425 L305,455 L280,470 L255,468 L230,455 L220,425 L225,395 Z',
    center: { x: 265, y: 422 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M260,415 L270,417 L268,423 L258,421 Z', center: { x: 264, y: 419 } }
    ]
  },
  {
    id: 'kirikkale',
    name: 'Kırıkkale',
    plateCode: 71,
    region: 'İç Anadolu',
    path: 'M280,260 L320,255 L340,275 L350,305 L345,335 L320,350 L295,348 L270,335 L260,305 L265,275 Z',
    center: { x: 305, y: 302 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M300,295 L310,297 L308,303 L298,301 Z', center: { x: 304, y: 299 } }
    ]
  },
  {
    id: 'batman',
    name: 'Batman',
    plateCode: 72,
    region: 'Güneydoğu Anadolu',
    path: 'M500,350 L540,345 L560,365 L570,395 L565,425 L540,440 L515,438 L490,425 L480,395 L485,365 Z',
    center: { x: 525, y: 392 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M520,385 L530,387 L528,393 L518,391 Z', center: { x: 524, y: 389 } }
    ]
  },
  {
    id: 'sirnak',
    name: 'Şırnak',
    plateCode: 73,
    region: 'Güneydoğu Anadolu',
    path: 'M540,400 L580,395 L600,415 L610,445 L605,475 L580,490 L555,488 L530,475 L520,445 L525,415 Z',
    center: { x: 565, y: 442 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M560,435 L570,437 L568,443 L558,441 Z', center: { x: 564, y: 439 } }
    ]
  },
  {
    id: 'bartin',
    name: 'Bartın',
    plateCode: 74,
    region: 'Karadeniz',
    path: 'M260,140 L300,135 L320,155 L330,185 L325,215 L300,230 L275,228 L250,215 L240,185 L245,155 Z',
    center: { x: 285, y: 182 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M280,175 L290,177 L288,183 L278,181 Z', center: { x: 284, y: 179 } }
    ]
  },
  {
    id: 'ardahan',
    name: 'Ardahan',
    plateCode: 75,
    region: 'Doğu Anadolu',
    path: 'M560,140 L600,135 L620,155 L630,185 L625,215 L600,230 L575,228 L550,215 L540,185 L545,155 Z',
    center: { x: 585, y: 182 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M580,175 L590,177 L588,183 L578,181 Z', center: { x: 584, y: 179 } }
    ]
  },
  {
    id: 'igdir',
    name: 'Iğdır',
    plateCode: 76,
    region: 'Doğu Anadolu',
    path: 'M620,200 L660,195 L680,215 L690,245 L685,275 L660,290 L635,288 L610,275 L600,245 L605,215 Z',
    center: { x: 645, y: 242 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M640,235 L650,237 L648,243 L638,241 Z', center: { x: 644, y: 239 } }
    ]
  },
  {
    id: 'yalova',
    name: 'Yalova',
    plateCode: 77,
    region: 'Marmara',
    path: 'M260,180 L290,175 L310,195 L320,225 L315,255 L290,270 L265,268 L240,255 L230,225 L235,195 Z',
    center: { x: 275, y: 222 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M270,215 L280,217 L278,223 L268,221 Z', center: { x: 274, y: 219 } }
    ]
  },
  {
    id: 'karabuk',
    name: 'Karabük',
    plateCode: 78,
    region: 'Karadeniz',
    path: 'M300,160 L340,155 L360,175 L370,205 L365,235 L340,250 L315,248 L290,235 L280,205 L285,175 Z',
    center: { x: 325, y: 202 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M320,195 L330,197 L328,203 L318,201 Z', center: { x: 324, y: 199 } }
    ]
  },
  {
    id: 'kilis',
    name: 'Kilis',
    plateCode: 79,
    region: 'Güneydoğu Anadolu',
    path: 'M400,420 L440,415 L460,435 L470,465 L465,495 L440,510 L415,508 L390,495 L380,465 L385,435 Z',
    center: { x: 425, y: 462 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M420,455 L430,457 L428,463 L418,461 Z', center: { x: 424, y: 459 } }
    ]
  },
  {
    id: 'osmaniye',
    name: 'Osmaniye',
    plateCode: 80,
    region: 'Akdeniz',
    path: 'M340,400 L380,395 L400,415 L410,445 L405,475 L380,490 L355,488 L330,475 L320,445 L325,415 Z',
    center: { x: 365, y: 442 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M360,435 L370,437 L368,443 L358,441 Z', center: { x: 364, y: 439 } }
    ]
  },
  {
    id: 'duzce',
    name: 'Düzce',
    plateCode: 81,
    region: 'Karadeniz',
    path: 'M300,200 L340,195 L360,215 L370,245 L365,275 L340,290 L315,288 L290,275 L280,245 L285,215 Z',
    center: { x: 325, y: 242 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M320,235 L330,237 L328,243 L318,241 Z', center: { x: 324, y: 239 } }
    ]
  }
];
