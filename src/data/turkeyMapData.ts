
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
    path: 'M 438.5 224.3 L 445.2 220.8 L 452.1 223.5 L 456.8 228.9 L 460.3 235.1 L 458.7 242.3 L 453.2 248.1 L 446.8 250.2 L 439.1 249.8 L 432.5 246.9 L 428.2 241.8 L 427.9 235.2 L 431.4 229.1 Z',
    center: { x: 444.1, y: 238.7 },
    districts: [
      { id: 'adalar', name: 'Adalar', path: 'M 460.3 235.1 L 463.2 236.8 L 462.1 240.5 L 459.4 239.2 Z', center: { x: 461.3, y: 237.9 } },
      { id: 'arnavutkoy', name: 'Arnavutköy', path: 'M 431.4 229.1 L 436.8 227.2 L 438.1 231.5 L 432.9 233.1 Z', center: { x: 434.8, y: 230.2 } },
      { id: 'avcilar', name: 'Avcılar', path: 'M 439.1 249.8 L 444.5 251.2 L 443.1 255.8 L 437.8 254.5 Z', center: { x: 441.1, y: 252.8 } },
      { id: 'bagcilar', name: 'Bağcılar', path: 'M 440.2 238.5 L 445.8 240.1 L 444.3 244.2 L 438.9 242.7 Z', center: { x: 442.3, y: 241.4 } },
      { id: 'bakirkoy', name: 'Bakırköy', path: 'M 438.9 242.7 L 444.3 244.2 L 442.8 248.3 L 437.5 246.8 Z', center: { x: 440.9, y: 245.5 } },
      { id: 'basaksehir', name: 'Başakşehir', path: 'M 431.4 235.2 L 436.8 236.8 L 435.3 240.9 L 430.1 239.4 Z', center: { x: 433.4, y: 238.1 } },
      { id: 'beykoz', name: 'Beykoz', path: 'M 452.1 223.5 L 457.5 225.1 L 456.1 229.2 L 450.8 227.7 Z', center: { x: 454.1, y: 226.4 } },
      { id: 'beyoglu', name: 'Beyoğlu', path: 'M 445.2 230.8 L 450.6 232.4 L 449.1 236.5 L 443.8 235.0 Z', center: { x: 447.2, y: 233.7 } },
      { id: 'fatih', name: 'Fatih', path: 'M 442.1 235.5 L 447.5 237.1 L 446.0 241.2 L 440.7 239.7 Z', center: { x: 444.1, y: 238.4 } },
      { id: 'kadikoy', name: 'Kadıköy', path: 'M 449.8 245.2 L 455.2 246.8 L 453.7 250.9 L 448.4 249.4 Z', center: { x: 451.8, y: 248.1 } },
      { id: 'sariyer', name: 'Sarıyer', path: 'M 448.5 220.1 L 453.9 221.7 L 452.4 225.8 L 447.1 224.3 Z', center: { x: 450.5, y: 223.0 } },
      { id: 'sisli', name: 'Şişli', path: 'M 444.2 227.5 L 449.6 229.1 L 448.1 233.2 L 442.8 231.7 Z', center: { x: 446.2, y: 230.4 } },
      { id: 'uskudar', name: 'Üsküdar', path: 'M 448.1 240.2 L 453.5 241.8 L 452.0 245.9 L 446.7 244.4 Z', center: { x: 450.1, y: 243.1 } }
    ]
  },
  {
    id: 'tekirdag',
    name: 'Tekirdağ',
    plateCode: 59,
    region: 'Marmara',
    path: 'M 395.2 218.5 L 412.8 216.3 L 427.9 220.1 L 431.4 229.1 L 428.2 241.8 L 418.5 248.3 L 405.1 249.2 L 390.3 245.8 L 385.2 236.1 L 387.8 226.5 Z',
    center: { x: 409.8, y: 233.9 },
    districts: [
      { id: 'suleymanpasa', name: 'Süleymanpaşa', path: 'M 405.1 230.5 L 415.2 232.1 L 413.8 236.8 L 403.7 235.2 Z', center: { x: 409.5, y: 233.7 } }
    ]
  },
  {
    id: 'edirne',
    name: 'Edirne',
    plateCode: 22,
    region: 'Marmara',
    path: 'M 360.1 195.2 L 378.5 192.8 L 395.2 196.5 L 402.1 206.8 L 399.8 218.5 L 390.3 225.8 L 376.2 227.1 L 358.9 223.5 L 351.2 213.8 L 353.8 202.1 Z',
    center: { x: 376.8, y: 211.6 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 372.5 208.2 L 382.6 209.8 L 381.2 214.5 L 371.1 212.9 Z', center: { x: 376.9, y: 211.4 } }
    ]
  },
  {
    id: 'kirklareli',
    name: 'Kırklareli',
    plateCode: 39,
    region: 'Marmara',
    path: 'M 378.5 192.8 L 395.2 190.5 L 412.8 194.2 L 419.7 204.5 L 417.4 216.3 L 407.9 223.6 L 393.8 224.9 L 376.5 221.3 L 369.6 211.0 L 371.9 199.2 Z',
    center: { x: 394.8, y: 208.6 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 390.5 205.2 L 400.6 206.8 L 399.2 211.5 L 389.1 209.9 Z', center: { x: 394.9, y: 208.4 } }
    ]
  },
  {
    id: 'canakkale',
    name: 'Çanakkale',
    plateCode: 17,
    region: 'Marmara',
    path: 'M 325.8 235.1 L 345.2 232.5 L 362.1 236.8 L 370.5 248.3 L 368.9 261.2 L 358.2 270.1 L 342.5 272.3 L 323.1 268.9 L 314.2 257.8 L 316.1 244.5 Z',
    center: { x: 342.8, y: 252.7 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 338.5 249.2 L 348.6 250.8 L 347.2 255.5 L 337.1 253.9 Z', center: { x: 342.9, y: 252.4 } }
    ]
  },
  {
    id: 'balikesir',
    name: 'Balıkesir',
    plateCode: 10,
    region: 'Marmara',
    path: 'M 345.2 272.3 L 368.9 269.1 L 388.5 273.8 L 398.2 286.9 L 396.1 301.5 L 384.7 312.3 L 367.8 314.2 L 346.9 310.1 L 336.5 297.8 L 338.9 282.5 Z',
    center: { x: 367.6, y: 292.8 },
    districts: [
      { id: 'karesi', name: 'Karesi', path: 'M 363.2 289.5 L 373.3 291.1 L 371.9 295.8 L 361.8 294.2 Z', center: { x: 367.6, y: 292.7 } }
    ]
  },
  {
    id: 'bursa',
    name: 'Bursa',
    plateCode: 16,
    region: 'Marmara',
    path: 'M 388.5 273.8 L 412.1 270.9 L 431.2 275.1 L 440.8 287.5 L 438.9 301.8 L 428.2 312.1 L 412.5 314.5 L 392.8 310.8 L 383.1 298.9 L 385.2 284.2 Z',
    center: { x: 412.5, y: 293.7 },
    districts: [
      { id: 'osmangazi', name: 'Osmangazi', path: 'M 408.2 290.2 L 418.3 291.8 L 416.9 296.5 L 406.8 294.9 Z', center: { x: 412.6, y: 293.4 } },
      { id: 'nilufer', name: 'Nilüfer', path: 'M 413.5 298.1 L 423.6 299.7 L 422.2 304.4 L 412.1 302.8 Z', center: { x: 417.9, y: 301.3 } },
      { id: 'yildirim', name: 'Yıldırım', path: 'M 403.8 298.1 L 413.9 299.7 L 412.5 304.4 L 402.4 302.8 Z', center: { x: 408.2, y: 301.3 } }
    ]
  },
  {
    id: 'bilecik',
    name: 'Bilecik',
    plateCode: 11,
    region: 'Marmara',
    path: 'M 431.2 275.1 L 448.5 272.8 L 463.1 276.5 L 471.2 287.3 L 469.8 299.8 L 461.5 309.1 L 448.9 311.2 L 433.8 308.1 L 426.1 297.8 L 427.9 285.9 Z',
    center: { x: 449.3, y: 292.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 445.1 288.5 L 455.2 290.1 L 453.8 294.8 L 443.7 293.2 Z', center: { x: 449.5, y: 291.7 } }
    ]
  },
  {
    id: 'kocaeli',
    name: 'Kocaeli',
    plateCode: 41,
    region: 'Marmara',
    path: 'M 463.1 276.5 L 478.9 274.1 L 492.5 277.3 L 500.1 287.8 L 498.6 299.5 L 490.8 308.2 L 479.2 310.1 L 465.1 307.8 L 457.8 298.1 L 459.5 286.9 Z',
    center: { x: 479.0, y: 292.2 },
    districts: [
      { id: 'izmit', name: 'İzmit', path: 'M 474.8 288.9 L 484.9 290.5 L 483.5 295.2 L 473.4 293.6 Z', center: { x: 479.2, y: 292.1 } },
      { id: 'gebze', name: 'Gebze', path: 'M 484.2 295.8 L 494.3 297.4 L 492.9 302.1 L 482.8 300.5 Z', center: { x: 488.6, y: 299.0 } }
    ]
  },
  {
    id: 'sakarya',
    name: 'Sakarya',
    plateCode: 54,
    region: 'Marmara',
    path: 'M 492.5 277.3 L 508.1 274.8 L 521.2 277.9 L 528.5 287.9 L 527.1 299.2 L 519.8 308.5 L 508.5 310.6 L 494.9 308.1 L 487.8 298.8 L 489.3 287.1 Z',
    center: { x: 508.7, y: 292.4 },
    districts: [
      { id: 'adapazari', name: 'Adapazarı', path: 'M 504.5 289.1 L 514.6 290.7 L 513.2 295.4 L 503.1 293.8 Z', center: { x: 508.9, y: 292.3 } },
      { id: 'serdivan', name: 'Serdivan', path: 'M 509.8 296.0 L 519.9 297.6 L 518.5 302.3 L 508.4 300.7 Z', center: { x: 514.2, y: 299.2 } }
    ]
  },
  {
    id: 'yalova',
    name: 'Yalova',
    plateCode: 77,
    region: 'Marmara',
    path: 'M 471.2 287.3 L 485.8 285.1 L 498.6 288.2 L 505.1 297.5 L 503.9 308.1 L 497.2 316.2 L 486.1 318.1 L 473.5 315.8 L 467.1 307.1 L 468.5 296.9 Z',
    center: { x: 486.1, y: 301.8 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 482.1 298.5 L 492.2 300.1 L 490.8 304.8 L 480.7 303.2 Z', center: { x: 486.5, y: 301.7 } }
    ]
  },

  // Ege Bölgesi
  {
    id: 'izmir',
    name: 'İzmir',
    plateCode: 35,
    region: 'Ege',
    path: 'M 278.5 352.1 L 298.9 349.2 L 316.1 353.8 L 325.8 366.9 L 324.1 381.5 L 315.2 393.8 L 300.5 396.9 L 282.1 393.1 L 272.8 380.8 L 274.9 366.5 Z',
    center: { x: 299.2, y: 373.0 },
    districts: [
      { id: 'bayrakli', name: 'Bayraklı', path: 'M 295.1 366.8 L 305.2 368.4 L 303.8 373.1 L 293.7 371.5 Z', center: { x: 299.5, y: 370.0 } },
      { id: 'bornova', name: 'Bornova', path: 'M 305.8 378.2 L 315.9 379.8 L 314.5 384.5 L 304.4 382.9 Z', center: { x: 310.2, y: 381.4 } },
      { id: 'buca', name: 'Buca', path: 'M 313.5 387.1 L 323.6 388.7 L 322.2 393.4 L 312.1 391.8 Z', center: { x: 317.9, y: 390.3 } },
      { id: 'konak', name: 'Konak', path: 'M 295.1 378.2 L 305.2 379.8 L 303.8 384.5 L 293.7 382.9 Z', center: { x: 299.5, y: 381.4 } },
      { id: 'karsiyaka', name: 'Karşıyaka', path: 'M 288.5 371.5 L 298.6 373.1 L 297.2 377.8 L 287.1 376.2 Z', center: { x: 292.9, y: 374.7 } }
    ]
  },
  {
    id: 'manisa',
    name: 'Manisa',
    plateCode: 45,
    region: 'Ege',
    path: 'M 316.1 353.8 L 338.9 350.5 L 356.2 354.9 L 365.1 367.2 L 363.8 381.1 L 355.5 392.8 L 341.2 395.5 L 322.8 392.1 L 313.5 380.5 L 315.1 366.9 Z',
    center: { x: 339.3, y: 373.0 },
    districts: [
      { id: 'yunusemre', name: 'Yunusemre', path: 'M 335.1 369.8 L 345.2 371.4 L 343.8 376.1 L 333.7 374.5 Z', center: { x: 339.5, y: 372.7 } },
      { id: 'sehzadeler', name: 'Şehzadeler', path: 'M 340.8 378.2 L 350.9 379.8 L 349.5 384.5 L 339.4 382.9 Z', center: { x: 345.2, y: 381.4 } }
    ]
  },
  {
    id: 'aydin',
    name: 'Aydın',
    plateCode: 9,
    region: 'Ege',
    path: 'M 298.9 396.9 L 320.5 393.8 L 337.1 398.1 L 345.8 409.5 L 344.1 423.2 L 336.2 434.1 L 322.8 436.5 L 304.9 433.8 L 296.1 423.1 L 297.5 409.8 Z',
    center: { x: 321.0, y: 415.2 },
    districts: [
      { id: 'efeler', name: 'Efeler', path: 'M 316.8 411.9 L 326.9 413.5 L 325.5 418.2 L 315.4 416.6 Z', center: { x: 321.2, y: 415.1 } }
    ]
  },
  {
    id: 'denizli',
    name: 'Denizli',
    plateCode: 20,
    region: 'Ege',
    path: 'M 337.1 398.1 L 358.2 394.8 L 374.5 398.9 L 382.8 409.8 L 381.5 423.1 L 374.1 433.5 L 361.2 435.8 L 343.8 432.9 L 335.1 422.5 L 336.8 409.5 Z',
    center: { x: 359.0, y: 417.4 },
    districts: [
      { id: 'pamukkale', name: 'Pamukkale', path: 'M 354.8 414.1 L 364.9 415.7 L 363.5 420.4 L 353.4 418.8 Z', center: { x: 359.2, y: 417.3 } },
      { id: 'merkezefendi', name: 'Merkezefendi', path: 'M 360.1 421.0 L 370.2 422.6 L 368.8 427.3 L 358.7 425.7 Z', center: { x: 364.5, y: 424.2 } }
    ]
  },
  {
    id: 'mugla',
    name: 'Muğla',
    plateCode: 48,
    region: 'Ege',
    path: 'M 320.5 436.5 L 344.1 433.1 L 363.8 437.8 L 374.5 450.2 L 372.9 465.8 L 363.1 478.9 L 347.2 481.5 L 326.8 477.9 L 315.2 466.1 L 317.1 450.9 Z',
    center: { x: 345.9, y: 457.3 },
    districts: [
      { id: 'mentese', name: 'Menteşe', path: 'M 341.5 454.1 L 351.6 455.7 L 350.2 460.4 L 340.1 458.8 Z', center: { x: 345.9, y: 457.3 } }
    ]
  },
  {
    id: 'afyonkarahisar',
    name: 'Afyonkarahisar',
    plateCode: 3,
    region: 'Ege',
    path: 'M 374.5 398.9 L 398.2 395.1 L 416.8 399.5 L 426.1 411.2 L 424.9 425.8 L 417.2 436.9 L 403.5 439.1 L 384.1 435.8 L 374.5 424.5 L 376.2 410.2 Z',
    center: { x: 400.3, y: 417.1 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 396.1 413.8 L 406.2 415.4 L 404.8 420.1 L 394.7 418.5 Z', center: { x: 400.5, y: 416.9 } }
    ]
  },
  {
    id: 'kutahya',
    name: 'Kütahya',
    plateCode: 43,
    region: 'Ege',
    path: 'M 416.8 399.5 L 441.2 395.8 L 459.1 400.1 L 468.5 411.5 L 467.2 425.9 L 459.8 436.8 L 446.5 439.2 L 427.8 436.1 L 418.1 425.2 L 419.9 411.1 Z',
    center: { x: 443.2, y: 417.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 439.1 414.2 L 449.2 415.8 L 447.8 420.5 L 437.7 418.9 Z', center: { x: 443.5, y: 417.3 } }
    ]
  },
  {
    id: 'usak',
    name: 'Uşak',
    plateCode: 64,
    region: 'Ege',
    path: 'M 398.2 395.1 L 416.8 392.5 L 431.5 396.1 L 439.8 406.2 L 438.9 418.5 L 432.1 428.2 L 420.8 430.1 L 405.2 427.8 L 396.5 418.1 L 397.8 406.2 Z',
    center: { x: 418.2, y: 413.1 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 414.1 409.8 L 424.2 411.4 L 422.8 416.1 L 412.7 414.5 Z', center: { x: 418.5, y: 412.9 } }
    ]
  },

  // İç Anadolu Bölgesi
  {
    id: 'ankara',
    name: 'Ankara',
    plateCode: 6,
    region: 'İç Anadolu',
    path: 'M 500.1 365.2 L 525.8 361.5 L 548.9 366.1 L 559.2 379.8 L 557.5 396.2 L 548.1 410.5 L 531.2 413.8 L 508.9 409.8 L 498.1 396.5 L 500.2 380.1 Z',
    center: { x: 528.7, y: 387.7 },
    districts: [
      { id: 'altindag', name: 'Altındağ', path: 'M 524.5 384.2 L 534.6 385.8 L 533.2 390.5 L 523.1 388.9 Z', center: { x: 528.9, y: 387.4 } },
      { id: 'cankaya', name: 'Çankaya', path: 'M 529.8 391.1 L 539.9 392.7 L 538.5 397.4 L 528.4 395.8 Z', center: { x: 534.2, y: 394.3 } },
      { id: 'etimesgut', name: 'Etimesgut', path: 'M 518.1 391.1 L 528.2 392.7 L 526.8 397.4 L 516.7 395.8 Z', center: { x: 522.5, y: 394.3 } },
      { id: 'kecioren', name: 'Keçiören', path: 'M 524.5 377.2 L 534.6 378.8 L 533.2 383.5 L 523.1 381.9 Z', center: { x: 528.9, y: 380.4 } },
      { id: 'mamak', name: 'Mamak', path: 'M 535.8 384.2 L 545.9 385.8 L 544.5 390.5 L 534.4 388.9 Z', center: { x: 540.2, y: 387.4 } },
      { id: 'sincan', name: 'Sincan', path: 'M 512.8 384.2 L 522.9 385.8 L 521.5 390.5 L 511.4 388.9 Z', center: { x: 517.2, y: 387.4 } },
      { id: 'yenimahalle', name: 'Yenimahalle', path: 'M 518.1 377.2 L 528.2 378.8 L 526.8 383.5 L 516.7 381.9 Z', center: { x: 522.5, y: 380.4 } }
    ]
  },
  {
    id: 'konya',
    name: 'Konya',
    plateCode: 42,
    region: 'İç Anadolu',
    path: 'M 468.5 411.5 L 500.1 406.8 L 531.2 413.8 L 548.1 428.5 L 552.8 448.9 L 548.9 469.8 L 535.2 485.1 L 515.8 488.2 L 493.5 484.1 L 475.2 469.8 L 470.1 449.5 L 473.8 428.9 Z',
    center: { x: 511.5, y: 448.0 },
    districts: [
      { id: 'meram', name: 'Meram', path: 'M 507.2 444.8 L 517.3 446.4 L 515.9 451.1 L 505.8 449.5 Z', center: { x: 511.6, y: 448.0 } },
      { id: 'selcuklu', name: 'Selçuklu', path: 'M 512.8 451.8 L 522.9 453.4 L 521.5 458.1 L 511.4 456.5 Z', center: { x: 517.2, y: 455.0 } },
      { id: 'karatay', name: 'Karatay', path: 'M 501.5 451.8 L 511.6 453.4 L 510.2 458.1 L 500.1 456.5 Z', center: { x: 505.9, y: 455.0 } }
    ]
  },
  {
    id: 'karaman',
    name: 'Karaman',
    plateCode: 70,
    region: 'İç Anadolu',
    path: 'M 531.2 469.8 L 552.8 465.1 L 568.9 469.5 L 576.8 481.2 L 575.1 495.8 L 567.2 507.1 L 554.5 509.8 L 538.1 506.5 L 529.8 495.2 L 531.8 481.1 Z',
    center: { x: 553.0, y: 487.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 548.8 484.2 L 558.9 485.8 L 557.5 490.5 L 547.4 488.9 Z', center: { x: 553.2, y: 487.4 } }
    ]
  },
  {
    id: 'aksaray',
    name: 'Aksaray',
    plateCode: 68,
    region: 'İç Anadolu',
    path: 'M 548.9 428.5 L 575.1 424.1 L 594.2 428.9 L 603.5 441.8 L 601.8 457.2 L 593.1 469.5 L 579.8 472.1 L 560.2 468.5 L 550.5 456.1 L 552.5 441.2 Z',
    center: { x: 577.0, y: 448.1 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 572.8 444.8 L 582.9 446.4 L 581.5 451.1 L 571.4 449.5 Z', center: { x: 577.2, y: 448.0 } }
    ]
  },
  {
    id: 'nevsehir',
    name: 'Nevşehir',
    plateCode: 50,
    region: 'İç Anadolu',
    path: 'M 594.2 428.9 L 616.8 424.8 L 632.1 428.9 L 640.5 440.2 L 639.1 453.8 L 631.2 464.5 L 619.5 466.8 L 602.1 463.8 L 593.1 453.1 L 594.8 440.1 Z',
    center: { x: 617.0, y: 445.8 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 612.8 442.5 L 622.9 444.1 L 621.5 448.8 L 611.4 447.2 Z', center: { x: 617.2, y: 445.7 } }
    ]
  },
  {
    id: 'nigde',
    name: 'Niğde',
    plateCode: 51,
    region: 'İç Anadolu',
    path: 'M 576.8 469.5 L 601.8 465.2 L 619.5 469.8 L 628.1 481.8 L 626.8 496.1 L 618.2 507.8 L 605.1 510.2 L 586.5 506.8 L 577.5 495.2 L 579.2 481.1 Z',
    center: { x: 602.5, y: 487.7 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 598.2 484.5 L 608.3 486.1 L 606.9 490.8 L 596.8 489.2 Z', center: { x: 602.6, y: 487.7 } }
    ]
  },
  {
    id: 'kirikkale',
    name: 'Kırıkkale',
    plateCode: 71,
    region: 'İç Anadolu',
    path: 'M 548.1 365.2 L 571.8 361.1 L 588.9 364.8 L 597.2 375.8 L 595.8 389.1 L 588.1 399.5 L 576.2 401.5 L 558.5 398.8 L 549.8 388.2 L 551.5 375.1 Z',
    center: { x: 573.5, y: 381.3 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 569.2 378.1 L 579.3 379.7 L 577.9 384.4 L 567.8 382.8 Z', center: { x: 573.6, y: 381.3 } }
    ]
  },
  {
    id: 'cankiri',
    name: 'Çankırı',
    plateCode: 18,
    region: 'İç Anadolu',
    path: 'M 525.8 342.1 L 548.1 338.2 L 566.2 341.8 L 574.8 352.1 L 573.5 364.8 L 566.1 374.5 L 554.8 376.1 L 537.5 373.8 L 528.5 364.1 L 530.1 351.8 Z',
    center: { x: 551.7, y: 357.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 547.5 354.2 L 557.6 355.8 L 556.2 360.5 L 546.1 358.9 Z', center: { x: 551.9, y: 357.4 } }
    ]
  },
  {
    id: 'yozgat',
    name: 'Yozgat',
    plateCode: 66,
    region: 'İç Anadolu',
    path: 'M 588.9 364.8 L 614.2 360.5 L 632.8 364.1 L 641.8 374.8 L 640.5 387.1 L 632.9 397.2 L 620.5 399.1 L 601.2 396.5 L 591.8 386.2 L 593.5 374.1 Z',
    center: { x: 617.0, y: 379.8 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 612.8 376.5 L 622.9 378.1 L 621.5 382.8 L 611.4 381.2 Z', center: { x: 617.2, y: 379.7 } }
    ]
  },
  {
    id: 'kayseri',
    name: 'Kayseri',
    plateCode: 38,
    region: 'İç Anadolu',
    path: 'M 632.8 364.1 L 658.9 359.8 L 677.1 363.5 L 686.2 374.1 L 684.8 386.8 L 677.5 397.1 L 664.8 399.2 L 645.2 396.1 L 635.8 385.8 L 637.5 373.5 Z',
    center: { x: 661.5, y: 379.5 },
    districts: [
      { id: 'kocasinan', name: 'Kocasinan', path: 'M 657.2 376.2 L 667.3 377.8 L 665.9 382.5 L 655.8 380.9 Z', center: { x: 661.6, y: 379.4 } },
      { id: 'melikgazi', name: 'Melikgazi', path: 'M 662.5 383.1 L 672.6 384.7 L 671.2 389.4 L 661.1 387.8 Z', center: { x: 666.9, y: 386.3 } },
      { id: 'talas', name: 'Talas', path: 'M 651.8 383.1 L 661.9 384.7 L 660.5 389.4 L 650.4 387.8 Z', center: { x: 656.2, y: 386.3 } },
      { id: 'hacilar', name: 'Hacılar', path: 'M 657.2 369.2 L 667.3 370.8 L 665.9 375.5 L 655.8 373.9 Z', center: { x: 661.6, y: 372.4 } }
    ]
  },
  {
    id: 'sivas',
    name: 'Sivas',
    plateCode: 58,
    region: 'İç Anadolu',
    path: 'M 677.1 363.5 L 708.5 358.1 L 729.8 362.5 L 740.2 375.8 L 738.5 392.1 L 729.1 405.8 L 713.2 408.5 L 690.8 404.5 L 679.8 391.8 L 681.8 375.2 Z',
    center: { x: 710.0, y: 383.3 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 705.8 380.1 L 715.9 381.7 L 714.5 386.4 L 704.4 384.8 Z', center: { x: 710.2, y: 383.3 } }
    ]
  },
  {
    id: 'eskisehir',
    name: 'Eskişehir',
    plateCode: 26,
    region: 'İç Anadolu',
    path: 'M 459.1 400.1 L 483.2 396.1 L 500.1 399.8 L 508.9 410.5 L 507.8 423.1 L 500.8 433.2 L 488.5 435.1 L 470.1 432.8 L 460.8 422.8 L 462.1 410.8 Z',
    center: { x: 484.5, y: 415.6 },
    districts: [
      { id: 'tepebasi', name: 'Tepebaşı', path: 'M 480.2 412.5 L 490.3 414.1 L 488.9 418.8 L 478.8 417.2 Z', center: { x: 484.6, y: 415.7 } },
      { id: 'odunpazari', name: 'Odunpazarı', path: 'M 475.5 419.1 L 485.6 420.7 L 484.2 425.4 L 474.1 423.8 Z', center: { x: 479.9, y: 422.3 } }
    ]
  },

  // Karadeniz Bölgesi
  {
    id: 'zonguldak',
    name: 'Zonguldak',
    plateCode: 67,
    region: 'Karadeniz',
    path: 'M 490.8 308.2 L 512.5 304.1 L 528.5 307.2 L 536.8 317.1 L 535.8 328.9 L 529.1 338.2 L 517.2 340.1 L 501.8 337.8 L 493.1 328.5 L 494.5 317.2 Z',
    center: { x: 515.0, y: 323.1 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 510.8 320.1 L 520.9 321.7 L 519.5 326.4 L 509.4 324.8 Z', center: { x: 515.2, y: 323.1 } }
    ]
  },
  {
    id: 'karabuk',
    name: 'Karabük',
    plateCode: 78,
    region: 'Karadeniz',
    path: 'M 528.5 307.2 L 548.1 303.5 L 562.8 306.8 L 570.5 316.1 L 569.5 327.2 L 563.1 336.1 L 552.2 337.8 L 537.5 335.8 L 529.5 327.1 L 530.8 316.5 Z',
    center: { x: 550.0, y: 321.7 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 545.8 318.5 L 555.9 320.1 L 554.5 324.8 L 544.4 323.2 Z', center: { x: 550.2, y: 321.7 } }
    ]
  },
  {
    id: 'bartin',
    name: 'Bartın',
    plateCode: 74,
    region: 'Karadeniz',
    path: 'M 512.5 304.1 L 528.5 300.8 L 541.2 303.5 L 548.1 312.1 L 547.5 322.8 L 541.8 331.2 L 532.2 332.5 L 519.8 330.8 L 512.8 322.5 L 513.8 312.8 Z',
    center: { x: 530.5, y: 317.7 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 526.2 314.5 L 536.3 316.1 L 534.9 320.8 L 524.8 319.2 Z', center: { x: 530.6, y: 317.7 } }
    ]
  },
  {
    id: 'bolu',
    name: 'Bolu',
    plateCode: 14,
    region: 'Karadeniz',
    path: 'M 548.1 338.2 L 571.8 334.1 L 588.9 337.8 L 597.2 348.1 L 595.8 360.5 L 588.1 370.2 L 576.2 372.1 L 558.5 369.8 L 549.8 360.1 L 551.5 348.2 Z',
    center: { x: 573.5, y: 354.2 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 569.2 351.1 L 579.3 352.7 L 577.9 357.4 L 567.8 355.8 Z', center: { x: 573.6, y: 354.3 } }
    ]
  },
  {
    id: 'duzce',
    name: 'Düzce',
    plateCode: 81,
    region: 'Karadeniz',
    path: 'M 521.2 327.9 L 541.8 324.5 L 556.1 327.8 L 563.5 337.1 L 562.5 348.2 L 556.8 356.8 L 546.5 358.1 L 530.5 356.1 L 522.8 347.8 L 524.1 337.5 Z',
    center: { x: 543.0, y: 342.3 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 538.8 339.1 L 548.9 340.7 L 547.5 345.4 L 537.4 343.8 Z', center: { x: 543.2, y: 342.3 } }
    ]
  },
  {
    id: 'kastamonu',
    name: 'Kastamonu',
    plateCode: 37,
    region: 'Karadeniz',
    path: 'M 562.8 306.8 L 588.9 302.1 L 608.2 305.8 L 617.8 316.5 L 616.5 330.1 L 608.1 341.8 L 594.2 344.1 L 574.8 341.1 L 564.5 330.8 L 566.1 317.2 Z',
    center: { x: 591.5, y: 323.1 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 587.2 320.1 L 597.3 321.7 L 595.9 326.4 L 585.8 324.8 Z', center: { x: 591.6, y: 323.1 } }
    ]
  },
  {
    id: 'sinop',
    name: 'Sinop',
    plateCode: 57,
    region: 'Karadeniz',
    path: 'M 608.2 305.8 L 632.1 301.5 L 649.8 304.8 L 658.5 314.8 L 657.5 327.1 L 650.1 337.2 L 637.8 339.1 L 620.5 336.8 L 611.1 327.5 L 612.8 315.2 Z',
    center: { x: 635.0, y: 320.3 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 630.8 317.1 L 640.9 318.7 L 639.5 323.4 L 629.4 321.8 Z', center: { x: 635.2, y: 320.3 } }
    ]
  },
  {
    id: 'corum',
    name: 'Çorum',
    plateCode: 19,
    region: 'Karadeniz',
    path: 'M 614.2 360.5 L 641.8 355.8 L 661.2 359.8 L 670.5 371.1 L 669.1 384.8 L 661.2 396.2 L 647.8 398.5 L 627.5 395.1 L 617.8 384.2 L 619.5 371.5 Z',
    center: { x: 644.0, y: 377.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 639.8 373.8 L 649.9 375.4 L 648.5 380.1 L 638.4 378.5 Z', center: { x: 644.2, y: 377.0 } }
    ]
  },
  {
    id: 'amasya',
    name: 'Amasya',
    plateCode: 5,
    region: 'Karadeniz',
    path: 'M 649.8 304.8 L 671.5 300.8 L 687.1 304.1 L 695.2 313.8 L 694.1 325.2 L 687.8 334.5 L 676.2 336.1 L 661.2 334.1 L 652.5 325.1 L 653.8 314.2 Z',
    center: { x: 673.5, y: 318.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 669.2 315.5 L 679.3 317.1 L 677.9 321.8 L 667.8 320.2 Z', center: { x: 673.6, y: 318.5 } }
    ]
  },
  {
    id: 'tokat',
    name: 'Tokat',
    plateCode: 60,
    region: 'Karadeniz',
    path: 'M 687.1 304.1 L 708.5 299.8 L 724.8 303.5 L 733.2 313.5 L 732.1 325.8 L 725.1 335.8 L 713.2 337.8 L 697.8 335.1 L 688.8 325.5 L 690.1 313.8 Z',
    center: { x: 711.0, y: 318.8 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 706.8 315.8 L 716.9 317.4 L 715.5 322.1 L 705.4 320.5 Z', center: { x: 711.2, y: 318.8 } }
    ]
  },
  {
    id: 'samsun',
    name: 'Samsun',
    plateCode: 55,
    region: 'Karadeniz',
    path: 'M 724.8 303.5 L 749.2 298.8 L 767.1 302.8 L 776.5 313.1 L 775.2 326.5 L 767.8 337.1 L 754.5 339.5 L 737.8 336.8 L 728.1 326.8 L 729.8 313.8 Z',
    center: { x: 752.0, y: 319.2 },
    districts: [
      { id: 'ilkadim', name: 'İlkadım', path: 'M 747.8 316.1 L 757.9 317.7 L 756.5 322.4 L 746.4 320.8 Z', center: { x: 752.2, y: 319.1 } },
      { id: 'canik', name: 'Canik', path: 'M 753.1 323.1 L 763.2 324.7 L 761.8 329.4 L 751.7 327.8 Z', center: { x: 757.5, y: 326.3 } },
      { id: 'atakum', name: 'Atakum', path: 'M 742.5 316.1 L 752.6 317.7 L 751.2 322.4 L 741.1 320.8 Z', center: { x: 746.9, y: 319.1 } }
    ]
  },
  {
    id: 'ordu',
    name: 'Ordu',
    plateCode: 52,
    region: 'Karadeniz',
    path: 'M 767.1 302.8 L 789.8 298.5 L 806.1 302.1 L 814.8 311.8 L 813.8 324.5 L 807.1 334.8 L 795.2 336.8 L 779.8 334.5 L 770.5 325.1 L 771.8 312.5 Z',
    center: { x: 792.5, y: 317.7 },
    districts: [
      { id: 'altinordu', name: 'Altınordu', path: 'M 788.2 314.8 L 798.3 316.4 L 796.9 321.1 L 786.8 319.5 Z', center: { x: 792.6, y: 317.8 } }
    ]
  },
  {
    id: 'giresun',
    name: 'Giresun',
    plateCode: 28,
    region: 'Karadeniz',
    path: 'M 806.1 302.1 L 826.8 298.1 L 841.5 301.5 L 849.5 310.5 L 848.8 322.1 L 842.8 331.8 L 832.1 333.5 L 818.1 331.8 L 809.1 323.1 L 810.5 311.8 Z',
    center: { x: 829.5, y: 316.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 825.2 312.8 L 835.3 314.4 L 833.9 319.1 L 823.8 317.5 Z', center: { x: 829.6, y: 315.8 } }
    ]
  },
  {
    id: 'trabzon',
    name: 'Trabzon',
    plateCode: 61,
    region: 'Karadeniz',
    path: 'M 841.5 301.5 L 863.8 297.8 L 879.1 301.1 L 887.5 310.1 L 886.8 321.8 L 880.5 331.1 L 869.2 332.8 L 854.5 331.1 L 845.1 322.5 L 846.5 311.1 Z',
    center: { x: 866.5, y: 314.9 },
    districts: [
      { id: 'ortahisar', name: 'Ortahisar', path: 'M 862.2 311.8 L 872.3 313.4 L 870.9 318.1 L 860.8 316.5 Z', center: { x: 866.6, y: 314.8 } }
    ]
  },
  {
    id: 'rize',
    name: 'Rize',
    plateCode: 53,
    region: 'Karadeniz',
    path: 'M 879.1 301.1 L 898.8 297.8 L 912.1 300.8 L 919.5 309.1 L 918.8 320.1 L 913.1 328.8 L 903.2 330.1 L 890.1 328.8 L 881.8 320.8 L 883.1 310.1 Z',
    center: { x: 900.5, y: 314.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 896.2 310.8 L 906.3 312.4 L 904.9 317.1 L 894.8 315.5 Z', center: { x: 900.6, y: 313.8 } }
    ]
  },
  {
    id: 'artvin',
    name: 'Artvin',
    plateCode: 8,
    region: 'Karadeniz',
    path: 'M 912.1 300.8 L 932.8 297.1 L 946.5 300.5 L 954.2 309.1 L 953.5 320.8 L 947.5 330.1 L 937.2 331.8 L 923.1 330.1 L 914.5 321.8 L 915.8 310.5 Z',
    center: { x: 934.5, y: 314.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 930.2 311.1 L 940.3 312.7 L 938.9 317.4 L 928.8 315.8 Z', center: { x: 934.6, y: 314.3 } }
    ]
  },
  {
    id: 'gumushane',
    name: 'Gümüşhane',
    plateCode: 29,
    region: 'Karadeniz',
    path: 'M 849.5 331.8 L 868.8 327.8 L 884.1 331.1 L 891.8 340.1 L 890.8 351.8 L 885.1 361.1 L 875.2 362.8 L 861.1 361.1 L 852.5 352.8 L 853.8 341.5 Z',
    center: { x: 872.0, y: 346.8 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 867.8 343.8 L 877.9 345.4 L 876.5 350.1 L 866.4 348.5 Z', center: { x: 872.2, y: 346.8 } }
    ]
  },
  {
    id: 'bayburt',
    name: 'Bayburt',
    plateCode: 69,
    region: 'Karadeniz',
    path: 'M 884.1 331.1 L 902.8 327.8 L 916.5 330.8 L 923.8 339.5 L 922.8 350.8 L 917.5 359.8 L 908.2 361.1 L 895.1 359.8 L 887.1 351.8 L 888.5 340.8 Z',
    center: { x: 905.5, y: 344.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 901.2 341.5 L 911.3 343.1 L 909.9 347.8 L 899.8 346.2 Z', center: { x: 905.6, y: 344.5 } }
    ]
  },

  // Doğu Anadolu Bölgesi
  {
    id: 'erzurum',
    name: 'Erzurum',
    plateCode: 25,
    region: 'Doğu Anadolu',
    path: 'M 916.5 330.8 L 940.2 326.1 L 958.5 330.1 L 967.8 340.5 L 966.5 354.8 L 958.1 367.1 L 945.2 369.8 L 926.8 366.5 L 917.8 356.1 L 919.5 341.8 Z',
    center: { x: 942.5, y: 348.0 },
    districts: [
      { id: 'yakutiye', name: 'Yakutiye', path: 'M 938.2 344.8 L 948.3 346.4 L 946.9 351.1 L 936.8 349.5 Z', center: { x: 942.6, y: 347.8 } },
      { id: 'palandoken', name: 'Palandöken', path: 'M 943.5 351.8 L 953.6 353.4 L 952.2 358.1 L 942.1 356.5 Z', center: { x: 947.9, y: 355.0 } },
      { id: 'aziziye', name: 'Aziziye', path: 'M 948.8 344.8 L 958.9 346.4 L 957.5 351.1 L 947.4 349.5 Z', center: { x: 953.2, y: 347.8 } }
    ]
  },
  {
    id: 'erzincan',
    name: 'Erzincan',
    plateCode: 24,
    region: 'Doğu Anadolu',
    path: 'M 891.8 340.1 L 916.5 335.8 L 935.2 339.5 L 944.8 350.1 L 943.5 363.8 L 935.1 375.8 L 922.2 378.1 L 903.8 375.1 L 894.1 365.1 L 895.8 351.5 Z',
    center: { x: 919.5, y: 357.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 915.2 353.8 L 925.3 355.4 L 923.9 360.1 L 913.8 358.5 Z', center: { x: 919.6, y: 356.8 } }
    ]
  },
  {
    id: 'tunceli',
    name: 'Tunceli',
    plateCode: 62,
    region: 'Doğu Anadolu',
    path: 'M 872.0 362.8 L 891.8 358.8 L 909.1 362.1 L 917.8 372.1 L 916.8 384.8 L 909.1 395.1 L 897.2 397.1 L 881.8 394.8 L 873.1 385.1 L 874.8 372.8 Z',
    center: { x: 895.0, y: 378.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 890.8 374.8 L 900.9 376.4 L 899.5 381.1 L 889.4 379.5 Z', center: { x: 895.2, y: 377.8 } }
    ]
  },
  {
    id: 'bingol',
    name: 'Bingöl',
    plateCode: 12,
    region: 'Doğu Anadolu',
    path: 'M 909.1 362.1 L 935.1 357.8 L 954.8 361.5 L 964.2 372.8 L 962.8 386.1 L 954.1 397.8 L 940.2 400.1 L 920.8 397.1 L 910.8 386.5 L 912.5 373.1 Z',
    center: { x: 937.5, y: 379.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 933.2 375.8 L 943.3 377.4 L 941.9 382.1 L 931.8 380.5 Z', center: { x: 937.6, y: 378.8 } }
    ]
  },
  {
    id: 'mus',
    name: 'Muş',
    plateCode: 49,
    region: 'Doğu Anadolu',
    path: 'M 954.8 361.5 L 978.2 357.1 L 995.1 360.5 L 1003.8 371.1 L 1002.8 383.8 L 995.1 394.8 L 982.2 396.8 L 964.8 394.1 L 956.1 384.1 L 957.8 372.1 Z',
    center: { x: 980.0, y: 377.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 975.8 373.8 L 985.9 375.4 L 984.5 380.1 L 974.4 378.5 Z', center: { x: 980.2, y: 376.8 } }
    ]
  },
  {
    id: 'bitlis',
    name: 'Bitlis',
    plateCode: 13,
    region: 'Doğu Anadolu',
    path: 'M 995.1 360.5 L 1016.8 356.8 L 1032.1 360.1 L 1040.2 370.1 L 1039.1 381.8 L 1032.1 392.1 L 1020.8 393.8 L 1005.1 391.8 L 996.8 382.5 L 998.1 371.1 Z',
    center: { x: 1018.0, y: 375.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 1013.8 371.8 L 1023.9 373.4 L 1022.5 378.1 L 1012.4 376.5 Z', center: { x: 1018.2, y: 374.8 } }
    ]
  },
  {
    id: 'van',
    name: 'Van',
    plateCode: 65,
    region: 'Doğu Anadolu',
    path: 'M 1032.1 360.1 L 1056.8 355.8 L 1074.5 359.5 L 1083.2 370.1 L 1082.1 383.1 L 1074.1 394.8 L 1061.2 397.1 L 1042.8 394.1 L 1033.8 384.1 L 1035.5 371.5 Z',
    center: { x: 1058.5, y: 376.5 },
    districts: [
      { id: 'ipekyolu', name: 'İpekyolu', path: 'M 1054.2 373.1 L 1064.3 374.7 L 1062.9 379.4 L 1052.8 377.8 Z', center: { x: 1058.6, y: 376.3 } },
      { id: 'tusba', name: 'Tuşba', path: 'M 1059.5 379.8 L 1069.6 381.4 L 1068.2 386.1 L 1058.1 384.5 Z', center: { x: 1063.9, y: 383.0 } }
    ]
  },
  {
    id: 'agri',
    name: 'Ağrı',
    plateCode: 4,
    region: 'Doğu Anadolu',
    path: 'M 967.8 340.5 L 989.2 336.1 L 1006.8 339.5 L 1015.2 349.5 L 1014.1 361.8 L 1007.1 372.1 L 995.8 373.8 L 978.8 371.5 L 970.1 362.1 L 971.5 350.1 Z',
    center: { x: 992.5, y: 355.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 988.2 351.8 L 998.3 353.4 L 996.9 358.1 L 986.8 356.5 Z', center: { x: 992.6, y: 354.8 } }
    ]
  },
  {
    id: 'igdir',
    name: 'Iğdır',
    plateCode: 76,
    region: 'Doğu Anadolu',
    path: 'M 1006.8 339.5 L 1025.2 335.8 L 1040.5 338.8 L 1048.2 347.8 L 1047.5 358.8 L 1041.1 367.8 L 1031.2 369.1 L 1016.8 367.1 L 1008.8 358.8 L 1009.8 348.1 Z',
    center: { x: 1028.5, y: 352.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 1024.2 349.1 L 1034.3 350.7 L 1032.9 355.4 L 1022.8 353.8 Z', center: { x: 1028.6, y: 352.3 } }
    ]
  },
  {
    id: 'kars',
    name: 'Kars',
    plateCode: 36,
    region: 'Doğu Anadolu',
    path: 'M 958.5 330.1 L 978.2 326.1 L 994.8 329.1 L 1002.8 338.1 L 1001.8 349.1 L 995.8 358.1 L 984.2 359.8 L 968.8 357.5 L 960.5 349.1 L 961.8 338.5 Z',
    center: { x: 981.5, y: 343.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 977.2 339.8 L 987.3 341.4 L 985.9 346.1 L 975.8 344.5 Z', center: { x: 981.6, y: 342.8 } }
    ]
  },
  {
    id: 'ardahan',
    name: 'Ardahan',
    plateCode: 75,
    region: 'Doğu Anadolu',
    path: 'M 946.5 300.5 L 965.2 296.8 L 980.1 299.8 L 987.8 308.1 L 987.1 318.8 L 981.1 327.8 L 971.2 329.1 L 956.8 327.1 L 948.8 319.1 L 949.8 309.1 Z',
    center: { x: 968.0, y: 313.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 963.8 309.8 L 973.9 311.4 L 972.5 316.1 L 962.4 314.5 Z', center: { x: 968.2, y: 312.8 } }
    ]
  },
  {
    id: 'elazig',
    name: 'Elazığ',
    plateCode: 23,
    region: 'Doğu Anadolu',
    path: 'M 840.2 378.1 L 862.8 373.8 L 881.8 377.8 L 891.1 388.8 L 889.8 402.1 L 882.1 413.8 L 869.2 416.1 L 850.8 412.8 L 841.1 402.1 L 842.8 388.8 Z',
    center: { x: 866.0, y: 395.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 861.8 391.8 L 871.9 393.4 L 870.5 398.1 L 860.4 396.5 Z', center: { x: 866.2, y: 394.8 } }
    ]
  },
  {
    id: 'malatya',
    name: 'Malatya',
    plateCode: 44,
    region: 'Doğu Anadolu',
    path: 'M 808.1 395.8 L 832.8 391.1 L 852.1 395.1 L 862.1 406.8 L 860.8 420.8 L 852.8 433.1 L 839.2 435.8 L 819.8 432.1 L 809.5 421.1 L 811.1 407.1 Z',
    center: { x: 836.0, y: 413.5 },
    districts: [
      { id: 'battalgazi', name: 'Battalgazi', path: 'M 831.8 410.1 L 841.9 411.7 L 840.5 416.4 L 830.4 414.8 Z', center: { x: 836.2, y: 413.3 } },
      { id: 'yesilyurt', name: 'Yeşilyurt', path: 'M 837.1 417.1 L 847.2 418.7 L 845.8 423.4 L 835.7 421.8 Z', center: { x: 841.5, y: 420.3 } }
    ]
  },

  // Akdeniz Bölgesi
  {
    id: 'antalya',
    name: 'Antalya',
    plateCode: 7,
    region: 'Akdeniz',
    path: 'M 440.8 488.2 L 472.9 483.1 L 496.8 488.5 L 508.5 501.8 L 506.8 518.9 L 497.1 533.8 L 480.2 537.1 L 456.8 532.8 L 444.5 520.1 L 446.5 503.5 Z',
    center: { x: 476.5, y: 510.1 },
    districts: [
      { id: 'muratpasa', name: 'Muratpaşa', path: 'M 472.2 506.8 L 482.3 508.4 L 480.9 513.1 L 470.8 511.5 Z', center: { x: 476.6, y: 509.9 } },
      { id: 'konyaalti', name: 'Konyaaltı', path: 'M 466.9 512.1 L 477.0 513.7 L 475.6 518.4 L 465.5 516.8 Z', center: { x: 471.3, y: 515.3 } },
      { id: 'kepez', name: 'Kepez', path: 'M 477.6 503.8 L 487.7 505.4 L 486.3 510.1 L 476.2 508.5 Z', center: { x: 482.0, y: 507.0 } }
    ]
  },
  {
    id: 'burdur',
    name: 'Burdur',
    plateCode: 15,
    region: 'Akdeniz',
    path: 'M 382.8 447.8 L 407.2 443.1 L 425.8 447.1 L 434.8 458.1 L 433.8 471.8 L 426.1 483.1 L 413.2 485.8 L 394.8 482.1 L 385.5 471.5 L 387.1 458.5 Z',
    center: { x: 410.5, y: 464.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 406.2 461.1 L 416.3 462.7 L 414.9 467.4 L 404.8 465.8 Z', center: { x: 410.6, y: 464.3 } }
    ]
  },
  {
    id: 'isparta',
    name: 'Isparta',
    plateCode: 32,
    region: 'Akdeniz',
    path: 'M 425.8 447.1 L 450.5 442.8 L 468.9 446.5 L 477.8 457.1 L 476.8 470.1 L 469.5 480.8 L 457.2 483.1 L 439.8 480.1 L 430.5 470.1 L 431.8 457.8 Z',
    center: { x: 454.0, y: 463.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 449.8 459.8 L 459.9 461.4 L 458.5 466.1 L 448.4 464.5 Z', center: { x: 454.2, y: 462.8 } }
    ]
  },
  {
    id: 'mersin',
    name: 'Mersin',
    plateCode: 33,
    region: 'Akdeniz',
    path: 'M 568.9 507.1 L 598.2 502.1 L 620.8 506.8 L 631.5 519.1 L 629.8 535.2 L 620.1 548.9 L 604.2 552.1 L 581.8 548.1 L 570.5 536.5 L 572.5 520.8 Z',
    center: { x: 601.0, y: 527.1 },
    districts: [
      { id: 'mezitli', name: 'Mezitli', path: 'M 596.8 523.8 L 606.9 525.4 L 605.5 530.1 L 595.4 528.5 Z', center: { x: 601.2, y: 526.9 } },
      { id: 'toroslar', name: 'Toroslar', path: 'M 602.1 530.8 L 612.2 532.4 L 610.8 537.1 L 600.7 535.5 Z', center: { x: 606.5, y: 534.0 } },
      { id: 'yenisehir', name: 'Yenişehir', path: 'M 591.5 530.8 L 601.6 532.4 L 600.2 537.1 L 590.1 535.5 Z', center: { x: 595.9, y: 534.0 } },
      { id: 'akdeniz', name: 'Akdeniz', path: 'M 607.5 526.8 L 617.6 528.4 L 616.2 533.1 L 606.1 531.5 Z', center: { x: 611.9, y: 529.9 } }
    ]
  },
  {
    id: 'adana',
    name: 'Adana',
    plateCode: 1,
    region: 'Akdeniz',
    path: 'M 620.8 506.8 L 648.9 501.8 L 669.2 506.1 L 679.5 518.1 L 678.1 533.8 L 669.1 547.1 L 654.2 549.8 L 633.8 546.1 L 622.8 534.8 L 624.5 519.5 Z',
    center: { x: 651.0, y: 525.8 },
    districts: [
      { id: 'seyhan', name: 'Seyhan', path: 'M 646.8 522.5 L 656.9 524.1 L 655.5 528.8 L 645.4 527.2 Z', center: { x: 651.2, y: 525.7 } },
      { id: 'yuregir', name: 'Yüreğir', path: 'M 652.1 529.5 L 662.2 531.1 L 660.8 535.8 L 650.7 534.2 Z', center: { x: 656.5, y: 532.7 } },
      { id: 'ceyhan', name: 'Ceyhan', path: 'M 663.5 536.1 L 673.6 537.7 L 672.2 542.4 L 662.1 540.8 Z', center: { x: 667.9, y: 539.3 } }
    ]
  },
  {
    id: 'osmaniye',
    name: 'Osmaniye',
    plateCode: 80,
    region: 'Akdeniz',
    path: 'M 669.2 506.1 L 691.8 501.8 L 710.1 505.5 L 719.1 516.1 L 718.1 529.8 L 710.1 541.1 L 697.2 543.1 L 679.8 540.1 L 670.5 530.1 L 671.8 517.1 Z',
    center: { x: 694.5, y: 522.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 690.2 519.1 L 700.3 520.7 L 698.9 525.4 L 688.8 523.8 Z', center: { x: 694.6, y: 522.3 } }
    ]
  },
  {
    id: 'hatay',
    name: 'Hatay',
    plateCode: 31,
    region: 'Akdeniz',
    path: 'M 710.1 543.1 L 735.8 538.1 L 755.2 542.5 L 765.5 554.8 L 763.8 570.9 L 754.1 584.8 L 740.2 587.5 L 720.8 583.8 L 710.1 572.1 L 712.1 556.5 Z',
    center: { x: 737.5, y: 563.0 },
    districts: [
      { id: 'antakya', name: 'Antakya', path: 'M 733.2 559.8 L 743.3 561.4 L 741.9 566.1 L 731.8 564.5 Z', center: { x: 737.6, y: 562.8 } },
      { id: 'defne', name: 'Defne', path: 'M 738.5 567.1 L 748.6 568.7 L 747.2 573.4 L 737.1 571.8 Z', center: { x: 742.9, y: 570.3 } },
      { id: 'arsuz', name: 'Arsuz', path: 'M 728.2 571.8 L 738.3 573.4 L 736.9 578.1 L 726.8 576.5 Z', center: { x: 732.6, y: 575.0 } }
    ]
  },
  {
    id: 'kahramanmaras',
    name: 'Kahramanmaraş',
    plateCode: 46,
    region: 'Akdeniz',
    path: 'M 708.5 465.8 L 735.2 460.8 L 756.1 464.8 L 766.8 476.5 L 765.1 491.8 L 756.1 505.1 L 741.2 507.8 L 720.8 504.1 L 709.8 492.8 L 711.8 477.8 Z',
    center: { x: 738.0, y: 484.3 },
    districts: [
      { id: 'dulkadiroglu', name: 'Dulkadiroğlu', path: 'M 733.8 481.1 L 743.9 482.7 L 742.5 487.4 L 732.4 485.8 Z', center: { x: 738.2, y: 484.1 } },
      { id: 'onikisubat', name: 'Onikişubat', path: 'M 739.1 488.1 L 749.2 489.7 L 747.8 494.4 L 737.7 492.8 Z', center: { x: 743.5, y: 491.3 } }
    ]
  },

  // Güneydoğu Anadolu Bölgesi
  {
    id: 'gaziantep',
    name: 'Gaziantep',
    plateCode: 27,
    region: 'Güneydoğu Anadolu',
    path: 'M 756.1 464.8 L 782.8 459.8 L 802.1 463.8 L 812.1 475.1 L 810.8 489.5 L 802.1 502.1 L 788.2 504.5 L 768.8 501.1 L 758.1 490.1 L 759.8 476.1 Z',
    center: { x: 785.0, y: 482.2 },
    districts: [
      { id: 'sahinbey', name: 'Şahinbey', path: 'M 780.8 478.8 L 790.9 480.4 L 789.5 485.1 L 779.4 483.5 Z', center: { x: 785.2, y: 481.9 } },
      { id: 'sehitkamil', name: 'Şehitkamil', path: 'M 786.1 485.8 L 796.2 487.4 L 794.8 492.1 L 784.7 490.5 Z', center: { x: 790.5, y: 489.0 } }
    ]
  },
  {
    id: 'kilis',
    name: 'Kilis',
    plateCode: 79,
    region: 'Güneydoğu Anadolu',
    path: 'M 802.1 502.1 L 823.8 498.1 L 840.1 501.5 L 848.8 511.8 L 847.8 524.5 L 840.1 535.1 L 829.2 537.1 L 812.8 534.1 L 803.5 524.5 L 804.8 512.5 Z',
    center: { x: 826.0, y: 517.8 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 821.8 514.5 L 831.9 516.1 L 830.5 520.8 L 820.4 519.2 Z', center: { x: 826.2, y: 517.7 } }
    ]
  },
  {
    id: 'sanliurfa',
    name: 'Şanlıurfa',
    plateCode: 63,
    region: 'Güneydoğu Anadolu',
    path: 'M 812.1 475.1 L 842.8 469.8 L 866.1 474.1 L 877.8 486.8 L 876.1 503.1 L 866.1 517.8 L 850.2 520.8 L 825.8 516.8 L 813.8 504.8 L 815.8 488.8 Z',
    center: { x: 845.0, y: 495.3 },
    districts: [
      { id: 'haliliye', name: 'Haliliye', path: 'M 840.8 491.8 L 850.9 493.4 L 849.5 498.1 L 839.4 496.5 Z', center: { x: 845.2, y: 495.0 } },
      { id: 'eyyubiye', name: 'Eyyübiye', path: 'M 846.1 499.1 L 856.2 500.7 L 854.8 505.4 L 844.7 503.8 Z', center: { x: 850.5, y: 502.3 } }
    ]
  },
  {
    id: 'adiyaman',
    name: 'Adıyaman',
    plateCode: 2,
    region: 'Güneydoğu Anadolu',
    path: 'M 784.8 435.1 L 812.1 429.8 L 834.2 433.8 L 844.8 445.1 L 843.1 459.8 L 834.2 472.1 L 819.2 474.8 L 797.8 471.1 L 786.8 460.1 L 788.5 446.1 Z',
    center: { x: 816.0, y: 452.0 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 811.8 448.8 L 821.9 450.4 L 820.5 455.1 L 810.4 453.5 Z', center: { x: 816.2, y: 451.8 } }
    ]
  },
  {
    id: 'diyarbakir',
    name: 'Diyarbakır',
    plateCode: 21,
    region: 'Güneydoğu Anadolu',
    path: 'M 866.1 474.1 L 895.8 468.8 L 918.1 473.1 L 928.8 485.1 L 927.1 500.8 L 918.1 514.8 L 902.2 517.8 L 879.8 514.1 L 868.8 502.8 L 870.5 487.8 Z',
    center: { x: 898.5, y: 493.3 },
    districts: [
      { id: 'baglar', name: 'Bağlar', path: 'M 894.2 489.8 L 904.3 491.4 L 902.9 496.1 L 892.8 494.5 Z', center: { x: 898.6, y: 493.0 } },
      { id: 'sur', name: 'Sur', path: 'M 899.5 497.1 L 909.6 498.7 L 908.2 503.4 L 898.1 501.8 Z', center: { x: 903.9, y: 500.3 } },
      { id: 'yenisehir', name: 'Yenişehir', path: 'M 888.9 497.1 L 899.0 498.7 L 897.6 503.4 L 887.5 501.8 Z', center: { x: 893.3, y: 500.3 } },
      { id: 'kayapinar', name: 'Kayapınar', path: 'M 905.2 489.8 L 915.3 491.4 L 913.9 496.1 L 903.8 494.5 Z', center: { x: 909.6, y: 493.0 } }
    ]
  },
  {
    id: 'mardin',
    name: 'Mardin',
    plateCode: 47,
    region: 'Güneydoğu Anadolu',
    path: 'M 918.1 514.8 L 945.8 509.8 L 966.1 513.8 L 976.1 525.1 L 974.8 539.5 L 966.1 552.1 L 951.2 554.8 L 930.8 551.1 L 919.8 540.1 L 921.5 526.1 Z',
    center: { x: 948.0, y: 532.3 },
    districts: [
      { id: 'artuklu', name: 'Artuklu', path: 'M 943.8 528.8 L 953.9 530.4 L 952.5 535.1 L 942.4 533.5 Z', center: { x: 948.2, y: 532.0 } }
    ]
  },
  {
    id: 'batman',
    name: 'Batman',
    plateCode: 72,
    region: 'Güneydoğu Anadolu',
    path: 'M 928.8 485.1 L 954.8 480.1 L 974.1 483.8 L 983.8 494.8 L 982.8 508.1 L 974.8 520.1 L 961.2 522.5 L 941.8 519.1 L 931.8 508.8 L 933.1 495.8 Z',
    center: { x: 957.5, y: 501.3 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 953.2 498.1 L 963.3 499.7 L 961.9 504.4 L 951.8 502.8 Z', center: { x: 957.6, y: 501.1 } }
    ]
  },
  {
    id: 'siirt',
    name: 'Siirt',
    plateCode: 56,
    region: 'Güneydoğu Anadolu',
    path: 'M 974.1 483.8 L 998.8 478.8 L 1017.1 482.5 L 1026.1 493.1 L 1025.1 506.1 L 1017.8 517.8 L 1005.2 520.1 L 986.8 516.8 L 976.8 506.8 L 978.1 494.5 Z',
    center: { x: 1001.0, y: 499.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 996.8 496.1 L 1006.9 497.7 L 1005.5 502.4 L 995.4 500.8 Z', center: { x: 1001.2, y: 499.3 } }
    ]
  },
  {
    id: 'sirnak',
    name: 'Şırnak',
    plateCode: 73,
    region: 'Güneydoğu Anadolu',
    path: 'M 966.1 552.1 L 992.8 547.1 L 1012.1 550.8 L 1021.8 561.8 L 1020.8 575.1 L 1012.8 587.1 L 999.2 589.8 L 979.8 586.1 L 969.1 575.8 L 970.8 562.8 Z',
    center: { x: 995.5, y: 568.5 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 991.2 565.1 L 1001.3 566.7 L 999.9 571.4 L 989.8 569.8 Z', center: { x: 995.6, y: 568.3 } }
    ]
  },
  {
    id: 'hakkari',
    name: 'Hakkari',
    plateCode: 30,
    region: 'Doğu Anadolu',
    path: 'M 1026.1 493.1 L 1048.8 488.1 L 1066.1 491.5 L 1074.8 502.1 L 1073.8 515.1 L 1066.8 526.8 L 1054.2 529.1 L 1036.8 525.8 L 1027.8 515.8 L 1029.1 503.5 Z',
    center: { x: 1051.0, y: 508.6 },
    districts: [
      { id: 'merkez', name: 'Merkez', path: 'M 1046.8 505.1 L 1056.9 506.7 L 1055.5 511.4 L 1045.4 509.8 Z', center: { x: 1051.2, y: 508.4 } }
    ]
  }
];
