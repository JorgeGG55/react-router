// TimeZoneComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimeComponent = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [currentTime, setCurrentTime] = useState(null);

  const cities = [
    'Europe/Andorra',
    'Europe/Astrakhan',
    'Europe/Athens',
    'Europe/Belgrade',
    'Europe/Berlin',
    'Europe/Brussels',
    'Europe/Bucharest',
    'Europe/Budapest',
    'Europe/Chisinau',
    'Europe/Dublin',
    'Europe/Gibraltar',
    'Europe/Helsinki',
    'Europe/Istanbul',
    'Europe/Kaliningrad',
    'Europe/Kirov',
    'Europe/Kyiv',
    'Europe/Lisbon',
    'Europe/London',
    'Europe/Madrid',
    'Europe/Malta',
    'Europe/Minsk',
    'Europe/Moscow',
    'Europe/Paris',
    'Europe/Prague',
    'Europe/Riga',
    'Europe/Rome',
    'Europe/Samara',
    'Europe/Saratov',
    'Europe/Simferopol',
    'Europe/Sofia',
    'Europe/Tallinn',
    'Europe/Tirane',
    'Europe/Ulyanovsk',
    'Europe/Vienna',
    'Europe/Vilnius',
    'Europe/Volgograd',
    'Europe/Warsaw',
    'Europe/Zurich'
  ];

  const handleCityChange = async (city) => {
    try {
      const response = await axios.get(`http://worldtimeapi.org/api/timezone/${city}`);
      setCurrentTime(response.data);
    } catch (error) {
      console.error('Error fetching time:', error);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      handleCityChange(selectedCity);
    } else {
      setCurrentTime(null);
    }
  }, [selectedCity]);

  return (
    <div>
      <h2>Seleccione una ciudad de Europa</h2>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Seleccionar ciudad</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city.replace('Europe/', '')}
          </option>
        ))}
      </select>
      {currentTime && (
        <p>
          Hora actual en {selectedCity.replace('Europe/', '')}: {currentTime.datetime}
        </p>
      )}
    </div>
  );
};

export default TimeComponent;
