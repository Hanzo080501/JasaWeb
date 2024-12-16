'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from '../../../public/hero.png';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: '100%' }}
      transition={{ duration: 0.8 }}
      animate={{ opacity: 1, translateX: 0 }}
      className="flex w-full h-screen items-center justify-between">
      <div className="w-1/2">
        <h1 className="text-2xl sm:text-5xl md:leading-tight md:text-5xl font-bold text-gray-500">
          Bangun Website Impian Bersama Kami
        </h1>
        <p className="mt-8 text-lg text-gray-700">
          Wujudkan sebuah platform digital yang dirancang sesuai dengan kebutuhan, keinginan, dan
          tujuan Anda. Baik dari segi tampilan, fungsionalitas, hingga kemampuannya untuk mendukung
          pertumbuhan Anda secara personal, profesional, atau bisnis.
        </p>
        <button className="mt-8 mb-8 flex items-center px-4 py-2 pb-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-400/80">
          Lihat Paket
          <span className="ml-2">
            <FaArrowRight />
          </span>
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: '-30%' }}
        transition={{ type: 'spring', delay: 1 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="w-1/2 overflow-y-hidden">
        <Image src={hero} alt="Hero" width={'100%'} height={'100%'} />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
