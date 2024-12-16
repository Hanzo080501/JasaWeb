'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSearch } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Efek scroll untuk teks
    textRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    });

    // Efek scroll untuk gambar atau elemen lainnya
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col-reverse sm:flex-row justify-between items-center gap-10 p-8">
      {/* Bagian Kiri - Teks */}
      <div className="flex flex-col gap-4 w-full sm:w-1/2">
        <motion.h1
          ref={(el) => (textRefs.current[0] = el)}
          className="text-3xl font-bold text-gray-800">
          Mengapa Kami?
        </motion.h1>
        <motion.p ref={(el) => (textRefs.current[1] = el)} className="text-lg text-gray-600">
          Keuntungan yang akan Anda dapatkan dari layanan jasa website kami yaitu:
        </motion.p>

        {/* Daftar Keuntungan */}
        <div className="flex flex-col gap-4 py-4">
          <motion.div
            ref={(el) => (textRefs.current[2] = el)}
            className="flex items-center text-lg text-gray-600">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            Dukungan Teknis dan Pemeliharaan
          </motion.div>
          <motion.div
            ref={(el) => (textRefs.current[3] = el)}
            className="flex items-center text-lg text-gray-600">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            Pengerjaan Cepat
          </motion.div>
          <motion.div
            ref={(el) => (textRefs.current[4] = el)}
            className="flex items-center text-lg text-gray-600">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            Garansi Revisi
          </motion.div>
          <motion.div
            ref={(el) => (textRefs.current[5] = el)}
            className="flex items-center text-lg text-gray-600">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            Harga Terjangkau
          </motion.div>
          <motion.div
            ref={(el) => (textRefs.current[6] = el)}
            className="flex items-center text-lg text-gray-600">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            Bisa Konsultasi terlebih dahulu
          </motion.div>
        </div>

        {/* Tombol Konsultasi */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-orange-500 text-white py-2 px-6 rounded-sm mt-6">
          Konsultasi
        </motion.button>
      </div>

      {/* Bagian Kanan - Gambar atau Elemen Desain */}
      <div
        ref={imageRef}
        className="relative flex justify-center items-center w-full sm:w-1/2 h-80 sm:h-full bg-orange-500">
        <motion.div
          className="flex justify-center items-center w-full sm:w-[300px] h-full bg-white rounded-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          <div className="flex justify-between items-center w-full">
            <input
              type="text"
              placeholder="Jasa/Website"
              className="py-2 px-4 rounded-l-lg text-sm border-none w-3/4"
            />
            <button className="py-2 px-4 bg-yellow-500 rounded-r-lg text-white">
              <FaSearch />
            </button>
          </div>
        </motion.div>
      </div>
      <div className="w-1/2 md:w-1/2 h-full min-h-[50vh] bottom-0 bg-[#F9F9F9]"></div>
    </motion.div>
  );
};

export default WhyUs;
