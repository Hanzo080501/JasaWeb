export default function ContactUs() {
  return (
    <section className="bg-gray-800 pt-20 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Bagian Kontak */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <div className="flex items-center space-x-3">
            <span>📞</span>
            <p>(+62) 813-6841-7630</p>
          </div>
          <div className="flex items-center space-x-3">
            <span>📍</span>
            <p>JL Soropadan, Condongcatur, Depok, Sleman, Yogyakarta</p>
          </div>
        </div>

        {/* Bagian Peta */}
        <div>
          <iframe
            title="map"
            className="w-full h-48 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            allowFullScreen></iframe>
        </div>
      </div>

      {/* Formulir */}
      <div className="bg-gray-100 text-gray-800 p-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">JasaWebsite.</h3>
            <p>
              Kami siap melayani permintaan website yang dibutuhkan. Hubungi Kami untuk konsultasi
              secara gratis.
            </p>
          </div>
          <form className="flex flex-col lg:flex-row gap-3 mt-4 lg:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 w-full lg:w-auto"
            />
            <input
              type="text"
              placeholder="pertanyaan"
              className="border border-gray-300 rounded-md p-2 w-full lg:w-auto"
            />
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
