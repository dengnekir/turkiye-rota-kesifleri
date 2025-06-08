
export interface District {
  id: string;
  name: string;
  path: string;
  center: { x: number; y: number };
}

export interface Province {
  id: string;
  name: string;
  plateCode: number;
  region: string;
  path: string;
  center: { x: number; y: number };
  districts: District[];
}

// Gerçek Türkiye SVG haritası - coğrafi pozisyonlara uygun
export const turkeyProvinces: Province[] = [
  {
    id: "istanbul",
    name: "İstanbul",
    plateCode: 34,
    region: "Marmara",
    path: "M 190 120 L 210 115 L 225 125 L 230 135 L 225 145 L 210 150 L 195 145 L 185 135 Z",
    center: { x: 207, y: 135 },
    districts: [
      { id: "fatih", name: "Fatih", path: "M 195 125 L 205 120 L 210 130 L 200 135 Z", center: { x: 202, y: 127 } },
      { id: "kadikoy", name: "Kadıköy", path: "M 210 130 L 220 125 L 225 135 L 215 140 Z", center: { x: 217, y: 132 } }
    ]
  },
  {
    id: "ankara",
    name: "Ankara",
    plateCode: 6,
    region: "İç Anadolu",
    path: "M 280 180 L 320 175 L 335 195 L 330 215 L 310 220 L 285 210 L 275 195 Z",
    center: { x: 305, y: 195 },
    districts: [
      { id: "cankaya", name: "Çankaya", path: "M 295 185 L 315 180 L 320 195 L 305 200 Z", center: { x: 308, y: 190 } },
      { id: "kecioren", name: "Keçiören", path: "M 285 195 L 305 190 L 310 205 L 290 210 Z", center: { x: 297, y: 200 } }
    ]
  },
  {
    id: "izmir",
    name: "İzmir",
    plateCode: 35,
    region: "Ege",
    path: "M 150 220 L 180 210 L 190 230 L 185 250 L 165 255 L 145 245 L 140 230 Z",
    center: { x: 165, y: 235 },
    districts: [
      { id: "konak", name: "Konak", path: "M 155 225 L 175 220 L 180 235 L 165 240 Z", center: { x: 168, y: 230 } },
      { id: "bornova", name: "Bornova", path: "M 165 240 L 180 235 L 185 250 L 170 255 Z", center: { x: 175, y: 245 } }
    ]
  },
  {
    id: "bursa",
    name: "Bursa",
    plateCode: 16,
    region: "Marmara",
    path: "M 210 150 L 240 145 L 250 165 L 245 180 L 220 185 L 205 170 Z",
    center: { x: 227, y: 165 },
    districts: [
      { id: "osmangazi", name: "Osmangazi", path: "M 220 155 L 240 150 L 245 165 L 230 170 Z", center: { x: 233, y: 160 } },
      { id: "nilufer", name: "Nilüfer", path: "M 215 170 L 235 165 L 240 180 L 220 185 Z", center: { x: 227, y: 175 } }
    ]
  },
  {
    id: "antalya",
    name: "Antalya",
    plateCode: 7,
    region: "Akdeniz",
    path: "M 250 320 L 290 310 L 305 330 L 300 350 L 275 355 L 250 345 L 245 330 Z",
    center: { x: 275, y: 335 },
    districts: [
      { id: "muratpasa", name: "Muratpaşa", path: "M 260 325 L 280 320 L 285 335 L 270 340 Z", center: { x: 273, y: 330 } },
      { id: "konyaalti", name: "Konyaaltı", path: "M 250 340 L 275 335 L 280 350 L 255 355 Z", center: { x: 265, y: 345 } }
    ]
  },
  {
    id: "adana",
    name: "Adana",
    plateCode: 1,
    region: "Akdeniz",
    path: "M 350 280 L 385 275 L 395 295 L 390 315 L 365 320 L 345 305 Z",
    center: { x: 370, y: 295 },
    districts: [
      { id: "seyhan", name: "Seyhan", path: "M 360 285 L 380 280 L 385 295 L 370 300 Z", center: { x: 373, y: 290 } },
      { id: "yuregir", name: "Yüreğir", path: "M 350 300 L 375 295 L 380 310 L 355 315 Z", center: { x: 365, y: 305 } }
    ]
  },
  {
    id: "konya",
    name: "Konya",
    plateCode: 42,
    region: "İç Anadolu",
    path: "M 280 220 L 330 215 L 350 240 L 345 270 L 315 275 L 285 260 L 275 240 Z",
    center: { x: 312, y: 245 },
    districts: [
      { id: "meram", name: "Meram", path: "M 290 230 L 320 225 L 325 245 L 305 250 Z", center: { x: 310, y: 237 } },
      { id: "selcuklu", name: "Selçuklu", path: "M 305 250 L 330 245 L 335 265 L 315 270 Z", center: { x: 321, y: 257 } }
    ]
  },
  {
    id: "gaziantep",
    name: "Gaziantep",
    plateCode: 27,
    region: "Güneydoğu Anadolu",
    path: "M 390 260 L 420 255 L 430 275 L 425 295 L 400 300 L 385 285 Z",
    center: { x: 407, y: 277 },
    districts: [
      { id: "sahinbey", name: "Şahinbey", path: "M 400 265 L 420 260 L 425 275 L 410 280 Z", center: { x: 413, y: 270 } },
      { id: "sehitkamil", name: "Şehitkamil", path: "M 395 280 L 415 275 L 420 290 L 405 295 Z", center: { x: 408, y: 285 } }
    ]
  },
  {
    id: "sanliurfa",
    name: "Şanlıurfa",
    plateCode: 63,
    region: "Güneydoğu Anadolu",
    path: "M 430 275 L 465 270 L 475 290 L 470 310 L 445 315 L 425 300 Z",
    center: { x: 450, y: 292 },
    districts: [
      { id: "haliliye", name: "Haliliye", path: "M 440 280 L 460 275 L 465 290 L 450 295 Z", center: { x: 453, y: 285 } },
      { id: "eyyubiye", name: "Eyyübiye", path: "M 435 295 L 455 290 L 460 305 L 445 310 Z", center: { x: 448, y: 300 } }
    ]
  },
  {
    id: "kocaeli",
    name: "Kocaeli",
    plateCode: 41,
    region: "Marmara",
    path: "M 230 135 L 255 130 L 265 145 L 260 160 L 240 165 L 225 150 Z",
    center: { x: 245, y: 147 },
    districts: [
      { id: "izmit", name: "İzmit", path: "M 240 140 L 255 135 L 260 150 L 245 155 Z", center: { x: 250, y: 145 } },
      { id: "gebze", name: "Gebze", path: "M 235 155 L 250 150 L 255 165 L 240 170 Z", center: { x: 245, y: 160 } }
    ]
  },
  {
    id: "mersin",
    name: "Mersin",
    plateCode: 33,
    region: "Akdeniz",
    path: "M 305 330 L 340 325 L 355 345 L 350 365 L 325 370 L 300 355 Z",
    center: { x: 327, y: 347 },
    districts: [
      { id: "yenisehir", name: "Yenişehir", path: "M 315 335 L 335 330 L 340 345 L 325 350 Z", center: { x: 328, y: 340 } },
      { id: "mezitli", name: "Mezitli", path: "M 310 350 L 330 345 L 335 360 L 320 365 Z", center: { x: 323, y: 355 } }
    ]
  },
  {
    id: "diyarbakir",
    name: "Diyarbakır",
    plateCode: 21,
    region: "Güneydoğu Anadolu",
    path: "M 475 290 L 510 285 L 520 305 L 515 325 L 490 330 L 470 315 Z",
    center: { x: 495, y: 307 },
    districts: [
      { id: "baglar", name: "Bağlar", path: "M 485 295 L 505 290 L 510 305 L 495 310 Z", center: { x: 498, y: 300 } },
      { id: "yenisehir-diyarbakir", name: "Yenişehir", path: "M 480 310 L 500 305 L 505 320 L 490 325 Z", center: { x: 493, y: 315 } }
    ]
  },
  {
    id: "kayseri",
    name: "Kayseri",
    plateCode: 38,
    region: "İç Anadolu",
    path: "M 350 200 L 385 195 L 395 215 L 390 235 L 365 240 L 345 225 Z",
    center: { x: 370, y: 217 },
    districts: [
      { id: "melikgazi", name: "Melikgazi", path: "M 360 205 L 380 200 L 385 215 L 370 220 Z", center: { x: 373, y: 210 } },
      { id: "kocasinan", name: "Kocasinan", path: "M 355 220 L 375 215 L 380 230 L 365 235 Z", center: { x: 368, y: 225 } }
    ]
  },
  {
    id: "eskisehir",
    name: "Eskişehir",
    plateCode: 26,
    region: "İç Anadolu",
    path: "M 240 180 L 275 175 L 285 195 L 280 215 L 255 220 L 235 205 Z",
    center: { x: 260, y: 197 },
    districts: [
      { id: "tepebasi", name: "Tepebaşı", path: "M 250 185 L 270 180 L 275 195 L 260 200 Z", center: { x: 263, y: 190 } },
      { id: "odunpazari", name: "Odunpazarı", path: "M 245 200 L 265 195 L 270 210 L 255 215 Z", center: { x: 258, y: 205 } }
    ]
  },
  {
    id: "trabzon",
    name: "Trabzon",
    plateCode: 61,
    region: "Karadeniz",
    path: "M 450 80 L 480 75 L 490 95 L 485 115 L 460 120 L 445 105 Z",
    center: { x: 467, y: 97 },
    districts: [
      { id: "ortahisar", name: "Ortahisar", path: "M 460 85 L 480 80 L 485 95 L 470 100 Z", center: { x: 473, y: 90 } },
      { id: "akcaabat", name: "Akçaabat", path: "M 455 100 L 475 95 L 480 110 L 465 115 Z", center: { x: 468, y: 105 } }
    ]
  },
  {
    id: "samsun",
    name: "Samsun",
    plateCode: 55,
    region: "Karadeniz",
    path: "M 350 90 L 385 85 L 395 105 L 390 125 L 365 130 L 345 115 Z",
    center: { x: 370, y: 107 },
    districts: [
      { id: "ilkadim", name: "İlkadım", path: "M 360 95 L 380 90 L 385 105 L 370 110 Z", center: { x: 373, y: 100 } },
      { id: "canik", name: "Canik", path: "M 355 110 L 375 105 L 380 120 L 365 125 Z", center: { x: 368, y: 115 } }
    ]
  },
  {
    id: "malatya",
    name: "Malatya",
    plateCode: 44,
    region: "Doğu Anadolu",
    path: "M 430 200 L 465 195 L 475 215 L 470 235 L 445 240 L 425 225 Z",
    center: { x: 450, y: 217 },
    districts: [
      { id: "battalgazi", name: "Battalgazi", path: "M 440 205 L 460 200 L 465 215 L 450 220 Z", center: { x: 453, y: 210 } },
      { id: "yesilyurt", name: "Yeşilyurt", path: "M 435 220 L 455 215 L 460 230 L 445 235 Z", center: { x: 448, y: 225 } }
    ]
  },
  {
    id: "erzurum",
    name: "Erzurum",
    plateCode: 25,
    region: "Doğu Anadolu",
    path: "M 520 140 L 555 135 L 565 155 L 560 175 L 535 180 L 515 165 Z",
    center: { x: 540, y: 157 },
    districts: [
      { id: "aziziye", name: "Aziziye", path: "M 530 145 L 550 140 L 555 155 L 540 160 Z", center: { x: 543, y: 150 } },
      { id: "palandoken", name: "Palandöken", path: "M 525 160 L 545 155 L 550 170 L 535 175 Z", center: { x: 538, y: 165 } }
    ]
  },
  {
    id: "van",
    name: "Van",
    plateCode: 65,
    region: "Doğu Anadolu",
    path: "M 580 200 L 615 195 L 625 215 L 620 235 L 595 240 L 575 225 Z",
    center: { x: 600, y: 217 },
    districts: [
      { id: "ipekyolu", name: "İpekyolu", path: "M 590 205 L 610 200 L 615 215 L 600 220 Z", center: { x: 603, y: 210 } },
      { id: "tusba", name: "Tuşba", path: "M 585 220 L 605 215 L 610 230 L 595 235 Z", center: { x: 598, y: 225 } }
    ]
  },
  {
    id: "sakarya",
    name: "Sakarya",
    plateCode: 54,
    region: "Marmara",
    path: "M 255 130 L 285 125 L 295 145 L 290 165 L 265 170 L 250 155 Z",
    center: { x: 272, y: 147 },
    districts: [
      { id: "adapazari", name: "Adapazarı", path: "M 265 135 L 285 130 L 290 145 L 275 150 Z", center: { x: 278, y: 140 } },
      { id: "serdivan", name: "Serdivan", path: "M 260 150 L 280 145 L 285 160 L 270 165 Z", center: { x: 273, y: 155 } }
    ]
  },
  {
    id: "denizli",
    name: "Denizli",
    plateCode: 20,
    region: "Ege",
    path: "M 190 230 L 220 225 L 230 245 L 225 265 L 200 270 L 185 255 Z",
    center: { x: 207, y: 247 },
    districts: [
      { id: "pamukkale", name: "Pamukkale", path: "M 200 235 L 220 230 L 225 245 L 210 250 Z", center: { x: 213, y: 240 } },
      { id: "merkezefendi", name: "Merkezefendi", path: "M 195 250 L 215 245 L 220 260 L 205 265 Z", center: { x: 208, y: 255 } }
    ]
  },
  {
    id: "hatay",
    name: "Hatay",
    plateCode: 31,
    region: "Akdeniz",
    path: "M 390 315 L 420 310 L 430 330 L 425 350 L 400 355 L 385 340 Z",
    center: { x: 407, y: 332 },
    districts: [
      { id: "antakya", name: "Antakya", path: "M 400 320 L 420 315 L 425 330 L 410 335 Z", center: { x: 413, y: 325 } },
      { id: "iskenderun", name: "İskenderun", path: "M 395 335 L 415 330 L 420 345 L 405 350 Z", center: { x: 408, y: 340 } }
    ]
  },
  {
    id: "manisa",
    name: "Manisa",
    plateCode: 45,
    region: "Ege",
    path: "M 150 190 L 180 185 L 190 205 L 185 225 L 160 230 L 145 215 Z",
    center: { x: 167, y: 207 },
    districts: [
      { id: "yunusemre", name: "Yunusemre", path: "M 160 195 L 180 190 L 185 205 L 170 210 Z", center: { x: 173, y: 200 } },
      { id: "salihli", name: "Salihli", path: "M 155 210 L 175 205 L 180 220 L 165 225 Z", center: { x: 168, y: 215 } }
    ]
  },
  {
    id: "mugla",
    name: "Muğla",
    plateCode: 48,
    region: "Ege",
    path: "M 150 260 L 185 255 L 195 275 L 190 295 L 165 300 L 145 285 Z",
    center: { x: 170, y: 277 },
    districts: [
      { id: "mentese", name: "Menteşe", path: "M 160 265 L 180 260 L 185 275 L 170 280 Z", center: { x: 173, y: 270 } },
      { id: "bodrum", name: "Bodrum", path: "M 155 280 L 175 275 L 180 290 L 165 295 Z", center: { x: 168, y: 285 } }
    ]
  },
  {
    id: "aydin",
    name: "Aydın",
    plateCode: 9,
    region: "Ege",
    path: "M 180 250 L 210 245 L 220 265 L 215 285 L 190 290 L 175 275 Z",
    center: { x: 197, y: 267 },
    districts: [
      { id: "efeler", name: "Efeler", path: "M 190 255 L 210 250 L 215 265 L 200 270 Z", center: { x: 203, y: 260 } },
      { id: "nazilli", name: "Nazilli", path: "M 185 270 L 205 265 L 210 280 L 195 285 Z", center: { x: 198, y: 275 } }
    ]
  },
  {
    id: "balikesir",
    name: "Balıkesir",
    plateCode: 10,
    region: "Marmara",
    path: "M 150 150 L 185 145 L 195 165 L 190 185 L 165 190 L 145 175 Z",
    center: { x: 170, y: 167 },
    districts: [
      { id: "altieylul", name: "Altıeylül", path: "M 160 155 L 180 150 L 185 165 L 170 170 Z", center: { x: 173, y: 160 } },
      { id: "karesi", name: "Karesi", path: "M 155 170 L 175 165 L 180 180 L 165 185 Z", center: { x: 168, y: 175 } }
    ]
  },
  {
    id: "tekirdag",
    name: "Tekirdağ",
    plateCode: 59,
    region: "Marmara",
    path: "M 150 115 L 180 110 L 190 130 L 185 150 L 160 155 L 145 140 Z",
    center: { x: 167, y: 132 },
    districts: [
      { id: "suleymanpasa", name: "Süleymanpaşa", path: "M 160 120 L 180 115 L 185 130 L 170 135 Z", center: { x: 173, y: 125 } },
      { id: "corlu", name: "Çorlu", path: "M 155 135 L 175 130 L 180 145 L 165 150 Z", center: { x: 168, y: 140 } }
    ]
  },
  {
    id: "adiyaman",
    name: "Adıyaman",
    plateCode: 2,
    region: "Güneydoğu Anadolu",
    path: "M 430 235 L 465 230 L 475 250 L 470 270 L 445 275 L 425 260 Z",
    center: { x: 450, y: 252 },
    districts: [
      { id: "merkez-adiyaman", name: "Merkez", path: "M 440 240 L 460 235 L 465 250 L 450 255 Z", center: { x: 453, y: 245 } },
      { id: "besni", name: "Besni", path: "M 435 255 L 455 250 L 460 265 L 445 270 Z", center: { x: 448, y: 260 } }
    ]
  },
  {
    id: "afyon",
    name: "Afyonkarahisar",
    plateCode: 3,
    region: "Ege",
    path: "M 220 200 L 250 195 L 260 215 L 255 235 L 230 240 L 215 225 Z",
    center: { x: 237, y: 217 },
    districts: [
      { id: "afyonkarahisar-merkez", name: "Merkez", path: "M 230 205 L 250 200 L 255 215 L 240 220 Z", center: { x: 243, y: 210 } },
      { id: "sandikli", name: "Sandıklı", path: "M 225 220 L 245 215 L 250 230 L 235 235 Z", center: { x: 238, y: 225 } }
    ]
  },
  {
    id: "agri",
    name: "Ağrı",
    plateCode: 4,
    region: "Doğu Anadolu",
    path: "M 580 150 L 615 145 L 625 165 L 620 185 L 595 190 L 575 175 Z",
    center: { x: 600, y: 167 },
    districts: [
      { id: "merkez-agri", name: "Merkez", path: "M 590 155 L 610 150 L 615 165 L 600 170 Z", center: { x: 603, y: 160 } },
      { id: "dogubayazit", name: "Doğubayazıt", path: "M 585 170 L 605 165 L 610 180 L 595 185 Z", center: { x: 598, y: 175 } }
    ]
  },
  {
    id: "amasya",
    name: "Amasya",
    plateCode: 5,
    region: "Karadeniz",
    path: "M 350 120 L 385 115 L 395 135 L 390 155 L 365 160 L 345 145 Z",
    center: { x: 370, y: 137 },
    districts: [
      { id: "merkez-amasya", name: "Merkez", path: "M 360 125 L 380 120 L 385 135 L 370 140 Z", center: { x: 373, y: 130 } },
      { id: "merzifon", name: "Merzifon", path: "M 355 140 L 375 135 L 380 150 L 365 155 Z", center: { x: 368, y: 145 } }
    ]
  },
  {
    id: "artvin",
    name: "Artvin",
    plateCode: 8,
    region: "Karadeniz",
    path: "M 490 50 L 520 45 L 530 65 L 525 85 L 500 90 L 485 75 Z",
    center: { x: 507, y: 67 },
    districts: [
      { id: "merkez-artvin", name: "Merkez", path: "M 500 55 L 520 50 L 525 65 L 510 70 Z", center: { x: 513, y: 60 } },
      { id: "hopa", name: "Hopa", path: "M 495 70 L 515 65 L 520 80 L 505 85 Z", center: { x: 508, y: 75 } }
    ]
  },
  {
    id: "batman",
    name: "Batman",
    plateCode: 72,
    region: "Güneydoğu Anadolu",
    path: "M 520 260 L 550 255 L 560 275 L 555 295 L 530 300 L 515 285 Z",
    center: { x: 537, y: 277 },
    districts: [
      { id: "merkez-batman", name: "Merkez", path: "M 530 265 L 550 260 L 555 275 L 540 280 Z", center: { x: 543, y: 270 } },
      { id: "beşiri", name: "Beşiri", path: "M 525 280 L 545 275 L 550 290 L 535 295 Z", center: { x: 538, y: 285 } }
    ]
  },
  {
    id: "bayburt",
    name: "Bayburt",
    plateCode: 69,
    region: "Karadeniz",
    path: "M 450 105 L 480 100 L 490 120 L 485 140 L 460 145 L 445 130 Z",
    center: { x: 467, y: 122 },
    districts: [
      { id: "merkez-bayburt", name: "Merkez", path: "M 460 110 L 480 105 L 485 120 L 470 125 Z", center: { x: 473, y: 115 } },
      { id: "aydintepe", name: "Aydıntepe", path: "M 455 125 L 475 120 L 480 135 L 465 140 Z", center: { x: 468, y: 130 } }
    ]
  },
  {
    id: "bilecik",
    name: "Bilecik",
    plateCode: 11,
    region: "Marmara",
    path: "M 240 165 L 270 160 L 280 180 L 275 200 L 250 205 L 235 190 Z",
    center: { x: 257, y: 182 },
    districts: [
      { id: "merkez-bilecik", name: "Merkez", path: "M 250 170 L 270 165 L 275 180 L 260 185 Z", center: { x: 263, y: 175 } },
      { id: "bozuyuk", name: "Bozüyük", path: "M 245 185 L 265 180 L 270 195 L 255 200 Z", center: { x: 258, y: 190 } }
    ]
  },
  {
    id: "bingol",
    name: "Bingöl",
    plateCode: 12,
    region: "Doğu Anadolu",
    path: "M 520 180 L 550 175 L 560 195 L 555 215 L 530 220 L 515 205 Z",
    center: { x: 537, y: 197 },
    districts: [
      { id: "merkez-bingol", name: "Merkez", path: "M 530 185 L 550 180 L 555 195 L 540 200 Z", center: { x: 543, y: 190 } },
      { id: "genc", name: "Genç", path: "M 525 200 L 545 195 L 550 210 L 535 215 Z", center: { x: 538, y: 205 } }
    ]
  },
  {
    id: "bitlis",
    name: "Bitlis",
    plateCode: 13,
    region: "Doğu Anadolu",
    path: "M 560 220 L 590 215 L 600 235 L 595 255 L 570 260 L 555 245 Z",
    center: { x: 577, y: 237 },
    districts: [
      { id: "merkez-bitlis", name: "Merkez", path: "M 570 225 L 590 220 L 595 235 L 580 240 Z", center: { x: 583, y: 230 } },
      { id: "tatvan", name: "Tatvan", path: "M 565 240 L 585 235 L 590 250 L 575 255 Z", center: { x: 578, y: 245 } }
    ]
  },
  {
    id: "bolu",
    name: "Bolu",
    plateCode: 14,
    region: "Karadeniz",
    path: "M 285 125 L 315 120 L 325 140 L 320 160 L 295 165 L 280 150 Z",
    center: { x: 302, y: 142 },
    districts: [
      { id: "merkez-bolu", name: "Merkez", path: "M 295 130 L 315 125 L 320 140 L 305 145 Z", center: { x: 308, y: 135 } },
      { id: "gerede", name: "Gerede", path: "M 290 145 L 310 140 L 315 155 L 300 160 Z", center: { x: 303, y: 150 } }
    ]
  },
  {
    id: "burdur",
    name: "Burdur",
    plateCode: 15,
    region: "Akdeniz",
    path: "M 220 265 L 250 260 L 260 280 L 255 300 L 230 305 L 215 290 Z",
    center: { x: 237, y: 282 },
    districts: [
      { id: "merkez-burdur", name: "Merkez", path: "M 230 270 L 250 265 L 255 280 L 240 285 Z", center: { x: 243, y: 275 } },
      { id: "bucak", name: "Bucak", path: "M 225 285 L 245 280 L 250 295 L 235 300 Z", center: { x: 238, y: 290 } }
    ]
  },
  {
    id: "canakkale",
    name: "Çanakkale",
    plateCode: 17,
    region: "Marmara",
    path: "M 100 150 L 135 145 L 145 165 L 140 185 L 115 190 L 95 175 Z",
    center: { x: 120, y: 167 },
    districts: [
      { id: "merkez-canakkale", name: "Merkez", path: "M 110 155 L 130 150 L 135 165 L 120 170 Z", center: { x: 123, y: 160 } },
      { id: "biga", name: "Biga", path: "M 105 170 L 125 165 L 130 180 L 115 185 Z", center: { x: 118, y: 175 } }
    ]
  },
  {
    id: "cankiri",
    name: "Çankırı",
    plateCode: 18,
    region: "İç Anadolu",
    path: "M 315 140 L 345 135 L 355 155 L 350 175 L 325 180 L 310 165 Z",
    center: { x: 332, y: 157 },
    districts: [
      { id: "merkez-cankiri", name: "Merkez", path: "M 325 145 L 345 140 L 350 155 L 335 160 Z", center: { x: 338, y: 150 } },
      { id: "cerkes", name: "Çerkeş", path: "M 320 160 L 340 155 L 345 170 L 330 175 Z", center: { x: 333, y: 165 } }
    ]
  },
  {
    id: "corum",
    name: "Çorum",
    plateCode: 19,
    region: "Karadeniz",
    path: "M 350 140 L 385 135 L 395 155 L 390 175 L 365 180 L 345 165 Z",
    center: { x: 370, y: 157 },
    districts: [
      { id: "merkez-corum", name: "Merkez", path: "M 360 145 L 380 140 L 385 155 L 370 160 Z", center: { x: 373, y: 150 } },
      { id: "osmancik", name: "Osmancık", path: "M 355 160 L 375 155 L 380 170 L 365 175 Z", center: { x: 368, y: 165 } }
    ]
  },
  {
    id: "edirne",
    name: "Edirne",
    plateCode: 22,
    region: "Marmara",
    path: "M 100 80 L 130 75 L 140 95 L 135 115 L 110 120 L 95 105 Z",
    center: { x: 117, y: 97 },
    districts: [
      { id: "merkez-edirne", name: "Merkez", path: "M 110 85 L 130 80 L 135 95 L 120 100 Z", center: { x: 123, y: 90 } },
      { id: "ipsala", name: "İpsala", path: "M 105 100 L 125 95 L 130 110 L 115 115 Z", center: { x: 118, y: 105 } }
    ]
  },
  {
    id: "elazig",
    name: "Elazığ",
    plateCode: 23,
    region: "Doğu Anadolu",
    path: "M 475 215 L 510 210 L 520 230 L 515 250 L 490 255 L 470 240 Z",
    center: { x: 495, y: 232 },
    districts: [
      { id: "merkez-elazig", name: "Merkez", path: "M 485 220 L 505 215 L 510 230 L 495 235 Z", center: { x: 498, y: 225 } },
      { id: "sivrice", name: "Sivrice", path: "M 480 235 L 500 230 L 505 245 L 490 250 Z", center: { x: 493, y: 240 } }
    ]
  },
  {
    id: "erzincan",
    name: "Erzincan",
    plateCode: 24,
    region: "Doğu Anadolu",
    path: "M 475 155 L 510 150 L 520 170 L 515 190 L 490 195 L 470 180 Z",
    center: { x: 495, y: 172 },
    districts: [
      { id: "merkez-erzincan", name: "Merkez", path: "M 485 160 L 505 155 L 510 170 L 495 175 Z", center: { x: 498, y: 165 } },
      { id: "otlukbeli", name: "Otlukbeli", path: "M 480 175 L 500 170 L 505 185 L 490 190 Z", center: { x: 493, y: 180 } }
    ]
  },
  {
    id: "giresun",
    name: "Giresun",
    plateCode: 28,
    region: "Karadeniz",
    path: "M 420 85 L 450 80 L 460 100 L 455 120 L 430 125 L 415 110 Z",
    center: { x: 437, y: 102 },
    districts: [
      { id: "merkez-giresun", name: "Merkez", path: "M 430 90 L 450 85 L 455 100 L 440 105 Z", center: { x: 443, y: 95 } },
      { id: "bulancak", name: "Bulancak", path: "M 425 105 L 445 100 L 450 115 L 435 120 Z", center: { x: 438, y: 110 } }
    ]
  },
  {
    id: "gumushane",
    name: "Gümüşhane",
    plateCode: 29,
    region: "Karadeniz",
    path: "M 450 120 L 480 115 L 490 135 L 485 155 L 460 160 L 445 145 Z",
    center: { x: 467, y: 137 },
    districts: [
      { id: "merkez-gumushane", name: "Merkez", path: "M 460 125 L 480 120 L 485 135 L 470 140 Z", center: { x: 473, y: 130 } },
      { id: "kelkit", name: "Kelkit", path: "M 455 140 L 475 135 L 480 150 L 465 155 Z", center: { x: 468, y: 145 } }
    ]
  },
  {
    id: "hakkari",
    name: "Hakkari",
    plateCode: 30,
    region: "Doğu Anadolu",
    path: "M 620 235 L 650 230 L 660 250 L 655 270 L 630 275 L 615 260 Z",
    center: { x: 637, y: 252 },
    districts: [
      { id: "merkez-hakkari", name: "Merkez", path: "M 630 240 L 650 235 L 655 250 L 640 255 Z", center: { x: 643, y: 245 } },
      { id: "yuksekova", name: "Yüksekova", path: "M 625 255 L 645 250 L 650 265 L 635 270 Z", center: { x: 638, y: 260 } }
    ]
  },
  {
    id: "isparta",
    name: "Isparta",
    plateCode: 32,
    region: "Akdeniz",
    path: "M 250 260 L 280 255 L 290 275 L 285 295 L 260 300 L 245 285 Z",
    center: { x: 267, y: 277 },
    districts: [
      { id: "merkez-isparta", name: "Merkez", path: "M 260 265 L 280 260 L 285 275 L 270 280 Z", center: { x: 273, y: 270 } },
      { id: "egirdir", name: "Eğirdir", path: "M 255 280 L 275 275 L 280 290 L 265 295 Z", center: { x: 268, y: 285 } }
    ]
  },
  {
    id: "karaman",
    name: "Karaman",
    plateCode: 70,
    region: "İç Anadolu",
    path: "M 330 270 L 365 265 L 375 285 L 370 305 L 345 310 L 325 295 Z",
    center: { x: 350, y: 287 },
    districts: [
      { id: "merkez-karaman", name: "Merkez", path: "M 340 275 L 360 270 L 365 285 L 350 290 Z", center: { x: 353, y: 280 } },
      { id: "ermenek", name: "Ermenek", path: "M 335 290 L 355 285 L 360 300 L 345 305 Z", center: { x: 348, y: 295 } }
    ]
  },
  {
    id: "kars",
    name: "Kars",
    plateCode: 36,
    region: "Doğu Anadolu",
    path: "M 580 80 L 615 75 L 625 95 L 620 115 L 595 120 L 575 105 Z",
    center: { x: 600, y: 97 },
    districts: [
      { id: "merkez-kars", name: "Merkez", path: "M 590 85 L 610 80 L 615 95 L 600 100 Z", center: { x: 603, y: 90 } },
      { id: "kagizman", name: "Kağızman", path: "M 585 100 L 605 95 L 610 110 L 595 115 Z", center: { x: 598, y: 105 } }
    ]
  },
  {
    id: "kastamonu",
    name: "Kastamonu",
    plateCode: 37,
    region: "Karadeniz",
    path: "M 285 85 L 320 80 L 330 100 L 325 120 L 300 125 L 280 110 Z",
    center: { x: 305, y: 102 },
    districts: [
      { id: "merkez-kastamonu", name: "Merkez", path: "M 295 90 L 315 85 L 320 100 L 305 105 Z", center: { x: 308, y: 95 } },
      { id: "taskoprü", name: "Taşköprü", path: "M 290 105 L 310 100 L 315 115 L 300 120 Z", center: { x: 303, y: 110 } }
    ]
  },
  {
    id: "kirikkale",
    name: "Kırıkkale",
    plateCode: 71,
    region: "İç Anadolu",
    path: "M 330 175 L 365 170 L 375 190 L 370 210 L 345 215 L 325 200 Z",
    center: { x: 350, y: 192 },
    districts: [
      { id: "merkez-kirikkale", name: "Merkez", path: "M 340 180 L 360 175 L 365 190 L 350 195 Z", center: { x: 353, y: 185 } },
      { id: "keskin", name: "Keskin", path: "M 335 195 L 355 190 L 360 205 L 345 210 Z", center: { x: 348, y: 200 } }
    ]
  },
  {
    id: "kirklareli",
    name: "Kırklareli",
    plateCode: 39,
    region: "Marmara",
    path: "M 130 75 L 160 70 L 170 90 L 165 110 L 140 115 L 125 100 Z",
    center: { x: 147, y: 92 },
    districts: [
      { id: "merkez-kirklareli", name: "Merkez", path: "M 140 80 L 160 75 L 165 90 L 150 95 Z", center: { x: 153, y: 85 } },
      { id: "luleburgaz", name: "Lüleburgaz", path: "M 135 95 L 155 90 L 160 105 L 145 110 Z", center: { x: 148, y: 100 } }
    ]
  },
  {
    id: "kirsehir",
    name: "Kırşehir",
    plateCode: 40,
    region: "İç Anadolu",
    path: "M 330 200 L 365 195 L 375 215 L 370 235 L 345 240 L 325 225 Z",
    center: { x: 350, y: 217 },
    districts: [
      { id: "merkez-kirsehir", name: "Merkez", path: "M 340 205 L 360 200 L 365 215 L 350 220 Z", center: { x: 353, y: 210 } },
      { id: "mucur", name: "Mucur", path: "M 335 220 L 355 215 L 360 230 L 345 235 Z", center: { x: 348, y: 225 } }
    ]
  },
  {
    id: "kutahya",
    name: "Kütahya",
    plateCode: 43,
    region: "Ege",
    path: "M 195 185 L 225 180 L 235 200 L 230 220 L 205 225 L 190 210 Z",
    center: { x: 212, y: 202 },
    districts: [
      { id: "merkez-kutahya", name: "Merkez", path: "M 205 190 L 225 185 L 230 200 L 215 205 Z", center: { x: 218, y: 195 } },
      { id: "tavşanlı", name: "Tavşanlı", path: "M 200 205 L 220 200 L 225 215 L 210 220 Z", center: { x: 213, y: 210 } }
    ]
  },
  {
    id: "mardin",
    name: "Mardin",
    plateCode: 47,
    region: "Güneydoğu Anadolu",
    path: "M 520 300 L 555 295 L 565 315 L 560 335 L 535 340 L 515 325 Z",
    center: { x: 540, y: 317 },
    districts: [
      { id: "artuklu", name: "Artuklu", path: "M 530 305 L 550 300 L 555 315 L 540 320 Z", center: { x: 543, y: 310 } },
      { id: "midyat", name: "Midyat", path: "M 525 320 L 545 315 L 550 330 L 535 335 Z", center: { x: 538, y: 325 } }
    ]
  },
  {
    id: "mus",
    name: "Muş",
    plateCode: 49,
    region: "Doğu Anadolu",
    path: "M 540 200 L 575 195 L 585 215 L 580 235 L 555 240 L 535 225 Z",
    center: { x: 560, y: 217 },
    districts: [
      { id: "merkez-mus", name: "Merkez", path: "M 550 205 L 570 200 L 575 215 L 560 220 Z", center: { x: 563, y: 210 } },
      { id: "malazgirt", name: "Malazgirt", path: "M 545 220 L 565 215 L 570 230 L 555 235 Z", center: { x: 558, y: 225 } }
    ]
  },
  {
    id: "nevsehir",
    name: "Nevşehir",
    plateCode: 50,
    region: "İç Anadolu",
    path: "M 350 215 L 385 210 L 395 230 L 390 250 L 365 255 L 345 240 Z",
    center: { x: 370, y: 232 },
    districts: [
      { id: "merkez-nevsehir", name: "Merkez", path: "M 360 220 L 380 215 L 385 230 L 370 235 Z", center: { x: 373, y: 225 } },
      { id: "urgup", name: "Ürgüp", path: "M 355 235 L 375 230 L 380 245 L 365 250 Z", center: { x: 368, y: 240 } }
    ]
  },
  {
    id: "nigde",
    name: "Niğde",
    plateCode: 51,
    region: "İç Anadolu",
    path: "M 350 250 L 385 245 L 395 265 L 390 285 L 365 290 L 345 275 Z",
    center: { x: 370, y: 267 },
    districts: [
      { id: "merkez-nigde", name: "Merkez", path: "M 360 255 L 380 250 L 385 265 L 370 270 Z", center: { x: 373, y: 260 } },
      { id: "bor", name: "Bor", path: "M 355 270 L 375 265 L 380 280 L 365 285 Z", center: { x: 368, y: 275 } }
    ]
  },
  {
    id: "ordu",
    name: "Ordu",
    plateCode: 52,
    region: "Karadeniz",
    path: "M 390 85 L 420 80 L 430 100 L 425 120 L 400 125 L 385 110 Z",
    center: { x: 407, y: 102 },
    districts: [
      { id: "altinordu", name: "Altınordu", path: "M 400 90 L 420 85 L 425 100 L 410 105 Z", center: { x: 413, y: 95 } },
      { id: "unye", name: "Ünye", path: "M 395 105 L 415 100 L 420 115 L 405 120 Z", center: { x: 408, y: 110 } }
    ]
  },
  {
    id: "rize",
    name: "Rize",
    plateCode: 53,
    region: "Karadeniz",
    path: "M 480 75 L 510 70 L 520 90 L 515 110 L 490 115 L 475 100 Z",
    center: { x: 497, y: 92 },
    districts: [
      { id: "merkez-rize", name: "Merkez", path: "M 490 80 L 510 75 L 515 90 L 500 95 Z", center: { x: 503, y: 85 } },
      { id: "pazar", name: "Pazar", path: "M 485 95 L 505 90 L 510 105 L 495 110 Z", center: { x: 498, y: 100 } }
    ]
  },
  {
    id: "sinop",
    name: "Sinop",
    plateCode: 57,
    region: "Karadeniz",
    path: "M 320 80 L 350 75 L 360 95 L 355 115 L 330 120 L 315 105 Z",
    center: { x: 337, y: 97 },
    districts: [
      { id: "merkez-sinop", name: "Merkez", path: "M 330 85 L 350 80 L 355 95 L 340 100 Z", center: { x: 343, y: 90 } },
      { id: "boyabat", name: "Boyabat", path: "M 325 100 L 345 95 L 350 110 L 335 115 Z", center: { x: 338, y: 105 } }
    ]
  },
  {
    id: "sivas",
    name: "Sivas",
    plateCode: 58,
    region: "İç Anadolu",
    path: "M 395 155 L 430 150 L 440 170 L 435 190 L 410 195 L 390 180 Z",
    center: { x: 415, y: 172 },
    districts: [
      { id: "merkez-sivas", name: "Merkez", path: "M 405 160 L 425 155 L 430 170 L 415 175 Z", center: { x: 418, y: 165 } },
      { id: "kangal", name: "Kangal", path: "M 400 175 L 420 170 L 425 185 L 410 190 Z", center: { x: 413, y: 180 } }
    ]
  },
  {
    id: "sirnak",
    name: "Şırnak",
    plateCode: 73,
    region: "Güneydoğu Anadolu",
    path: "M 560 295 L 595 290 L 605 310 L 600 330 L 575 335 L 555 320 Z",
    center: { x: 580, y: 312 },
    districts: [
      { id: "merkez-sirnak", name: "Merkez", path: "M 570 300 L 590 295 L 595 310 L 580 315 Z", center: { x: 583, y: 305 } },
      { id: "cizre", name: "Cizre", path: "M 565 315 L 585 310 L 590 325 L 575 330 Z", center: { x: 578, y: 320 } }
    ]
  },
  {
    id: "tokat",
    name: "Tokat",
    plateCode: 60,
    region: "Karadeniz",
    path: "M 395 135 L 430 130 L 440 150 L 435 170 L 410 175 L 390 160 Z",
    center: { x: 415, y: 152 },
    districts: [
      { id: "merkez-tokat", name: "Merkez", path: "M 405 140 L 425 135 L 430 150 L 415 155 Z", center: { x: 418, y: 145 } },
      { id: "erbaa", name: "Erbaa", path: "M 400 155 L 420 150 L 425 165 L 410 170 Z", center: { x: 413, y: 160 } }
    ]
  },
  {
    id: "tuncel",
    name: "Tunceli",
    plateCode: 62,
    region: "Doğu Anadolu",
    path: "M 475 190 L 510 185 L 520 205 L 515 225 L 490 230 L 470 215 Z",
    center: { x: 495, y: 207 },
    districts: [
      { id: "merkez-tunceli", name: "Merkez", path: "M 485 195 L 505 190 L 510 205 L 495 210 Z", center: { x: 498, y: 200 } },
      { id: "ovacik", name: "Ovacık", path: "M 480 210 L 500 205 L 505 220 L 490 225 Z", center: { x: 493, y: 215 } }
    ]
  },
  {
    id: "usak",
    name: "Uşak",
    plateCode: 64,
    region: "Ege",
    path: "M 190 200 L 220 195 L 230 215 L 225 235 L 200 240 L 185 225 Z",
    center: { x: 207, y: 217 },
    districts: [
      { id: "merkez-usak", name: "Merkez", path: "M 200 205 L 220 200 L 225 215 L 210 220 Z", center: { x: 213, y: 210 } },
      { id: "banaz", name: "Banaz", path: "M 195 220 L 215 215 L 220 230 L 205 235 Z", center: { x: 208, y: 225 } }
    ]
  },
  {
    id: "yozgat",
    name: "Yozgat",
    plateCode: 66,
    region: "İç Anadolu",
    path: "M 365 175 L 395 170 L 405 190 L 400 210 L 375 215 L 360 200 Z",
    center: { x: 382, y: 192 },
    districts: [
      { id: "merkez-yozgat", name: "Merkez", path: "M 375 180 L 395 175 L 400 190 L 385 195 Z", center: { x: 388, y: 185 } },
      { id: "sorgun", name: "Sorgun", path: "M 370 195 L 390 190 L 395 205 L 380 210 Z", center: { x: 383, y: 200 } }
    ]
  },
  {
    id: "zonguldak",
    name: "Zonguldak",
    plateCode: 67,
    region: "Karadeniz",
    path: "M 250 85 L 280 80 L 290 100 L 285 120 L 260 125 L 245 110 Z",
    center: { x: 267, y: 102 },
    districts: [
      { id: "merkez-zonguldak", name: "Merkez", path: "M 260 90 L 280 85 L 285 100 L 270 105 Z", center: { x: 273, y: 95 } },
      { id: "eregli", name: "Ereğli", path: "M 255 105 L 275 100 L 280 115 L 265 120 Z", center: { x: 268, y: 110 } }
    ]
  },
  {
    id: "aksaray",
    name: "Aksaray",
    plateCode: 68,
    region: "İç Anadolu",
    path: "M 320 240 L 355 235 L 365 255 L 360 275 L 335 280 L 315 265 Z",
    center: { x: 340, y: 257 },
    districts: [
      { id: "merkez-aksaray", name: "Merkez", path: "M 330 245 L 350 240 L 355 255 L 340 260 Z", center: { x: 343, y: 250 } },
      { id: "guzelyurt", name: "Güzelyurt", path: "M 325 260 L 345 255 L 350 270 L 335 275 Z", center: { x: 338, y: 265 } }
    ]
  },
  {
    id: "bartin",
    name: "Bartın",
    plateCode: 74,
    region: "Karadeniz",
    path: "M 280 100 L 310 95 L 320 115 L 315 135 L 290 140 L 275 125 Z",
    center: { x: 297, y: 117 },
    districts: [
      { id: "merkez-bartin", name: "Merkez", path: "M 290 105 L 310 100 L 315 115 L 300 120 Z", center: { x: 303, y: 110 } },
      { id: "amasra", name: "Amasra", path: "M 285 120 L 305 115 L 310 130 L 295 135 Z", center: { x: 298, y: 125 } }
    ]
  },
  {
    id: "ardahan",
    name: "Ardahan",
    plateCode: 75,
    region: "Doğu Anadolu",
    path: "M 580 55 L 610 50 L 620 70 L 615 90 L 590 95 L 575 80 Z",
    center: { x: 597, y: 72 },
    districts: [
      { id: "merkez-ardahan", name: "Merkez", path: "M 590 60 L 610 55 L 615 70 L 600 75 Z", center: { x: 603, y: 65 } },
      { id: "gole", name: "Göle", path: "M 585 75 L 605 70 L 610 85 L 595 90 Z", center: { x: 598, y: 80 } }
    ]
  },
  {
    id: "igdir",
    name: "Iğdır",
    plateCode: 76,
    region: "Doğu Anadolu",
    path: "M 620 115 L 650 110 L 660 130 L 655 150 L 630 155 L 615 140 Z",
    center: { x: 637, y: 132 },
    districts: [
      { id: "merkez-igdir", name: "Merkez", path: "M 630 120 L 650 115 L 655 130 L 640 135 Z", center: { x: 643, y: 125 } },
      { id: "tuzluca", name: "Tuzluca", path: "M 625 135 L 645 130 L 650 145 L 635 150 Z", center: { x: 638, y: 140 } }
    ]
  },
  {
    id: "yalova",
    name: "Yalova",
    plateCode: 77,
    region: "Marmara",
    path: "M 210 140 L 235 135 L 245 155 L 240 175 L 215 180 L 205 165 Z",
    center: { x: 225, y: 157 },
    districts: [
      { id: "merkez-yalova", name: "Merkez", path: "M 220 145 L 235 140 L 240 155 L 225 160 Z", center: { x: 230, y: 150 } },
      { id: "cinarcik", name: "Çınarcık", path: "M 215 160 L 230 155 L 235 170 L 220 175 Z", center: { x: 225, y: 165 } }
    ]
  },
  {
    id: "karabuk",
    name: "Karabük",
    plateCode: 78,
    region: "Karadeniz",
    path: "M 290 100 L 320 95 L 330 115 L 325 135 L 300 140 L 285 125 Z",
    center: { x: 307, y: 117 },
    districts: [
      { id: "merkez-karabuk", name: "Merkez", path: "M 300 105 L 320 100 L 325 115 L 310 120 Z", center: { x: 313, y: 110 } },
      { id: "safranbolu", name: "Safranbolu", path: "M 295 120 L 315 115 L 320 130 L 305 135 Z", center: { x: 308, y: 125 } }
    ]
  },
  {
    id: "kilis",
    name: "Kilis",
    plateCode: 79,
    region: "Güneydoğu Anadolu",
    path: "M 420 295 L 450 290 L 460 310 L 455 330 L 430 335 L 415 320 Z",
    center: { x: 437, y: 312 },
    districts: [
      { id: "merkez-kilis", name: "Merkez", path: "M 430 300 L 450 295 L 455 310 L 440 315 Z", center: { x: 443, y: 305 } },
      { id: "musabeyli", name: "Musabeyli", path: "M 425 315 L 445 310 L 450 325 L 435 330 Z", center: { x: 438, y: 320 } }
    ]
  },
  {
    id: "osmaniye",
    name: "Osmaniye",
    plateCode: 80,
    region: "Akdeniz",
    path: "M 390 295 L 420 290 L 430 310 L 425 330 L 400 335 L 385 320 Z",
    center: { x: 407, y: 312 },
    districts: [
      { id: "merkez-osmaniye", name: "Merkez", path: "M 400 300 L 420 295 L 425 310 L 410 315 Z", center: { x: 413, y: 305 } },
      { id: "kadirli", name: "Kadirli", path: "M 395 315 L 415 310 L 420 325 L 405 330 Z", center: { x: 408, y: 320 } }
    ]
  },
  {
    id: "düzce",
    name: "Düzce",
    plateCode: 81,
    region: "Karadeniz",
    path: "M 265 120 L 295 115 L 305 135 L 300 155 L 275 160 L 260 145 Z",
    center: { x: 282, y: 137 },
    districts: [
      { id: "merkez-duzce", name: "Merkez", path: "M 275 125 L 295 120 L 300 135 L 285 140 Z", center: { x: 288, y: 130 } },
      { id: "akcakoca", name: "Akçakoca", path: "M 270 140 L 290 135 L 295 150 L 280 155 Z", center: { x: 283, y: 145 } }
    ]
  }
];
