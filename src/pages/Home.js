import React from 'react';
import { Contact, Hero, FeaturedProducts, Services } from '../components';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
