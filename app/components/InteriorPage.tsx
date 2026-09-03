import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { MobileMenu } from "./MobileMenu";
import type { ReactNode } from "react";

type InteriorPageProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  className?: string;
  heroFooter?: ReactNode;
  children: ReactNode;
};

export function InteriorPage({
  eyebrow,
  title,
  intro,
  image,
  className,
  heroFooter,
  children,
}: InteriorPageProps) {
  return (
    <main>
      <MobileMenu />
      <section
        className={`interior-hero${heroFooter ? " interior-hero-with-footer" : ""}${
          className ? ` ${className}` : ""
        }`}
      >
        <img src={image} alt="" />
        <div className="hero-shade" />
        <SiteHeader className="interior-site-header" />
        <div className="interior-hero-content">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
        </div>
        {heroFooter}
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}
