"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  gallery,
  galleryCategories,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/gallery";
import { SectionHeading } from "./SectionHeading";
import { ImageWithFallback } from "./ImageWithFallback";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function GallerySection() {
  const [selectedCat, setSelectedCat] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (selectedCat === "All") return gallery;
    return gallery.filter((img) => img.category === selectedCat);
  }, [selectedCat]);

  const activeImage: GalleryImage | null =
    lightboxIndex !== null ? (filteredImages[lightboxIndex] ?? null) : null;

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const getResolvedSrc = (src: any) => {
    return typeof src === "object" && src && "src" in src
      ? src.src
      : typeof src === "string"
        ? src
        : "";
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 lg:py-36 bg-card border-t border-border"
    >
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visual Experience"
          title={
            <>
              Glimpses of LIZ <br className="hidden sm:inline" />
              <span className="text-primary">Culinary &amp; Dining Atmosphere</span>
            </>
          }
          copy="Take a look at our freshly prepared Kerala dishes, vibrant spices, and welcoming dining space in Al Karama."
          align="center"
        />

        {/* Category Filters */}
        <div className="no-scrollbar mt-10 flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {galleryCategories.map((cat) => {
            const count =
              cat === "All" ? gallery.length : gallery.filter((g) => g.category === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  selectedCat === cat
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Gallery Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.25) }}
                onClick={() => setLightboxIndex(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-muted shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/40 ${
                  item.span || ""
                }`}
              >
                <div className="relative h-full w-full min-h-[220px]">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Caption & Category tag on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-primary/90 px-2.5 py-0.5 text-[0.6875rem] font-semibold text-primary-foreground">
                      {item.category}
                    </span>
                    <p className="mt-1.5 text-xs font-medium leading-snug line-clamp-2">
                      {item.alt}
                    </p>
                  </div>

                  <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    <Maximize2 className="size-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        {activeImage && (
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none text-white shadow-2xl">
            <DialogTitle className="sr-only">{activeImage.alt}</DialogTitle>
            <div className="relative flex flex-col items-center justify-center">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur transition-colors"
                aria-label="Close image preview"
              >
                <X className="size-5" />
              </button>

              {/* Prev / Next buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex size-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-primary hover:text-white backdrop-blur transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex size-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-primary hover:text-white backdrop-blur transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                </>
              )}

              {/* High-res Image Preview */}
              <div className="relative max-h-[75vh] w-full flex items-center justify-center p-2 sm:p-6">
                <img
                  src={getResolvedSrc(activeImage.src)}
                  alt={activeImage.alt}
                  className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
              </div>

              {/* Footer caption */}
              <div className="w-full bg-black/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary px-2.5 py-0.5 font-bold text-primary-foreground">
                    {activeImage.category}
                  </span>
                  <span className="text-white/80">{activeImage.alt}</span>
                </div>
                <span className="text-white/50">
                  {lightboxIndex !== null ? lightboxIndex + 1 : 0} of {filteredImages.length}
                </span>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
