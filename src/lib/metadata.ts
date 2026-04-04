import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface PageMetaOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
}

export function buildMetadata(options: PageMetaOptions = {}): Metadata {
  const {
    title,
    description = SITE_CONFIG.description,
    keywords = [],
    path = "",
    image = "/og-image.jpg",
  } = options;

  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "ko_KR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
