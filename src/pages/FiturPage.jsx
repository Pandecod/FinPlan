import React, { useState } from 'react';
import Footer from '../components/Footer';
import heroImg from '../assets/hero.png';

/**
 * FiturPage.jsx
 * - Halaman Fitur penuh untuk website finance (React + Tailwind)
 * - Pastikan Tailwind sudah terpasang di project
 */

const currency = (value) => {
  if (value === null || value === undefined || isNaN(value)) return '-';
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
};

const initialArticles = [
  {
    id: 1,
    title: '5 Tips Mengatur Uang Jajan',
    excerpt: 'Langkah sederhana agar uang jajanmu tidak cepat habis.',
    content: 'Mulai catat semua pengeluaran selama seminggu. Lihat pola, dan alokasikan anggaran mingguan. Pakai celengan digital: sisihkan 10% setiap dapat pemasukan.',
  },
  {
    id: 2,
    title: 'Cara Membuat Anggaran Bulanan (50/30/20)',
    excerpt: 'Aturan populer yang mudah diterapkan: Kebutuhan/Keinginan/Tabungan.',
    content: 'Bagi pendapatanmu: 50% kebutuhan, 30% keinginan, 20% tabungan/investasi. Sesuaikan jika pendapatan kecil; intinya prioritas kebutuhan dan menabung konsisten.',
  },
  {
    id: 3,
    title: 'Investasi untuk Pemula: Reksadana',
    excerpt: 'Kenali reksadana pasar uang sebelum ke saham.',
    content: 'Reksadana pasar uang relatif rendah risiko, cocok untuk pemula. Pelajari biaya (fee), horizon investasi, dan profil risiko sebelum mulai.',
  },
];

