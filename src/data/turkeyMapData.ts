export interface District {
  id: string;
  name: string;
  center: { x: number; y: number };
}

export interface Province {
  id: string;
  name: string;
  plateCode: number;
  region: string;
  center: { x: number; y: number };
  districts: District[];
}

// Türkiye'nin gerçek coğrafi konumlarına göre basit polygon koordinatları
export const turkeyProvinces: Province[] = [
  // Marmara Bölgesi - Konumlar yeniden düzenlendi
  {
    id: "istanbul",
    name: "İstanbul",
    plateCode: 34,
    region: "Marmara",
    center: { x: 180, y: 120 },
    districts: [
      { id: "adalar", name: "Adalar", center: { x: 190, y: 125 } },
      { id: "arnavutkoy", name: "Arnavutköy", center: { x: 175, y: 110 } },
      { id: "atasehir", name: "Ataşehir", center: { x: 185, y: 125 } },
      { id: "avcilar", name: "Avcılar", center: { x: 170, y: 125 } },
      { id: "bagcilar", name: "Bağcılar", center: { x: 172, y: 120 } },
      { id: "bahcelievler", name: "Bahçelievler", center: { x: 173, y: 122 } },
      { id: "bakirkoy", name: "Bakırköy", center: { x: 171, y: 123 } },
      { id: "basaksehir", name: "Başakşehir", center: { x: 175, y: 115 } },
      { id: "bayrampasa", name: "Bayrampaşa", center: { x: 174, y: 118 } },
      { id: "besiktas", name: "Beşiktaş", center: { x: 176, y: 118 } },
      { id: "beykoz", name: "Beykoz", center: { x: 182, y: 115 } },
      { id: "beylikduzu", name: "Beylikdüzü", center: { x: 168, y: 126 } },
      { id: "beyoglu", name: "Beyoğlu", center: { x: 177, y: 117 } },
      { id: "buyukcekmece", name: "Büyükçekmece", center: { x: 165, y: 125 } },
      { id: "catalca", name: "Çatalca", center: { x: 160, y: 115 } },
      { id: "cekmece", name: "Çekmeköy", center: { x: 185, y: 118 } },
      { id: "esenler", name: "Esenler", center: { x: 173, y: 119 } },
      { id: "esenyurt", name: "Esenyurt", center: { x: 169, y: 124 } },
      { id: "eyupsultan", name: "Eyüpsultan", center: { x: 176, y: 115 } },
      { id: "fatih", name: "Fatih", center: { x: 177, y: 119 } },
      { id: "gaziosmanpasa", name: "Gaziosmanpaşa", center: { x: 175, y: 117 } },
      { id: "gungoren", name: "Güngören", center: { x: 172, y: 121 } },
      { id: "kadikoy", name: "Kadıköy", center: { x: 180, y: 122 } },
      { id: "kagithane", name: "Kağıthane", center: { x: 176, y: 117 } },
      { id: "kartal", name: "Kartal", center: { x: 183, y: 124 } },
      { id: "kucukcekmece", name: "Küçükçekmece", center: { x: 170, y: 124 } },
      { id: "maltepe", name: "Maltepe", center: { x: 182, y: 123 } },
      { id: "pendik", name: "Pendik", center: { x: 184, y: 125 } },
      { id: "sancaktepe", name: "Sancaktepe", center: { x: 186, y: 120 } },
      { id: "sariyer", name: "Sarıyer", center: { x: 178, y: 114 } },
      { id: "silivri", name: "Silivri", center: { x: 158, y: 122 } },
      { id: "sisli", name: "Şişli", center: { x: 176, y: 118 } },
      { id: "sultangazi", name: "Sultangazi", center: { x: 174, y: 116 } },
      { id: "sultanbeyli", name: "Sultanbeyli", center: { x: 187, y: 122 } },
      { id: "tuzla", name: "Tuzla", center: { x: 185, y: 126 } },
      { id: "umraniye", name: "Ümraniye", center: { x: 184, y: 119 } },
      { id: "uskudar", name: "Üsküdar", center: { x: 180, y: 121 } },
      { id: "zeytinburnu", name: "Zeytinburnu", center: { x: 174, y: 121 } }
    ]
  },
  {
    id: "edirne",
    name: "Edirne",
    plateCode: 22,
    region: "Marmara",
    center: { x: 120, y: 100 },
    districts: [
      { id: "merkez-edirne", name: "Merkez", center: { x: 120, y: 100 } },
      { id: "enez", name: "Enez", center: { x: 115, y: 105 } },
      { id: "havsa", name: "Havsa", center: { x: 125, y: 95 } },
      { id: "ipsala", name: "İpsala", center: { x: 115, y: 102 } },
      { id: "kesan", name: "Keşan", center: { x: 125, y: 105 } },
      { id: "lalapasa", name: "Lalapaşa", center: { x: 118, y: 95 } },
      { id: "meric", name: "Meriç", center: { x: 122, y: 98 } },
      { id: "suloglu", name: "Süloğlu", center: { x: 125, y: 100 } },
      { id: "uzunkopru", name: "Uzunköprü", center: { x: 120, y: 105 } }
    ]
  },
  {
    id: "kirklareli",
    name: "Kırklareli",
    plateCode: 39,
    region: "Marmara",
    center: { x: 140, y: 95 },
    districts: [
      { id: "merkez-kirklareli", name: "Merkez", center: { x: 140, y: 95 } },
      { id: "babaeski", name: "Babaeski", center: { x: 145, y: 100 } },
      { id: "demirkoy", name: "Demirköy", center: { x: 135, y: 90 } },
      { id: "kofcaz", name: "Kofçaz", center: { x: 142, y: 88 } },
      { id: "luleburgaz", name: "Lüleburgaz", center: { x: 145, y: 98 } },
      { id: "pehlivankoy", name: "Pehlivanköy", center: { x: 148, y: 95 } },
      { id: "pinarhisar", name: "Pınarhisar", center: { x: 138, y: 92 } },
      { id: "vize", name: "Vize", center: { x: 142, y: 92 } }
    ]
  },
  {
    id: "tekirdag",
    name: "Tekirdağ",
    plateCode: 59,
    region: "Marmara",
    center: { x: 155, y: 115 },
    districts: [
      { id: "suleymanpasa", name: "Süleymanpaşa", center: { x: 155, y: 115 } },
      { id: "cerkezkoy", name: "Çerkezköy", center: { x: 160, y: 118 } },
      { id: "corlu", name: "Çorlu", center: { x: 158, y: 120 } },
      { id: "hayrabolu", name: "Hayrabolu", center: { x: 152, y: 118 } },
      { id: "kapakli", name: "Kapaklı", center: { x: 159, y: 116 } },
      { id: "malkara", name: "Malkara", center: { x: 150, y: 120 } },
      { id: "marmaraereglisi", name: "Marmara Ereğlisi", center: { x: 157, y: 112 } },
      { id: "muratli", name: "Muratlı", center: { x: 155, y: 122 } },
      { id: "saray", name: "Saray", center: { x: 153, y: 115 } },
      { id: "sarkoy", name: "Şarköy", center: { x: 148, y: 122 } },
      { id: "ergene", name: "Ergene", center: { x: 161, y: 120 } }
    ]
  },
  {
    id: "kocaeli",
    name: "Kocaeli",
    plateCode: 41,
    region: "Marmara",
    center: { x: 200, y: 125 },
    districts: [
      { id: "izmit", name: "İzmit", center: { x: 200, y: 125 } },
      { id: "basiskele", name: "Başiskele", center: { x: 202, y: 128 } },
      { id: "cayirova", name: "Çayırova", center: { x: 198, y: 128 } },
      { id: "darica", name: "Darıca", center: { x: 195, y: 130 } },
      { id: "derince", name: "Derince", center: { x: 198, y: 127 } },
      { id: "dilovasi", name: "Dilovası", center: { x: 197, y: 132 } },
      { id: "gebze", name: "Gebze", center: { x: 195, y: 128 } },
      { id: "golcuk", name: "Gölcük", center: { x: 203, y: 127 } },
      { id: "kandira", name: "Kandıra", center: { x: 205, y: 122 } },
      { id: "karamursel", name: "Karamürsel", center: { x: 202, y: 125 } },
      { id: "kartepe", name: "Kartepe", center: { x: 200, y: 130 } },
      { id: "korfez", name: "Körfez", center: { x: 199, y: 127 } }
    ]
  },
  {
    id: "sakarya",
    name: "Sakarya",
    plateCode: 54,
    region: "Marmara",
    center: { x: 220, y: 135 },
    districts: [
      { id: "adapazari", name: "Adapazarı", center: { x: 220, y: 135 } },
      { id: "akyazi", name: "Akyazı", center: { x: 225, y: 138 } },
      { id: "arifiye", name: "Arifiye", center: { x: 222, y: 133 } },
      { id: "erenler", name: "Erenler", center: { x: 218, y: 137 } },
      { id: "ferizli", name: "Ferizli", center: { x: 227, y: 140 } },
      { id: "geyve", name: "Geyve", center: { x: 215, y: 140 } },
      { id: "hendek", name: "Hendek", center: { x: 225, y: 135 } },
      { id: "karapurcek", name: "Karapürçek", center: { x: 217, y: 140 } },
      { id: "karasu", name: "Karasu", center: { x: 230, y: 132 } },
      { id: "kaynarca", name: "Kaynarca", center: { x: 228, y: 130 } },
      { id: "kocaali", name: "Kocaali", center: { x: 232, y: 135 } },
      { id: "pamukova", name: "Pamukova", center: { x: 213, y: 138 } },
      { id: "sapanca", name: "Sapanca", center: { x: 218, y: 135 } },
      { id: "serdivan", name: "Serdivan", center: { x: 220, y: 138 } },
      { id: "sogutlu", name: "Söğütlü", center: { x: 223, y: 140 } },
      { id: "tarakli", name: "Taraklı", center: { x: 210, y: 142 } }
    ]
  },
  {
    id: "yalova",
    name: "Yalova",
    plateCode: 77,
    region: "Marmara",
    center: { x: 185, y: 135 },
    districts: [
      { id: "merkez-yalova", name: "Merkez", center: { x: 185, y: 135 } },
      { id: "altinova", name: "Altınova", center: { x: 188, y: 138 } },
      { id: "armutlu", name: "Armutlu", center: { x: 182, y: 140 } },
      { id: "cinarcik", name: "Çınarcık", center: { x: 187, y: 132 } },
      { id: "ciftlikkoy", name: "Çiftlikköy", center: { x: 183, y: 137 } },
      { id: "termal", name: "Termal", center: { x: 180, y: 138 } }
    ]
  },
  {
    id: "bursa",
    name: "Bursa",
    plateCode: 16,
    region: "Marmara",
    center: { x: 170, y: 155 },
    districts: [
      { id: "osmangazi", name: "Osmangazi", center: { x: 170, y: 155 } },
      { id: "nilufer", name: "Nilüfer", center: { x: 167, y: 157 } },
      { id: "yildirim", name: "Yıldırım", center: { x: 173, y: 157 } },
      { id: "buyukorhan", name: "Büyükorhan", center: { x: 180, y: 160 } },
      { id: "gemlik", name: "Gemlik", center: { x: 165, y: 160 } },
      { id: "gursu", name: "Gürsu", center: { x: 172, y: 160 } },
      { id: "harmancik", name: "Harmancık", center: { x: 175, y: 165 } },
      { id: "inegol", name: "İnegöl", center: { x: 180, y: 155 } },
      { id: "iznik", name: "İznik", center: { x: 175, y: 150 } },
      { id: "karacabey", name: "Karacabey", center: { x: 160, y: 158 } },
      { id: "keles", name: "Keles", center: { x: 178, y: 162 } },
      { id: "kestel", name: "Kestel", center: { x: 175, y: 157 } },
      { id: "mudanya", name: "Mudanya", center: { x: 162, y: 155 } },
      { id: "mustafakemalpasa", name: "Mustafakemalpaşa", center: { x: 165, y: 165 } },
      { id: "orhaneli", name: "Orhaneli", center: { x: 182, y: 165 } },
      { id: "orhangazi", name: "Orhangazi", center: { x: 168, y: 152 } },
      { id: "yenisehir-bursa", name: "Yenişehir", center: { x: 175, y: 162 } }
    ]
  },
  {
    id: "bilecik",
    name: "Bilecik",
    plateCode: 11,
    region: "Marmara",
    center: { x: 200, y: 165 },
    districts: [
      { id: "merkez-bilecik", name: "Merkez", center: { x: 200, y: 165 } },
      { id: "bozuyuk", name: "Bozüyük", center: { x: 205, y: 168 } },
      { id: "golpazari", name: "Gölpazarı", center: { x: 195, y: 162 } },
      { id: "inhisar", name: "İnhisar", center: { x: 202, y: 162 } },
      { id: "osmaneli", name: "Osmaneli", center: { x: 197, y: 168 } },
      { id: "pazaryeri", name: "Pazaryeri", center: { x: 205, y: 162 } },
      { id: "sogut", name: "Söğüt", center: { x: 192, y: 165 } },
      { id: "yenipazar", name: "Yenipazar", center: { x: 198, y: 160 } }
    ]
  },
  {
    id: "canakkale",
    name: "Çanakkale",
    plateCode: 17,
    region: "Marmara",
    center: { x: 125, y: 140 },
    districts: [
      { id: "merkez-canakkale", name: "Merkez", center: { x: 125, y: 140 } },
      { id: "ayvacik", name: "Ayvacık", center: { x: 115, y: 135 } },
      { id: "bayramich", name: "Bayramiç", center: { x: 130, y: 145 } },
      { id: "biga", name: "Biga", center: { x: 135, y: 135 } },
      { id: "bozcaada", name: "Bozcaada", center: { x: 110, y: 140 } },
      { id: "cekinme", name: "Çan", center: { x: 135, y: 150 } },
      { id: "eceabat", name: "Eceabat", center: { x: 120, y: 138 } },
      { id: "ezine", name: "Ezine", center: { x: 118, y: 142 } },
      { id: "gelibolu", name: "Gelibolu", center: { x: 128, y: 135 } },
      { id: "gokceada", name: "Gökçeada", center: { x: 110, y: 145 } },
      { id: "lapseki", name: "Lapseki", center: { x: 132, y: 138 } },
      { id: "yenice", name: "Yenice", center: { x: 140, y: 148 } }
    ]
  },
  {
    id: "balikesir",
    name: "Balıkesir",
    plateCode: 10,
    region: "Marmara",
    center: { x: 150, y: 175 },
    districts: [
      { id: "altieylul", name: "Altıeylül", center: { x: 150, y: 175 } },
      { id: "karesi", name: "Karesi", center: { x: 153, y: 178 } },
      { id: "ayvalik", name: "Ayvalık", center: { x: 140, y: 182 } },
      { id: "balya", name: "Balya", center: { x: 155, y: 170 } },
      { id: "bandirma", name: "Bandırma", center: { x: 145, y: 170 } },
      { id: "bigadic", name: "Bigadiç", center: { x: 160, y: 180 } },
      { id: "burhaniye", name: "Burhaniye", center: { x: 143, y: 180 } },
      { id: "dursunbey", name: "Dursunbey", center: { x: 165, y: 175 } },
      { id: "edremit", name: "Edremit", center: { x: 138, y: 178 } },
      { id: "erdek", name: "Erdek", center: { x: 142, y: 168 } },
      { id: "gonen", name: "Gönen", center: { x: 148, y: 165 } },
      { id: "havran", name: "Havran", center: { x: 145, y: 185 } },
      { id: "ivrindi", name: "İvrindi", center: { x: 155, y: 185 } },
      { id: "kepsut", name: "Kepsut", center: { x: 158, y: 175 } },
      { id: "manyas", name: "Manyas", center: { x: 152, y: 168 } },
      { id: "marmara", name: "Marmara", center: { x: 135, y: 165 } },
      { id: "savastepe", name: "Savaştepe", center: { x: 148, y: 182 } },
      { id: "sindirgi", name: "Sındırgı", center: { x: 162, y: 172 } },
      { id: "susurluk", name: "Susurluk", center: { x: 155, y: 165 } }
    ]
  },

  // Ege Bölgesi
  {
    id: "izmir",
    name: "İzmir",
    plateCode: 35,
    region: "Ege",
    center: { x: 140, y: 200 },
    districts: [
      { id: "konak", name: "Konak", center: { x: 140, y: 200 } },
      { id: "bornova", name: "Bornova", center: { x: 145, y: 195 } },
      { id: "karşıyaka", name: "Karşıyaka", center: { x: 135, y: 195 } },
      { id: "gaziemir", name: "Gaziemir", center: { x: 140, y: 205 } }
    ]
  },
  {
    id: "manisa",
    name: "Manisa",
    plateCode: 45,
    region: "Ege",
    center: { x: 160, y: 185 },
    districts: [
      { id: "yunusemre", name: "Yunusemre", center: { x: 160, y: 185 } },
      { id: "salihli", name: "Salihli", center: { x: 170, y: 190 } }
    ]
  },
  {
    id: "aydin",
    name: "Aydın",
    plateCode: 9,
    region: "Ege",
    center: { x: 160, y: 220 },
    districts: [
      { id: "efeler", name: "Efeler", center: { x: 160, y: 220 } },
      { id: "nazilli", name: "Nazilli", center: { x: 170, y: 225 } }
    ]
  },
  {
    id: "mugla",
    name: "Muğla",
    plateCode: 48,
    region: "Ege",
    center: { x: 160, y: 250 },
    districts: [
      { id: "mentese", name: "Menteşe", center: { x: 160, y: 250 } },
      { id: "bodrum", name: "Bodrum", center: { x: 150, y: 260 } },
      { id: "marmaris", name: "Marmaris", center: { x: 170, y: 260 } }
    ]
  },
  {
    id: "denizli",
    name: "Denizli",
    plateCode: 20,
    region: "Ege",
    center: { x: 180, y: 230 },
    districts: [
      { id: "pamukkale", name: "Pamukkale", center: { x: 180, y: 230 } },
      { id: "merkezefendi", name: "Merkezefendi", center: { x: 185, y: 235 } }
    ]
  },
  {
    id: "usak",
    name: "Uşak",
    plateCode: 64,
    region: "Ege",
    center: { x: 180, y: 200 },
    districts: [
      { id: "merkez-usak", name: "Merkez", center: { x: 180, y: 200 } },
      { id: "banaz", name: "Banaz", center: { x: 185, y: 205 } }
    ]
  },
  {
    id: "afyon",
    name: "Afyonkarahisar",
    plateCode: 3,
    region: "Ege",
    center: { x: 200, y: 210 },
    districts: [
      { id: "afyonkarahisar-merkez", name: "Merkez", center: { x: 200, y: 210 } },
      { id: "sandikli", name: "Sandıklı", center: { x: 205, y: 215 } }
    ]
  },
  {
    id: "kutahya",
    name: "Kütahya",
    plateCode: 43,
    region: "Ege",
    center: { x: 190, y: 180 },
    districts: [
      { id: "merkez-kutahya", name: "Merkez", center: { x: 190, y: 180 } },
      { id: "tavşanlı", name: "Tavşanlı", center: { x: 195, y: 175 } }
    ]
  },

  // İç Anadolu Bölgesi
  {
    id: "ankara",
    name: "Ankara",
    plateCode: 6,
    region: "İç Anadolu",
    center: { x: 230, y: 180 },
    districts: [
      { id: "cankaya", name: "Çankaya", center: { x: 230, y: 180 } },
      { id: "kecioren", name: "Keçiören", center: { x: 225, y: 175 } },
      { id: "yenimahalle", name: "Yenimahalle", center: { x: 235, y: 175 } },
      { id: "mamak", name: "Mamak", center: { x: 235, y: 185 } }
    ]
  },
  {
    id: "konya",
    name: "Konya",
    plateCode: 42,
    region: "İç Anadolu",
    center: { x: 250, y: 230 },
    districts: [
      { id: "meram", name: "Meram", center: { x: 250, y: 230 } },
      { id: "selcuklu", name: "Selçuklu", center: { x: 255, y: 225 } },
      { id: "karatay", name: "Karatay", center: { x: 245, y: 235 } }
    ]
  },
  {
    id: "eskisehir",
    name: "Eskişehir",
    plateCode: 26,
    region: "İç Anadolu",
    center: { x: 210, y: 170 },
    districts: [
      { id: "tepebasi", name: "Tepebaşı", center: { x: 210, y: 170 } },
      { id: "odunpazari", name: "Odunpazarı", center: { x: 215, y: 175 } }
    ]
  },
  {
    id: "aksaray",
    name: "Aksaray",
    plateCode: 68,
    region: "İç Anadolu",
    center: { x: 270, y: 220 },
    districts: [
      { id: "merkez-aksaray", name: "Merkez", center: { x: 270, y: 220 } },
      { id: "guzelyurt", name: "Güzelyurt", center: { x: 275, y: 225 } }
    ]
  },
  {
    id: "nevsehir",
    name: "Nevşehir",
    plateCode: 50,
    region: "İç Anadolu",
    center: { x: 290, y: 210 },
    districts: [
      { id: "merkez-nevsehir", name: "Merkez", center: { x: 290, y: 210 } },
      { id: "urgup", name: "Ürgüp", center: { x: 295, y: 215 } }
    ]
  },
  {
    id: "nigde",
    name: "Niğde",
    plateCode: 51,
    region: "İç Anadolu",
    center: { x: 290, y: 230 },
    districts: [
      { id: "merkez-nigde", name: "Merkez", center: { x: 290, y: 230 } },
      { id: "bor", name: "Bor", center: { x: 285, y: 235 } }
    ]
  },
  {
    id: "kayseri",
    name: "Kayseri",
    plateCode: 38,
    region: "İç Anadolu",
    center: { x: 310, y: 200 },
    districts: [
      { id: "melikgazi", name: "Melikgazi", center: { x: 310, y: 200 } },
      { id: "kocasinan", name: "Kocasinan", center: { x: 315, y: 205 } }
    ]
  },
  {
    id: "sivas",
    name: "Sivas",
    plateCode: 58,
    region: "İç Anadolu",
    center: { x: 330, y: 180 },
    districts: [
      { id: "merkez-sivas", name: "Merkez", center: { x: 330, y: 180 } },
      { id: "kangal", name: "Kangal", center: { x: 340, y: 185 } }
    ]
  },
  {
    id: "yozgat",
    name: "Yozgat",
    plateCode: 66,
    region: "İç Anadolu",
    center: { x: 290, y: 170 },
    districts: [
      { id: "merkez-yozgat", name: "Merkez", center: { x: 290, y: 170 } },
      { id: "sorgun", name: "Sorgun", center: { x: 295, y: 175 } }
    ]
  },
  {
    id: "kirikkale",
    name: "Kırıkkale",
    plateCode: 71,
    region: "İç Anadolu",
    center: { x: 260, y: 170 },
    districts: [
      { id: "merkez-kirikkale", name: "Merkez", center: { x: 260, y: 170 } },
      { id: "keskin", name: "Keskin", center: { x: 265, y: 175 } }
    ]
  },
  {
    id: "kirsehir",
    name: "Kırşehir",
    plateCode: 40,
    region: "İç Anadolu",
    center: { x: 270, y: 190 },
    districts: [
      { id: "merkez-kirsehir", name: "Merkez", center: { x: 270, y: 190 } },
      { id: "mucur", name: "Mucur", center: { x: 275, y: 195 } }
    ]
  },
  {
    id: "karaman",
    name: "Karaman",
    plateCode: 70,
    region: "İç Anadolu",
    center: { x: 270, y: 250 },
    districts: [
      { id: "merkez-karaman", name: "Merkez", center: { x: 270, y: 250 } },
      { id: "ermenek", name: "Ermenek", center: { x: 275, y: 255 } }
    ]
  },

  // Akdeniz Bölgesi
  {
    id: "antalya",
    name: "Antalya",
    plateCode: 7,
    region: "Akdeniz",
    center: { x: 210, y: 270 },
    districts: [
      { id: "muratpasa", name: "Muratpaşa", center: { x: 210, y: 270 } },
      { id: "konyaalti", name: "Konyaaltı", center: { x: 205, y: 275 } },
      { id: "kepez", name: "Kepez", center: { x: 215, y: 275 } },
      { id: "aksu", name: "Aksu", center: { x: 220, y: 270 } }
    ]
  },
  {
    id: "isparta",
    name: "Isparta",
    plateCode: 32,
    region: "Akdeniz",
    center: { x: 200, y: 250 },
    districts: [
      { id: "merkez-isparta", name: "Merkez", center: { x: 200, y: 250 } },
      { id: "egirdir", name: "Eğirdir", center: { x: 205, y: 245 } }
    ]
  },
  {
    id: "burdur",
    name: "Burdur",
    plateCode: 15,
    region: "Akdeniz",
    center: { x: 190, y: 250 },
    districts: [
      { id: "merkez-burdur", name: "Merkez", center: { x: 190, y: 250 } },
      { id: "bucak", name: "Bucak", center: { x: 195, y: 255 } }
    ]
  },
  {
    id: "mersin",
    name: "Mersin",
    plateCode: 33,
    region: "Akdeniz",
    center: { x: 280, y: 280 },
    districts: [
      { id: "yenisehir", name: "Yenişehir", center: { x: 280, y: 280 } },
      { id: "mezitli", name: "Mezitli", center: { x: 285, y: 285 } },
      { id: "toroslar", name: "Toroslar", center: { x: 275, y: 285 } }
    ]
  },
  {
    id: "adana",
    name: "Adana",
    plateCode: 1,
    region: "Akdeniz",
    center: { x: 320, y: 270 },
    districts: [
      { id: "seyhan", name: "Seyhan", center: { x: 320, y: 270 } },
      { id: "yuregir", name: "Yüreğir", center: { x: 325, y: 275 } },
      { id: "cukurova", name: "Çukurova", center: { x: 315, y: 275 } }
    ]
  },
  {
    id: "hatay",
    name: "Hatay",
    plateCode: 31,
    region: "Akdeniz",
    center: { x: 360, y: 290 },
    districts: [
      { id: "antakya", name: "Antakya", center: { x: 360, y: 290 } },
      { id: "iskenderun", name: "İskenderun", center: { x: 355, y: 285 } },
      { id: "defne", name: "Defne", center: { x: 365, y: 295 } }
    ]
  },
  {
    id: "osmaniye",
    name: "Osmaniye",
    plateCode: 80,
    region: "Akdeniz",
    center: { x: 340, y: 270 },
    districts: [
      { id: "merkez-osmaniye", name: "Merkez", center: { x: 340, y: 270 } },
      { id: "kadirli", name: "Kadirli", center: { x: 345, y: 275 } }
    ]
  },

  // Karadeniz Bölgesi
  {
    id: "zonguldak",
    name: "Zonguldak",
    plateCode: 67,
    region: "Karadeniz",
    center: { x: 210, y: 110 },
    districts: [
      { id: "merkez-zonguldak", name: "Merkez", center: { x: 210, y: 110 } },
      { id: "eregli", name: "Ereğli", center: { x: 220, y: 115 } }
    ]
  },
  {
    id: "karabuk",
    name: "Karabük",
    plateCode: 78,
    region: "Karadeniz",
    center: { x: 230, y: 120 },
    districts: [
      { id: "merkez-karabuk", name: "Merkez", center: { x: 230, y: 120 } },
      { id: "safranbolu", name: "Safranbolu", center: { x: 235, y: 125 } }
    ]
  },
  {
    id: "bartin",
    name: "Bartın",
    plateCode: 74,
    region: "Karadeniz",
    center: { x: 220, y: 115 },
    districts: [
      { id: "merkez-bartin", name: "Merkez", center: { x: 220, y: 115 } },
      { id: "amasra", name: "Amasra", center: { x: 215, y: 110 } }
    ]
  },
  {
    id: "kastamonu",
    name: "Kastamonu",
    plateCode: 37,
    region: "Karadeniz",
    center: { x: 250, y: 130 },
    districts: [
      { id: "merkez-kastamonu", name: "Merkez", center: { x: 250, y: 130 } },
      { id: "taskoprü", name: "Taşköprü", center: { x: 255, y: 135 } }
    ]
  },
  {
    id: "cankiri",
    name: "Çankırı",
    plateCode: 18,
    region: "Karadeniz",
    center: { x: 250, y: 150 },
    districts: [
      { id: "merkez-cankiri", name: "Merkez", center: { x: 250, y: 150 } },
      { id: "cerkes", name: "Çerkeş", center: { x: 255, y: 155 } }
    ]
  },
  {
    id: "sinop",
    name: "Sinop",
    plateCode: 57,
    region: "Karadeniz",
    center: { x: 280, y: 110 },
    districts: [
      { id: "merkez-sinop", name: "Merkez", center: { x: 280, y: 110 } },
      { id: "boyabat", name: "Boyabat", center: { x: 285, y: 120 } }
    ]
  },
  {
    id: "bolu",
    name: "Bolu",
    plateCode: 14,
    region: "Karadeniz",
    center: { x: 220, y: 140 },
    districts: [
      { id: "merkez-bolu", name: "Merkez", center: { x: 220, y: 140 } },
      { id: "gerede", name: "Gerede", center: { x: 225, y: 145 } }
    ]
  },
  {
    id: "duzce",
    name: "Düzce",
    plateCode: 81,
    region: "Karadeniz",
    center: { x: 200, y: 135 },
    districts: [
      { id: "merkez-duzce", name: "Merkez", center: { x: 200, y: 135 } },
      { id: "akcakoca", name: "Akçakoca", center: { x: 195, y: 130 } }
    ]
  },
  {
    id: "amasya",
    name: "Amasya",
    plateCode: 5,
    region: "Karadeniz",
    center: { x: 310, y: 140 },
    districts: [
      { id: "merkez-amasya", name: "Merkez", center: { x: 310, y: 140 } },
      { id: "merzifon", name: "Merzifon", center: { x: 315, y: 145 } }
    ]
  },
  {
    id: "corum",
    name: "Çorum",
    plateCode: 19,
    region: "Karadeniz",
    center: { x: 290, y: 150 },
    districts: [
      { id: "merkez-corum", name: "Merkez", center: { x: 290, y: 150 } },
      { id: "osmancik", name: "Osmancık", center: { x: 295, y: 155 } }
    ]
  },
  {
    id: "tokat",
    name: "Tokat",
    plateCode: 60,
    region: "Karadeniz",
    center: { x: 330, y: 150 },
    districts: [
      { id: "merkez-tokat", name: "Merkez", center: { x: 330, y: 150 } },
      { id: "erbaa", name: "Erbaa", center: { x: 335, y: 155 } }
    ]
  },
  {
    id: "samsun",
    name: "Samsun",
    plateCode: 55,
    region: "Karadeniz",
    center: { x: 320, y: 120 },
    districts: [
      { id: "ilkadim", name: "İlkadım", center: { x: 320, y: 120 } },
      { id: "canik", name: "Canik", center: { x: 315, y: 115 } },
      { id: "atakum", name: "Atakum", center: { x: 325, y: 115 } }
    ]
  },
  {
    id: "ordu",
    name: "Ordu",
    plateCode: 52,
    region: "Karadeniz",
    center: { x: 340, y: 120 },
    districts: [
      { id: "altinordu", name: "Altınordu", center: { x: 340, y: 120 } },
      { id: "unye", name: "Ünye", center: { x: 345, y: 115 } }
    ]
  },
  {
    id: "giresun",
    name: "Giresun",
    plateCode: 28,
    region: "Karadeniz",
    center: { x: 360, y: 120 },
    districts: [
      { id: "merkez-giresun", name: "Merkez", center: { x: 360, y: 120 } },
      { id: "bulancak", name: "Bulancak", center: { x: 365, y: 125 } }
    ]
  },
  {
    id: "trabzon",
    name: "Trabzon",
    plateCode: 61,
    region: "Karadeniz",
    center: { x: 380, y: 120 },
    districts: [
      { id: "ortahisar", name: "Ortahisar", center: { x: 380, y: 120 } },
      { id: "akcaabat", name: "Akçaabat", center: { x: 385, y: 125 } }
    ]
  },
  {
    id: "rize",
    name: "Rize",
    plateCode: 53,
    region: "Karadeniz",
    center: { x: 400, y: 120 },
    districts: [
      { id: "merkez-rize", name: "Merkez", center: { x: 400, y: 120 } },
      { id: "pazar", name: "Pazar", center: { x: 405, y: 125 } }
    ]
  },
  {
    id: "artvin",
    name: "Artvin",
    plateCode: 8,
    region: "Karadeniz",
    center: { x: 420, y: 110 },
    districts: [
      { id: "merkez-artvin", name: "Merkez", center: { x: 420, y: 110 } },
      { id: "hopa", name: "Hopa", center: { x: 425, y: 105 } }
    ]
  },
  {
    id: "gumushane",
    name: "Gümüşhane",
    plateCode: 29,
    region: "Karadeniz",
    center: { x: 380, y: 140 },
    districts: [
      { id: "merkez-gumushane", name: "Merkez", center: { x: 380, y: 140 } },
      { id: "kelkit", name: "Kelkit", center: { x: 385, y: 145 } }
    ]
  },
  {
    id: "bayburt",
    name: "Bayburt",
    plateCode: 69,
    region: "Karadeniz",
    center: { x: 400, y: 140 },
    districts: [
      { id: "merkez-bayburt", name: "Merkez", center: { x: 400, y: 140 } },
      { id: "aydintepe", name: "Aydıntepe", center: { x: 405, y: 145 } }
    ]
  },

  // Doğu Anadolu Bölgesi
  {
    id: "erzurum",
    name: "Erzurum",
    plateCode: 25,
    region: "Doğu Anadolu",
    center: { x: 420, y: 160 },
    districts: [
      { id: "aziziye", name: "Aziziye", center: { x: 420, y: 160 } },
      { id: "palandoken", name: "Palandöken", center: { x: 425, y: 165 } },
      { id: "yakutiye", name: "Yakutiye", center: { x: 415, y: 165 } }
    ]
  },
  {
    id: "erzincan",
    name: "Erzincan",
    plateCode: 24,
    region: "Doğu Anadolu",
    center: { x: 380, y: 170 },
    districts: [
      { id: "merkez-erzincan", name: "Merkez", center: { x: 380, y: 170 } },
      { id: "otlukbeli", name: "Otlukbeli", center: { x: 385, y: 175 } }
    ]
  },
  {
    id: "tunceli",
    name: "Tunceli",
    plateCode: 62,
    region: "Doğu Anadolu",
    center: { x: 360, y: 190 },
    districts: [
      { id: "merkez-tunceli", name: "Merkez", center: { x: 360, y: 190 } },
      { id: "ovacik", name: "Ovacık", center: { x: 365, y: 195 } }
    ]
  },
  {
    id: "bingol",
    name: "Bingöl",
    plateCode: 12,
    region: "Doğu Anadolu",
    center: { x: 380, y: 190 },
    districts: [
      { id: "merkez-bingol", name: "Merkez", center: { x: 380, y: 190 } },
      { id: "genc", name: "Genç", center: { x: 385, y: 195 } }
    ]
  },
  {
    id: "elazig",
    name: "Elazığ",
    plateCode: 23,
    region: "Doğu Anadolu",
    center: { x: 360, y: 210 },
    districts: [
      { id: "merkez-elazig", name: "Merkez", center: { x: 360, y: 210 } },
      { id: "sivrice", name: "Sivrice", center: { x: 365, y: 215 } }
    ]
  },
  {
    id: "malatya",
    name: "Malatya",
    plateCode: 44,
    region: "Doğu Anadolu",
    center: { x: 340, y: 210 },
    districts: [
      { id: "battalgazi", name: "Battalgazi", center: { x: 340, y: 210 } },
      { id: "yesilyurt", name: "Yeşilyurt", center: { x: 345, y: 215 } }
    ]
  },
  {
    id: "van",
    name: "Van",
    plateCode: 65,
    region: "Doğu Anadolu",
    center: { x: 480, y: 200 },
    districts: [
      { id: "ipekyolu", name: "İpekyolu", center: { x: 480, y: 200 } },
      { id: "tusba", name: "Tuşba", center: { x: 485, y: 205 } }
    ]
  },
  {
    id: "bitlis",
    name: "Bitlis",
    plateCode: 13,
    region: "Doğu Anadolu",
    center: { x: 460, y: 210 },
    districts: [
      { id: "merkez-bitlis", name: "Merkez", center: { x: 460, y: 210 } },
      { id: "tatvan", name: "Tatvan", center: { x: 465, y: 215 } }
    ]
  },
  {
    id: "mus",
    name: "Muş",
    plateCode: 49,
    region: "Doğu Anadolu",
    center: { x: 440, y: 200 },
    districts: [
      { id: "merkez-mus", name: "Merkez", center: { x: 440, y: 200 } },
      { id: "malazgirt", name: "Malazgirt", center: { x: 445, y: 205 } }
    ]
  },
  {
    id: "agri",
    name: "Ağrı",
    plateCode: 4,
    region: "Doğu Anadolu",
    center: { x: 480, y: 170 },
    districts: [
      { id: "merkez-agri", name: "Merkez", center: { x: 480, y: 170 } },
      { id: "dogubayazit", name: "Doğubayazıt", center: { x: 490, y: 175 } }
    ]
  },
  {
    id: "igdir",
    name: "Iğdır",
    plateCode: 76,
    region: "Doğu Anadolu",
    center: { x: 500, y: 160 },
    districts: [
      { id: "merkez-igdir", name: "Merkez", center: { x: 500, y: 160 } },
      { id: "tuzluca", name: "Tuzluca", center: { x: 505, y: 165 } }
    ]
  },
  {
    id: "kars",
    name: "Kars",
    plateCode: 36,
    region: "Doğu Anadolu",
    center: { x: 460, y: 130 },
    districts: [
      { id: "merkez-kars", name: "Merkez", center: { x: 460, y: 130 } },
      { id: "kagizman", name: "Kağızman", center: { x: 470, y: 135 } }
    ]
  },
  {
    id: "ardahan",
    name: "Ardahan",
    plateCode: 75,
    region: "Doğu Anadolu",
    center: { x: 450, y: 110 },
    districts: [
      { id: "merkez-ardahan", name: "Merkez", center: { x: 450, y: 110 } },
      { id: "gole", name: "Göle", center: { x: 455, y: 115 } }
    ]
  },

  // Güneydoğu Anadolu Bölgesi
  {
    id: "gaziantep",
    name: "Gaziantep",
    plateCode: 27,
    region: "Güneydoğu Anadolu",
    center: { x: 360, y: 250 },
    districts: [
      { id: "sahinbey", name: "Şahinbey", center: { x: 360, y: 250 } },
      { id: "sehitkamil", name: "Şehitkamil", center: { x: 365, y: 255 } }
    ]
  },
  {
    id: "kilis",
    name: "Kilis",
    plateCode: 79,
    region: "Güneydoğu Anadolu",
    center: { x: 360, y: 270 },
    districts: [
      { id: "merkez-kilis", name: "Merkez", center: { x: 360, y: 270 } },
      { id: "musabeyli", name: "Musabeyli", center: { x: 365, y: 275 } }
    ]
  },
  {
    id: "adiyaman",
    name: "Adıyaman",
    plateCode: 2,
    region: "Güneydoğu Anadolu",
    center: { x: 340, y: 240 },
    districts: [
      { id: "merkez-adiyaman", name: "Merkez", center: { x: 340, y: 240 } },
      { id: "besni", name: "Besni", center: { x: 345, y: 245 } }
    ]
  },
  {
    id: "sanliurfa",
    name: "Şanlıurfa",
    plateCode: 63,
    region: "Güneydoğu Anadolu",
    center: { x: 400, y: 250 },
    districts: [
      { id: "haliliye", name: "Haliliye", center: { x: 400, y: 250 } },
      { id: "eyyubiye", name: "Eyyübiye", center: { x: 405, y: 255 } }
    ]
  },
  {
    id: "diyarbakir",
    name: "Diyarbakır",
    plateCode: 21,
    region: "Güneydoğu Anadolu",
    center: { x: 420, y: 240 },
    districts: [
      { id: "baglar", name: "Bağlar", center: { x: 420, y: 240 } },
      { id: "yenisehir-diyarbakir", name: "Yenişehir", center: { x: 425, y: 245 } },
      { id: "kayapinar", name: "Kayapınar", center: { x: 415, y: 245 } },
      { id: "sur", name: "Sur", center: { x: 420, y: 235 } }
    ]
  },
  {
    id: "mardin",
    name: "Mardin",
    plateCode: 47,
    region: "Güneydoğu Anadolu",
    center: { x: 440, y: 260 },
    districts: [
      { id: "artuklu", name: "Artuklu", center: { x: 440, y: 260 } },
      { id: "midyat", name: "Midyat", center: { x: 450, y: 265 } }
    ]
  },
  {
    id: "batman",
    name: "Batman",
    plateCode: 72,
    region: "Güneydoğu Anadolu",
    center: { x: 440, y: 230 },
    districts: [
      { id: "merkez-batman", name: "Merkez", center: { x: 440, y: 230 } },
      { id: "beşiri", name: "Beşiri", center: { x: 445, y: 235 } }
    ]
  },
  {
    id: "sirnak",
    name: "Şırnak",
    plateCode: 73,
    region: "Güneydoğu Anadolu",
    center: { x: 460, y: 250 },
    districts: [
      { id: "merkez-sirnak", name: "Merkez", center: { x: 460, y: 250 } },
      { id: "cizre", name: "Cizre", center: { x: 465, y: 255 } }
    ]
  },
  {
    id: "hakkari",
    name: "Hakkari",
    plateCode: 30,
    region: "Doğu Anadolu",
    center: { x: 480, y: 240 },
    districts: [
      { id: "merkez-hakkari", name: "Merkez", center: { x: 480, y: 240 } },
      { id: "yuksekova", name: "Yüksekova", center: { x: 490, y: 245 } }
    ]
  }
];
