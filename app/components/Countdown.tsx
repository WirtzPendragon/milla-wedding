"use client";

import { useEffect, useState } from "react";

// 1. Tambahkan Interface agar bisa menerima data 'target'
interface CountdownProps {
  target?: string;
}

export default function Countdown({ target = "2026-04-04T08:00:00" }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    // 2. Gunakan target dari props (misal: "2026-04-03T08:00:00")
    const targetTime = new Date(target).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 });
        return;
      }

      const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
      const jam = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const menit = Math.floor((distance / (1000 * 60)) % 60);
      const detik = Math.floor((distance / 1000) % 60);

      setTimeLeft({ hari, jam, menit, detik });
    }, 1000);

    return () => clearInterval(interval);
  }, [target]); // 3. Re-run kalau target berubah dari URL

  return (
    <div className="flex justify-center gap-4">
      <TimeBox value={timeLeft.hari} label="Hari" />
      <TimeBox value={timeLeft.jam} label="Jam" />
      <TimeBox value={timeLeft.menit} label="Menit" />
      <TimeBox value={timeLeft.detik} label="Detik" />
    </div>
  );
}

function TimeBox({ value, label }: any) {
  return (
    <div className="bg-[#870D24] w-20 h-16 rounded-2xl flex flex-col justify-center items-center text-white shadow">
      <p className="font-bold">{String(value).padStart(2, "0")}</p>
      <p className="text-xs">{label}</p>
    </div>
  );
}