import Link from "next/link";
import { siteConfig } from "../seo";

const servicePages = [
  { href: "/services/curtains-fabrics/examples", label: "Curtains & fabrics" },
  { href: "/services/blinds/examples", label: "Blinds" },
  { href: "/services/wallpaper/examples", label: "Wallpaper & finishes" },
  {
    href: "/services/upholstery-soft-furnishings/examples",
    label: "Upholstery & soft furnishings",
  },
  {
    href: "/services/rugs-lighting-decor/examples",
    label: "Rugs, lighting & decor",
  },
  { href: "/services/interior-guidance/examples", label: "Interior guidance" },
  { href: "/services/wall-units/examples", label: "Wall units & custom pieces" },
  { href: "/services/furniture-decor/examples", label: "Furniture & decor" },
] as const;

type ServicePageNavigationProps = {
  currentPath: (typeof servicePages)[number]["href"];
};

export function ServiceBreadcrumbs({ currentPath }: ServicePageNavigationProps) {
  const current = servicePages.find((page) => page.href === currentPath);

  if (!current) return null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: current.label,
        item: `${siteConfig.url}${current.href}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="service-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li aria-current="page">{current.label}</li>
        </ol>
      </nav>
    </>
  );
}

export function ServicePageLinks({ currentPath }: ServicePageNavigationProps) {
  const currentIndex = servicePages.findIndex((page) => page.href === currentPath);

  if (currentIndex < 0) return null;

  const previous =
    servicePages[(currentIndex - 1 + servicePages.length) % servicePages.length];
  const next = servicePages[(currentIndex + 1) % servicePages.length];

  return (
    <div className="service-page-navigation">
      <Link className="button button-primary" href="/services">
        <span>All services</span>
        <span aria-hidden="true">→</span>
      </Link>
      <nav className="service-related-links" aria-label="More service options">
        <Link href={previous.href}>
          <span>Previous</span>
          <strong>{previous.label}</strong>
        </Link>
        <Link href={next.href}>
          <span>Next</span>
          <strong>{next.label}</strong>
        </Link>
      </nav>
    </div>
  );
}
