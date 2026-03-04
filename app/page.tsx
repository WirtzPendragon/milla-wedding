import Image from "next/image";
import { Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Max from "../public/max.jpg";
import Flower from "../public/flower.png";

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

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen bg-black grid items-end">
        <div className="w-full h-full absolute">
          <Image src={Max} alt="hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative text-white text-center top-60">
          <div className="flex items-center gap-3 px-22">
            <div className="flex-1 h-[1px] bg-white"></div>
            <p className={`${montserrat.className} text-xs`}>PAWIWAHAN</p>
            <div className="flex-1 h-[1px] bg-white"></div>
          </div>
          <p className={`${greatVibes.className} antialiased text-4xl my-2`}>
            Wahyu & Milla
          </p>
          <p className={`${montserrat.className} text-xs`}>
            Jumat, 30 April 2026
          </p>
        </div>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full rotate-180 relative"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#FFFFFF"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#FFFFFF"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>

      <div className="w-screen h-screen">
        <Image src={Flower} alt="flower" className="w-48 opacity-15 absolute" />
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

        <div></div>
        <Image
          src={Flower}
          alt="flower"
          className="w-48 opacity-15 absolute mt-32 ml-60"
        />
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

        <Image
          src={Flower}
          alt="flower"
          className="w-48 opacity-15 absolute mt-44 rotate-180 -translate-x-10"
        />
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
        <Image
          src={Flower}
          alt="flower"
          className="w-48 opacity-15 absolute rotate-180 ml-60"
        />
      </div>

      <div>
        
      </div>
    </div>
  );
}
