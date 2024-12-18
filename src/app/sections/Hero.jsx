'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from '../../../public/hero.png';
import { FaArrowRight } from 'react-icons/fa';

const textVariants = {
  initial: { x: -100, opacity: 0 },
  viewport: { once: false, amount: 0.3 },
  animate: { x: 0, opacity: 1, transition: { duration: 1.5, staggerChildren: 0.1 } },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: '-450%',
    transition: { duration: 20, repeatType: 'mirror', repeat: Infinity },
  },
};

const Hero = () => {
  return (
    <div className="flex flex-col pt-24 sm:pt-16 md:flex-row w-full min-h-screen items-center justify-between relative overflow-hidden dark:bg-gray-900 px-4 sm:px-8 md:px-16 transition-colors duration-500">
      {/* Bagian Teks */}
      <motion.div
        variants={textVariants}
        initial="initial"
        viewport="viewport"
        whileInView="animate"
        className="w-full md:w-1/2 ml-0 md:ml-16 mb-8 md:mb-0">
        <motion.h1
          variants={textVariants}
          className="text-2xl sm:text-4xl md:text-5xl md:leading-tight font-bold text-gray-800 dark:text-gray-200 transition-colors duration-500">
          Bangun Website Impian Bersama Kami
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="mt-6 sm:mt-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300 transition-colors duration-500">
          Wujudkan sebuah platform digital yang dirancang sesuai dengan kebutuhan, keinginan, dan
          tujuan Anda. Baik dari segi tampilan, fungsionalitas, hingga kemampuannya untuk mendukung
          pertumbuhan Anda secara personal, profesional, atau bisnis.
        </motion.p>
        <motion.button
          variants={textVariants}
          className="mt-8 mb-8 flex items-center px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-400/80 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-400/80 transition-colors duration-500">
          Lihat Paket
          <span className="ml-2">
            <FaArrowRight />
          </span>
        </motion.button>
      </motion.div>

      {/* Slider */}
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute w-[55%] font-bold text-gray-600/10 p-4 text-[50vh] sm:text-[50vh] lg:text-[50vh] whitespace-nowrap -bottom-11 -z-[1] dark:z-0 left-0 dark:text-gray-300/10 transition-colors duration-500">
        Web Design and Development
      </motion.div>

      {/* Bagian Gambar */}
      <motion.div
        initial={{ opacity: 0, translateY: '-30%' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          type: 'spring',
          delay: 0.5,
          duration: 1.5,
        }}
        className="w-full md:w-1/2 overflow-hidden z-[1]">
        <Image
          src={hero}
          alt="Hero"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
