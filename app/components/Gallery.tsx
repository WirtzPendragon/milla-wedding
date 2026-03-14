"use client";

import Image from "next/image";
import { Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import IMG12 from "../../public/gallery/img_12.jpg"

const images = [
  "/gallery/img_1.jpg",
  "/gallery/img_2.jpg",
  "/gallery/img_3.jpg",
  "/gallery/img_4.jpg",
  "/gallery/img_5.jpg",
  "/gallery/img_6.jpg",
  "/gallery/img_7.jpg",
  "/gallery/img_8.jpg",
  "/gallery/img_9.jpg",
  "/gallery/img_10.jpg",
  "/gallery/img_11.jpg",
];

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Gallery() {
  return (
    <section className="w-full px-4 py-16">

      <p className={`${greatVibes.className} text-center text-4xl mb-10 font-serif`}>
        Our Gallery
      </p>

      <div className="mb-3 overflow-hidden rounded-3xl border-white border-2">
        <Image
          src={IMG12}
          alt="gallery"
          className="w-full h-auto object-cover hover:scale-105 transition duration-500"
        />
        </div>

        <div className="columns-2 gap-3 space-y-3">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-3xl border-white border-2">
            <Image
              src={src}
              alt="gallery"
              width={500}
              height={700}
              className="w-full h-auto object-cover hover:scale-105 transition duration-50"
            />
          </div>
        ))}
      </div>


    </section>
  );
}