import { Navbar } from "@/components/liz/Navbar";
import { Hero } from "@/components/liz/Hero";
import { Stats } from "@/components/liz/Stats";
import { MenuSection } from "@/components/liz/MenuSection";
import { StorySection } from "@/components/liz/StorySection";
import { ReviewsSection } from "@/components/liz/ReviewsSection";
import { GallerySection } from "@/components/liz/GallerySection";
import { LocationHoursSection } from "@/components/liz/LocationHoursSection";
import { Footer } from "@/components/liz/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <MenuSection />
        <StorySection />
        <ReviewsSection />
        <GallerySection />
        <LocationHoursSection />
      </main>
      <Footer />
    </div>
  );
}
