'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import featrus from '../../../public/featrus.png';
import { Featurs1, Featurs2 } from '../data/Featurs';

gsap.registerPlugin(ScrollTrigger);

const Fitur = () => {
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const descRefs = useRef([]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: '60%' },
        {
          y: '3%',
          duration: 4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 10%',
            scrub: true,
          },
        }
      );
    }

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

    descRefs.current.forEach((desc, index) => {
      gsap.fromTo(
        desc,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: desc,
            start: 'top 85%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      whileTap={{ scale: 0.9 }}
      className="flex pt-10 flex-col w-full px-10 md:px-16 lg:px-[10rem] dark:bg-gray-800 dark:text-gray-200">
      <div className="flex flex-col justify-center items-center gap-10 leading-loose">
        <p className="text-primary text-4xl">Fitur</p>
        <h1
          ref={(el) => (textRefs.current[0] = el)}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-500 dark:text-gray-200">
          Complete Features You Get
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
          {/* Kolom Kiri */}
          <div className="flex flex-col gap-11 leading-loose">
            {Featurs1.map((feature, index) => (
              <div key={index}>
                <h1
                  ref={(el) => (textRefs.current[index + 1] = el)}
                  className="text-2xl flex items-center sm:text-3xl md:text-3xl font-bold text-gray-500 dark:text-gray-200 py-4">
                  <span className="mr-2">
                    <FaCheckCircle className="text-yellow-400" size={40} />
                  </span>
                  {feature.title}
                </h1>
                <p
                  ref={(el) => (descRefs.current[index] = el)}
                  className="text-gray-700 dark:text-gray-300 ps-12">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Kolom Tengah */}
          <div className="relative flex flex-col overflow-hidden justify-center items-center leading-loose">
            <div className="absolute rounded-md bottom-0 bg-[#314E52] dark:bg-[#414E52] w-full h-[300px] -z-10"></div>
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

          {/* Kolom Kanan */}
          <div className="flex flex-col gap-11 leading-loose">
            {Featurs2.map((feature, index) => (
              <div key={index}>
                <h1
                  ref={(el) => (textRefs.current[index + 4] = el)}
                  className="text-2xl flex items-center sm:text-3xl md:text-3xl font-bold text-gray-500 dark:text-gray-200 py-4">
                  <span className="mr-2">
                    <FaCheckCircle className="text-yellow-400" size={40} />
                  </span>
                  {feature.title}
                </h1>
                <p
                  ref={(el) => (descRefs.current[index + 3] = el)}
                  className="text-gray-700 dark:text-gray-300 ps-12">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Fitur;
