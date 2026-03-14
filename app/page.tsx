"use client";

import Image from "next/image";
import { Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Wahyu from "../public/wahyu.jpg";
import Milla from "../public/milla.jpg";
import IMG1 from "../public/img_1.jpg";
import IMG3 from "../public/img_3.jpg";
import IMG4 from "../public/img_4.jpg";
import Flower from "../public/flower-2.avif";
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Countdown from "../app/components/Countdown";
import Gallery from "./components/Gallery";
import Wishes from "./components/Wishes";
import MusicPlayer from "./components/MusicPlayer";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
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
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, show };
}

/* ================= REVEAL ================= */
function Reveal({ children, direction = "bottom", className = "" }: any) {
  const { ref, show } = useInView();
  return (
    <div
      ref={ref}
      className={`reveal from-${direction} ${show ? "show" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ================= MAIN CONTENT COMPONENT ================= */
function InvitationContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
  setMounted(true);

  if (!isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";

    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  }
}, [isOpen]);

if (!mounted) return null;
  return (
    
    <main>
      <audio ref={audioRef} loop>
  <source src="/music/wedding.mp3" type="audio/mpeg" />
</audio>
      {/* ================= COVER SECTION ================= */}
      {!isOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-between py-20 text-white transition-all duration-700">
          <div className="absolute inset-0 -z-10">
            <Image
              src={IMG3}
              alt="Cover"
              fill
              priority
              className="object-cover brightness-[0.6]"
            />
          </div>

          <div className="text-center space-y-2 animate-fadeIn">
            <p
              className={`${montserrat.className} text-xs tracking-[0.3em] uppercase`}
            >
              The Wedding of
            </p>
            <h1 className={`${greatVibes.className} text-6xl md:text-7xl`}>
              Wahyu & Milla
            </h1>
          </div>

          <div className="text-center space-y-6 px-6 animate-fadeInUp">
            <div className="space-y-1">
              <p className={`${montserrat.className} text-xs italic`}>
                Kepada Yth. Bapak/Ibu/Saudara/i
              </p>
              <h2
                className={`${playfair.className} text-2xl font-bold tracking-wide uppercase`}
              >
                {guestName}
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-white text-black px-10 py-3 rounded-full flex items-center gap-3 mx-auto font-semibold hover:bg-[#870D24] hover:text-white transition-all duration-500 shadow-2xl active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <polyline points="3 7 12 13 21 7"></polyline>
              </svg>
              Buka Undangan
            </button>
          </div>
        </div>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <audio autoPlay loop>
  <source src="../public/music/wedding.mp3" type="audio/mpeg" />
</audio>
      <div className={`${isOpen ? "block animate-fadeIn" : "hidden"}`}>
        {/* HERO SECTION */}
        <div className="h-screen w-screen grid items-end overflow-hidden">
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
              <p className={`${montserrat.className} text-xs`}>
                Pawiwahan & Mepandes
              </p>
              <div className="flex-1 h-[1px] bg-white"></div>
            </div>
            <p className={`${greatVibes.className} text-4xl my-2`}>
              Wahyu & Milla
            </p>
            <p className={`${montserrat.className} text-xs`}>
              Sabtu, 04 April 2026
            </p>
          </div>

          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full rotate-180 relative"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28 70.36-4.37,136.33-33.31,206.8-37.5 C438.64,32.43,512.34,53.67,583,72 c69.27,17.95,138.3,24.88,209.4,13.08 36.15-6,69.85-17.84,104.45-29.34 C989.49,25,1113-14.29,1200,5.19V0Z"
              opacity=".25"
              fill="#FFFFFF"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05 99.41,111.27,165,111,224.58,91.58 c31.15-10.15,60.09-26.07,89.67-39.8 40.92-19,84.73-46,130.83-49.67 36.26-2.85,70.9,9.42,98.6,31.56 31.77,25.39,62.32,62,103.63,73 40.44,10.79,81.35-6.69,119.13-24.28 s75.16-39,116.92-43.05 c59.73-5.85,113.28,22.88,168.9,38.84 30.2,8.66,59,6.17,87.09-7.5 22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="#FFFFFF"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57 518.83,35,560.06,22.71,603.9,16.91 c59-7.86,117.34,6.42,172.64,24.44 49.27,16,98.87,33.82,148.79,35.55 36.15,1.25,71.32-8.18,106-17.5 37.76-10.14,75.63-22.23,116.92-28.75 32.17-5,63.35-3.47,91.75,5.63V0Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>

        {/* CONTENT AREA */}
        <div className="w-screen min-h-screen relative overflow-hidden bg-white pb-20">
          <Reveal direction="left" className="absolute">
            <Image
              src={Flower}
              alt="flower"
              className="w-48 opacity-15 rotate-90"
            />
          </Reveal>

          <div className="py-20 text-center px-4">
            <div className="border-2 rounded-[40px] p-1 border-[#870D24]">
              <div className="border-2 rounded-[36px] p-7 border-[#870D24]">
                <Reveal>
                  <p className={`${montserrat.className} text-xs`}>
                    Wahai pasangan suami-istri, semoga kalian tetap bersatu dan
                    tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh
                    kebahagiaan.
                  </p>
                  <p className={`${montserrat.className} text-xs mt-10`}>
                    Ihaiva stam ma vi yaustam, visvam ayur vyasnutam.
                  </p>
                  <p
                    className={`${montserrat.className} text-xs font-bold mt-2 italic text-[#4A0512]`}
                  >
                    {" "}
                    (Rg Veda X.85.42){" "}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <Reveal>
            <p className={`${greatVibes.className} text-center text-4xl`}>
              Om Swastyastu
            </p>
            <p
              className={`${montserrat.className} text-center text-xs leading-5 mt-4 px-6`}
            >
              Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan
              Yang Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada
              Upacara Manusa Yadnya Pawiwahan (Pernikahan) Putra dan Putri kami
            </p>
          </Reveal>

          {/* BRIDE & GROOM SECTION */}
          <div className="mt-12 space-y-20 relative">
            <Reveal direction="left" className="absolute right-0 top-20">
              <Image
                src={Flower}
                alt="flower"
                className="w-48 opacity-15 ml-68"
              />
            </Reveal>

            {/* Wahyu Pawiwahan */}
            <Reveal>
              <Image
                src={Wahyu}
                alt="Wahyu"
                className="w-61 h-91 rounded-[40px] mx-auto border-2 shadow-xl border-[#870D24] object-cover"
              />
              <p className={`${playfair.className} text-center mt-12 text-2xl`}>
                I Kadek Wahyu Suseyawan
              </p>
              <p
                className={`${montserrat.className} text-center my-6 text-xs italic`}
              >
                Putra kedua dari pasangan
              </p>
              <p
                className={`${montserrat.className} text-center font-bold text-sm`}
              >
                I Wayan Suirta & Ni Ketut Sulastini
              </p>
              <p
                className={`${montserrat.className} text-center mt-6 text-[10px]`}
              >
                Banjar Manik Gunung, Desa Selanbawak, Marga
              </p>
            </Reveal>


            {/* Milla Pawiwahan */}
            <Reveal>
              <div className="relative">
            <Reveal direction="right" className="absolute left-0 bottom-1/2">
              <Image
                className="w-48 -z-10 opacity-15 rotate-180 mt-44 -translate-x-16"
                src={Flower}
                alt="flower"
              />
            </Reveal>
              <Image
                src={Milla}
                alt="Milla"
                className="w-61 h-91 rounded-[40px] mx-auto border-2 shadow-xl border-[#870D24] object-cover relative"
              />
              <p className={`${playfair.className} text-center mt-12 text-2xl`}>
                Putu Milla Kristina Vanyeri, S.M.
              </p>
              <p
                className={`${montserrat.className} text-center my-6 text-xs italic`}
              >
                Putri pertama dari pasangan
              </p>
              <p
                className={`${montserrat.className} text-center font-bold text-sm`}
              >
                Wayan Budiarnaya & Ni Putu Miniarti
              </p>
              </div>
            </Reveal>
          </div>
              


          {/* ================= MEPANDES SECTION ================= */}
          <div className="mt-4 pb-20 relative">
            <Reveal>
              <p className={`${playfair.className} text-center text-2xl pt-20`}>
                Yang Mepandes / Potong Gigi
              </p>
            </Reveal>

            <Reveal direction="left" className="absolute right-0 mt-32">
              <Image
                src={Flower}
                alt="flower"
                className="w-48 opacity-15 ml-68"
              />
            </Reveal>

            <Reveal>
              <Image
                src={Wahyu}
                alt="Wahyu"
                className="w-61 h-91 rounded-[40px] mx-auto mt-12 border-2 shadow-xl border-[#870D24] object-cover"
              />
              <p className={`${playfair.className} text-center mt-12 text-2xl`}>
                I Kadek Wahyu Suseyawan
              </p>
            </Reveal>

            <Reveal direction="right" className="absolute left-0 mt-2">
              <Image
                className="w-48 opacity-15 rotate-180 -translate-x-16"
                src={Flower}
                alt="flower"
              />
            </Reveal>

            <Reveal>
              <p
                className={`${montserrat.className} text-center mt-6 text-[10px]`}
              >
                Banjar Dinas Asah Panji, Desa Wanagiri, Sukasada
              </p>
            </Reveal>
          </div>

          {/* ================= DETAIL ACARA ================= */}
          <div className="w-screen bg-[#4A0512] mt-20 pb-20">
            <Reveal>
              <p
                className={`${greatVibes.className} text-4xl text-white text-center pt-12`}
              >
                Detail Acara
              </p>
            </Reveal>
            <div className="mt-8 px-8">
              <Reveal>
                <Image
                  src={IMG4}
                  alt="Detail"
                  className="rounded-[40px] border-white border-2 shadow-2xl"
                />
              </Reveal>

              <div className="relative">
                {/* Gradient Spacer */}
                <div className="w-full h-40 bg-gradient-to-t from-white via-white/70 to-transparent -mt-20 -translate-y-20"></div>

                <div className="bg-white w-full pb-10 rounded-b-[40px] text-center px-4 -mt-20">
                  <Reveal>
                    <p className={`${greatVibes.className} text-4xl pt-12`}>
                      Pawiwahan
                    </p>
                    <p className={`${montserrat.className} text-base pt-12`}>
                      Sabtu, 04 April 2026
                    </p>

                    <div className="flex items-center gap-3 px-10 mt-4">
                      <div className="flex-1 h-[1px] bg-black"></div>
                      <p className={`${montserrat.className} text-xs`}>
                        BERTEMPAT DI
                      </p>
                      <div className="flex-1 h-[1px] bg-black"></div>
                    </div>

                    <p
                      className={`${montserrat.className} text-center text-xs mx-5 mt-4`}
                    >
                      Banjar Manik Gunung, Desa Selanbawak, Kec. Marga, Kab.
                      Tabanan
                    </p>

                    <div className="flex justify-center mt-8">
                      <Link
                        href="https://maps.google.com"
                        className={`${montserrat.className} bg-[#870D24] flex gap-2 rounded-[40px] text-sm py-3 px-6 text-white font-semibold`}
                      >
                        Lokasi Acara
                      </Link>
                    </div>

                    <div className="m-5 pt-8">
                      <Countdown />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          {/* GALLERY & WISHES */}
          <div className="bg-white">
            <Reveal>
              <Gallery />
            </Reveal>
            <Reveal>
              <Wishes />
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ================= MAIN EXPORT ================= */
export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center font-bold">
          LOADING...
        </div>
      }
    >
      <InvitationContent />
    </Suspense>
  );
}
