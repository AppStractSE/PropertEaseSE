import { useRef } from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrolltoContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'center',
      });
    }
  };

  return (
    <>
      <Hero scrollToContact={scrolltoContact} />
      <Features />
      <Pricing scrollRef={contactRef} />
    </>
  );
};

export default Home;
