'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Price } from '../data/Pricelist';

const PriceList = () => {
  return (
    <div className="min-h-screen pb-9 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-[10rem] transition-colors duration-500 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white mb-12">
          Miliki website hanya dengan Rp. 83,333/bulan
        </h2>

        {/* Pricing Packages */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center">
          {Price.map((paket, index) => {
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: false,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${paket.color} text-white w-full sm:w-1/3 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105`}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{paket.label}</h3>
                <p className="text-xl sm:text-2xl mb-4">{paket.harga}</p>
                <ul className="list-disc pl-5 text-lg sm:text-xl">
                  {paket.feature.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PriceList;
