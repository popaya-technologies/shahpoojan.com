"use client";

export default function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("https://images.pexels.com")) return src;
  return `https://shahpoojan.com/${src}?w=${width}&q=${quality || 75}`;
}
