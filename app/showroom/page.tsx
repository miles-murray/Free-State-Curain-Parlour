import { MobileMenu } from "../components/MobileMenu";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata } from "../seo";
import Image from "next/image";

const showroomImages = [
  {
    src: "/showroom/showroom-gallery-03.jpeg",
    alt: "Free State Curtain Parlour showroom with shelving, lighting, rug and decor displays.",
    className: "showroom-shot-wide",
  },
  {
    src: "/showroom/showroom-gallery-05.jpeg",
    alt: "Showroom view with decorative vases, lighting and furniture.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-new-textiles.jpeg",
    alt: "Close-up of textured fabrics and upholstery samples in the showroom.",
    className: "showroom-shot-small",
  },
  {
    src: "/showroom/showroom-decor-vases-runner.jpeg",
    alt: "Decorative glass vases, dried stems and patterned runner in the showroom.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-real-main.jpeg",
    alt: "Main showroom view with decor shelving, rug and lighting.",
    className: "showroom-shot-wide",
  },
  {
    src: "/showroom/showroom-new-lamp.jpeg",
    alt: "Black table lamp displayed against patterned wallpaper in the showroom.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-gallery-02.jpeg",
    alt: "Red chairs, cushions and lighting in the showroom window area.",
    className: "showroom-shot-small",
  },
  {
    src: "/showroom/showroom-bench-cushions.jpeg",
    alt: "Carved wooden bench with cushions, curtains and showroom decor.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-real-room-setting.jpeg",
    alt: "Room setting with curtains, sofa, cushions and lighting.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-leather-chair-plant.jpeg",
    alt: "Leather chair beside a green plant inside the showroom.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-new-mirror.jpeg",
    alt: "Large circular mirror displayed on wooden showroom flooring.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-gallery-01.jpeg",
    alt: "Glass table, lamps and decor objects in the showroom.",
    className: "showroom-shot-small",
  },
  {
    src: "/showroom/showroom-new-decor-table.jpeg",
    alt: "Decorative bowl and red vase displayed on a glass showroom table.",
    className: "showroom-shot-wide",
  },
  {
    src: "/showroom/showroom-gallery-07.jpeg",
    alt: "Reception counter with pendant lights and patterned wall finish.",
    className: "showroom-shot-wide",
  },
  {
    src: "/showroom/showroom-new-shelving.jpeg",
    alt: "Decor shelving with vases, greenery and display pieces inside the showroom.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-real-lighting.jpeg",
    alt: "Lighting, mirrors, rugs and decor pieces inside the showroom.",
    className: "showroom-shot-small",
  },
  {
    src: "/showroom/showroom-cushion-stack-detail.jpeg",
    alt: "Stacked patterned cushions displayed on a showroom rack.",
    className: "showroom-shot-small",
  },
  {
    src: "/showroom/showroom-new-carved-bench.jpeg",
    alt: "Close-up of a carved wooden bench detail in the showroom.",
    className: "showroom-shot-small",
  },
  {
    src: "/showroom/showroom-gallery-04.jpeg",
    alt: "Showroom entrance detail with light feature and decor shelving.",
    className: "showroom-shot-full",
  },
  {
    src: "/showroom/showroom-new-vases.jpeg",
    alt: "Decorative vases and cushions displayed inside the showroom.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-wallpaper-chair-corner.jpeg",
    alt: "Showroom corner with botanical wallpaper, chair, candles and lighting.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-gallery-09.jpeg",
    alt: "Piano, lighting, rug and decor inside the showroom.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-real-vignette.jpeg",
    alt: "Showroom vignette with wallpaper, chairs, lighting and decorative vases.",
    className: "showroom-shot-wide",
  },
  {
    src: "/showroom/showroom-gallery-10.jpeg",
    alt: "Close-up of vases, decor objects and glass surfaces.",
    className: "showroom-shot-full",
  },
  {
    src: "/showroom/hero-interior.jpeg",
    alt: "Showroom interior with shelves, artwork, lighting and rugs.",
    className: "showroom-shot-wide",
  },
  {
    src: "/showroom/showroom-gallery-06.jpeg",
    alt: "Reception area with plants, pendant lighting and wooden floors.",
    className: "showroom-shot-wide",
  },
  {
    src: "/showroom/service-furniture-room-settings.jpeg",
    alt: "Furniture and room setting inside the showroom.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-gallery-08.jpeg",
    alt: "Cabinet, chandelier, mirrors and decor display.",
    className: "showroom-shot-full",
  },
  {
    src: "/showroom/decor-display.jpg",
    alt: "Decor display with vases, furniture and lighting.",
    className: "showroom-shot-small",
  },
  {
    src: "/showroom/showroom-woven-mirror.png",
    alt: "Round woven mirror with natural fringe displayed in the showroom.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-geometric-pendant-lights.png",
    alt: "Geometric pendant lights illuminated above a showroom display.",
    className: "showroom-shot-tall",
  },
  {
    src: "/showroom/showroom-decorative-trims.png",
    alt: "Decorative braids, fringes and trims arranged for selection.",
    className: "showroom-shot-small",
  },
  {
    src: "/showroom/showroom-clock-wall-display.png",
    alt: "Large wall clock with timber slat detail and floating shelves in the showroom.",
    className: "showroom-shot-wide",
  },
  {
    src: "/showroom/showroom-green-armchairs.png",
    alt: "Pair of green upholstered armchairs displayed with wallpaper, lighting and artwork.",
    className: "showroom-shot-tall",
  },
];

