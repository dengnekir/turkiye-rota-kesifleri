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

// Türkiye'nin gerçek coğrafi konumlarına göre koordinatlar - iller arası boşluk artırıldı
export const turkeyProvinces: Province[] = [
  // Marmara Bölgesi - boşluklar artırıldı
  {
    id: "istanbul",
    name: "İstanbul",
    plateCode: 34,
    region: "Marmara",
    center: { x: 180, y: 115 },
    districts: [
      { id: "fatih", name: "Fatih", center: { x: 170, y: 110 } },
      { id: "kadikoy", name: "Kadıköy", center: { x: 190, y: 120 } },
      { id: "beyoglu", name: "Beyoğlu", center: { x: 175, y: 105 } },
      { id: "uskudar", name: "Üsküdar", center: { x: 185, y: 115 } },
      { id: "besiktas", name: "Beşiktaş", center: { x: 172, y: 118 } },
      { id: "bakirkoy", name: "Bakırköy", center: { x: 168, y: 125 } },
      { id: "sisli", name: "Şişli", center: { x: 177, y: 108 } },
      { id: "zeytinburnu", name: "Zeytinburnu", center: { x: 172, y: 122 } },
      { id: "esenler", name: "Esenler", center: { x: 165, y: 115 } },
      { id: "sultangazi", name: "Sultangazi", center: { x: 160, y: 110 } },
      { id: "eyup", name: "Eyüp", center: { x: 163, y: 108 } },
      { id: "gaziosmanpasa", name: "Gaziosmanpaşa", center: { x: 168, y: 102 } },
      { id: "kagithane", name: "Kağıthane", center: { x: 173, y: 103 } },
      { id: "sariyer", name: "Sarıyer", center: { x: 178, y: 98 } },
      { id: "beykoz", name: "Beykoz", center: { x: 188, y: 105 } },
      { id: "maltepe", name: "Maltepe", center: { x: 192, y: 125 } },
      { id: "kartal", name: "Kartal", center: { x: 195, y: 128 } },
      { id: "pendik", name: "Pendik", center: { x: 198, y: 130 } },
      { id: "tuzla", name: "Tuzla", center: { x: 202, y: 132 } },
      { id: "avcilar", name: "Avcılar", center: { x: 158, y: 120 } },
      { id: "esenyurt", name: "Esenyurt", center: { x: 155, y: 118 } },
      { id: "buyukcekmece", name: "Büyükçekmece", center: { x: 150, y: 125 } },
      { id: "kucukcekmece", name: "Küçükçekmece", center: { x: 160, y: 123 } },
      { id: "bagcilar", name: "Bağcılar", center: { x: 162, y: 118 } },
      { id: "bahcelievler", name: "Bahçelievler", center: { x: 165, y: 122 } },
      { id: "gungoren", name: "Güngören", center: { x: 167, y: 120 } },
      { id: "umraniye", name: "Ümraniye", center: { x: 185, y: 108 } },
      { id: "atasehir", name: "Ataşehir", center: { x: 188, y: 118 } },
      { id: "sancaktepe", name: "Sancaktepe", center: { x: 192, y: 112 } },
      { id: "sultanbeyli", name: "Sultanbeyli", center: { x: 195, y: 115 } },
      { id: "cekmekoy", name: "Çekmeköy", center: { x: 190, y: 108 } },
      { id: "arnavutkoy", name: "Arnavutköy", center: { x: 152, y: 112 } },
      { id: "catalca", name: "Çatalca", center: { x: 145, y: 108 } },
      { id: "silivri", name: "Silivri", center: { x: 140, y: 130 } },
      { id: "basaksehir", name: "Başakşehir", center: { x: 158, y: 115 } },
      { id: "beylikduzu", name: "Beylikdüzü", center: { x: 153, y: 128 } },
      { id: "adalar", name: "Adalar", center: { x: 205, y: 135 } },
      { id: "bayrampasa", name: "Bayrampaşa", center: { x: 170, y: 115 } },
      { id: "goztepe", name: "Göztepe", center: { x: 190, y: 122 } }
    ]
  },
  {
    id: "edirne",
    name: "Edirne",
    plateCode: 22,
    region: "Marmara",
    center: { x: 110, y: 95 },
    districts: [
      { id: "merkez-edirne", name: "Merkez", center: { x: 110, y: 95 } },
      { id: "ipsala", name: "İpsala", center: { x: 100, y: 105 } },
      { id: "kesan", name: "Keşan", center: { x: 105, y: 110 } },
      { id: "uzunkopru", name: "Uzunköprü", center: { x: 115, y: 100 } },
      { id: "havsa", name: "Havsa", center: { x: 120, y: 88 } },
      { id: "lalapasa", name: "Lalapaşa", center: { x: 125, y: 92 } },
      { id: "meric", name: "Meriç", center: { x: 108, y: 102 } },
      { id: "suloglu", name: "Süloğlu", center: { x: 118, y: 105 } },
      { id: "enez", name: "Enez", center: { x: 95, y: 115 } }
    ]
  },
  {
    id: "kirklareli",
    name: "Kırklareli",
    plateCode: 39,
    region: "Marmara",
    center: { x: 140, y: 100 },
    districts: [
      { id: "merkez-kirklareli", name: "Merkez", center: { x: 140, y: 100 } },
      { id: "luleburgaz", name: "Lüleburgaz", center: { x: 150, y: 105 } },
      { id: "babaeski", name: "Babaeski", center: { x: 145, y: 95 } },
      { id: "demirkoy", name: "Demirköy", center: { x: 135, y: 90 } },
      { id: "kofcaz", name: "Kofçaz", center: { x: 148, y: 88 } },
      { id: "pinarhisar", name: "Pınarhisar", center: { x: 155, y: 92 } },
      { id: "vize", name: "Vize", center: { x: 152, y: 98 } },
      { id: "pehlivankoy", name: "Pehlivanköy", center: { x: 142, y: 108 } }
    ]
  },
  {
    id: "tekirdag",
    name: "Tekirdağ",
    plateCode: 59,
    region: "Marmara",
    center: { x: 155, y: 120 },
    districts: [
      { id: "suleymanpasa", name: "Süleymanpaşa", center: { x: 155, y: 120 } },
      { id: "corlu", name: "Çorlu", center: { x: 165, y: 125 } },
      { id: "cerkezkoy", name: "Çerkezköy", center: { x: 170, y: 130 } },
      { id: "hayrabolu", name: "Hayrabolu", center: { x: 150, y: 125 } },
      { id: "malkara", name: "Malkara", center: { x: 145, y: 115 } },
      { id: "muratli", name: "Muratlı", center: { x: 160, y: 130 } },
      { id: "saray", name: "Saray", center: { x: 168, y: 135 } },
      { id: "sarkoy", name: "Şarköy", center: { x: 140, y: 128 } },
      { id: "marmara-ereglisi", name: "Marmara Ereğlisi", center: { x: 148, y: 132 } },
      { id: "kapakli", name: "Kapaklı", center: { x: 172, y: 128 } },
      { id: "ergene", name: "Ergene", center: { x: 167, y: 133 } }
    ]
  },
  {
    id: "kocaeli",
    name: "Kocaeli",
    plateCode: 41,
    region: "Marmara",
    center: { x: 195, y: 125 },
    districts: [
      { id: "izmit", name: "İzmit", center: { x: 195, y: 125 } },
      { id: "gebze", name: "Gebze", center: { x: 188, y: 135 } },
      { id: "derince", name: "Derince", center: { x: 200, y: 128 } },
      { id: "golcuk", name: "Gölcük", center: { x: 205, y: 135 } },
      { id: "kandira", name: "Kandıra", center: { x: 210, y: 115 } },
      { id: "karamursel", name: "Karamürsel", center: { x: 208, y: 130 } },
      { id: "korfez", name: "Körfez", center: { x: 198, y: 132 } },
      { id: "baskoy", name: "Başiskele", center: { x: 192, y: 120 } },
      { id: "cayirova", name: "Çayırova", center: { x: 185, y: 130 } },
      { id: "darica", name: "Darıca", center: { x: 182, y: 138 } },
      { id: "dilovasi", name: "Dilovası", center: { x: 190, y: 140 } },
      { id: "kartepe", name: "Kartepe", center: { x: 202, y: 118 } }
    ]
  },
  {
    id: "sakarya",
    name: "Sakarya",
    plateCode: 54,
    region: "Marmara",
    center: { x: 210, y: 140 },
    districts: [
      { id: "adapazari", name: "Adapazarı", center: { x: 210, y: 140 } },
      { id: "serdivan", name: "Serdivan", center: { x: 215, y: 145 } },
      { id: "akyazi", name: "Akyazı", center: { x: 205, y: 145 } },
      { id: "geyve", name: "Geyve", center: { x: 220, y: 138 } },
      { id: "hendek", name: "Hendek", center: { x: 218, y: 142 } },
      { id: "karapurcek", name: "Karapürçek", center: { x: 212, y: 135 } },
      { id: "karasu", name: "Karasu", center: { x: 200, y: 148 } },
      { id: "kocaali", name: "Kocaali", center: { x: 195, y: 150 } },
      { id: "pamukova", name: "Pamukova", center: { x: 222, y: 135 } },
      { id: "sapanca", name: "Sapanca", center: { x: 225, y: 140 } },
      { id: "sogutlu", name: "Söğütlü", center: { x: 208, y: 148 } },
      { id: "tarakli", name: "Taraklı", center: { x: 228, y: 145 } },
      { id: "ferizli", name: "Ferizli", center: { x: 213, y: 152 } },
      { id: "kaynarca", name: "Kaynarca", center: { x: 198, y: 153 } },
      { id: "arifiye", name: "Arifiye", center: { x: 207, y: 137 } },
      { id: "erenler", name: "Erenler", center: { x: 212, y: 143 } }
    ]
  },
  {
    id: "yalova",
    name: "Yalova",
    plateCode: 77,
    region: "Marmara",
    center: { x: 180, y: 140 },
    districts: [
      { id: "merkez-yalova", name: "Merkez", center: { x: 180, y: 140 } },
      { id: "cinarcik", name: "Çınarcık", center: { x: 175, y: 145 } },
      { id: "armutlu", name: "Armutlu", center: { x: 185, y: 148 } },
      { id: "ciftlikkoy", name: "Çiftlikköy", center: { x: 178, y: 135 } },
      { id: "termal", name: "Termal", center: { x: 182, y: 138 } },
      { id: "altinova", name: "Altınova", center: { x: 172, y: 142 } }
    ]
  },
  {
    id: "bursa",
    name: "Bursa",
    plateCode: 16,
    region: "Marmara",
    center: { x: 165, y: 155 },
    districts: [
      { id: "osmangazi", name: "Osmangazi", center: { x: 165, y: 155 } },
      { id: "nilufer", name: "Nilüfer", center: { x: 170, y: 160 } },
      { id: "yildirim", name: "Yıldırım", center: { x: 160, y: 160 } },
      { id: "mudanya", name: "Mudanya", center: { x: 155, y: 150 } },
      { id: "gemlik", name: "Gemlik", center: { x: 155, y: 158 } },
      { id: "inegol", name: "İnegöl", center: { x: 180, y: 165 } },
      { id: "iznik", name: "İznik", center: { x: 175, y: 145 } },
      { id: "karacabey", name: "Karacabey", center: { x: 150, y: 165 } },
      { id: "keles", name: "Keles", center: { x: 185, y: 170 } },
      { id: "mustafakemalpasa", name: "Mustafakemalpaşa", center: { x: 145, y: 170 } },
      { id: "orhaneli", name: "Orhaneli", center: { x: 175, y: 175 } },
      { id: "orhangazi", name: "Orhangazi", center: { x: 168, y: 148 } },
      { id: "yenisehir", name: "Yenişehir", center: { x: 172, y: 170 } },
      { id: "buyukorhan", name: "Büyükorhan", center: { x: 178, y: 178 } },
      { id: "harmancik", name: "Harmancık", center: { x: 182, y: 175 } },
      { id: "kestel", name: "Kestel", center: { x: 162, y: 148 } },
      { id: "gursu", name: "Gürsu", center: { x: 167, y: 152 } }
    ]
  },
  {
    id: "bilecik",
    name: "Bilecik",
    plateCode: 11,
    region: "Marmara",
    center: { x: 195, y: 165 },
    districts: [
      { id: "merkez-bilecik", name: "Merkez", center: { x: 195, y: 165 } },
      { id: "bozuyuk", name: "Bozüyük", center: { x: 200, y: 170 } },
      { id: "golpazari", name: "Gölpazarı", center: { x: 190, y: 160 } },
      { id: "inhisar", name: "İnhisar", center: { x: 202, y: 162 } },
      { id: "osmaneli", name: "Osmaneli", center: { x: 188, y: 168 } },
      { id: "pazaryeri", name: "Pazaryeri", center: { x: 192, y: 172 } },
      { id: "sogut", name: "Söğüt", center: { x: 197, y: 158 } },
      { id: "yenipazar", name: "Yenipazar", center: { x: 185, y: 162 } }
    ]
  },
  {
    id: "canakkale",
    name: "Çanakkale",
    plateCode: 17,
    region: "Marmara",
    center: { x: 120, y: 150 },
    districts: [
      { id: "merkez-canakkale", name: "Merkez", center: { x: 120, y: 150 } },
      { id: "biga", name: "Biga", center: { x: 130, y: 140 } },
      { id: "bozcaada", name: "Bozcaada", center: { x: 110, y: 155 } },
      { id: "çan", name: "Çan", center: { x: 135, y: 145 } },
      { id: "eceabat", name: "Eceabat", center: { x: 115, y: 145 } },
      { id: "ezine", name: "Ezine", center: { x: 108, y: 148 } },
      { id: "gelibolu", name: "Gelibolu", center: { x: 125, y: 135 } },
      { id: "gokceada", name: "Gökçeada", center: { x: 100, y: 160 } },
      { id: "lapseki", name: "Lapseki", center: { x: 128, y: 148 } },
      { id: "yenice", name: "Yenice", center: { x: 138, y: 155 } },
      { id: "ayvacik", name: "Ayvacık", center: { x: 105, y: 152 } },
      { id: "bayrakli", name: "Bayraklı", center: { x: 132, y: 152 } }
    ]
  },
  {
    id: "balikesir",
    name: "Balıkesir",
    plateCode: 10,
    region: "Marmara",
    center: { x: 145, y: 175 },
    districts: [
      { id: "altieylul", name: "Altıeylül", center: { x: 145, y: 175 } },
      { id: "karesi", name: "Karesi", center: { x: 150, y: 180 } },
      { id: "ayvalik", name: "Ayvalık", center: { x: 125, y: 190 } },
      { id: "burhaniye", name: "Burhaniye", center: { x: 130, y: 185 } },
      { id: "dursunbey", name: "Dursunbey", center: { x: 165, y: 185 } },
      { id: "edremit", name: "Edremit", center: { x: 135, y: 190 } },
      { id: "erdek", name: "Erdek", center: { x: 140, y: 165 } },
      { id: "gonen", name: "Gönen", center: { x: 155, y: 170 } },
      { id: "havran", name: "Havran", center: { x: 140, y: 180 } },
      { id: "ivrindi", name: "İvrindi", center: { x: 155, y: 185 } },
      { id: "kepsut", name: "Kepsut", center: { x: 160, y: 180 } },
      { id: "manyas", name: "Manyas", center: { x: 150, y: 165 } },
      { id: "savastepe", name: "Savastepe", center: { x: 148, y: 188 } },
      { id: "sindirgi", name: "Sındırgı", center: { x: 170, y: 185 } },
      { id: "susurluk", name: "Susurluk", center: { x: 158, y: 175 } },
      { id: "bigadic", name: "Bigadiç", center: { x: 165, y: 190 } },
      { id: "gomec", name: "Gömeç", center: { x: 122, y: 195 } },
      { id: "marmara", name: "Marmara", center: { x: 132, y: 160 } },
      { id: "pasalikoy", name: "Paşaliköy", center: { x: 162, y: 188 } },
      { id: "bandirma", name: "Bandırma", center: { x: 152, y: 168 } }
    ]
  },
  // Ege Bölgesi
  {
    id: "izmir",
    name: "İzmir",
    plateCode: 35,
    region: "Ege",
    center: { x: 135, y: 210 },
    districts: [
      { id: "konak", name: "Konak", center: { x: 135, y: 210 } },
      { id: "bornova", name: "Bornova", center: { x: 140, y: 205 } },
      { id: "karşıyaka", name: "Karşıyaka", center: { x: 130, y: 205 } },
      { id: "gaziemir", name: "Gaziemir", center: { x: 135, y: 215 } },
      { id: "aliaga", name: "Aliağa", center: { x: 125, y: 200 } },
      { id: "balcova", name: "Balçova", center: { x: 132, y: 212 } },
      { id: "bayindir", name: "Bayındır", center: { x: 150, y: 220 } },
      { id: "bayrakli", name: "Bayraklı", center: { x: 128, y: 208 } },
      { id: "bergama", name: "Bergama", center: { x: 120, y: 185 } },
      { id: "buca", name: "Buca", center: { x: 142, y: 213 } },
      { id: "cesme", name: "Çeşme", center: { x: 115, y: 220 } },
      { id: "çigli", name: "Çiğli", center: { x: 125, y: 202 } },
      { id: "dikili", name: "Dikili", center: { x: 110, y: 190 } },
      { id: "foça", name: "Foça", center: { x: 120, y: 195 } },
      { id: "karabaglar", name: "Karabağlar", center: { x: 138, y: 208 } },
      { id: "karaburun", name: "Karaburun", center: { x: 108, y: 205 } },
      { id: "karsiyaka", name: "Karşıyaka", center: { x: 130, y: 205 } },
      { id: "kemalpasa", name: "Kemalpaşa", center: { x: 145, y: 210 } },
      { id: "kinik", name: "Kınık", center: { x: 115, y: 188 } },
      { id: "kiraz", name: "Kiraz", center: { x: 155, y: 218 } },
      { id: "menderes", name: "Menderes", center: { x: 148, y: 225 } },
      { id: "menemen", name: "Menemen", center: { x: 128, y: 198 } },
      { id: "narlidere", name: "Narlıdere", center: { x: 130, y: 215 } },
      { id: "odemis", name: "Ödemiş", center: { x: 152, y: 215 } },
      { id: "seferihisar", name: "Seferihisar", center: { x: 145, y: 228 } },
      { id: "selcuk", name: "Selçuk", center: { x: 140, y: 225 } },
      { id: "tire", name: "Tire", center: { x: 148, y: 222 } },
      { id: "torbali", name: "Torbalı", center: { x: 143, y: 218 } },
      { id: "urla", name: "Urla", center: { x: 118, y: 215 } },
      { id: "güzelbahçe", name: "Güzelbahçe", center: { x: 125, y: 218 } }
    ]
  },
  // İç Anadolu Bölgesi
  {
    id: "ankara",
    name: "Ankara",
    plateCode: 6,
    region: "İç Anadolu",
    center: { x: 240, y: 180 },
    districts: [
      { id: "cankaya", name: "Çankaya", center: { x: 240, y: 180 } },
      { id: "kecioren", name: "Keçiören", center: { x: 235, y: 175 } },
      { id: "yenimahalle", name: "Yenimahalle", center: { x: 245, y: 175 } },
      { id: "mamak", name: "Mamak", center: { x: 245, y: 185 } },
      { id: "sincan", name: "Sincan", center: { x: 230, y: 185 } },
      { id: "altindag", name: "Altındağ", center: { x: 238, y: 178 } },
      { id: "etimesgut", name: "Etimesgut", center: { x: 232, y: 182 } },
      { id: "golbasi", name: "Gölbaşı", center: { x: 248, y: 190 } },
      { id: "pursaklar", name: "Pursaklar", center: { x: 228, y: 172 } },
      { id: "akyurt", name: "Akyurt", center: { x: 252, y: 182 } },
      { id: "ayaş", name: "Ayaş", center: { x: 220, y: 175 } },
      { id: "bala", name: "Bala", center: { x: 260, y: 188 } },
      { id: "beypazari", name: "Beypazarı", center: { x: 222, y: 165 } },
      { id: "çamlıdere", name: "Çamlıdere", center: { x: 225, y: 155 } },
      { id: "çubuk", name: "Çubuk", center: { x: 245, y: 165 } },
      { id: "elmadağ", name: "Elmadağ", center: { x: 255, y: 175 } },
      { id: "evren", name: "Evren", center: { x: 265, y: 185 } },
      { id: "güdül", name: "Güdül", center: { x: 218, y: 168 } },
      { id: "haymana", name: "Haymana", center: { x: 250, y: 195 } },
      { id: "kalecik", name: "Kalecik", center: { x: 258, y: 170 } },
      { id: "kazan", name: "Kazan", center: { x: 235, y: 160 } },
      { id: "kizilcahamam", name: "Kızılcahamam", center: { x: 228, y: 158 } },
      { id: "nallihan", name: "Nallıhan", center: { x: 215, y: 172 } },
      { id: "polatli", name: "Polatlı", center: { x: 225, y: 188 } },
      { id: "şereflikoçhisar", name: "Şereflikoçhisar", center: { x: 255, y: 195 } }
    ]
  }
  // Note: The full list would continue with all other provinces and their districts with adjusted coordinates for better spacing.
];
