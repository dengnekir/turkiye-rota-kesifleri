
import React, { useState } from 'react';
import { TurkeyVectorMap } from '../components/TurkeyVectorMap';
import { PlacesList } from '../components/PlacesList';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visitedPlaces, setVisitedPlaces] = useState<Set<string>>(new Set());
  const [visitedCities, setVisitedCities] = useState<Set<string>>(new Set());

  const handleToggleVisited = (placeId: string) => {
    const newVisitedPlaces = new Set(visitedPlaces);
    if (newVisitedPlaces.has(placeId)) {
      newVisitedPlaces.delete(placeId);
    } else {
      newVisitedPlaces.add(placeId);
    }
    setVisitedPlaces(newVisitedPlaces);
  };

  const handleToggleCityVisited = (cityOrDistrict: string) => {
    const newVisitedCities = new Set(visitedCities);
    if (newVisitedCities.has(cityOrDistrict)) {
      newVisitedCities.delete(cityOrDistrict);
    } else {
      newVisitedCities.add(cityOrDistrict);
    }
    setVisitedCities(newVisitedCities);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-emerald-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Türkiye Gezilecek Yerler
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Türkiye'nin güzel şehirlerini keşfedin, gezdiğiniz yerleri işaretleyin ve diğer gezginlerin önerilerini görün
          </p>
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vektör Harita</h2>
              <TurkeyVectorMap 
                selectedCity={selectedCity} 
                onCitySelect={setSelectedCity}
                visitedCities={visitedCities}
                onToggleCityVisited={handleToggleCityVisited}
              />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <PlacesList 
              selectedCity={selectedCity} 
              searchQuery={searchQuery}
              onCitySelect={setSelectedCity}
              visitedPlaces={visitedPlaces}
              onToggleVisited={handleToggleVisited}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
