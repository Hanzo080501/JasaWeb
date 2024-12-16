'use client';
import { motion } from 'framer-motion';

const PriceList = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-3xl font-semibold text-gray-800 mb-12">
          Miliki website hanya dengan Rp. xxxxx/bulan
        </motion.h2>

        {/* Pricing Packages */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center">
          {/* Package 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-orange-500 text-white w-full sm:w-1/3 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Paket 1</h3>
            <p className="text-xl mb-4">Rp. xxx.xxx / tahun</p>
            <ul className="list-disc pl-5 text-lg">
              <li>5 halaman website</li>
              <li>Pengerjaan 2 hari kerja</li>
              <li>Garansi 1x revisi</li>
              <li>Bisa req warna, font</li>
              <li>Edit foto untuk 5 gambar</li>
            </ul>
          </motion.div>

          {/* Package 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-teal-600 text-white w-full sm:w-1/3 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Paket 2</h3>
            <p className="text-xl mb-4">Rp. x.xxx.xxx / tahun</p>
            <ul className="list-disc pl-5 text-lg">
              <li>10 halaman website</li>
              <li>Pengerjaan 5 hari kerja</li>
              <li>Garansi 1x revisi</li>
              <li>Bisa req warna, font</li>
              <li>Edit foto untuk 10 gambar + logo</li>
            </ul>
          </motion.div>

          {/* Package 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-orange-600 text-white w-full sm:w-1/3 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Paket 3</h3>
            <p className="text-xl mb-4">Rp. x.xxx.xxx / tahun</p>
            <ul className="list-disc pl-5 text-lg">
              <li>15 halaman website</li>
              <li>Pengerjaan 7 hari kerja</li>
              <li>Garansi 2x revisi</li>
              <li>Bisa req warna, font dan desain</li>
              <li>Fitur E-commerce</li>
              <li>Edit foto untuk 15 gambar + logo</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PriceList;
