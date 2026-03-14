"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import IMG12 from "../../public/gallery/img_12.jpg";

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

const allImages = ["/gallery/img_12.jpg", ...images];

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + allImages.length) % allImages.length);
    }
  };

  // swipe mobile
  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 70) nextImage();
    if (touchEnd - touchStart > 70) prevImage();
  };

  // lock scroll
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIdx]);

  if (!mounted) return null;

  const Modal = () => (
    <div
      className="fixed top-0 left-0 w-screen h-dvh z-[99999] bg-black flex items-center justify-center"
      onClick={() => setSelectedIdx(null)}
    >
      {/* close */}
      <button
        className="absolute top-6 right-6 text-white text-3xl z-10"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedIdx(null);
        }}
      >
        ✕
      </button>

      {/* prev */}
      <button
        className="absolute left-4 text-white text-5xl z-10"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        ‹
      </button>

      {/* image */}
      <div
        className="relative w-full max-w-[900px] h-[75dvh]"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={allImages[selectedIdx!]}
          alt="preview"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* next */}
      <button
        className="absolute right-4 text-white text-5xl z-10"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        ›
      </button>

      {/* counter */}
      <div className="absolute bottom-8 text-white text-xs tracking-widest">
        {selectedIdx! + 1} / {allImages.length}
      </div>
    </div>
  );

  return (
    <section className="w-full px-4 py-16">
      <p className={`${greatVibes.className} text-center text-4xl mb-10`}>
        Our Gallery
      </p>

      {/* gambar landscape */}
      <div
        className="mb-3 overflow-hidden rounded-3xl cursor-pointer"
        onClick={() => setSelectedIdx(0)}
      >
        <Image
          src={IMG12}
          alt="gallery"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* grid */}
      <div className="columns-2 gap-3 space-y-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl cursor-pointer"
            onClick={() => setSelectedIdx(i + 1)}
          >
            <Image
              src={src}
              alt="gallery"
              width={500}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* modal via portal */}
      {selectedIdx !== null && createPortal(<Modal />, document.body)}
    </section>
  );
}