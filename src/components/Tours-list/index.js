import React, { useState } from 'react';
import './ToursList.scss';
import '../Tour/Tour';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

export default function ToursList() {
  const [tours, setTours] = useState(tourData);
  const removeTour = (id) => {
    const sortedTours = tours.filter((tour) => tour.id !== id);
    setTours(sortedTours);
  };
  return (
    <section className='tourlist'>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
}
