"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Montserrat, Great_Vibes } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function Wishes() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    getComments();
  }, []);

  async function getComments() {
    const { data } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setComments(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("comments").insert([
      { name, message, attendance },
    ]);

    if (error) {
      alert("Gagal mengirim pesan: " + error.message);
    } else {
      setName("");
      setMessage("");
      setAttendance("");
      getComments();
    }
    setLoading(false);
  }

  if (!mounted) return null;

  return (
    <div className={`max-w-md mx-auto px-4 pb-20 ${montserrat.className}`}>
      <div className="bg-white/80 backdrop-blur-sm rounded-[30px] shadow-xl border border-gray-100 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-[#4A0512] p-6 text-center">
          <h2 className={`${greatVibes.className} text-3xl text-white mb-1`}>
            Wishes & Prayers
          </h2>
          <p className="text-white/80 text-xs uppercase tracking-widest">
            {comments.length} Ucapan Doa
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border-b border-gray-200 focus:border-[#4A0512] outline-none py-2 transition-all text-[#4A0512] bg-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <textarea
              placeholder="Berikan ucapan manis & doa restu..."
              className="w-full border border-gray-200 focus:border-[#4A0512] text-[#4A0512] outline-none p-3 rounded-2xl transition-all bg-gray-50/50"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <select
              className="w-full border-b border-gray-200 focus:border-[#4A0512] outline-none py-2 transition-all bg-transparent text-gray-600 cursor-pointer"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              required
            >
              <option value="" disabled>Konfirmasi Kehadiran</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
              <option value="Ragu Ragu">Ragu Ragu</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4A0512] hover:bg-[#4A0512] text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md active:scale-95 disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Ucapan"}
          </button>
        </form>

        {/* Comments List Section */}
        <div className="max-h-[400px] overflow-y-auto px-6 pb-6 space-y-4">
          <div className="w-10 h-1 bg-gray-200 mx-auto mb-4 rounded-full"></div>
          
          {comments.map((c) => (
            <div key={c.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm animate-fadeIn">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-[#4A0512] text-sm uppercase">{c.name}</p>
                <span className={`text-[10px] px-2 py-1 rounded-full ${
                  c.attendance === 'Hadir' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {c.attendance}
                </span>
              </div>
              <p className="text-gray-700 text-sm italic leading-relaxed">
                "{c.message}"
              </p>
              <p className="text-[10px] text-gray-400 mt-2 text-right">
                {new Date(c.created_at).toLocaleDateString('id-ID')}
              </p>
            </div>
          ))}

          {comments.length === 0 && (
            <p className="text-center text-gray-400 text-sm py-10">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}