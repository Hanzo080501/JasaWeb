'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import featrus from '../../../public/featrus.png'; // Ganti dengan path gambar yang sesuai

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
    <motion.div className="flex flex-col-reverse py-10 px-6 sm:px-12 md:px-16 lg:px-32 xl:px-40 w-full sm:flex-row justify-between items-center gap-10 dark:bg-gray-800 dark:text-white transition-colors duration-300">
      {/* Bagian Kiri - Teks */}
      <div className="flex flex-col gap-4 w-full sm:w-1/2">
        <motion.h1
          ref={(el) => (textRefs.current[0] = el)}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
          Mengapa Kami?
        </motion.h1>
        <motion.p
          ref={(el) => (textRefs.current[1] = el)}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Keuntungan yang akan Anda dapatkan dari layanan jasa website kami yaitu:
        </motion.p>

        {/* Daftar Keuntungan */}
        <div className="flex flex-col gap-4 py-4">
          {[
            'Dukungan Teknis dan Pemeliharaan',
            'Pengerjaan Cepat',
            'Garansi Revisi',
            'Harga Terjangkau',
            'Bisa Konsultasi terlebih dahulu',
          ].map((text, index) => (
            <motion.div
              key={index}
              ref={(el) => (textRefs.current[index + 2] = el)}
              className="flex items-center text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              <FaCheckCircle className="text-yellow-400 mr-2" />
              {text}
            </motion.div>
          ))}
        </div>

        {/* Tombol Konsultasi */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-orange-500 text-white py-2 px-6 rounded-sm mt-6 w-full sm:w-auto">
          Konsultasi
        </motion.button>
      </div>

      {/* Bagian Kanan - Gambar atau Elemen Desain */}
      <div
        ref={imageRef}
        className="relative flex justify-center items-center w-full sm:w-1/2 h-80 sm:h-full bg-orange-500 rounded-lg shadow-lg">
        {/* Menambahkan gambar atau ilustrasi di kanan */}
        <div className="absolute  left-0 right-0 mb-6">
          <Image
            src={featrus}
            alt="Your Image"
            className="w-[80%] mx-auto rounded-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
