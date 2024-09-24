import { useEffect } from 'react';
import AppStore from './components/AppStore';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
    <main className='overflow-x-hidden text-black duration-300 bg-white dark:bg-black dark:text-white'>
      <Navbar />
      <Hero />
      <Quotes />
      <Banner />
      <Banner2 />
      <Features />
      <AppStore />
      <Footer />
    </main>
  )
}

export default App