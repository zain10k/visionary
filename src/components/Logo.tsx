import React from 'react';

type LogoVariant = 'dark' | 'light' | 'mono';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  alt?: string;
}

/**
 * Logo component that swaps image based on background context.
 * - dark: use on dark/navy backgrounds
 * - light: use on light backgrounds
 * - mono: single-color mark for utilities
 *
 * Images are expected at:
 * /public/logos/logo-dark.png
 * /public/logos/logo-light.png
 * /public/logos/logo-mono.png
 */
export function Logo({ variant = 'dark', className, alt }: LogoProps) {
  const srcMap: Record<LogoVariant, string> = {
    dark: '/logos/logo-dark.png',
    light: '/logos/logo-light.png',
    mono: '/logos/logo-mono.png',
  };

  const resolvedAlt =
    alt ?? 'Visionary Management Consultants - Turning Vision into Reality';

  return (
    <img
      src={srcMap[variant]}
      alt={resolvedAlt}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}