export const metadata = createPageMetadata({
  title: "Showroom | Free State Curtain Parlour",
  description:
    "See the Free State Curtain Parlour showroom in Westdene, Bloemfontein.",
  path: "/showroom",
  image: "/showroom/showroom-real-main.jpeg",
});

export default function ShowroomPage() {
  return (
    <main className="showroom-page">
      <MobileMenu />
      <div className="mobile-page-hero mobile-page-hero-showroom">
        <div className="showroom-page-top">
          <SiteHeader />
        </div>

        <section className="page-section page-section-light showroom-image-section mobile-page-hero-section">
          <div className="showroom-gallery-intro">
            <p className="eyebrow">Inside the showroom</p>
            <h1>Come see what we do.</h1>
            <p>
              Room settings, fabrics, finishes, furniture and decor, seen together in
              real showroom light.
            </p>
          </div>
        </section>
      </div>

      <section className="page-section page-section-light showroom-image-section showroom-gallery-section">
        <div className="showroom-image-flow">
          {showroomImages.map((image) => (
            <figure className={image.className} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={1620}
                sizes="(max-width: 720px) 100vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <div className="visit-copy">
            <p className="eyebrow light">Visit the showroom</p>
            <h2>Let us find what works in your room.</h2>
            <p className="visit-support">
              You are welcome to visit the showroom, speak to the team and compare
              fabrics, finishes and furniture in person before choosing what feels
              right for your space.
            </p>
            <div className="visit-actions">
              <a
                className="button button-primary"
                href="https://www.google.com/maps/dir/?api=1&destination=44+Second+Avenue+Westdene+Bloemfontein+9301"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
              <a className="button button-ghost" href="/contact">
                Contact details
              </a>
            </div>
          </div>
          <div className="visit-map" aria-label="Map to Free State Curtain Parlour">
            <iframe
              src="https://www.google.com/maps?q=44+Second+Avenue+Westdene+Bloemfontein+9301&output=embed"
              title="Map to Free State Curtain Parlour"
              loading="lazy"
            />
            <a
              className="visit-map-link"
              href="https://www.google.com/maps/dir/?api=1&destination=44+Second+Avenue+Westdene+Bloemfontein+9301"
              target="_blank"
              rel="noreferrer"
            >
              <span>Open directions</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="visit-details">
          <div>
            <h3>Find us</h3>
            <address>
              44 Second Avenue<br />
              Westdene, Bloemfontein<br />
              9301
            </address>
          </div>
          <div>
            <h3>Trading hours</h3>
            <p>Monday-Friday: 8am-4:30pm</p>
            <p>Saturday: 8am-12pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+27514303474">051 430 3474</a>
            <a href="mailto:freestatecurtainparlour@gmail.com">
              freestatecurtainparlour@gmail.com
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
