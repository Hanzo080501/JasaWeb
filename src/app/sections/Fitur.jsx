'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import featrus from '../../../public/featrus.png';
gsap.registerPlugin(ScrollTrigger);

const Fitur = () => {
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: '50%' }, // Gambar mulai dari bawah
        {
          y: '-2%', // Gambar bergerak naik hingga setengah bagian berada di atas background
          duration: 3.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%', // Animasi dimulai saat gambar mendekati viewport
            end: 'top 10%', // Animasi selesai ketika gambar sudah setengah di atas background
            scrub: true, // Sinkron dengan scroll
          },
        }
      );
    }

    // ScrollTrigger untuk teks
    textRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 }, // Mulai dengan teks tidak terlihat dan sedikit bergeser
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 80%', // Animasi dimulai saat elemen mendekati viewport
            end: 'top 40%', // Animasi selesai ketika elemen mencapai posisi tertentu
            scrub: true, // Sinkron dengan scroll
          },
        }
      );
    });
  }, []);

  return (
    <motion.div initial={{ y: 20 }} animate={{ y: 0 }} whileTap={{ scale: 0.9 }}>
      <div className="flex flex-col justify-center items-center gap-10 leading-loose">
        <p className="text-primary text-4xl">Fitur</p>
        <h1
          ref={(el) => (textRefs.current[0] = el)} // Menambahkan ref untuk animasi scroll
          className="text-2xl sm:text-5xl md:leading-tight md:text-5xl font-bold text-gray-500">
          Complete Features You Get
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
          <div className="flex flex-col gap-11 leading-loose">
            <div>
              <h1
                ref={(el) => (textRefs.current[1] = el)} // Menambahkan ref untuk animasi scroll
                className="text-2xl flex items-center sm:text-5xl md:leading-tight md:text-3xl font-bold text-gray-500 py-4">
                <span className="mr-2">
                  <FaCheckCircle className="text-yellow-400" size={40} />
                </span>
                Desain Menarik
              </h1>
              <p className="text-gray-700 ps-12">
                Website dengan desain yang menarik, dan desain sesuai permintaan, termasuk warna,
                font, tata letak dan fitur.
              </p>
            </div>
            <div>
              <h1
                ref={(el) => (textRefs.current[2] = el)} // Menambahkan ref untuk animasi scroll
                className="text-2xl flex items-center sm:text-5xl md:leading-tight md:text-3xl font-bold text-gray-500 py-4">
                <span className="mr-2">
                  <FaCheckCircle className="text-yellow-400" size={40} />
                </span>
                Responsif
              </h1>
              <p className="text-gray-700 ps-12">
                Website Anda dapat diakses di semua perangkat, baik itu desktop, tablet, maupun
                smartphone.
              </p>
            </div>
            <div>
              <h1
                ref={(el) => (textRefs.current[3] = el)} // Menambahkan ref untuk animasi scroll
                className="text-2xl flex items-center sm:text-5xl md:leading-tight md:text-3xl font-bold text-gray-500 py-4">
                <span className="mr-2">
                  <FaCheckCircle className="text-yellow-400" size={40} />
                </span>
                SEO Friendly
              </h1>
              <p className="text-gray-700 ps-12">
                Website dioptimalkan untuk mesin pencari agar mudah ditemukan pelanggan.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col overflow-hidden justify-center items-center leading-loose">
            <div className="absolute rounded-md bottom-0 bg-[#314E52] w-full h-[300px] -z-10"></div>
            <Image
              src={featrus}
              ref={imageRef}
              className="w-full bottom-28 relative z-10"
              alt="Hero"
              width={'100%'}
              height={'100%'}
              priority
            />
          </div>
          <div className="flex flex-col leading-loose gap-11">
            <div>
              <h1
                ref={(el) => (textRefs.current[4] = el)} // Menambahkan ref untuk animasi scroll
                className="text-2xl flex items-center sm:text-5xl md:leading-tight md:text-3xl font-bold text-gray-500 py-4">
                <span className="mr-2">
                  <FaCheckCircle className="text-yellow-400" size={40} />
                </span>
                Keamanan website
              </h1>
              <p className="text-gray-700 ps-12">
                Proteksi website dengan sertifikat SSL dan pengaturan keamanan tambahan.
              </p>
            </div>
            <div>
              <h1
                ref={(el) => (textRefs.current[5] = el)} // Menambahkan ref untuk animasi scroll
                className="text-2xl flex items-center sm:text-5xl md:leading-tight md:text-3xl font-bold text-gray-500 py-4">
                <span className="mr-2">
                  <FaCheckCircle className="text-yellow-400" size={40} />
                </span>
                Hosting dan Domain
              </h1>
              <p className="text-gray-700 ps-12">
                Paket lengkap dengan layanan hosting cepat dan domain pilihan.
              </p>
            </div>
            <div>
              <h1
                ref={(el) => (textRefs.current[6] = el)} // Menambahkan ref untuk animasi scroll
                className="text-2xl flex items-center sm:text-5xl md:leading-tight md:text-3xl font-bold text-gray-500 py-4">
                <span className="mr-2">
                  <FaCheckCircle className="text-yellow-400" size={40} />
                </span>
                Fitur Lengkap
              </h1>
              <p className="text-gray-700 ps-12">
                Tersedia fitur untuk E-commerce, formulir kontak, integrasi media sosial, galeri dan
                portofolio, blog atau artikel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Fitur;