export default function FiturPage() {
  // Active fitur: null | 'budgeting' | 'target' | 'kalkulator' | 'belajar'
  const [active, setActive] = useState(null);

  // --- Budgeting state ---
  const [income, setIncome] = useState('');
  const [expenseLabel, setExpenseLabel] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenses, setExpenses] = useState([]); // {id, label, amount}

  // --- Target state ---
  const [targetAmount, setTargetAmount] = useState('');
  const [savedAmount, setSavedAmount] = useState('');
  const [targetName, setTargetName] = useState('');
  const [targetResult, setTargetResult] = useState(null);

  // --- Kalkulator state ---
  // Compound interest
  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState(''); // percent
  const [years, setYears] = useState('');
  const [compoundResult, setCompoundResult] = useState(null);

  // Credit card simple (monthly interest percent)
  const [cardBalance, setCardBalance] = useState('');
  const [cardMonthlyRate, setCardMonthlyRate] = useState('');
  const [cardResult, setCardResult] = useState(null);

  // --- Belajar state ---
  const [articles] = useState(initialArticles);
  const [openArticleId, setOpenArticleId] = useState(null);

  // Helpers
  const sumExpenses = () => expenses.reduce((s, e) => s + Number(e.amount || 0), 0);
  const parsedIncome = () => Number(income || 0);

  // Budgeting handlers
  const addExpense = (e) => {
    e.preventDefault();
    const amt = Number(expenseAmount || 0);
    if (!expenseLabel || !amt || amt <= 0) return;
    setExpenses((prev) => [...prev, { id: Date.now(), label: expenseLabel, amount: amt }]);
    setExpenseLabel('');
    setExpenseAmount('');
  };

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((x) => x.id !== id));
  };

  // Target handler
  const calcTarget = (e) => {
    e?.preventDefault();
    const t = Number(targetAmount || 0);
    const s = Number(savedAmount || 0);
    if (t <= 0) return;
    const remaining = Math.max(0, t - s);
    const percent = t > 0 ? Math.min(100, Math.round((s / t) * 100)) : 0;
    setTargetResult({ name: targetName || 'Target', target: t, saved: s, remaining, percent });
  };

  // Compound interest handler (A = P (1 + r/n)^(n*t)) — assume compounded annually (n=1)
  const calcCompound = (e) => {
    e?.preventDefault();
    const P = Number(principal || 0);
    const r = (Number(annualRate || 0) || 0) / 100;
    const t = Number(years || 0);
    if (P <= 0 || t <= 0) return setCompoundResult(null);
    const A = P * Math.pow(1 + r, t);
    setCompoundResult({ P, r, t, A });
  };

  // Credit card simple: show interest per month and total after one month
  const calcCard = (e) => {
    e?.preventDefault();
    const bal = Number(cardBalance || 0);
    const r = (Number(cardMonthlyRate || 0) || 0) / 100;
    if (bal <= 0) return setCardResult(null);
    const interest = bal * r;
    const total = bal + interest;
    setCardResult({ balance: bal, r, interest, total });
  };

  // Renderers for feature content
  const renderBudgeting = () => {
    const totalExpenses = sumExpenses();
    const inc = parsedIncome();
    const remaining = inc - totalExpenses;
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">💰 Budgeting</h3>
          <p className="text-gray-600 mt-1">Catat pemasukan & pengeluaran sederhana — cocok untuk pemula. Masukkan pemasukan bulanan lalu tambahkan pengeluaran.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block text-sm font-medium text-gray-700">Pemasukan (Rp)</label>
            <input inputMode="numeric" value={income} onChange={(e) => setIncome(e.target.value.replace(/[^\d]/g, ''))} className="mt-2 w-full border rounded px-3 py-2" placeholder="contoh: 3000000" aria-label="Pemasukan" />
            <div className="mt-4 text-sm text-gray-600">Total Pemasukan: {currency(Number(income || 0))}</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <form onSubmit={addExpense} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Tambah Pengeluaran</label>
              <input value={expenseLabel} onChange={(e) => setExpenseLabel(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Label pengeluaran (misal: makan)" aria-label="Label pengeluaran" />
              <input value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value.replace(/[^\d]/g, ''))} className="w-full border rounded px-3 py-2" placeholder="Jumlah (Rp)" inputMode="numeric" aria-label="Jumlah pengeluaran" />
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* List expenses */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium mb-2">Daftar Pengeluaran</h4>
          {expenses.length === 0 ? (
            <p className="text-gray-500">Belum ada pengeluaran. Tambah pengeluaran untuk mulai.</p>
          ) : (
            <ul className="space-y-2">
              {expenses.map((ex) => (
                <li key={ex.id} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{ex.label}</div>
                    <div className="text-sm text-gray-500">{currency(Number(ex.amount))}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => removeExpense(ex.id)} className="text-sm text-red-600 hover:underline" aria-label={`Hapus ${ex.label}`}>
                      Hapus
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 border-t pt-3 flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-500">Total Pengeluaran</div>
              <div className="text-lg font-semibold">{currency(totalExpenses)}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Sisa</div>
              <div className={`text-lg font-semibold ${remaining < 0 ? 'text-red-600' : 'text-green-600'}`}>{currency(remaining)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTarget = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">🎯 Target Nabung</h3>
          <p className="text-gray-600 mt-1">Set target, masukkan tabungan saat ini, dan lihat progresmu.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <form onSubmit={calcTarget} className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Nama Target</label>
              <input value={targetName} onChange={(e) => setTargetName(e.target.value)} placeholder="Contoh: Liburan Bali" className="w-full border rounded px-3 py-2" aria-label="Nama target" />

              <label className="text-sm font-medium text-gray-700">Target (Rp)</label>
              <input value={targetAmount} onChange={(e) => setTargetAmount(e.target.value.replace(/[^\d]/g, ''))} placeholder="Contoh: 2000000" inputMode="numeric" className="w-full border rounded px-3 py-2" aria-label="Target jumlah" />

              <label className="text-sm font-medium text-gray-700">Tabungan saat ini (Rp)</label>
              <input value={savedAmount} onChange={(e) => setSavedAmount(e.target.value.replace(/[^\d]/g, ''))} placeholder="Contoh: 500000" inputMode="numeric" className="w-full border rounded px-3 py-2" aria-label="Tabungan saat ini" />

              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                  Lihat Progress
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            {targetResult ? (
              <div>
                <div className="text-sm text-gray-500">Target: {targetResult.name}</div>
                <div className="text-2xl font-semibold mt-2">{currency(targetResult.target)}</div>
                <div className="mt-3">
                  <div className="bg-gray-200 rounded-full h-3 w-full overflow-hidden">
                    <div className="bg-green-500 h-3" style={{ width: `${targetResult.percent}%` }} />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <div>Sudah: {currency(targetResult.saved)}</div>
                    <div>{targetResult.percent}%</div>
                  </div>
                  <div className="mt-3 text-gray-700">Sisa yang harus dikumpulkan: {currency(targetResult.remaining)}</div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Isi form target di sebelah untuk melihat progres.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderKalkulator = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">🧮 Kalkulator</h3>
          <p className="text-gray-600 mt-1">Kalkulator bunga majemuk dan simulasi kartu kredit sederhana.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Compound interest */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium">Bunga Majemuk</h4>
            <form onSubmit={calcCompound} className="space-y-2 mt-2">
              <input value={principal} onChange={(e) => setPrincipal(e.target.value.replace(/[^\d]/g, ''))} placeholder="Modal awal (Rp)" inputMode="numeric" className="w-full border rounded px-3 py-2" />
              <input value={annualRate} onChange={(e) => setAnnualRate(e.target.value.replace(/[^\d.]/g, ''))} placeholder="Suku bunga tahunan (%)" inputMode="decimal" className="w-full border rounded px-3 py-2" />
              <input value={years} onChange={(e) => setYears(e.target.value.replace(/[^\d]/g, ''))} placeholder="Lama (tahun)" inputMode="numeric" className="w-full border rounded px-3 py-2" />
              <div className="flex justify-end">
                <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">
                  Hitung
                </button>
              </div>
            </form>

            {compoundResult && (
              <div className="mt-4 border-t pt-3 text-sm text-gray-700">
                <div>Modal: {currency(compoundResult.P)}</div>
                <div>Bunga tahunan: {(compoundResult.r * 100).toFixed(2)}%</div>
                <div>
                  Total setelah {compoundResult.t} tahun: <strong>{currency(compoundResult.A)}</strong>
                </div>
                <div>Keuntungan: {currency(compoundResult.A - compoundResult.P)}</div>
              </div>
            )}
          </div>

          {/* Credit card */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium">Simulasi Kartu Kredit (per bulan)</h4>
            <form onSubmit={calcCard} className="space-y-2 mt-2">
              <input value={cardBalance} onChange={(e) => setCardBalance(e.target.value.replace(/[^\d]/g, ''))} placeholder="Saldo tertunggak (Rp)" inputMode="numeric" className="w-full border rounded px-3 py-2" />
              <input value={cardMonthlyRate} onChange={(e) => setCardMonthlyRate(e.target.value.replace(/[^\d.]/g, ''))} placeholder="Bunga per bulan (%)" inputMode="decimal" className="w-full border rounded px-3 py-2" />
              <div className="flex justify-end">
                <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">
                  Hitung
                </button>
              </div>
            </form>

            {cardResult && (
              <div className="mt-4 border-t pt-3 text-sm text-gray-700">
                <div>Saldo: {currency(cardResult.balance)}</div>
                <div>Bunga bulan ini: {currency(cardResult.interest)}</div>
                <div>
                  Total setelah bunga: <strong>{currency(cardResult.total)}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section id="hero" className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Atur uangmu, capai targetmu</h1>
            <p className="mt-3 text-gray-600">Mulai dari budgeting, target nabung, sampai kalkulator keuangan sederhana, semua ada di sini.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setActive('budgeting')} className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition">
                Lihat Materi
              </button>
            </div>
          </div>
          <div className="flex-1">
            {/* Illustrative box */}
            <div className=" rounded-2xl p-6 ">
              <img src={heroImg} alt="Ilustrasi keuangan" className="w-full h-64 md:h-full object-cover md:object-contain md:scale-110 md:translate-x-6" />
            </div>
          </div>
        </div>
      </section>

      {/* FITUR GRID */}
      <section id="fitur-grid" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Fitur Utama</h2>
        <p className="text-gray-600 mb-6">Jelajahi fitur di bawah ini dan temukan manfaatnya untuk Anda.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature buttons */}
          <button onClick={() => setActive('budgeting')} className={`bg-white p-6 rounded-2xl shadow hover:shadow-lg text-left transition ${active === 'budgeting' ? 'ring-2 ring-blue-400' : ''}`}>
            <div className="text-4xl mb-2">💰</div>
            <div className="text-lg font-semibold">Budgeting</div>
            <div className="text-sm text-gray-500 mt-1">Catat pemasukan & pengeluaran</div>
          </button>

          <button onClick={() => setActive('target')} className={`bg-white p-6 rounded-2xl shadow hover:shadow-lg text-left transition ${active === 'target' ? 'ring-2 ring-blue-400' : ''}`}>
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-lg font-semibold">Target Nabung</div>
            <div className="text-sm text-gray-500 mt-1">Buat target & lihat progres</div>
          </button>

          <button onClick={() => setActive('kalkulator')} className={`bg-white p-6 rounded-2xl shadow hover:shadow-lg text-left transition ${active === 'kalkulator' ? 'ring-2 ring-blue-400' : ''}`}>
            <div className="text-4xl mb-2">🧮</div>
            <div className="text-lg font-semibold">Kalkulator</div>
            <div className="text-sm text-gray-500 mt-1">Bunga majemuk & simulasi kartu kredit</div>
          </button>
        </div>

        {/* Content area */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow p-6 min-h-[220px]">
            {!active && <p className="text-gray-500 text-center">Pilih fitur di atas untuk mulai mencoba.</p>}

            {active === 'budgeting' && renderBudgeting()}
            {active === 'target' && renderTarget()}
            {active === 'kalkulator' && renderKalkulator()}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
