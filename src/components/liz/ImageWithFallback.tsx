"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Utensils } from "lucide-react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: any;
  fallbackSrc?: string;
  containerClassName?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  containerClassName,
  fallbackSrc,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
    }
  };

  const resolvedSrc =
    typeof src === "object" && src && "src" in src ? src.src : typeof src === "string" ? src : "";

  return (
    <div className={cn("relative overflow-hidden bg-muted/40", containerClassName)}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-muted/60" aria-hidden="true" />
      )}

      {hasError && !fallbackSrc ? (
        <div className="flex h-full w-full min-h-[140px] flex-col items-center justify-center bg-muted/70 p-4 text-center text-muted-foreground">
          <Utensils className="size-8 stroke-[1.5] text-primary/40" />
          <span className="mt-2 text-xs font-medium">{alt || "LIZ Restaurant dish"}</span>
        </div>
      ) : (
        <img
          src={hasError && fallbackSrc ? fallbackSrc : resolvedSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={cn(
            "transition-all duration-500",
            !isLoaded ? "scale-105 blur-sm" : "scale-100 blur-0",
            className,
          )}
          {...props}
        />
      )}
    </div>
  );
}
