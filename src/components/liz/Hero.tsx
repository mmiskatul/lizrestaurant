import { motion } from "motion/react";
import { ArrowRight, MapPin, Star } from "lucide-react";

import heroImage from "@/assets/hero-kerala-meal.jpg";
import { restaurant } from "@/data/restaurant";
import { LizLink } from "./LizButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="soft-radial relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="mx-auto grid w-full max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-primary backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
            Kerala • South Indian • Dubai
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="display-xl mt-6 text-foreground"
          >
            Authentic Kerala.
            <span className="block text-primary">Without the premium price.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Homely Kerala flavours, generous portions and the warmth of South India —
            right in the heart of Al Karama.
          </motion.p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
            >
              <LizLink href="#menu" size="lg" className="w-full sm:w-auto">
                Explore Menu
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </LizLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62, ease }}
            >
              <LizLink
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </LizLink>
            </motion.div>
          </div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7"
          >
            {[
              { label: "Dine-in", value: "Al Karama" },
              { label: "Takeaway", value: "Ready fast" },
              { label: "Delivery", value: "No-contact" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="eyebrow text-muted-foreground">{item.label}</dt>
                <dd className="mt-1.5 text-sm font-semibold sm:text-[0.9375rem]">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease }}
            className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] sm:rounded-[2.5rem]"
          >
            <img
              src={heroImage}
              alt="Kerala sadya meal served on a banana leaf with rice, sambar and sides"
              width={1280}
              height={1600}
              fetchPriority="high"
              className="aspect-4/5 w-full object-cover sm:aspect-3/4"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-primary-deep/25 via-transparent to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -28, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="glass-card absolute -left-2 top-8 rounded-2xl px-4 py-3 sm:-left-6 sm:top-14 sm:px-5 sm:py-4"
          >
            <p className="flex items-center gap-1.5 font-display text-2xl font-extrabold sm:text-3xl">
              {restaurant.rating.value}
              <Star className="size-4 fill-gold text-gold" aria-hidden="true" />
            </p>
            <p className="mt-0.5 text-[0.6875rem] font-medium text-muted-foreground">
              Google rating
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28, y: -12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="glass-card absolute -right-2 top-1/3 rounded-2xl px-4 py-3 sm:-right-6 sm:px-5 sm:py-4"
          >
            <p className="font-display text-xl font-extrabold sm:text-2xl">2,800+</p>
            <p className="mt-0.5 text-[0.6875rem] font-medium text-muted-foreground">
              Reviews
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="glass-card absolute -bottom-5 left-6 rounded-2xl px-4 py-3 sm:left-10 sm:px-5 sm:py-4"
          >
            <p className="font-display text-xl font-extrabold text-primary sm:text-2xl">
              {restaurant.priceRange}
            </p>
            <p className="mt-0.5 text-[0.6875rem] font-medium text-muted-foreground">
              Per person
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
