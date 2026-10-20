import type { ImageMetadata } from 'astro';

// srcset widths up to the image's own width, so nothing is upscaled.
export function widthsFor(image: ImageMetadata, candidates: number[]): number[] {
  const widths = candidates.filter((w) => w < image.width);
  return [...widths, image.width];
}
