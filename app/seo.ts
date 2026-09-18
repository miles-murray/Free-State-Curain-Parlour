import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://freestatecurtainparlor.com";

export const siteConfig = {
  name: "Free State Curtain Parlour",
  url: configuredSiteUrl.replace(/\/$/, ""),
  description:
    "Curtains, blinds, wallpaper, upholstery, wall units and interior decor advice from Free State Curtain Parlour in Westdene, Bloemfontein.",
  locale: "en_ZA",
  phone: "+27514303474",
  email: "freestatecurtainparlour@gmail.com",
  facebook:
    "https://www.facebook.com/search/top?q=free%20state%20curtain%20parlour%20and%20decor",
  address: {
    streetAddress: "44 Second Avenue",
    addressLocality: "Westdene, Bloemfontein",
    postalCode: "9301",
    addressCountry: "ZA",
  },
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

const socialImagesByPath: Record<string, string> = {
  "/": "/social/home.webp",
  "/contact": "/social/contact.webp",
  "/history": "/social/history.webp",
  "/process": "/social/process.webp",
  "/projects": "/social/projects.webp",
  "/services": "/social/services.webp",
  "/services/blinds/examples": "/social/blinds.webp",
  "/services/curtains-fabrics/examples": "/social/curtains.webp",
  "/services/furniture-decor/examples": "/social/furniture-decor.webp",
  "/services/interior-guidance/examples": "/social/guidance.webp",
  "/services/rugs-lighting-decor/examples": "/social/decor.webp",
  "/services/upholstery-soft-furnishings/examples": "/social/upholstery.webp",
  "/services/wall-units/examples": "/social/wall-units.webp",
  "/services/wallpaper/examples": "/social/wallpaper.webp",
  "/showroom": "/social/showroom.webp",
  "/team": "/social/team.webp",
  "/workshop": "/social/workshop.webp",
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/social/home.webp",
}: PageMetadataOptions): Metadata {
  const socialImage = socialImagesByPath[path] ?? image;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          type: "image/webp",
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
