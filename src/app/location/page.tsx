import type { Metadata } from "next";
import { Navigation, Phone, Train, Car, Bike, ArrowUpRight } from "lucide-react";

import locationHeroImage from "@/assets/hero-location.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { LocationHoursSection } from "@/components/liz/LocationHoursSection";
import { LizLink } from "@/components/liz/LizButton";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Location & Opening Hours",
  description:
    "Visit LIZ Restaurant at 17 9B St, Al Karama, Dubai. Open daily from 8:00 AM to 11:30 PM for authentic Kerala dine-in, takeaway, and delivery across Dubai.",
};

const transitGuides = [
  {
    icon: Train,
    title: "By Dubai Metro",
    description:
      "A short walk from ADCB Metro Station (Red Line) and Burjuman Station (Red/Green Lines interchange). Very convenient from anywhere in Dubai.",
  },
  {
    icon: Car,
    title: "Parking & Driving",
    description:
      "Easily accessible via Kuwait Street and Sheikh Rashid Road. Plentiful RTA paid street parking available right in front and along 9B Street.",
  },
  {
    icon: Bike,
    title: "Delivery Coverage",
    description:
      "Hot and fresh delivery across Al Karama, Bur Dubai, Oud Metha, Trade Centre, Satwa, Mankhool, and Zabeel through Talabat.",
  },
];

export default function LocationPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHeader
          eyebrow="Visit &amp; Connect"
          title={
            <>
              Find Us in the Vibrant <br />
              <span className="text-gold">Heart of Al Karama</span>
            </>
          }
          description="Step into our welcoming dining room or grab a quick takeaway in one of Dubai’s most beloved food hubs."
          imageSrc={locationHeroImage}
          imageAlt="LIZ Restaurant storefront exterior in Al Karama Dubai with warm evening ambient lighting"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Location & Hours" }]}
        >
          <LizLink
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
          >
            Open in Google Maps
            <Navigation className="size-4" />
          </LizLink>
          <LizLink href={restaurant.phoneHref} variant="ghostOnDark" size="md">
            <Phone className="size-4" />
            Call Front Desk ({restaurant.phone})
          </LizLink>
        </PageHeader>

        {/* Transit & Access Guide */}
        <section className="py-16 sm:py-20 bg-card border-b border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="eyebrow text-primary">Easy Accessibility</p>
              <h2 className="display-md mt-2 text-foreground">Getting to LIZ Restaurant</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Located centrally in Al Karama, Dubai with smooth transit links and hassle-free
                parking.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {transitGuides.map((guide, i) => (
                <ScrollReveal
                  key={guide.title}
                  delay={i * 0.1}
                  className="rounded-3xl border border-border bg-background p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <guide.icon className="size-6" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mt-4">
                      {guide.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {guide.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Hours Section Component */}
        <LocationHoursSection />

        {/* Online Ordering CTA */}
        <section className="py-16 bg-primary-deep text-primary-foreground">
          <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Prefer Homely Meals Delivered?
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Get steaming hot Kerala meals, crispy dosas, and flavorful curries delivered right to
              your home or office.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
              >
                Order on {restaurant.orderPlatform}
                <ArrowUpRight className="size-4" />
              </LizLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
