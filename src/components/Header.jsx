import { Wallet, PiggyBank, Calculator, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <section>
      {/* Headline + Subheadline */}
      <div className="relative mt-16 flex items-center justify-center min-h-screen  overflow-hidden">
        <div className="text-center max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
            Atur Uangmu, <br /> Capai Tujuanmu 🚀
          </h1>
          <p className="text-gray-600 mb-6">Mulai dari budgeting, target nabung, sampai belajar keuangan dasar. Gratis, mudah, dan aman.</p>
          <div className="flex justify-center gap-4">
            <Link to="/belajar">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition">Pelajari Sekarang</button>
            </Link>
          </div>
        </div>

        {/* Card Features */}
        <div className=" z-10 absolute top-16 left-3  md:left-48  rotate-[-6deg]">
          <Card icon={<Wallet className="w-6 h-6 text-blue-600" />} title="Budgeting" />
        </div>

        <div className="absolute top-16 right-3 right-3 md:right-48 rotate-[6deg]">
          <Card icon={<PiggyBank className="w-6 h-6 text-green-600" />} title="Target Nabung" />
        </div>

        <div className="absolute bottom-16 left-3 md:left-48 rotate-[6deg]">
          <Card icon={<Calculator className="w-6 h-6 text-purple-600" />} title="Kalkulator" />
        </div>

        <div className="absolute bottom-16 right-3 md:right-48 rotate-[-6deg]">
          <Card icon={<BookOpen className="w-6 h-6 text-orange-600" />} title="Belajar" />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title }) {
  return (
    <div className="w-40 h-24 bg-white border border-gray-300 rounded-2xl shadow-md flex flex-col items-center justify-center">
      {icon}
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
}
