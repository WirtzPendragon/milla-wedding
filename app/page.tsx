"use client";

import Image from "next/image";
import { Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Max from "../public/max.jpg";
import Wahyu from "../public/wahyu.jpg";
import Milla from "../public/milla.jpg";
import IMG1 from "../public/img_1.jpg";
import IMG2 from "../public/img_2.jpg";
import IMG3 from "../public/img_3.jpg";
import Flower from "../public/flower.png";
import Marmer from "../public/marmer.jpg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
      { threshold: 0.6 },
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
      <div className="h-screen w-screen grid items-end">
        <div className="w-screen h-screen absolute">
          <Image
            src={IMG3}
            alt="hero"
            className="w-screen h-screen object-cover"
          />
        </div>

        <div className="relative text-white text-center top-60">
          <div className="flex items-center gap-3 px-22">
            <div className="flex-1 h-[1px] bg-white"></div>
            <p className={`${montserrat.className} text-xs`}>PAWIWAHAN</p>
            <div className="flex-1 h-[1px] bg-white"></div>
          </div>

          <p className={`${greatVibes.className} text-4xl my-2`}>
            Wahyu & Milla
          </p>

          <div className="flex items-center gap-3 px-22 mt-4">
            <div className="flex-1 h-[1px] bg-white"></div>
            <p className={`${montserrat.className} text-xs`}>MEPANDES</p>
            <div className="flex-1 h-[1px] bg-white"></div>
          </div>

          <p className={`${greatVibes.className} text-4xl my-2`}>Wahyu</p>

          <p className={`${montserrat.className} text-xs`}>
            Jumat, 30 Maret 2026
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
          <path d="M0,0V5.63C149.93,59,314.09..." fill="#FFFFFF"></path>
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="w-screen min-h-screen relative overflow-hidden">
        {/* 🌸 LEFT 1 */}
        <div
          ref={left1.ref}
          className={`absolute reveal from-left ${left1.show ? "show" : ""}`}
        >
          <Image src={Flower} alt="flower" className="w-48 opacity-15" />
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
          className={`absolute reveal from-bottom ${left2.show ? "show" : ""}`}
        >
          <Image
            src={Flower}
            alt="flower"
            className="w-48 opacity-15 mt-32 ml-60"
          />
        </div>

        <Image
          src={Wahyu}
          alt="foto"
          className="w-61 h-91 rounded-full mx-auto mt-12 border-r-4 border-amber-400 relative"
        />

        <p className={`${playfair.className} text-center mt-12 text-2xl`}>
          I Kadek Wahyu Suseyawan
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
          Jalan Kekeran Manik Gunung, Banjar Manik Gunung, Desa Selanbawak,
          Kecamatan Marga, Kabupaten Tabanan, Provinsi Bali
        </p>

        {/* 🌸 RIGHT 1 */}
        <div
          ref={right1.ref}
          className={`absolute reveal from-right ${right1.show ? "show" : ""}`}
        >
          <Image
            className="w-48 opacity-15 mt-44 rotate-180 -translate-x-10"
            src={Flower}
            alt="flower"
          />
        </div>

        <Image
          src={Milla}
          alt="foto"
          className="w-61 h-91 rounded-full mx-auto mt-24 border-r-4 border-amber-400 relative"
        />

        <p className={`${playfair.className} text-center mt-12 text-2xl`}>
          Putu Milla Kristina Vanyeri, S.M.
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
          Jalan Tempek Kaja Kangin, Banjar Asah Panji, Desa Wanagiri, Kecamatan
          Sukasada, Kabupaten Buleleng, Provinsi Bali
        </p>

        {/* 🌸 RIGHT 2 */}
        <div
          ref={right2.ref}
          className={`absolute reveal from-top ${right2.show ? "show" : ""}`}
        >
          <Image
            src={Flower}
            alt="flower"
            className="w-48 opacity-15 rotate-180 ml-60"
          />
        </div>
        <div className={`py-20 relative w-full h-full text-center px-4`}>
          <div className="border-2 rounded-[40px] p-1 border-amber-400">
            <div className="border-2 rounded-[36px] p-7 border-amber-400">
              <p className={`${montserrat.className} text-xs`}>
                Wahai pasangan suami-istri, semoga kalian tetap bersatu dan
                tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh
                kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama
                seluruh keturunanmu.
              </p>
              <p className={`${montserrat.className} text-xs mt-10`}>
                Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau
                putrair naptrbhih, modamanau sve grhe.
              </p>
              <p
                className={`${montserrat.className} text-xs font-bold mt-2 italic`}
              >
                (Rg Veda X.85.42)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-[#FBD7A0]">
        <p className={`${greatVibes.className} text-4xl text-center pt-12`}>
          Detail Acara
        </p>
        <div className="mt-8 rounded-full px-8">
          <Image src={IMG1} alt="foto" className="rounded-[40px]" />
          <div
            className=" bottom-0 left-0 w-full h-40 
              bg-linear-to-t from-white via-white/70 to-transparent -translate-y-60"
          ></div>
          <div className="bg-white w-full -translate-y-60 rounded-b-[40px]">
            <p
              className={`${greatVibes.className} text-4xl text-center pt-12 `}
            >
              Pawiwahan
            </p>
            <p
              className={`${montserrat.className} text-base text-center pt-12 `}
            >
              Jumat, 30 April 2026
            </p>
            <div className="flex items-center gap-3 px-22 mt-4">
              <div className="flex-1 h-[1px] bg-black"></div>
              <p className={`${montserrat.className} text-xs`}>BERTEMPAT DI</p>
              <div className="flex-1 h-[1px] bg-black"></div>
            </div>
            <p className={`${montserrat.className} text-center text-xs mx-5`}>
              Banjar Manik Gunung, Desa Selanbawak, Kec. Marga, Kab. Tabanan
            </p>
            <div className="flex justify-center items-center w-full mt-8 ">
              <Link
                href="https://maps.app.goo.gl/Bk51oVq2hhG4h2ig6?g_st=iw"
                className={`${montserrat.className} mx-auto bg-amber-400 flex mb-4 items-center justify-center gap-2 rounded-full text-sm py-3 px-6 text-white font-semibold`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 56 56"><path fill="#FFF" d="M32.781 52.55c1.688 0 2.883-1.452 3.75-3.702L51.883 8.746c.422-1.078.68-2.039.68-2.836c0-1.523-.961-2.46-2.485-2.46c-.797 0-1.758.234-2.836.656L6.93 19.55c-1.97.75-3.493 1.945-3.493 3.656c0 2.156 1.641 2.883 3.891 3.563l16.922 4.968l4.922 16.711c.703 2.367 1.43 4.102 3.61 4.102m-7.476-24.374L9.133 23.23c-.375-.118-.492-.212-.492-.376s.093-.28.445-.421l31.687-12c1.875-.703 3.68-1.641 5.414-2.438c-1.546 1.266-3.468 2.766-4.757 4.055Zm7.851 19.219c-.187 0-.281-.165-.398-.54l-4.946-16.171l16.125-16.125c1.266-1.266 2.836-3.235 4.079-4.828c-.797 1.78-1.735 3.585-2.461 5.484l-12 31.687c-.141.352-.235.492-.399.492"/></svg>
                Lokasi Acara
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
