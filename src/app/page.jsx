import { DarkModeProvider } from './data/useDarkMode'; // Mengimport provider
import ContactUs from './sections/ContactUs';
import Fitur from './sections/Fitur';
import Hero from './sections/Hero';
import PriceList from './sections/PriceList';
import WhyUs from './sections/WhyUs';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <DarkModeProvider>
      <Navbar />
      <main>
        <section className="w-full" id="hero">
          <Hero />
        </section>
        <section className="w-full" id="fitur">
          <Fitur />
        </section>
        <section className="w-full">
          <WhyUs />
        </section>
        <section className="w-full" id="harga">
          <PriceList />
        </section>
        <section className="w-full" id="kontak">
          <ContactUs />
        </section>
      </main>
    </DarkModeProvider>
  );
}
