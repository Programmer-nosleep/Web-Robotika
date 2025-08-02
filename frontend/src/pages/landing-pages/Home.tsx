import React from "react";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200/50">
      <Navbar />

      <main className="px-6 py-12 mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Selamat Datang di Komunitas Robotika
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Tempat berkumpulnya para inovator muda, pecinta teknologi, dan calon insinyur robotika dari berbagai jurusan dan fakultas.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tentang Kami</h2>
          <p className="text-gray-600">
            Komunitas ini merupakan wadah bagi mahasiswa untuk belajar, berkolaborasi, dan mengembangkan robot cerdas yang dapat bersaing di tingkat nasional dan internasional. Kami rutin mengadakan workshop, pelatihan, dan kompetisi internal.
          </p>
        </section>

        <section className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-2">Ingin Bergabung?</h3>
          <p className="text-gray-700 mb-4">Hubungi kami melalui halaman Contact atau kunjungi markas komunitas di Gedung Teknik Lantai 2.</p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
          >
            Hubungi Kami
          </a>
        </section>
      </main>
    </div>
  )
}

export default Home
