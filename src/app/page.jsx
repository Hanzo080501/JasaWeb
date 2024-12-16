'use client';
import { motion } from 'framer-motion';
import ContactUs from './sections/ContactUs';
import Fitur from './sections/Fitur';
import Hero from './sections/Hero';
import PriceList from './sections/PriceList';
import WhyUs from './sections/WhyUs';

export default function Home() {
  return (
    <main className="flex min-h-screen gap-3 flex-col">
      <div className="px-[9.4rem] w-full">
        <Hero />
      </div>
      <div className="px-[9.4rem] w-full" id="fitur">
        <Fitur />
      </div>
      <div className="px-[9.4rem] w-full">
        <WhyUs />
      </div>
      <div className="px-[9.4rem] w-full">
        <PriceList />
      </div>
      <motion.div
        initial={{ opacity: 0, rotateX: '90deg' }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="px-[9.4rem] w-full mb-10">
        <ContactUs />
      </motion.div>
    </main>
  );
}
