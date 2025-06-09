
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
      { id: "can", name: "Çan", center: { x: 135, y: 150 } },
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

  // Ege Bölgesi - Gerçek ilçe sayılarıyla
  {
    id: "izmir",
    name: "İzmir",
    plateCode: 35,
    region: "Ege",
    center: { x: 140, y: 200 },
    districts: [
      { id: "konak", name: "Konak", center: { x: 140, y: 200 } },
      { id: "bornova", name: "Bornova", center: { x: 145, y: 195 } },
      { id: "karsiyaka", name: "Karşıyaka", center: { x: 135, y: 195 } },
      { id: "gaziemir", name: "Gaziemir", center: { x: 140, y: 205 } },
      { id: "aliaga", name: "Aliağa", center: { x: 125, y: 190 } },
      { id: "balcova", name: "Balçova", center: { x: 138, y: 198 } },
      { id: "bayindir", name: "Bayındır", center: { x: 150, y: 210 } },
      { id: "bayrakli", name: "Bayraklı", center: { x: 142, y: 192 } },
      { id: "bergama", name: "Bergama", center: { x: 125, y: 185 } },
      { id: "buca", name: "Buca", center: { x: 145, y: 205 } },
      { id: "cesme", name: "Çeşme", center: { x: 120, y: 210 } },
      { id: "cigli", name: "Çiğli", center: { x: 130, y: 190 } },
      { id: "dikili", name: "Dikili", center: { x: 118, y: 185 } },
      { id: "foca", name: "Foça", center: { x: 128, y: 188 } },
      { id: "guzelbahce", name: "Güzelbahçe", center: { x: 135, y: 203 } },
      { id: "karabaglar", name: "Karabağlar", center: { x: 142, y: 202 } },
      { id: "karaburun", name: "Karaburun", center: { x: 115, y: 195 } },
      { id: "kemalpasa", name: "Kemalpaşa", center: { x: 155, y: 195 } },
      { id: "kinik", name: "Kınık", center: { x: 122, y: 182 } },
      { id: "kiraz", name: "Kiraz", center: { x: 160, y: 205 } },
      { id: "menemen", name: "Menemen", center: { x: 130, y: 185 } },
      { id: "narlidere", name: "Narlıdere", center: { x: 135, y: 205 } },
      { id: "odemis", name: "Ödemiş", center: { x: 165, y: 200 } },
      { id: "seferihisar", name: "Seferihisar", center: { x: 132, y: 212 } },
      { id: "selcuk", name: "Selçuk", center: { x: 148, y: 215 } },
      { id: "tire", name: "Tire", center: { x: 155, y: 208 } },
      { id: "torbali", name: "Torbalı", center: { x: 150, y: 202 } },
      { id: "urla", name: "Urla", center: { x: 125, y: 205 } }
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
      { id: "sehzadeler", name: "Şehzadeler", center: { x: 162, y: 187 } },
      { id: "akhisar", name: "Akhisar", center: { x: 145, y: 180 } },
      { id: "alasehir", name: "Alaşehir", center: { x: 175, y: 190 } },
      { id: "demirci", name: "Demirci", center: { x: 170, y: 175 } },
      { id: "golmarmara", name: "Gölmarmara", center: { x: 158, y: 180 } },
      { id: "gordes", name: "Gördes", center: { x: 165, y: 175 } },
      { id: "kirkagac", name: "Kırkağaç", center: { x: 148, y: 175 } },
      { id: "koprubasi", name: "Köprübaşı", center: { x: 172, y: 185 } },
      { id: "kula", name: "Kula", center: { x: 175, y: 180 } },
      { id: "salihli", name: "Salihli", center: { x: 170, y: 190 } },
      { id: "sarigol", name: "Sarıgöl", center: { x: 180, y: 192 } },
      { id: "saruhanli", name: "Saruhanlı", center: { x: 155, y: 190 } },
      { id: "selendi", name: "Selendi", center: { x: 178, y: 185 } },
      { id: "soma", name: "Soma", center: { x: 152, y: 182 } },
      { id: "turgutlu", name: "Turgutlu", center: { x: 165, y: 188 } },
      { id: "ahmetli", name: "Ahmetli", center: { x: 168, y: 192 } }
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
      { id: "bozdogan", name: "Bozdoğan", center: { x: 165, y: 225 } },
      { id: "buharkent", name: "Buharkent", center: { x: 170, y: 230 } },
      { id: "cine", name: "Çine", center: { x: 175, y: 240 } },
      { id: "didim", name: "Didim", center: { x: 140, y: 235 } },
      { id: "germencik", name: "Germencik", center: { x: 155, y: 230 } },
      { id: "incirliova", name: "İncirliova", center: { x: 158, y: 225 } },
      { id: "karacasu", name: "Karacasu", center: { x: 180, y: 235 } },
      { id: "karpuzlu", name: "Karpuzlu", center: { x: 175, y: 245 } },
      { id: "kocarli", name: "Koçarlı", center: { x: 162, y: 232 } },
      { id: "kusk", name: "Köşk", center: { x: 165, y: 215 } },
      { id: "kuyucak", name: "Kuyucak", center: { x: 172, y: 225 } },
      { id: "nazilli", name: "Nazilli", center: { x: 170, y: 225 } },
      { id: "sokke", name: "Söke", center: { x: 148, y: 228 } },
      { id: "sultanhisar", name: "Sultanhisar", center: { x: 162, y: 218 } },
      { id: "yenipazar-aydin", name: "Yenipazar", center: { x: 175, y: 220 } },
      { id: "kusadasi", name: "Kuşadası", center: { x: 145, y: 225 } }
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
      { id: "datca", name: "Datça", center: { x: 142, y: 268 } },
      { id: "fethiye", name: "Fethiye", center: { x: 175, y: 265 } },
      { id: "kavaklidere", name: "Kavaklıdere", center: { x: 165, y: 245 } },
      { id: "koycegiz", name: "Köyceğiz", center: { x: 170, y: 255 } },
      { id: "marmaris", name: "Marmaris", center: { x: 170, y: 270 } },
      { id: "milas", name: "Milas", center: { x: 155, y: 255 } },
      { id: "ortaca", name: "Ortaca", center: { x: 172, y: 260 } },
      { id: "seydikemer", name: "Seydikemer", center: { x: 178, y: 268 } },
      { id: "ula", name: "Ula", center: { x: 162, y: 258 } },
      { id: "yatagan", name: "Yatağan", center: { x: 158, y: 248 } },
      { id: "dalaman", name: "Dalaman", center: { x: 175, y: 260 } }
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
      { id: "merkezefendi", name: "Merkezefendi", center: { x: 182, y: 232 } },
      { id: "acipayam", name: "Acıpayam", center: { x: 175, y: 240 } },
      { id: "babadağ", name: "Babadağ", center: { x: 185, y: 240 } },
      { id: "baklan", name: "Baklan", center: { x: 185, y: 225 } },
      { id: "bekilli", name: "Bekilli", center: { x: 190, y: 235 } },
      { id: "beyagac", name: "Beyağaç", center: { x: 172, y: 242 } },
      { id: "bozkurt-denizli", name: "Bozkurt", center: { x: 188, y: 238 } },
      { id: "buldan", name: "Buldan", center: { x: 175, y: 225 } },
      { id: "cal", name: "Çal", center: { x: 185, y: 220 } },
      { id: "cameli", name: "Çameli", center: { x: 170, y: 245 } },
      { id: "cardak", name: "Çardak", center: { x: 190, y: 230 } },
      { id: "civril", name: "Çivril", center: { x: 195, y: 228 } },
      { id: "guney", name: "Güney", center: { x: 172, y: 235 } },
      { id: "honaz", name: "Honaz", center: { x: 178, y: 235 } },
      { id: "kale", name: "Kale", center: { x: 188, y: 242 } },
      { id: "sarayköy", name: "Sarayköy", center: { x: 175, y: 232 } },
      { id: "serinhisar", name: "Serinhisar", center: { x: 192, y: 225 } },
      { id: "tavas", name: "Tavas", center: { x: 170, y: 238 } }
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
      { id: "banaz", name: "Banaz", center: { x: 185, y: 205 } },
      { id: "esme", name: "Eşme", center: { x: 175, y: 195 } },
      { id: "karahalli", name: "Karahallı", center: { x: 185, y: 195 } },
      { id: "sivasli", name: "Sivaslı", center: { x: 175, y: 205 } },
      { id: "ulubey", name: "Ulubey", center: { x: 190, y: 202 } }
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
      { id: "bayat-afyon", name: "Bayat", center: { x: 208, y: 218 } },
      { id: "bolvadin", name: "Bolvadin", center: { x: 195, y: 205 } },
      { id: "cay", name: "Çay", center: { x: 205, y: 205 } },
      { id: "cobanlar", name: "Çobanlar", center: { x: 200, y: 205 } },
      { id: "dazkiri", name: "Dazkirı", center: { x: 195, y: 215 } },
      { id: "dinar", name: "Dinar", center: { x: 190, y: 210 } },
      { id: "emirdag", name: "Emirdağ", center: { x: 205, y: 215 } },
      { id: "evciler", name: "Evciler", center: { x: 210, y: 220 } },
      { id: "hocalar", name: "Hocalar", center: { x: 192, y: 218 } },
      { id: "ihsaniye", name: "İhsaniye", center: { x: 208, y: 205 } },
      { id: "isccehisar", name: "İscehisar", center: { x: 202, y: 218 } },
      { id: "kiziloren", name: "Kızılören", center: { x: 215, y: 210 } },
      { id: "sandikli", name: "Sandıklı", center: { x: 205, y: 215 } },
      { id: "sinanpasa", name: "Sinanpaşa", center: { x: 198, y: 215 } },
      { id: "sultandag", name: "Sultandağı", center: { x: 210, y: 212 } },
      { id: "suhut", name: "Şuhut", center: { x: 202, y: 208 } },
      { id: "sultandaglari", name: "Sultandağları", center: { x: 198, y: 213 } }
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
      { id: "altintas", name: "Altıntaş", center: { x: 195, y: 175 } },
      { id: "aslanapa", name: "Aslanapa", center: { x: 185, y: 175 } },
      { id: "cavdarhisar", name: "Çavdarhisar", center: { x: 185, y: 185 } },
      { id: "domanic", name: "Domaniç", center: { x: 180, y: 175 } },
      { id: "dumlupinar", name: "Dumlupınar", center: { x: 195, y: 185 } },
      { id: "emet", name: "Emet", center: { x: 175, y: 185 } },
      { id: "gediz", name: "Gediz", center: { x: 185, y: 170 } },
      { id: "hisarcik", name: "Hisarcık", center: { x: 200, y: 175 } },
      { id: "pazarlar", name: "Pazarlar", center: { x: 188, y: 188 } },
      { id: "simav", name: "Simav", center: { x: 175, y: 180 } },
      { id: "tavsanli", name: "Tavşanlı", center: { x: 195, y: 175 } },
      { id: "saphane", name: "Şaphane", center: { x: 183, y: 178 } }
    ]
  },

  // İç Anadolu Bölgesi - Gerçek ilçe sayılarıyla
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
      { id: "mamak", name: "Mamak", center: { x: 235, y: 185 } },
      { id: "altindag", name: "Altındağ", center: { x: 228, y: 178 } },
      { id: "akyurt", name: "Akyurt", center: { x: 240, y: 185 } },
      { id: "ayaş", name: "Ayaş", center: { x: 215, y: 175 } },
      { id: "bala", name: "Bala", center: { x: 245, y: 190 } },
      { id: "beypazari", name: "Beypazarı", center: { x: 220, y: 170 } },
      { id: "camlidere", name: "Çamlıdere", center: { x: 225, y: 165 } },
      { id: "cubuk", name: "Çubuk", center: { x: 235, y: 170 } },
      { id: "elmadağ", name: "Elmadağ", center: { x: 240, y: 175 } },
      { id: "etimesgut", name: "Etimesgut", center: { x: 225, y: 182 } },
      { id: "evren", name: "Evren", center: { x: 250, y: 185 } },
      { id: "golbasi", name: "Gölbaşı", center: { x: 232, y: 192 } },
      { id: "gudu", name: "Güdül", center: { x: 218, y: 168 } },
      { id: "haymana", name: "Haymana", center: { x: 240, y: 195 } },
      { id: "kalecik", name: "Kalecik", center: { x: 242, y: 172 } },
      { id: "kizilcahamam", name: "Kızılcahamam", center: { x: 222, y: 162 } },
      { id: "nallihan", name: "Nallıhan", center: { x: 212, y: 178 } },
      { id: "polatli", name: "Polatlı", center: { x: 220, y: 185 } },
      { id: "pursaklar", name: "Pursaklar", center: { x: 230, y: 172 } },
      { id: "sincan", name: "Sincan", center: { x: 222, y: 182 } },
      { id: "sereflikochisar", name: "Şereflikoçhisar", center: { x: 248, y: 195 } }
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
      { id: "karatay", name: "Karatay", center: { x: 245, y: 235 } },
      { id: "ahirli", name: "Ahırlı", center: { x: 260, y: 240 } },
      { id: "akoren", name: "Akören", center: { x: 240, y: 240 } },
      { id: "aksehir", name: "Akşehir", center: { x: 230, y: 235 } },
      { id: "altinekin", name: "Altınekin", center: { x: 245, y: 240 } },
      { id: "beysehir", name: "Beyşehir", center: { x: 235, y: 245 } },
      { id: "bozkir", name: "Bozkır", center: { x: 270, y: 245 } },
      { id: "celtik", name: "Çeltik", center: { x: 255, y: 245 } },
      { id: "cihanbeyli", name: "Cihanbeyli", center: { x: 235, y: 220 } },
      { id: "cumra", name: "Çumra", center: { x: 255, y: 235 } },
      { id: "derbent", name: "Derbent", center: { x: 275, y: 240 } },
      { id: "derebucak", name: "Derebucak", center: { x: 240, y: 250 } },
      { id: "doganlar", name: "Doğanhisar", center: { x: 232, y: 225 } },
      { id: "emirgazi", name: "Emirgazi", center: { x: 265, y: 235 } },
      { id: "eregli", name: "Ereğli", center: { x: 275, y: 230 } },
      { id: "guneysinir", name: "Güneysınır", center: { x: 280, y: 245 } },
      { id: "hadim", name: "Hadim", center: { x: 285, y: 250 } },
      { id: "halkapinar", name: "Halkapınar", center: { x: 258, y: 220 } },
      { id: "huyuk", name: "Hüyük", center: { x: 225, y: 240 } },
      { id: "ilgin", name: "Ilgın", center: { x: 230, y: 228 } },
      { id: "kadinhani", name: "Kadınhanı", center: { x: 235, y: 232 } },
      { id: "karapinar", name: "Karapınar", center: { x: 270, y: 225 } },
      { id: "kulu", name: "Kulu", center: { x: 225, y: 215 } },
      { id: "sarayonu", name: "Sarayönü", center: { x: 248, y: 225 } },
      { id: "seydisehir", name: "Seydişehir", center: { x: 240, y: 245 } },
      { id: "taskent", name: "Taşkent", center: { x: 278, y: 235 } },
      { id: "tuzlukcu", name: "Tuzlukçu", center: { x: 252, y: 242 } },
      { id: "yalihuyuk", name: "Yalıhüyük", center: { x: 268, y: 248 } },
      { id: "yunak", name: "Yunak", center: { x: 225, y: 222 } }
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
      { id: "odunpazari", name: "Odunpazarı", center: { x: 212, y: 172 } },
      { id: "alpu", name: "Alpu", center: { x: 205, y: 165 } },
      { id: "beylikova", name: "Beylikova", center: { x: 215, y: 165 } },
      { id: "cifteler", name: "Çifteler", center: { x: 208, y: 175 } },
      { id: "gunyuzu", name: "Günyüzü", center: { x: 200, y: 170 } },
      { id: "han", name: "Han", center: { x: 218, y: 168 } },
      { id: "inonu", name: "İnönü", center: { x: 205, y: 175 } },
      { id: "mahmudiye", name: "Mahmudiye", center: { x: 215, y: 175 } },
      { id: "mihalgazi", name: "Mihalgazi", center: { x: 220, y: 165 } },
      { id: "mihalicçik", name: "Mihalıççık", center: { x: 200, y: 165 } },
      { id: "saricakaya", name: "Sarıcakaya", center: { x: 212, y: 178 } },
      { id: "seyitgazi", name: "Seyitgazi", center: { x: 220, y: 175 } },
      { id: "sivrihisar", name: "Sivrihisar", center: { x: 218, y: 172 } }
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
      { id: "ağaçören", name: "Ağaçören", center: { x: 275, y: 215 } },
      { id: "eskil", name: "Eskil", center: { x: 265, y: 215 } },
      { id: "gülağaç", name: "Gülağaç", center: { x: 278, y: 225 } },
      { id: "guzelyurt", name: "Güzelyurt", center: { x: 275, y: 225 } },
      { id: "ortaköy", name: "Ortaköy", center: { x: 268, y: 225 } },
      { id: "sarıyahşi", name: "Sarıyahşi", center: { x: 272, y: 215 } }
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
      { id: "acigol", name: "Acıgöl", center: { x: 285, y: 212 } },
      { id: "avanos", name: "Avanos", center: { x: 295, y: 205 } },
      { id: "derinkuyu", name: "Derinkuyu", center: { x: 285, y: 215 } },
      { id: "gulsehir", name: "Gülşehir", center: { x: 285, y: 205 } },
      { id: "hacibektas", name: "Hacıbektaş", center: { x: 288, y: 200 } },
      { id: "kozakli", name: "Kozaklı", center: { x: 292, y: 215 } },
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
      { id: "altunhisar", name: "Altunhisar", center: { x: 285, y: 235 } },
      { id: "bor", name: "Bor", center: { x: 285, y: 235 } },
      { id: "camardi", name: "Çamardı", center: { x: 295, y: 235 } },
      { id: "çiftlik", name: "Çiftlik", center: { x: 288, y: 225 } },
      { id: "ulukışla", name: "Ulukışla", center: { x: 295, y: 240 } }
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
      { id: "kocasinan", name: "Kocasinan", center: { x: 312, y: 202 } },
      { id: "talas", name: "Talas", center: { x: 308, y: 198 } },
      { id: "hacilar", name: "Hacılar", center: { x: 305, y: 205 } },
      { id: "akkisla", name: "Akkışla", center: { x: 315, y: 195 } },
      { id: "bünyan", name: "Bünyan", center: { x: 318, y: 205 } },
      { id: "develi", name: "Develi", center: { x: 305, y: 210 } },
      { id: "felahiye", name: "Felahiye", center: { x: 320, y: 195 } },
      { id: "incesu", name: "İncesu", center: { x: 315, y: 200 } },
      { id: "ozvatan", name: "Özvatan", center: { x: 322, y: 202 } },
      { id: "pınarbaşi", name: "Pınarbaşı", center: { x: 325, y: 195 } },
      { id: "sarioğlan", name: "Sarıoğlan", center: { x: 312, y: 195 } },
      { id: "sariz", name: "Sarız", center: { x: 325, y: 200 } },
      { id: "tomarza", name: "Tomarza", center: { x: 318, y: 210 } },
      { id: "yahyali", name: "Yahyalı", center: { x: 308, y: 215 } },
      { id: "yeşilhisar", name: "Yeşilhisar", center: { x: 315, y: 208 } }
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
      { id: "akıncılar", name: "Akıncılar", center: { x: 340, y: 175 } },
      { id: "altinyayla", name: "Altınyayla", center: { x: 335, y: 185 } },
      { id: "divriği", name: "Divriği", center: { x: 345, y: 190 } },
      { id: "doğanşar", name: "Doğanşar", center: { x: 338, y: 172 } },
      { id: "gemerek", name: "Gemerek", center: { x: 325, y: 185 } },
      { id: "gölova", name: "Gölova", center: { x: 342, y: 165 } },
      { id: "gürün", name: "Gürün", center: { x: 350, y: 185 } },
      { id: "hafik", name: "Hafik", center: { x: 348, y: 175 } },
      { id: "imranli", name: "İmranlı", center: { x: 355, y: 180 } },
      { id: "kangal", name: "Kangal", center: { x: 340, y: 185 } },
      { id: "koyulhisar", name: "Koyulhisar", center: { x: 345, y: 170 } },
      { id: "suşehri", name: "Suşehri", center: { x: 352, y: 168 } },
      { id: "şarkışla", name: "Şarkışla", center: { x: 328, y: 175 } },
      { id: "ulaş", name: "Ulaş", center: { x: 332, y: 188 } },
      { id: "yıldızeli", name: "Yıldızeli", center: { x: 335, y: 175 } },
      { id: "zara", name: "Zara", center: { x: 348, y: 165 } }
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
      { id: "akdağmadeni", name: "Akdağmadeni", center: { x: 295, y: 165 } },
      { id: "aydıncik", name: "Aydıncık", center: { x: 285, y: 165 } },
      { id: "boğazlıyan", name: "Boğazlıyan", center: { x: 298, y: 175 } },
      { id: "çandır", name: "Çandır", center: { x: 288, y: 175 } },
      { id: "çayıralan", name: "Çayıralan", center: { x: 292, y: 162 } },
      { id: "çekerek", name: "Çekerek", center: { x: 285, y: 172 } },
      { id: "kadışehri", name: "Kadışehri", center: { x: 295, y: 172 } },
      { id: "saraykent", name: "Saraykent", center: { x: 282, y: 168 } },
      { id: "sarıkaya", name: "Sarıkaya", center: { x: 288, y: 168 } },
      { id: "şefaatli", name: "Şefaatli", center: { x: 298, y: 168 } },
      { id: "sorgun", name: "Sorgun", center: { x: 295, y: 175 } },
      { id: "yenifakılı", name: "Yenifakılı", center: { x: 292, y: 178 } },
      { id: "yerköy", name: "Yerköy", center: { x: 285, y: 175 } }
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
      { id: "bahşili", name: "Bahşili", center: { x: 265, y: 165 } },
      { id: "balışeyh", name: "Balışeyh", center: { x: 255, y: 175 } },
      { id: "çelebi", name: "Çelebi", center: { x: 268, y: 172 } },
      { id: "delice", name: "Delice", center: { x: 270, y: 168 } },
      { id: "karakeçili", name: "Karakeçili", center: { x: 262, y: 175 } },
      { id: "keskin", name: "Keskin", center: { x: 265, y: 175 } },
      { id: "sulakyurt", name: "Sulakyurt", center: { x: 258, y: 165 } },
      { id: "yahşihan", name: "Yahşihan", center: { x: 255, y: 168 } }
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
      { id: "akçakent", name: "Akçakent", center: { x: 275, y: 185 } },
      { id: "akpınar", name: "Akpınar", center: { x: 265, y: 185 } },
      { id: "boztepe", name: "Boztepe", center: { x: 278, y: 195 } },
      { id: "çiçekdağı", name: "Çiçekdağı", center: { x: 262, y: 195 } },
      { id: "kaman", name: "Kaman", center: { x: 268, y: 195 } },
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
      { id: "ayrancı", name: "Ayrancı", center: { x: 275, y: 255 } },
      { id: "başyayla", name: "Başyayla", center: { x: 280, y: 260 } },
      { id: "ermenek", name: "Ermenek", center: { x: 275, y: 255 } },
      { id: "kazımkarabekir", name: "Kazımkarabekir", center: { x: 268, y: 255 } },
      { id: "sarıveliler", name: "Sarıveliler", center: { x: 265, y: 245 } }
    ]
  },

  // Akdeniz Bölgesi - Gerçek ilçe sayılarıyla
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
      { id: "aksu", name: "Aksu", center: { x: 220, y: 270 } },
      { id: "dosemealti", name: "Döşemealtı", center: { x: 212, y: 265 } },
      { id: "alanya", name: "Alanya", center: { x: 250, y: 280 } },
      { id: "demre", name: "Demre", center: { x: 185, y: 285 } },
      { id: "elmalı", name: "Elmalı", center: { x: 195, y: 268 } },
      { id: "finike", name: "Finike", center: { x: 190, y: 282 } },
      { id: "gazipaşa", name: "Gazipaşa", center: { x: 260, y: 278 } },
      { id: "gündoğmuş", name: "Gündoğmuş", center: { x: 245, y: 270 } },
      { id: "ibradi", name: "İbradi", center: { x: 225, y: 265 } },
      { id: "kaş", name: "Kaş", center: { x: 180, y: 290 } },
      { id: "kemer", name: "Kemer", center: { x: 200, y: 278 } },
      { id: "korkuteli", name: "Korkuteli", center: { x: 215, y: 260 } },
      { id: "kumluca", name: "Kumluca", center: { x: 188, y: 280 } },
      { id: "manavgat", name: "Manavgat", center: { x: 235, y: 275 } },
      { id: "serik", name: "Serik", center: { x: 225, y: 272 } }
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
      { id: "aksu-isparta", name: "Aksu", center: { x: 205, y: 255 } },
      { id: "atabey", name: "Atabey", center: { x: 195, y: 255 } },
      { id: "eğirdir", name: "Eğirdir", center: { x: 205, y: 245 } },
      { id: "gelendost", name: "Gelendost", center: { x: 190, y: 245 } },
      { id: "gönen-isparta", name: "Gönen", center: { x: 195, y: 248 } },
      { id: "keçiborlu", name: "Keçiborlu", center: { x: 198, y: 245 } },
      { id: "senirkent", name: "Senirkent", center: { x: 192, y: 252 } },
      { id: "sütçüler", name: "Sütçüler", center: { x: 202, y: 248 } },
      { id: "şarkikaraağaç", name: "Şarkikaraağaç", center: { x: 185, y: 248 } },
      { id: "uluborlu", name: "Uluborlu", center: { x: 188, y: 250 } },
      { id: "yalvaç", name: "Yalvaç", center: { x: 208, y: 252 } },
      { id: "yenişarbademli", name: "Yenişarbademli", center: { x: 202, y: 252 } }
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
      { id: "ağlasun", name: "Ağlasun", center: { x: 185, y: 255 } },
      { id: "altınyayla-burdur", name: "Altınyayla", center: { x: 195, y: 245 } },
      { id: "bucak", name: "Bucak", center: { x: 195, y: 255 } },
      { id: "çavdir", name: "Çavdır", center: { x: 182, y: 252 } },
      { id: "çeltikçi", name: "Çeltikçi", center: { x: 188, y: 245 } },
      { id: "gölhisar", name: "Gölhisar", center: { x: 180, y: 255 } },
      { id: "karamanlı", name: "Karamanlı", center: { x: 192, y: 248 } },
      { id: "kemer-burdur", name: "Kemer", center: { x: 175, y: 250 } },
      { id: "tefenni", name: "Tefenni", center: { x: 178, y: 248 } },
      { id: "yeşilova", name: "Yeşilova", center: { x: 185, y: 248 } }
    ]
  },
  {
    id: "mersin",
    name: "Mersin",
    plateCode: 33,
    region: "Akdeniz",
    center: { x: 280, y: 280 },
    districts: [
      { id: "yenisehir-mersin", name: "Yenişehir", center: { x: 280, y: 280 } },
      { id: "mezitli", name: "Mezitli", center: { x: 285, y: 285 } },
      { id: "toroslar", name: "Toroslar", center: { x: 275, y: 285 } },
      { id: "akdeniz", name: "Akdeniz", center: { x: 278, y: 282 } },
      { id: "anamur", name: "Anamur", center: { x: 250, y: 290 } },
      { id: "aydıncık-mersin", name: "Aydıncık", center: { x: 240, y: 288 } },
      { id: "bozyazı", name: "Bozyazı", center: { x: 245, y: 285 } },
      { id: "çamlıyayla", name: "Çamlıyayla", center: { x: 270, y: 275 } },
      { id: "erdemli", name: "Erdemli", center: { x: 290, y: 285 } },
      { id: "gülnar", name: "Gülnar", center: { x: 255, y: 285 } },
      { id: "mut", name: "Mut", center: { x: 265, y: 275 } },
      { id: "silifke", name: "Silifke", center: { x: 270, y: 285 } },
      { id: "tarsus", name: "Tarsus", center: { x: 300, y: 275 } }
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
      { id: "cukurova", name: "Çukurova", center: { x: 315, y: 275 } },
      { id: "sariçam", name: "Sarıçam", center: { x: 322, y: 268 } },
      { id: "aladağ", name: "Aladağ", center: { x: 310, y: 260 } },
      { id: "ceyhan", name: "Ceyhan", center: { x: 335, y: 275 } },
      { id: "feke", name: "Feke", center: { x: 305, y: 265 } },
      { id: "imamoğlu", name: "İmamoğlu", center: { x: 330, y: 270 } },
      { id: "karaisalı", name: "Karaisalı", center: { x: 315, y: 265 } },
      { id: "karataş", name: "Karataş", center: { x: 338, y: 280 } },
      { id: "kozan", name: "Kozan", center: { x: 310, y: 270 } },
      { id: "pozantı", name: "Pozantı", center: { x: 308, y: 258 } },
      { id: "saimbeyli", name: "Saimbeyli", center: { x: 300, y: 255 } },
      { id: "tufanbeyli", name: "Tufanbeyli", center: { x: 305, y: 262 } },
      { id: "yumurtalık", name: "Yumurtalık", center: { x: 342, y: 275 } }
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
      { id: "altınözü", name: "Altınözü", center: { x: 362, y: 295 } },
      { id: "arsuz", name: "Arsuz", center: { x: 355, y: 295 } },
      { id: "belen", name: "Belen", center: { x: 362, y: 285 } },
      { id: "defne", name: "Defne", center: { x: 358, y: 292 } },
      { id: "dörtyol", name: "Dörtyol", center: { x: 350, y: 285 } },
      { id: "erzin", name: "Erzin", center: { x: 348, y: 280 } },
      { id: "hassa", name: "Hassa", center: { x: 365, y: 285 } },
      { id: "iskenderun", name: "İskenderun", center: { x: 352, y: 290 } },
      { id: "kirikhan", name: "Kırıkhan", center: { x: 365, y: 290 } },
      { id: "kumlu", name: "Kumlu", center: { x: 355, y: 288 } },
      { id: "payas", name: "Payas", center: { x: 350, y: 292 } },
      { id: "reyhanlı", name: "Reyhanlı", center: { x: 370, y: 295 } },
      { id: "samandağ", name: "Samandağ", center: { x: 358, y: 295 } },
      { id: "yayladağı", name: "Yayladağı", center: { x: 368, y: 288 } }
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
      { id: "bahçe", name: "Bahçe", center: { x: 345, y: 275 } },
      { id: "düziçi", name: "Düziçi", center: { x: 335, y: 265 } },
      { id: "hasanbeyli", name: "Hasanbeyli", center: { x: 348, y: 268 } },
      { id: "kadirli", name: "Kadirli", center: { x: 345, y: 275 } },
      { id: "sumbas", name: "Sumbas", center: { x: 338, y: 275 } },
      { id: "toprakkale", name: "Toprakkale", center: { x: 342, y: 272 } }
    ]
  },

  // Karadeniz Bölgesi - Gerçek ilçe sayılarıyla (20 il)
  {
    id: "zonguldak",
    name: "Zonguldak",
    plateCode: 67,
    region: "Karadeniz",
    center: { x: 210, y: 110 },
    districts: [
      { id: "merkez-zonguldak", name: "Merkez", center: { x: 210, y: 110 } },
      { id: "alaplı", name: "Alaplı", center: { x: 215, y: 108 } },
      { id: "çaycuma", name: "Çaycuma", center: { x: 205, y: 112 } },
      { id: "devrek", name: "Devrek", center: { x: 208, y: 115 } },
      { id: "ereğli", name: "Ereğli", center: { x: 220, y: 115 } },
      { id: "gökçebey", name: "Gökçebey", center: { x: 212, y: 108 } }
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
      { id: "eflani", name: "Eflani", center: { x: 235, y: 115 } },
      { id: "eskipazar", name: "Eskipazar", center: { x: 225, y: 115 } },
      { id: "ovacık-karabük", name: "Ovacık", center: { x: 232, y: 125 } },
      { id: "safranbolu", name: "Safranbolu", center: { x: 235, y: 125 } },
      { id: "yenice-karabük", name: "Yenice", center: { x: 228, y: 118 } }
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
      { id: "amasra", name: "Amasra", center: { x: 215, y: 110 } },
      { id: "kurucaşile", name: "Kurucaşile", center: { x: 218, y: 108 } },
      { id: "ulus", name: "Ulus", center: { x: 222, y: 118 } }
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
      { id: "abana", name: "Abana", center: { x: 245, y: 125 } },
      { id: "ağlı", name: "Ağlı", center: { x: 255, y: 135 } },
      { id: "araç", name: "Araç", center: { x: 248, y: 125 } },
      { id: "azdavay", name: "Azdavay", center: { x: 252, y: 125 } },
      { id: "bozkurt", name: "Bozkurt", center: { x: 242, y: 128 } },
      { id: "cide", name: "Cide", center: { x: 240, y: 122 } },
      { id: "çatalzeytin", name: "Çatalzeytin", center: { x: 238, y: 125 } },
      { id: "daday", name: "Daday", center: { x: 258, y: 128 } },
      { id: "devrekani", name: "Devrekani", center: { x: 245, y: 132 } },
      { id: "doğanyurt", name: "Doğanyurt", center: { x: 260, y: 135 } },
      { id: "hanönü", name: "Hanönü", center: { x: 252, y: 135 } },
      { id: "ihsangazi", name: "İhsangazi", center: { x: 248, y: 135 } },
      { id: "inebolu", name: "İnebolu", center: { x: 242, y: 120 } },
      { id: "küre", name: "Küre", center: { x: 246, y: 120 } },
      { id: "pınarbaşı-kastamonu", name: "Pınarbaşı", center: { x: 255, y: 132 } },
      { id: "seydiler", name: "Seydiler", center: { x: 262, y: 132 } },
      { id: "şenpazar", name: "Şenpazar", center: { x: 265, y: 130 } },
      { id: "taşköprü", name: "Taşköprü", center: { x: 255, y: 135 } },
      { id: "tosya", name: "Tosya", center: { x: 262, y: 138 } }
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
      { id: "atkaracalar", name: "Atkaracalar", center: { x: 245, y: 145 } },
      { id: "bayramören", name: "Bayramören", center: { x: 248, y: 155 } },
      { id: "çerkeş", name: "Çerkeş", center: { x: 255, y: 155 } },
      { id: "eldivan", name: "Eldivan", center: { x: 252, y: 145 } },
      { id: "ilgaz", name: "Ilgaz", center: { x: 255, y: 148 } },
      { id: "kızılırmak", name: "Kızılırmak", center: { x: 245, y: 152 } },
      { id: "korgun", name: "Korgun", center: { x: 258, y: 152 } },
      { id: "kurşunlu", name: "Kurşunlu", center: { x: 248, y: 148 } },
      { id: "orta", name: "Orta", center: { x: 252, y: 152 } },
      { id: "şabanözü", name: "Şabanözü", center: { x: 255, y: 145 } },
      { id: "yapraklı", name: "Yapraklı", center: { x: 242, y: 148 } }
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
      { id: "ayancık", name: "Ayancık", center: { x: 275, y: 115 } },
      { id: "boyabat", name: "Boyabat", center: { x: 285, y: 120 } },
      { id: "dikmen", name: "Dikmen", center: { x: 290, y: 115 } },
      { id: "durağan", name: "Durağan", center: { x: 288, y: 122 } },
      { id: "erfelek", name: "Erfelek", center: { x: 278, y: 112 } },
      { id: "gerze", name: "Gerze", center: { x: 282, y: 108 } },
      { id: "saraydüzü", name: "Saraydüzü", center: { x: 292, y: 118 } },
      { id: "türkeli", name: "Türkeli", center: { x: 285, y: 108 } }
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
      { id: "dörtdivan", name: "Dörtdivan", center: { x: 225, y: 135 } },
      { id: "gerede", name: "Gerede", center: { x: 225, y: 145 } },
      { id: "göynük", name: "Göynük", center: { x: 215, y: 145 } },
      { id: "kıbrıscık", name: "Kıbrıscık", center: { x: 218, y: 135 } },
      { id: "mengen", name: "Mengen", center: { x: 222, y: 135 } },
      { id: "mudurnu", name: "Mudurnu", center: { x: 212, y: 142 } },
      { id: "seben", name: "Seben", center: { x: 228, y: 138 } },
      { id: "yeniçağa", name: "Yeniçağa", center: { x: 215, y: 138 } }
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
      { id: "akçakoca", name: "Akçakoca", center: { x: 195, y: 130 } },
      { id: "cumayeri", name: "Cumayeri", center: { x: 202, y: 132 } },
      { id: "çilimli", name: "Çilimli", center: { x: 198, y: 138 } },
      { id: "gölyaka", name: "Gölyaka", center: { x: 205, y: 138 } },
      { id: "gümüşova", name: "Gümüşova", center: { x: 195, y: 138 } },
      { id: "kaynaşlı", name: "Kaynaşlı", center: { x: 208, y: 135 } },
      { id: "yığılca", name: "Yığılca", center: { x: 198, y: 142 } }
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
      { id: "göynücek", name: "Göynücek", center: { x: 305, y: 135 } },
      { id: "gümüşhacıköy", name: "Gümüşhacıköy", center: { x: 315, y: 135 } },
      { id: "hamamözü", name: "Hamamözü", center: { x: 308, y: 145 } },
      { id: "merzifon", name: "Merzifon", center: { x: 315, y: 145 } },
      { id: "suluova", name: "Suluova", center: { x: 312, y: 135 } },
      { id: "taşova", name: "Taşova", center: { x: 320, y: 142 } }
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
      { id: "alaca", name: "Alaca", center: { x: 285, y: 145 } },
      { id: "bayat", name: "Bayat", center: { x: 295, y: 145 } },
      { id: "boğazkale", name: "Boğazkale", center: { x: 288, y: 142 } },
      { id: "dodurga", name: "Dodurga", center: { x: 282, y: 148 } },
      { id: "iskilip", name: "İskilip", center: { x: 298, y: 148 } },
      { id: "kargı", name: "Kargı", center: { x: 292, y: 142 } },
      { id: "laçin", name: "Laçin", center: { x: 285, y: 152 } },
      { id: "mecitözü", name: "Mecitözü", center: { x: 295, y: 152 } },
      { id: "oğuzlar", name: "Oğuzlar", center: { x: 300, y: 145 } },
      { id: "ortaköy-çorum", name: "Ortaköy", center: { x: 288, y: 155 } },
      { id: "osmancık", name: "Osmancık", center: { x: 295, y: 155 } },
      { id: "sungurlu", name: "Sungurlu", center: { x: 292, y: 155 } },
      { id: "uğurludağ", name: "Uğurludağ", center: { x: 285, y: 148 } }
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
      { id: "almus", name: "Almus", center: { x: 325, y: 145 } },
      { id: "artova", name: "Artova", center: { x: 335, y: 145 } },
      { id: "başçiftlik", name: "Başçiftlik", center: { x: 332, y: 145 } },
      { id: "erbaa", name: "Erbaa", center: { x: 335, y: 155 } },
      { id: "niksar", name: "Niksar", center: { x: 340, y: 150 } },
      { id: "pazar-tokat", name: "Pazar", center: { x: 338, y: 155 } },
      { id: "reşadiye", name: "Reşadiye", center: { x: 345, y: 152 } },
      { id: "sulusaray", name: "Sulusaray", center: { x: 328, y: 155 } },
      { id: "turhal", name: "Turhal", center: { x: 325, y: 152 } },
      { id: "yeşilyurt-tokat", name: "Yeşilyurt", center: { x: 342, y: 148 } },
      { id: "zile", name: "Zile", center: { x: 322, y: 148 } }
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
      { id: "atakum", name: "Atakum", center: { x: 325, y: 115 } },
      { id: "tekkeköy", name: "Tekkeköy", center: { x: 318, y: 122 } },
      { id: "alaçam", name: "Alaçam", center: { x: 335, y: 118 } },
      { id: "asarcık", name: "Asarcık", center: { x: 312, y: 125 } },
      { id: "ayvacık-samsun", name: "Ayvacık", center: { x: 308, y: 118 } },
      { id: "bafra", name: "Bafra", center: { x: 330, y: 125 } },
      { id: "çarşamba", name: "Çarşamba", center: { x: 325, y: 125 } },
      { id: "havza", name: "Havza", center: { x: 315, y: 125 } },
      { id: "kavak", name: "Kavak", center: { x: 310, y: 122 } },
      { id: "ladik", name: "Ladik", center: { x: 315, y: 128 } },
      { id: "ondokuzmayıs", name: "Ondokuzmayıs", center: { x: 322, y: 118 } },
      { id: "salıpazarı", name: "Salıpazarı", center: { x: 305, y: 115 } },
      { id: "terme", name: "Terme", center: { x: 338, y: 122 } },
      { id: "vezirköprü", name: "Vezirköprü", center: { x: 318, y: 128 } },
      { id: "yakakent", name: "Yakakent", center: { x: 332, y: 115 } }
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
      { id: "akkuş", name: "Akkuş", center: { x: 345, y: 125 } },
      { id: "aybastı", name: "Aybastı", center: { x: 338, y: 125 } },
      { id: "çamaş", name: "Çamaş", center: { x: 342, y: 125 } },
      { id: "çatalpınar", name: "Çatalpınar", center: { x: 348, y: 122 } },
      { id: "çaybaşı", name: "Çaybaşı", center: { x: 335, y: 122 } },
      { id: "fatsa", name: "Fatsa", center: { x: 350, y: 118 } },
      { id: "gölköy", name: "Gölköy", center: { x: 345, y: 118 } },
      { id: "gülyalı", name: "Gülyalı", center: { x: 352, y: 122 } },
      { id: "gürgentepe", name: "Gürgentepe", center: { x: 348, y: 125 } },
      { id: "ikizce", name: "İkizce", center: { x: 355, y: 120 } },
      { id: "kabadüz", name: "Kabadüz", center: { x: 340, y: 125 } },
      { id: "kabataş", name: "Kabataş", center: { x: 338, y: 118 } },
      { id: "korgan", name: "Korgan", center: { x: 355, y: 125 } },
      { id: "kumru", name: "Kumru", center: { x: 342, y: 122 } },
      { id: "mesudiye", name: "Mesudiye", center: { x: 350, y: 125 } },
      { id: "perşembe", name: "Perşembe", center: { x: 348, y: 118 } },
      { id: "ulubey-ordu", name: "Ulubey", center: { x: 345, y: 128 } },
      { id: "ünye", name: "Ünye", center: { x: 345, y: 115 } }
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
      { id: "alucra", name: "Alucra", center: { x: 365, y: 125 } },
      { id: "bulancak", name: "Bulancak", center: { x: 365, y: 125 } },
      { id: "çamoluk", name: "Çamoluk", center: { x: 368, y: 128 } },
      { id: "çanakçı", name: "Çanakçı", center: { x: 362, y: 125 } },
      { id: "dereli", name: "Dereli", center: { x: 358, y: 125 } },
      { id: "doğankent", name: "Doğankent", center: { x: 370, y: 125 } },
      { id: "espiye", name: "Espiye", center: { x: 362, y: 118 } },
      { id: "eynesil", name: "Eynesil", center: { x: 365, y: 118 } },
      { id: "görele", name: "Görele", center: { x: 358, y: 118 } },
      { id: "güce", name: "Güce", center: { x: 368, y: 122 } },
      { id: "keşap", name: "Keşap", center: { x: 355, y: 122 } },
      { id: "piraziz", name: "Piraziz", center: { x: 355, y: 118 } },
      { id: "şebinkarahisar", name: "Şebinkarahisar", center: { x: 370, y: 130 } },
      { id: "tirebolu", name: "Tirebolu", center: { x: 368, y: 118 } },
      { id: "yağlıdere", name: "Yağlıdere", center: { x: 372, y: 122 } }
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
      { id: "akçaabat", name: "Akçaabat", center: { x: 385, y: 125 } },
      { id: "araklı", name: "Araklı", center: { x: 388, y: 118 } },
      { id: "arsin", name: "Arsin", center: { x: 382, y: 125 } },
      { id: "beşikdüzü", name: "Beşikdüzü", center: { x: 390, y: 125 } },
      { id: "çaykara", name: "Çaykara", center: { x: 375, y: 130 } },
      { id: "çarşıbaşı", name: "Çarşıbaşı", center: { x: 378, y: 125 } },
      { id: "dernekpazarı", name: "Dernekpazarı", center: { x: 372, y: 128 } },
      { id: "düzköy", name: "Düzköy", center: { x: 385, y: 128 } },
      { id: "hayrat", name: "Hayrat", center: { x: 392, y: 122 } },
      { id: "köprübaşı-trabzon", name: "Köprübaşı", center: { x: 388, y: 128 } },
      { id: "maçka", name: "Maçka", center: { x: 375, y: 125 } },
      { id: "of", name: "Of", center: { x: 395, y: 120 } },
      { id: "sürmene", name: "Sürmene", center: { x: 392, y: 118 } },
      { id: "şalpazarı", name: "Şalpazarı", center: { x: 385, y: 122 } },
      { id: "tonya", name: "Tonya", center: { x: 378, y: 128 } },
      { id: "vakfıkebir", name: "Vakfıkebir", center: { x: 382, y: 118 } },
      { id: "yomra", name: "Yomra", center: { x: 378, y: 122 } }
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
      { id: "ardeşen", name: "Ardeşen", center: { x: 405, y: 118 } },
      { id: "çamlıhemşin", name: "Çamlıhemşin", center: { x: 395, y: 125 } },
      { id: "çayeli", name: "Çayeli", center: { x: 402, y: 122 } },
      { id: "derepazarı", name: "Derepazarı", center: { x: 398, y: 118 } },
      { id: "fındıklı", name: "Fındıklı", center: { x: 408, y: 118 } },
      { id: "güneysu", name: "Güneysu", center: { x: 398, y: 125 } },
      { id: "hemşin", name: "Hemşin", center: { x: 392, y: 128 } },
      { id: "i̇kizdere", name: "İkizdere", center: { x: 395, y: 128 } },
      { id: "i̇yidere", name: "İyidere", center: { x: 405, y: 122 } },
      { id: "kalkandere", name: "Kalkandere", center: { x: 402, y: 125 } },
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
      { id: "ardanuç", name: "Ardanuç", center: { x: 415, y: 115 } },
      { id: "arhavi", name: "Arhavi", center: { x: 410, y: 108 } },
      { id: "borçka", name: "Borçka", center: { x: 418, y: 115 } },
      { id: "hopa", name: "Hopa", center: { x: 425, y: 105 } },
      { id: "kemalpaşa-artvin", name: "Kemalpaşa", center: { x: 412, y: 112 } },
      { id: "murgul", name: "Murgul", center: { x: 422, y: 115 } },
      { id: "şavşat", name: "Şavşat", center: { x: 425, y: 112 } },
      { id: "yusufeli", name: "Yusufeli", center: { x: 415, y: 118 } }
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
      { id: "kelkit", name: "Kelkit", center: { x: 385, y: 145 } },
      { id: "köse", name: "Köse", center: { x: 375, y: 145 } },
      { id: "kürtün", name: "Kürtün", center: { x: 378, y: 135 } },
      { id: "şiran", name: "Şiran", center: { x: 388, y: 140 } },
      { id: "torul", name: "Torul", center: { x: 382, y: 135 } }
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
      { id: "aydıntepe", name: "Aydıntepe", center: { x: 405, y: 145 } },
      { id: "demirözü", name: "Demirözü", center: { x: 395, y: 145 } }
    ]
  },

  // Doğu Anadolu Bölgesi - Gerçek ilçe sayılarıyla
  {
    id: "erzurum",
    name: "Erzurum",
    plateCode: 25,
    region: "Doğu Anadolu",
    center: { x: 420, y: 160 },
    districts: [
      { id: "aziziye", name: "Aziziye", center: { x: 420, y: 160 } },
      { id: "palandoken", name: "Palandöken", center: { x: 425, y: 165 } },
      { id: "yakutiye", name: "Yakutiye", center: { x: 415, y: 165 } },
      { id: "aşkale", name: "Aşkale", center: { x: 430, y: 162 } },
      { id: "çat", name: "Çat", center: { x: 412, y: 155 } },
      { id: "hınıs", name: "Hınıs", center: { x: 425, y: 170 } },
      { id: "horasan", name: "Horasan", center: { x: 435, y: 158 } },
      { id: "i̇spir", name: "İspir", center: { x: 410, y: 152 } },
      { id: "karaçoban", name: "Karaçoban", center: { x: 432, y: 165 } },
      { id: "karayazı", name: "Karayazı", center: { x: 440, y: 162 } },
      { id: "köprüköy", name: "Köprüköy", center: { x: 428, y: 158 } },
      { id: "narman", name: "Narman", center: { x: 408, y: 148 } },
      { id: "oltu", name: "Oltu", center: { x: 415, y: 148 } },
      { id: "olur", name: "Olur", center: { x: 418, y: 145 } },
      { id: "passinler", name: "Passinler", center: { x: 422, y: 165 } },
      { id: "pazaryolu", name: "Pazaryolu", center: { x: 405, y: 155 } },
      { id: "şenkaya", name: "Şenkaya", center: { x: 412, y: 145 } },
      { id: "tekman", name: "Tekman", center: { x: 418, y: 168 } },
      { id: "tortum", name: "Tortum", center: { x: 408, y: 158 } },
      { id: "uzundere", name: "Uzundere", center: { x: 405, y: 162 } }
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
      { id: "çayırlı", name: "Çayırlı", center: { x: 385, y: 175 } },
      { id: "i̇liç", name: "İliç", center: { x: 375, y: 175 } },
      { id: "kemah", name: "Kemah", center: { x: 372, y: 165 } },
      { id: "kemaliye", name: "Kemaliye", center: { x: 370, y: 172 } },
      { id: "otlukbeli", name: "Otlukbeli", center: { x: 385, y: 175 } },
      { id: "refahiye", name: "Refahiye", center: { x: 388, y: 168 } },
      { id: "tercan", name: "Tercan", center: { x: 378, y: 165 } },
      { id: "üzümlü", name: "Üzümlü", center: { x: 382, y: 175 } }
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
      { id: "çemişgezek", name: "Çemişgezek", center: { x: 365, y: 185 } },
      { id: "hozat", name: "Hozat", center: { x: 355, y: 185 } },
      { id: "mazgirt", name: "Mazgirt", center: { x: 368, y: 192 } },
      { id: "nazımiye", name: "Nazımiye", center: { x: 358, y: 195 } },
      { id: "ovacık-tunceli", name: "Ovacık", center: { x: 365, y: 195 } },
      { id: "pertek", name: "Pertek", center: { x: 370, y: 188 } },
      { id: "pülümür", name: "Pülümür", center: { x: 352, y: 188 } }
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
      { id: "adaklı", name: "Adaklı", center: { x: 375, y: 185 } },
      { id: "genç", name: "Genç", center: { x: 385, y: 195 } },
      { id: "karlıova", name: "Karlıova", center: { x: 390, y: 185 } },
      { id: "kiğı", name: "Kiğı", center: { x: 372, y: 192 } },
      { id: "solhan", name: "Solhan", center: { x: 385, y: 188 } },
      { id: "yayladere-bingol", name: "Yayladere", center: { x: 378, y: 195 } },
      { id: "yedisu", name: "Yedisu", center: { x: 388, y: 192 } }
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
      { id: "ağın", name: "Ağın", center: { x: 365, y: 205 } },
      { id: "alacakaya", name: "Alacakaya", center: { x: 355, y: 205 } },
      { id: "arıcak", name: "Arıcak", center: { x: 368, y: 215 } },
      { id: "baskil", name: "Baskil", center: { x: 370, y: 208 } },
      { id: "karakoçan", name: "Karakoçan", center: { x: 355, y: 215 } },
      { id: "keban", name: "Keban", center: { x: 352, y: 208 } },
      { id: "kovancilar", name: "Kovancılar", center: { x: 365, y: 212 } },
      { id: "maden", name: "Maden", center: { x: 358, y: 205 } },
      { id: "palu", name: "Palu", center: { x: 350, y: 212 } },
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
      { id: "yesilyurt", name: "Yeşilyurt", center: { x: 345, y: 215 } },
      { id: "akçadağ", name: "Akçadağ", center: { x: 348, y: 205 } },
      { id: "arapgir", name: "Arapgir", center: { x: 332, y: 205 } },
      { id: "arguvan", name: "Arguvan", center: { x: 335, y: 215 } },
      { id: "darende", name: "Darende", center: { x: 328, y: 212 } },
      { id: "doğanşehir", name: "Doğanşehir", center: { x: 352, y: 215 } },
      { id: "doğanyol", name: "Doğanyol", center: { x: 345, y: 208 } },
      { id: "hekimhan", name: "Hekimhan", center: { x: 330, y: 208 } },
      { id: "kale-malatya", name: "Kale", center: { x: 325, y: 215 } },
      { id: "kuluncak", name: "Kuluncak", center: { x: 338, y: 205 } },
      { id: "pütürge", name: "Pütürge", center: { x: 350, y: 212 } },
      { id: "yazıhan", name: "Yazıhan", center: { x: 342, y: 205 } }
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
      { id: "tusba", name: "Tuşba", center: { x: 485, y: 205 } },
      { id: "bahçesaray", name: "Bahçesaray", center: { x: 475, y: 195 } },
      { id: "başkale", name: "Başkale", center: { x: 495, y: 205 } },
      { id: "çaldıran", name: "Çaldıran", center: { x: 470, y: 205 } },
      { id: "çatak", name: "Çatak", center: { x: 485, y: 210 } },
      { id: "edremit-van", name: "Edremit", center: { x: 478, y: 205 } },
      { id: "erciş", name: "Erciş", center: { x: 475, y: 185 } },
      { id: "gevaş", name: "Gevaş", center: { x: 488, y: 195 } },
      { id: "gürpınar", name: "Gürpınar", center: { x: 492, y: 210 } },
      { id: "muradiye", name: "Muradiye", center: { x: 472, y: 190 } },
      { id: "özalp", name: "Özalp", center: { x: 468, y: 200 } },
      { id: "saray-van", name: "Saray", center: { x: 490, y: 200 } }
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
      { id: "adilcevaz", name: "Adilcevaz", center: { x: 465, y: 205 } },
      { id: "ahlat", name: "Ahlat", center: { x: 468, y: 208 } },
      { id: "güroymak", name: "Güroymak", center: { x: 455, y: 215 } },
      { id: "hizan", name: "Hizan", center: { x: 452, y: 212 } },
      { id: "mutki", name: "Mutki", center: { x: 458, y: 215 } },
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
      { id: "bulanık", name: "Bulanık", center: { x: 445, y: 195 } },
      { id: "hasköy", name: "Hasköy", center: { x: 435, y: 195 } },
      { id: "korkut", name: "Korkut", center: { x: 438, y: 205 } },
      { id: "malazgirt", name: "Malazgirt", center: { x: 445, y: 205 } },
      { id: "varto", name: "Varto", center: { x: 432, y: 202 } }
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
      { id: "diyadin", name: "Diyadin", center: { x: 485, y: 165 } },
      { id: "doğubayazıt", name: "Doğubayazıt", center: { x: 490, y: 175 } },
      { id: "eleşkirt", name: "Eleşkirt", center: { x: 475, y: 175 } },
      { id: "hamur", name: "Hamur", center: { x: 472, y: 168 } },
      { id: "patnos", name: "Patnos", center: { x: 478, y: 175 } },
      { id: "taşlıçay", name: "Taşlıçay", center: { x: 488, y: 168 } },
      { id: "tutak", name: "Tutak", center: { x: 475, y: 165 } }
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
      { id: "aralık", name: "Aralık", center: { x: 505, y: 155 } },
      { id: "karakoyunlu", name: "Karakoyunlu", center: { x: 495, y: 165 } },
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
      { id: "akyaka", name: "Akyaka", center: { x: 465, y: 125 } },
      { id: "arpaçay", name: "Arpaçay", center: { x: 455, y: 125 } },
      { id: "digor", name: "Digor", center: { x: 450, y: 135 } },
      { id: "kağızman", name: "Kağızman", center: { x: 470, y: 135 } },
      { id: "sarıkamış", name: "Sarıkamış", center: { x: 465, y: 135 } },
      { id: "selim", name: "Selim", center: { x: 455, y: 135 } },
      { id: "susuz", name: "Susuz", center: { x: 468, y: 128 } }
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
      { id: "çıldır", name: "Çıldır", center: { x: 445, y: 115 } },
      { id: "damal", name: "Damal", center: { x: 455, y: 115 } },
      { id: "göle", name: "Göle", center: { x: 455, y: 115 } },
      { id: "hanak", name: "Hanak", center: { x: 448, y: 105 } },
      { id: "posof", name: "Posof", center: { x: 442, y: 108 } }
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
      { id: "çukurca", name: "Çukurca", center: { x: 485, y: 235 } },
      { id: "derecik", name: "Derecik", center: { x: 475, y: 245 } },
      { id: "şemdinli", name: "Şemdinli", center: { x: 488, y: 242 } },
      { id: "yüksekova", name: "Yüksekova", center: { x: 490, y: 245 } }
    ]
  },

  // Güneydoğu Anadolu Bölgesi - Gerçek ilçe sayılarıyla
  {
    id: "gaziantep",
    name: "Gaziantep",
    plateCode: 27,
    region: "Güneydoğu Anadolu",
    center: { x: 360, y: 250 },
    districts: [
      { id: "sahinbey", name: "Şahinbey", center: { x: 360, y: 250 } },
      { id: "sehitkamil", name: "Şehitkamil", center: { x: 365, y: 255 } },
      { id: "araban", name: "Araban", center: { x: 355, y: 255 } },
      { id: "i̇slahiye", name: "İslahiye", center: { x: 370, y: 250 } },
      { id: "karkamış", name: "Karkamış", center: { x: 372, y: 258 } },
      { id: "nizip", name: "Nizip", center: { x: 355, y: 248 } },
      { id: "nurdağı", name: "Nurdağı", center: { x: 368, y: 245 } },
      { id: "oğuzeli", name: "Oğuzeli", center: { x: 358, y: 245 } },
      { id: "yavuzeli", name: "Yavuzeli", center: { x: 352, y: 252 } }
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
      { id: "elbeyli", name: "Elbeyli", center: { x: 365, y: 275 } },
      { id: "musabeyli", name: "Musabeyli", center: { x: 365, y: 275 } },
      { id: "polateli", name: "Polateli", center: { x: 355, y: 275 } }
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
      { id: "besni", name: "Besni", center: { x: 345, y: 245 } },
      { id: "çelikhan", name: "Çelikhan", center: { x: 335, y: 245 } },
      { id: "gerger", name: "Gerger", center: { x: 348, y: 235 } },
      { id: "gölbaşı-adıyaman", name: "Gölbaşı", center: { x: 332, y: 235 } },
      { id: "kahta", name: "Kahta", center: { x: 345, y: 240 } },
      { id: "samsat", name: "Samsat", center: { x: 350, y: 242 } },
      { id: "sincik", name: "Sincik", center: { x: 338, y: 235 } },
      { id: "tut", name: "Tut", center: { x: 335, y: 242 } }
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
      { id: "eyyubiye", name: "Eyyübiye", center: { x: 405, y: 255 } },
      { id: "karaköprü", name: "Karaköprü", center: { x: 395, y: 255 } },
      { id: "akçakale", name: "Akçakale", center: { x: 415, y: 260 } },
      { id: "birecik", name: "Birecik", center: { x: 385, y: 255 } },
      { id: "bozova", name: "Bozova", center: { x: 405, y: 245 } },
      { id: "ceylanpınar", name: "Ceylanpınar", center: { x: 420, y: 258 } },
      { id: "halfeti", name: "Halfeti", center: { x: 390, y: 248 } },
      { id: "harran", name: "Harran", center: { x: 408, y: 260 } },
      { id: "hilvan", name: "Hilvan", center: { x: 410, y: 245 } },
      { id: "siverek", name: "Siverek", center: { x: 395, y: 242 } },
      { id: "suruç", name: "Suruç", center: { x: 390, y: 260 } },
      { id: "viranşehir", name: "Viranşehir", center: { x: 418, y: 250 } }
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
      { id: "sur", name: "Sur", center: { x: 420, y: 235 } },
      { id: "bismil", name: "Bismil", center: { x: 415, y: 250 } },
      { id: "çermik", name: "Çermik", center: { x: 412, y: 235 } },
      { id: "çinar", name: "Çınar", center: { x: 428, y: 250 } },
      { id: "çüngüş", name: "Çüngüş", center: { x: 408, y: 242 } },
      { id: "dicle", name: "Dicle", center: { x: 432, y: 245 } },
      { id: "eğil", name: "Eğil", center: { x: 405, y: 238 } },
      { id: "ergani", name: "Ergani", center: { x: 410, y: 248 } },
      { id: "hani", name: "Hani", center: { x: 430, y: 242 } },
      { id: "hazro", name: "Hazro", center: { x: 418, y: 248 } },
      { id: "kocaköy", name: "Kocaköy", center: { x: 415, y: 238 } },
      { id: "kulp", name: "Kulp", center: { x: 425, y: 238 } },
      { id: "lice", name: "Lice", center: { x: 422, y: 252 } },
      { id: "silvan", name: "Silvan", center: { x: 435, y: 248 } }
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
      { id: "dargeçit", name: "Dargeçit", center: { x: 445, y: 265 } },
      { id: "derik", name: "Derik", center: { x: 452, y: 268 } },
      { id: "kızıltepe", name: "Kızıltepe", center: { x: 435, y: 265 } },
      { id: "mazıdağı", name: "Mazıdağı", center: { x: 438, y: 255 } },
      { id: "midyat", name: "Midyat", center: { x: 450, y: 265 } },
      { id: "nusaybin", name: "Nusaybin", center: { x: 448, y: 270 } },
      { id: "omerli", name: "Ömerli", center: { x: 432, y: 255 } },
      { id: "savur", name: "Savur", center: { x: 445, y: 255 } },
      { id: "yesilli", name: "Yeşilli", center: { x: 442, y: 268 } }
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
      { id: "beşiri", name: "Beşiri", center: { x: 445, y: 235 } },
      { id: "gercüş", name: "Gercüş", center: { x: 435, y: 235 } },
      { id: "hasankeyf", name: "Hasankeyf", center: { x: 448, y: 238 } },
      { id: "kozluk", name: "Kozluk", center: { x: 432, y: 238 } },
      { id: "sason", name: "Sason", center: { x: 435, y: 225 } }
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
      { id: "beytüşşebap", name: "Beytüşşebap", center: { x: 470, y: 255 } },
      { id: "cizre", name: "Cizre", center: { x: 465, y: 255 } },
      { id: "güçlükonak", name: "Güçlükonak", center: { x: 455, y: 255 } },
      { id: "i̇dil", name: "İdil", center: { x: 468, y: 252 } },
      { id: "silopi", name: "Silopi", center: { x: 472, y: 258 } },
      { id: "uludere", name: "Uludere", center: { x: 462, y: 258 } }
    ]
  }
];
