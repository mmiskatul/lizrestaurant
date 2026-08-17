"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Sparkles, Utensils, ArrowUpRight, Check, Info } from "lucide-react";

import { menu, menuCategories, type MenuItem, formatPrice } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { ImageWithFallback } from "./ImageWithFallback";
import { LizButton, LizLink } from "./LizButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDish, setActiveDish] = useState<MenuItem | null>(null);

  const filteredMenu = useMemo(() => {
    return menu.filter((item) => {
      const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchDiet = dietFilter === "all" || item.diet === dietFilter;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchDiet && matchSearch;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="relative py-20 sm:py-28 lg:py-36 bg-background">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Authentic Flavours"
          title={
            <>
              Traditional Kerala &amp; <br className="hidden sm:inline" />
              <span className="text-primary">South Indian Delicacies</span>
            </>
          }
          copy="Prepared fresh daily with traditional Kerala spices, cold-pressed coconut oil, and generations of culinary mastery in Al Karama."
          align="center"
        />

        {/* Filter and Search Controls */}
        <div className="mt-12 space-y-6">
          {/* Diet and Search row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 p-1.5 bg-card border border-border rounded-full shadow-sm w-full sm:w-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => setDietFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Dishes
              </button>
              <button
                type="button"
                onClick={() => setDietFilter("veg")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === "veg"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="size-2 rounded-full bg-emerald-500 border border-white" />
                Pure Veg
              </button>
              <button
                type="button"
                onClick={() => setDietFilter("non-veg")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === "non-veg"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="size-2 rounded-full bg-rose-500 border border-white" />
                Non-Veg
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Categories Tab Scroll */}
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-2 pt-1">
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                selectedCategory === "All"
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              All Items ({menu.length})
            </button>
            {menuCategories.map((cat) => {
              const count = menu.filter((m) => m.category === cat).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-10">
          {filteredMenu.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card/50 p-12 text-center">
              <Utensils className="mx-auto size-12 stroke-[1.2] text-muted-foreground/60" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                No dishes found
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search query or filters to see more delicacies.
              </p>
              <LizButton
                variant="outline"
                size="sm"
                className="mt-6"
                onClick={() => {
                  setSelectedCategory("All");
                  setDietFilter("all");
                  setSearchQuery("");
                }}
              >
                Reset All Filters
              </LizButton>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filteredMenu.map((dish, index) => (
                  <motion.div
                    key={dish.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
                  >
                    {/* Dish Image */}
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                      <ImageWithFallback
                        src={dish.image}
                        alt={dish.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Signature Badge */}
                      {dish.signature && (
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold/90 px-2.5 py-1 text-[0.6875rem] font-bold text-primary-deep shadow-sm backdrop-blur-xs">
                          <Sparkles className="size-3" />
                          Signature
                        </div>
                      )}

                      {/* Diet Badge */}
                      <div className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-xs">
                        <span
                          className={`size-2.5 rounded-full ${
                            dish.diet === "veg" ? "bg-emerald-600" : "bg-rose-600"
                          }`}
                          title={dish.diet === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                        />
                      </div>
                    </div>

                    {/* Dish Body */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                            {dish.name}
                          </h3>
                        </div>
                        <span className="mt-1 inline-block text-[0.6875rem] font-semibold tracking-wider text-muted-foreground uppercase">
                          {dish.category}
                        </span>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {dish.description}
                        </p>
                      </div>

                      {/* Ingredients & Actions */}
                      <div className="mt-4 pt-4 border-t border-border/60">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {dish.ingredients.slice(0, 3).map((ing) => (
                            <span
                              key={ing}
                              className="rounded-md bg-secondary px-2 py-0.5 text-[0.6875rem] font-medium text-secondary-foreground"
                            >
                              {ing}
                            </span>
                          ))}
                          {dish.ingredients.length > 3 && (
                            <span className="rounded-md bg-secondary/60 px-1.5 py-0.5 text-[0.6875rem] text-muted-foreground">
                              +{dish.ingredients.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-primary">
                            {formatPrice(dish.price)}
                          </span>

                          <button
                            type="button"
                            onClick={() => setActiveDish(dish)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-deep transition-colors"
                          >
                            <Info className="size-3.5" />
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Order on Talabat CTA strip */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary-deep via-primary to-primary-deep p-8 text-center text-primary-foreground shadow-xl sm:p-12">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Craving Kerala delicacies at home?
              </h3>
              <p className="mt-3 text-sm text-primary-foreground/80 sm:text-base">
                Order directly on {restaurant.orderPlatform} for fast, steaming hot delivery
                anywhere in Dubai.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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
                <LizLink href={restaurant.phoneHref} variant="ghostOnDark" size="lg">
                  Call for Takeaway ({restaurant.phone})
                </LizLink>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Dish Details Dialog Modal */}
      <Dialog open={Boolean(activeDish)} onOpenChange={(open) => !open && setActiveDish(null)}>
        {activeDish && (
          <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl border-none">
            <div className="relative aspect-16/10 w-full bg-muted">
              <ImageWithFallback
                src={activeDish.image}
                alt={activeDish.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                {activeDish.signature && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary-deep shadow">
                    <Sparkles className="size-3" />
                    Signature Dish
                  </span>
                )}
              </div>
            </div>

            <div className="p-6">
              <DialogHeader className="text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {activeDish.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    <span
                      className={`size-2.5 rounded-full ${
                        activeDish.diet === "veg" ? "bg-emerald-600" : "bg-rose-600"
                      }`}
                    />
                    {activeDish.diet === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                  </div>
                </div>
                <DialogTitle className="font-display text-2xl font-bold mt-1 text-foreground">
                  {activeDish.name}
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {activeDish.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-foreground uppercase">
                    Key Ingredients
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeDish.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="inline-flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        <Check className="size-3 text-primary" />
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-muted/60 p-3.5 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Dietary &amp; Allergens: </span>
                  {activeDish.dietaryInfo}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                <LizLink
                  href={restaurant.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  className="w-full justify-center"
                >
                  Order on {restaurant.orderPlatform}
                  <ArrowUpRight className="size-4" />
                </LizLink>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
