import { useRef } from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';

const Home = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({
        behavior: 'auto',
        block: window.innerWidth > 768 ? 'center' : 'start',
      });
    }
  };
  return (
    <>
      <Hero scrollToPricing={scrollToPricing} />
      <Features />
      <Pricing scrollRef={pricingRef} />
    </>
  );
};

export default Home;
