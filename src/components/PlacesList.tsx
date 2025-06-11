import React from 'react';
import { MapPin, Star, Heart, Camera, Clock, Users, CheckCircle } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  city: string;
  district: string;
  rating: number;
  image: string;
  description: string;
  tags: string[];
  historicalPeriod?: string;
  visitDuration?: string;
  visited?: boolean;
}

interface PlacesListProps {
  selectedCity: string | null;
  searchQuery: string;
  onCitySelect: (city: string) => void;
  visitedPlaces: Set<string>;
  onToggleVisited: (placeId: string) => void;
}

const mockPlaces: Place[] = [
  // Batman Merkez İlçesi
  {
    id: 'batman-merkez-1',
    name: 'Batman Kalesi',
    city: 'Batman',
    district: 'Merkez',
    rating: 4.3,
    image: '/placeholder.svg',
    description: 'Tarihi Batman Kalesi, şehrin simgesi',
    tags: ['Tarihi', 'Kale', 'Manzara'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '1-2 saat'
  },
  {
    id: 'batman-merkez-2',
    name: 'Batman Ulu Camii',
    city: 'Batman',
    district: 'Merkez',
    rating: 4.1,
    image: '/placeholder.svg',
    description: 'Şehrin merkez camisi',
    tags: ['Tarihi', 'Cami', 'İslami'],
    historicalPeriod: 'Modern',
    visitDuration: '30 dakika'
  },
  {
    id: 'batman-merkez-3',
    name: 'Batman Müzesi',
    city: 'Batman',
    district: 'Merkez',
    rating: 4.2,
    image: '/placeholder.svg',
    description: 'Bölgesel tarih ve kültür müzesi',
    tags: ['Müze', 'Kültür', 'Tarihi'],
    historicalPeriod: 'Modern',
    visitDuration: '1-2 saat'
  },
  {
    id: 'batman-merkez-4',
    name: 'Batman Çayı Mesire Alanı',
    city: 'Batman',
    district: 'Merkez',
    rating: 4.0,
    image: '/placeholder.svg',
    description: 'Doğa ve piknik alanı',
    tags: ['Doğa', 'Piknik', 'Aile'],
    visitDuration: '2-4 saat'
  },
  {
    id: 'batman-merkez-5',
    name: 'Petrol Rafinerisi Müzesi',
    city: 'Batman',
    district: 'Merkez',
    rating: 3.9,
    image: '/placeholder.svg',
    description: 'Batman\'ın petrol tarihini anlatan müze',
    tags: ['Müze', 'Endüstri', 'Tarih'],
    visitDuration: '1 saat'
  },

  // Batman Kozluk İlçesi
  {
    id: 'batman-kozluk-1',
    name: 'Hasankeyf-Batman Barajı',
    city: 'Batman',
    district: 'Kozluk',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Büyük baraj ve su sporları',
    tags: ['Doğa', 'Baraj', 'Su Sporları'],
    visitDuration: '2-3 saat'
  },
  {
    id: 'batman-kozluk-2',
    name: 'Kozluk Eski Evleri',
    city: 'Batman',
    district: 'Kozluk',
    rating: 4.0,
    image: '/placeholder.svg',
    description: 'Geleneksel taş mimari',
    tags: ['Tarihi', 'Mimari', 'Geleneksel'],
    historicalPeriod: 'Osmanlı',
    visitDuration: '1 saat'
  },
  {
    id: 'batman-kozluk-3',
    name: 'Dicle Nehri Kıyısı',
    city: 'Batman',
    district: 'Kozluk',
    rating: 4.2,
    image: '/placeholder.svg',
    description: 'Nehir kenarında yürüyüş',
    tags: ['Doğa', 'Nehir', 'Yürüyüş'],
    visitDuration: '1-2 saat'
  },

  // Batman Beşiri İlçesi
  {
    id: 'batman-besiri-1',
    name: 'Beşiri Kalesi',
    city: 'Batman',
    district: 'Beşiri',
    rating: 4.1,
    image: '/placeholder.svg',
    description: 'Tarihi kale kalıntıları',
    tags: ['Tarihi', 'Kale', 'Antik'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '1 saat'
  },
  {
    id: 'batman-besiri-2',
    name: 'Beşiri Camii',
    city: 'Batman',
    district: 'Beşiri',
    rating: 3.8,
    image: '/placeholder.svg',
    description: 'Yerel mimari örneği',
    tags: ['Tarihi', 'Cami', 'Yerel'],
    historicalPeriod: 'Osmanlı',
    visitDuration: '30 dakika'
  },

  // Batman Gercüş İlçesi
  {
    id: 'batman-gercus-1',
    name: 'Gercüş Köprüsü',
    city: 'Batman',
    district: 'Gercüş',
    rating: 4.0,
    image: '/placeholder.svg',
    description: 'Tarihi taş köprü',
    tags: ['Tarihi', 'Köprü', 'Mimari'],
    historicalPeriod: 'Osmanlı',
    visitDuration: '30 dakika'
  },
  {
    id: 'batman-gercus-2',
    name: 'Gercüş Eski Mahalle',
    city: 'Batman',
    district: 'Gercüş',
    rating: 3.9,
    image: '/placeholder.svg',
    description: 'Geleneksel sokaklar',
    tags: ['Tarihi', 'Mahalle', 'Geleneksel'],
    visitDuration: '1 saat'
  },

  // Batman Hasankeyf İlçesi
  {
    id: 'batman-hasankeyf-1',
    name: 'Hasankeyf Antik Kenti',
    city: 'Batman',
    district: 'Hasankeyf',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'UNESCO Dünya Mirası, bin yıllık tarihi kent',
    tags: ['Antik', 'UNESCO', 'Tarihi'],
    historicalPeriod: 'Çok Dönemli',
    visitDuration: '4-6 saat'
  },
  {
    id: 'batman-hasankeyf-2',
    name: 'Zeynel Bey Türbesi',
    city: 'Batman',
    district: 'Hasankeyf',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Akkoyunlu döneminden türbe',
    tags: ['Tarihi', 'Türbe', 'Akkoyunlu'],
    historicalPeriod: '15. yüzyıl',
    visitDuration: '45 dakika'
  },
  {
    id: 'batman-hasankeyf-3',
    name: 'Artuklu Sarayı',
    city: 'Batman',
    district: 'Hasankeyf',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Artuklu döneminden saray kalıntıları',
    tags: ['Tarihi', 'Saray', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi',
    visitDuration: '1-2 saat'
  },
  {
    id: 'batman-hasankeyf-4',
    name: 'Hasankeyf Kalesi',
    city: 'Batman',
    district: 'Hasankeyf',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Kaya üzerine kurulmuş tarihi kale',
    tags: ['Tarihi', 'Kale', 'Manzara'],
    historicalPeriod: 'Çok Dönemli',
    visitDuration: '2-3 saat'
  },
  {
    id: 'batman-hasankeyf-5',
    name: 'Ulu Camii (Hasankeyf)',
    city: 'Batman',
    district: 'Hasankeyf',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Eyyubi döneminden camii',
    tags: ['Tarihi', 'Cami', 'Eyyubi'],
    historicalPeriod: 'Eyyubi Dönemi',
    visitDuration: '45 dakika'
  },
  {
    id: 'batman-hasankeyf-6',
    name: 'Hasankeyf Müzesi',
    city: 'Batman',
    district: 'Hasankeyf',
    rating: 4.3,
    image: '/placeholder.svg',
    description: 'Bölge tarihini anlatan müze',
    tags: ['Müze', 'Tarihi', 'Kültür'],
    visitDuration: '1-2 saat'
  },

  // Batman Sason İlçesi
  {
    id: 'batman-sason-1',
    name: 'Sason Yaylası',
    city: 'Batman',
    district: 'Sason',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Doğal yayla ve kamp alanı',
    tags: ['Doğa', 'Yayla', 'Kamp'],
    visitDuration: '1 gün'
  },
  {
    id: 'batman-sason-2',
    name: 'Sason Kalesi',
    city: 'Batman',
    district: 'Sason',
    rating: 4.0,
    image: '/placeholder.svg',
    description: 'Dağ yamacındaki tarihi kale',
    tags: ['Tarihi', 'Kale', 'Dağ'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '1-2 saat'
  },
  {
    id: 'batman-sason-3',
    name: 'Sason Çayları',
    city: 'Batman',
    district: 'Sason',
    rating: 4.2,
    image: '/placeholder.svg',
    description: 'Doğal akarsu ve piknik alanları',
    tags: ['Doğa', 'Çay', 'Piknik'],
    visitDuration: '2-3 saat'
  },

  // Mardin Artuklu İlçesi
  {
    id: 'mardin-artuklu-1',
    name: 'Mardin Kalesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Artuklu döneminden kalma tarihi kale, Mardin\'in simgesi',
    tags: ['Tarihi', 'Kale', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (12. yy)',
    visitDuration: '2-3 saat'
  },
  {
    id: 'mardin-artuklu-2',
    name: 'Deyrü\'z-Zafaran Manastırı',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'Safran Manastırı olarak da bilinen, Süryani Ortodoks kilisesi',
    tags: ['Tarihi', 'Manastır', 'Süryani'],
    historicalPeriod: 'MS 493',
    visitDuration: '1-2 saat'
  },
  {
    id: 'mardin-artuklu-3',
    name: 'Kasımiye Medresesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Artuklu döneminin en güzel medrese örneklerinden biri',
    tags: ['Tarihi', 'Medrese', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1469)',
    visitDuration: '1 saat'
  },
  {
    id: 'mardin-artuklu-4',
    name: 'Mardin Ulu Camii',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Mardin\'in en eski ve büyük camisi, Artuklu mimarisi',
    tags: ['Tarihi', 'Cami', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1176)',
    visitDuration: '45 dakika'
  },
  {
    id: 'mardin-artuklu-5',
    name: 'Zinciriye Medresesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Sultan İsa Medresesi olarak da bilinen, taş işçiliğiyle ünlü',
    tags: ['Tarihi', 'Medrese', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1385)',
    visitDuration: '1 saat'
  },
  {
    id: 'mardin-artuklu-6',
    name: 'Latifiye Camii',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Abdüllatif Camii olarak da bilinen, benzersiz taş süslemeler',
    tags: ['Tarihi', 'Cami', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1371)',
    visitDuration: '30 dakika'
  },
  {
    id: 'mardin-artuklu-7',
    name: 'Şehidiye Camii ve Külliyesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Melik Mansur Camii, türbe ve medrese kompleksi',
    tags: ['Tarihi', 'Külliye', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi (1214)',
    visitDuration: '1-2 saat'
  },
  {
    id: 'mardin-artuklu-8',
    name: 'Forty Martyrs Kilisesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.3,
    image: '/placeholder.svg',
    description: 'Kırk Şehitler Kilisesi, Süryani Ortodoks kilisesi',
    tags: ['Tarihi', 'Kilise', 'Süryani'],
    historicalPeriod: 'MS 6. yüzyıl',
    visitDuration: '45 dakika'
  },
  {
    id: 'mardin-artuklu-9',
    name: 'Mardin Müzesi',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Eski Ortodoks Patrikhanesi binasında, bölge tarihi',
    tags: ['Müze', 'Tarihi', 'Kültür'],
    historicalPeriod: '19. yüzyıl binası',
    visitDuration: '1-2 saat'
  },
  {
    id: 'mardin-artuklu-10',
    name: 'Revaklı Çarşı',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Tarihi çarşı, geleneksel el sanatları ve alışveriş',
    tags: ['Tarihi', 'Çarşı', 'Alışveriş'],
    historicalPeriod: 'Osmanlı Dönemi',
    visitDuration: '1 saat'
  },
  {
    id: 'mardin-artuklu-11',
    name: 'Savurkapı',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.2,
    image: '/placeholder.svg',
    description: 'Mardin\'in tarihi giriş kapılarından biri',
    tags: ['Tarihi', 'Kapı', 'Artuklu'],
    historicalPeriod: 'Artuklu Dönemi',
    visitDuration: '20 dakika'
  },
  {
    id: 'mardin-artuklu-12',
    name: 'Dara Antik Kenti',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'Bizans döneminin önemli kalıntıları, nekropol alanı',
    tags: ['Antik', 'Bizans', 'Arkeoloji'],
    historicalPeriod: 'Bizans Dönemi (MS 6. yy)',
    visitDuration: '2-3 saat'
  },
  {
    id: 'mardin-artuklu-13',
    name: 'Eski Gümrük Hanı',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.3,
    image: '/placeholder.svg',
    description: 'Osmanlı döneminden kalma tarihi han',
    tags: ['Tarihi', 'Han', 'Osmanlı'],
    historicalPeriod: 'Osmanlı Dönemi',
    visitDuration: '30 dakika'
  },
  {
    id: 'mardin-artuklu-14',
    name: 'Süleymaniye Camii',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Osmanlı mimarisinin güzel örneklerinden',
    tags: ['Tarihi', 'Cami', 'Osmanlı'],
    historicalPeriod: 'Osmanlı Dönemi',
    visitDuration: '30 dakika'
  },
  {
    id: 'mardin-artuklu-15',
    name: 'Cercis Murat Konağı',
    city: 'Mardin',
    district: 'Artuklu',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Sakıp Sabancı Mardin Kent Müzesi',
    tags: ['Müze', 'Konağı', 'Kültür'],
    historicalPeriod: '19. yüzyıl',
    visitDuration: '1-2 saat'
  },

  // Mardin Midyat İlçesi
  {
    id: 'mardin-midyat-1',
    name: 'Mor Gabriel Manastırı',
    city: 'Mardin',
    district: 'Midyat',
    rating: 4.9,
    image: '/placeholder.svg',
    description: 'Dünyanın en eski faal manastırlarından, Süryani merkezi',
    tags: ['Tarihi', 'Manastır', 'Süryani'],
    historicalPeriod: 'MS 397',
    visitDuration: '2-3 saat'
  },
  {
    id: 'mardin-midyat-2',
    name: 'Midyat Eski Şehir',
    city: 'Mardin',
    district: 'Midyat',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Taş evler ve dar sokaklar, geleneksel mimari',
    tags: ['Tarihi', 'Şehir', 'Mimari'],
    historicalPeriod: 'Çeşitli dönemler',
    visitDuration: '2-4 saat'
  },
  {
    id: 'mardin-midyat-3',
    name: 'Mor Hobil Manastırı',
    city: 'Mardin',
    district: 'Midyat',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Süryani Katolik Kilisesi',
    tags: ['Tarihi', 'Manastır', 'Süryani'],
    historicalPeriod: '19. yüzyıl',
    visitDuration: '1 saat'
  },
  {
    id: 'mardin-midyat-4',
    name: 'Midyat Gümüş ve Telkari Müzesi',
    city: 'Mardin',
    district: 'Midyat',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Geleneksel gümüş işçiliği ve telkari sanatı',
    tags: ['Müze', 'Sanat', 'El Sanatları'],
    historicalPeriod: 'Geleneksel',
    visitDuration: '1 saat'
  },
  {
    id: 'mardin-midyat-5',
    name: 'Mor Yakup Kilisesi',
    city: 'Mardin',
    district: 'Midyat',
    rating: 4.3,
    image: '/placeholder.svg',
    description: 'Süryani Ortodoks kilisesi, tarihi ibadet yeri',
    tags: ['Tarihi', 'Kilise', 'Süryani'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '45 dakika'
  },
  {
    id: 'mardin-midyat-6',
    name: 'Estel Winery',
    city: 'Mardin',
    district: 'Midyat',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Süryani geleneğiyle üretilen şaraplar',
    tags: ['Şarap', 'Gelenek', 'Turizm'],
    historicalPeriod: 'Modern',
    visitDuration: '1-2 saat'
  },

  // Mardin Nusaybin İlçesi
  {
    id: 'mardin-nusaybin-1',
    name: 'Mor Yakup Kilisesi (Nusaybin)',
    city: 'Mardin',
    district: 'Nusaybin',
    rating: 4.4,
    image: '/placeholder.svg',
    description: 'Türk-İslam mimarisinin güzel örneklerinden',
    tags: ['Tarihi', 'Kilise', 'İslami'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '45 dakika'
  },
  {
    id: 'mardin-nusaybin-2',
    name: 'Zeynel Abidin Camii',
    city: 'Mardin',
    district: 'Nusaybin',
    rating: 4.3,
    image: '/placeholder.svg',
    description: 'İslami mimarinin önemli eseri',
    tags: ['Tarihi', 'Cami', 'İslami'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '30 dakika'
  },
  {
    id: 'mardin-nusaybin-3',
    name: 'Nusaybin Ulu Camii',
    city: 'Mardin',
    district: 'Nusaybin',
    rating: 4.2,
    image: '/placeholder.svg',
    description: 'Şehrin en eski camisi',
    tags: ['Tarihi', 'Cami', 'İslami'],
    historicalPeriod: 'Erken İslam Dönemi',
    visitDuration: '30 dakika'
  },
  {
    id: 'mardin-nusaybin-4',
    name: 'Nusaybin Kalesi',
    city: 'Mardin',
    district: 'Nusaybin',
    rating: 4.1,
    image: '/placeholder.svg',
    description: 'Antik dönemden kalma kale kalıntıları',
    tags: ['Tarihi', 'Kale', 'Antik'],
    historicalPeriod: 'Antik dönem',
    visitDuration: '1 saat'
  },

  // Mardin Mazıdağı İlçesi
  {
    id: 'mardin-mazidagi-1',
    name: 'Mazıdağı Kalesi',
    city: 'Mardin',
    district: 'Mazıdağı',
    rating: 4.0,
    image: '/placeholder.svg',
    description: 'Tarihi kale kalıntıları ve manzara',
    tags: ['Tarihi', 'Kale', 'Manzara'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '1-2 saat'
  },
  {
    id: 'mardin-mazidagi-2',
    name: 'Mazıdağı Camii',
    city: 'Mardin',
    district: 'Mazıdağı',
    rating: 3.9,
    image: '/placeholder.svg',
    description: 'Yerel mimarinin güzel örneği',
    tags: ['Tarihi', 'Cami', 'Yerel'],
    historicalPeriod: 'Osmanlı Dönemi',
    visitDuration: '30 dakika'
  },

  // Mardin Savur İlçesi
  {
    id: 'mardin-savur-1',
    name: 'Savur Kalesi',
    city: 'Mardin',
    district: 'Savur',
    rating: 4.2,
    image: '/placeholder.svg',
    description: 'Tarihi kale ve panoramik manzara',
    tags: ['Tarihi', 'Kale', 'Manzara'],
    historicalPeriod: 'Ortaçağ',
    visitDuration: '1-2 saat'
  },
  {
    id: 'mardin-savur-2',
    name: 'Savur Eski Evleri',
    city: 'Mardin',
    district: 'Savur',
    rating: 4.1,
    image: '/placeholder.svg',
    description: 'Geleneksel taş mimari örnekleri',
    tags: ['Tarihi', 'Mimari', 'Geleneksel'],
    historicalPeriod: 'Çeşitli dönemler',
    visitDuration: '1-2 saat'
  },

  // Mardin Kızıltepe İlçesi
  {
    id: 'mardin-kiziltepe-1',
    name: 'Kızıltepe Ulu Camii',
    city: 'Mardin',
    district: 'Kızıltepe',
    rating: 4.0,
    image: '/placeholder.svg',
    description: 'Şehrin merkezi camisi',
    tags: ['Tarihi', 'Cami', 'İslami'],
    historicalPeriod: 'Osmanlı Dönemi',
    visitDuration: '30 dakika'
  },
  {
    id: 'mardin-kiziltepe-2',
    name: 'Kızıltepe Pazarı',
    city: 'Mardin',
    district: 'Kızıltepe',
    rating: 3.9,
    image: '/placeholder.svg',
    description: 'Geleneksel halk pazarı',
    tags: ['Kültür', 'Pazar', 'Yerel'],
    historicalPeriod: 'Geleneksel',
    visitDuration: '1 saat'
  },

  // Diğer şehirlerden örnekler
  {
    id: '1',
    name: 'Ayasofya Camii',
    city: 'İstanbul',
    district: 'Fatih',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'Tarihi ve mimari harikası',
    tags: ['Tarihi', 'Mimari', 'Dini'],
    historicalPeriod: 'Bizans-Osmanlı',
    visitDuration: '2 saat'
  },
  {
    id: '2',
    name: 'Kapalıçarşı',
    city: 'İstanbul',
    district: 'Fatih',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Geleneksel alışveriş merkezi',
    tags: ['Alışveriş', 'Tarihi', 'Kültürel']
  },
  {
    id: '3',
    name: 'Anıtkabir',
    city: 'Ankara',
    district: 'Çankaya',
    rating: 4.9,
    image: '/placeholder.svg',
    description: 'Atatürk\'ün mausolesi',
    tags: ['Tarihi', 'Anıt', 'Müze']
  },
  {
    id: '4',
    name: 'Kordon',
    city: 'İzmir',
    district: 'Konak',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Sahil boyunca yürüyüş',
    tags: ['Doğa', 'Yürüyüş', 'Sahil']
  },
  {
    id: '5',
    name: 'Kaleiçi',
    city: 'Antalya',
    district: 'Muratpaşa',
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'Tarihi Antalya merkezi',
    tags: ['Tarihi', 'Yürüyüş', 'Mimari']
  }
];

export const PlacesList: React.FC<PlacesListProps> = ({ 
  selectedCity, 
  searchQuery, 
  onCitySelect, 
  visitedPlaces, 
  onToggleVisited 
}) => {
  const filteredPlaces = mockPlaces.filter(place => {
    const matchesCity = !selectedCity || 
      place.city === selectedCity || 
      selectedCity.includes(place.city) ||
      (selectedCity.includes(place.district) && selectedCity.includes(place.city));
    
    const matchesSearch = !searchQuery || 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.district.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCity && matchesSearch;
  });

  const getThemeColor = (city: string) => {
    if (city === 'Mardin') {
      return {
        primary: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
        star: 'text-amber-500',
        accent: 'text-amber-600'
      };
    } else if (city === 'Batman') {
      return {
        primary: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
        star: 'text-purple-500',
        accent: 'text-purple-600'
      };
    }
    return {
      primary: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      star: 'text-blue-500',
      accent: 'text-blue-600'
    };
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-fit">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            {selectedCity ? `${selectedCity} - Gezilecek Yerler` : 'Tüm Gezilecek Yerler'}
          </h2>
          {selectedCity && (
            <button
              onClick={() => onCitySelect('')}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Tümünü Göster
            </button>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {filteredPlaces.length} yer bulundu
          {selectedCity?.includes('Mardin') && (
            <span className="text-amber-600 ml-2">✨ Tarihi Hazineler</span>
          )}
          {selectedCity?.includes('Batman') && (
            <span className="text-purple-600 ml-2">🏛️ Antik Kent</span>
          )}
        </p>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {filteredPlaces.map((place) => {
          const themeColors = getThemeColor(place.city);
          const isVisited = visitedPlaces.has(place.id);
          
          return (
            <div
              key={place.id}
              className={`p-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-md ${
                isVisited ? 'bg-green-50 border-green-200' : ''
              }`}
              onClick={() => onCitySelect(place.city)}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-16 h-16 rounded-lg object-cover bg-gray-200 transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 truncate flex items-center">
                    {place.name}
                    {place.city === 'Mardin' && <span className="ml-2 text-amber-500">⭐</span>}
                    {place.city === 'Batman' && <span className="ml-2 text-purple-500">🏛️</span>}
                    {isVisited && <span className="ml-2 text-green-500">✅</span>}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{place.district}, {place.city}</span>
                  </div>
                  
                  <div className="flex items-center mt-1 space-x-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{place.rating}</span>
                    </div>
                    {place.historicalPeriod && (
                      <div className={`flex items-center text-xs ${themeColors.accent}`}>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{place.historicalPeriod}</span>
                      </div>
                    )}
                    {place.visitDuration && (
                      <div className="flex items-center text-xs text-blue-600">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{place.visitDuration}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {place.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {place.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 text-xs rounded-full transition-colors duration-200 ${themeColors.primary}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <button 
                    className={`p-1 transition-all duration-200 hover:scale-110 ${
                      isVisited ? 'text-green-500' : 'text-gray-400 hover:text-green-500'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleVisited(place.id);
                    }}
                  >
                    <CheckCircle className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-500 transition-all duration-200 hover:scale-110">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-blue-500 transition-all duration-200 hover:scale-110">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPlaces.length === 0 && (
        <div className="p-8 text-center">
          <div className="text-gray-400 text-4xl mb-2">🗺️</div>
          <h3 className="text-gray-600 font-medium mb-1">Henüz yer bulunamadı</h3>
          <p className="text-gray-500 text-sm">
            {selectedCity ? `${selectedCity} için henüz öneri yok` : 'Arama kriterlerinizi değiştirmeyi deneyin'}
          </p>
        </div>
      )}
    </div>
  );
};
