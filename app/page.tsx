"use client";

import Image from "next/image";
import { Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Max from "../public/max.jpg";
import Flower from "../public/flower.png";
import { useEffect, useRef, useState } from "react";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/* ================= HOOK ================= */
function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, show };
}

/* ================= COMPONENT ================= */
export default function Home() {
  const left1 = useInView();
  const left2 = useInView();
  const right1 = useInView();
  const right2 = useInView();

  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="h-screen w-screen bg-black grid items-end">
        <div className="w-full h-full absolute">
          <Image src={Max} alt="hero" className="w-full h-full object-cover" />
        </div>

        <div className="relative text-white text-center top-60">
          <div className="flex items-center gap-3 px-22">
            <div className="flex-1 h-[1px] bg-white"></div>
            <p className={`${montserrat.className} text-xs`}>
              PAWIWAHAN
            </p>
            <div className="flex-1 h-[1px] bg-white"></div>
          </div>

          <p className={`${greatVibes.className} text-4xl my-2`}>
            Wahyu & Milla
          </p>

          <p className={`${montserrat.className} text-xs`}>
            Jumat, 30 April 2026
          </p>
        </div>

        {/* WAVE */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full rotate-180 relative"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28..."
            opacity=".25"
            fill="#FFFFFF"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86..."
            opacity=".5"
            fill="#FFFFFF"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09..."
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="w-screen min-h-screen relative overflow-hidden">
        
        {/* 🌸 LEFT 1 */}
        <div
          ref={left1.ref}
          className={`absolute reveal from-left ${
            left1.show ? "show" : ""
          }`}
        >
          <Image
            src={Flower}
            alt="flower"
            className="w-48 opacity-15"
          />
        </div>

        <p
          className={`${greatVibes.className} text-center text-4xl pt-20 relative`}
        >
          Om Swastyastu
        </p>

        <p
          className={`${montserrat.className} text-center text-xs leading-5 mt-4`}
        >
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara
          Manusa Yadnya <br /> Pawiwahan (Pernikahan) Putra dan Putri kami
        </p>

        {/* 🌸 LEFT 2 */}
        <div
          ref={left2.ref}
          className={`absolute reveal from-bottom ${
            left2.show ? "show" : ""
          }`}
        >
          <Image
            src={Flower}
            alt="flower"
            className="w-48 opacity-15 mt-32 ml-60"
          />
        </div>

        <Image
          src={Max}
          alt="foto"
          className="w-61 h-91 rounded-full mx-auto mt-12 border-r-4 border-yellow-500 relative"
        />

        <p className={`${playfair.className} text-center mt-12 text-2xl`}>
          Lorem ipsum dolor sit amet
        </p>

        <p
          className={`${montserrat.className} text-center my-6 text-xs italic`}
        >
          Putra Pertama dari pasangan
        </p>

        <p className={`${montserrat.className} text-center font-bold text-sm`}>
          I Made John Doe & Ni Putu Jane Doe
        </p>

        <p className={`${montserrat.className} text-center mt-6 text-[10px]`}>
          Banjar Lorem, Desa Lorem, Kec. Lorem, Kab. Lorem
        </p>

        {/* 🌸 RIGHT 1 */}
        <div
          ref={right1.ref}
          className={`absolute reveal from-right ${
            right1.show ? "show" : ""
          }`}
        >
          <Image
            className="w-48 opacity-15 mt-44 rotate-180 -translate-x-10"
            src={Flower}
            alt="flower"
          />
        </div>

        <Image
          src={Max}
          alt="foto"
          className="w-61 h-91 rounded-full mx-auto mt-24 border-r-4 border-yellow-500 relative"
        />

        <p className={`${playfair.className} text-center mt-12 text-2xl`}>
          Lorem ipsum dolor sit amet
        </p>

        <p
          className={`${montserrat.className} text-center my-6 text-xs italic`}
        >
          Putra Pertama dari pasangan
        </p>

        <p className={`${montserrat.className} text-center font-bold text-sm`}>
          I Made John Doe & Ni Putu Jane Doe
        </p>

        <p className={`${montserrat.className} text-center mt-6 text-[10px]`}>
          Banjar Lorem, Desa Lorem, Kec. Lorem, Kab. Lorem
        </p>

        {/* 🌸 RIGHT 2 */}
        <div
          ref={right2.ref}
          className={`absolute reveal from-top ${
            right2.show ? "show" : ""
          }`}
        >
          <Image
            src={Flower}
            alt="flower"
            className="w-48 opacity-15 rotate-180 ml-60"
          />
        </div>
      </div>
    </div>
  );
}