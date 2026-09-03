import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { MobileMenu } from "./components/MobileMenu";
import {
  gallery,
  reviews,
  services,
  teamRoles,
  workshopSteps,
} from "./content";

function splitWorkshopStep(step: string) {
  const match = step.match(/^([^,\s]+),?\s+(.+)$/);

  return {
    action: match?.[1] ?? step,
    detail: match?.[2] ?? "",
  };
}

export default function Home() {
  return (
    <main className="home-page">
      <MobileMenu />
      <section className="hero" aria-labelledby="home-title">
        <img
          className="hero-image"
          src="/showroom/hero-interior.jpeg"
          alt="Free State Curtain Parlour showroom interior with decor shelving, lighting and rugs"
        />
        <div className="hero-shade" />

        <SiteHeader />

        <div className="hero-content" id="top">
          <p className="eyebrow light">Westdene, Bloemfontein</p>
          <h1 id="home-title">Where fabric, furniture and finishing touches meet.</h1>
          <p className="hero-lede">
            From curtains and blinds to wallpaper, bespoke furniture, wall
            units, soft furnishings and finishing decor, our Bloemfontein
            showroom helps you bring the whole room together.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/services">
              Explore services
            </a>
            <a className="button button-ghost" href="tel:+27514303474">
              Call 051 430 3474
            </a>
          </div>
        </div>

        <div className="hero-foot">
          <span>Curtains / Installation / Blinds / Wallpaper / Bespoke furniture / Wall units / Decor / Showroom guidance</span>
          <span className="heritage-mark">Established 1959</span>
        </div>
      </section>

      <section className="intro-band" aria-label="Introduction">
        <div className="intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">A whole-room approach</p>
            <h2 className="intro-title">
              <span>The room, considered</span>{" "}
              <span>as a whole.</span>
            </h2>
            <p>
              Every choice changes the room, from the way light enters to the
              colours, textures, furniture and finishing pieces around it. Our
              showroom helps you see how everything works together before you
              choose.
            </p>
            <p className="intro-extra">
              Bring photos, colours, measurements, ideas or problem areas. We
              will help you look at the room as one complete setting, from
              window treatments and fabrics to furniture, wallpaper and
              finishing decor.
            </p>
          </div>
          <div className="intro-image">
            <picture>
              <source
                media="(min-width: 1001px)"
                srcSet="/showroom/whole-room-approach-desktop.jpeg"
              />
              <img
                src="/showroom/whole-room-approach.jpeg"
                alt="Decor, lighting and room details inside Free State Curtain Parlour"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow light">Services</p>
            <h2 className="services-title">
              <span>Complete interiors,</span>
              <span>considered together.</span>
            </h2>
          </div>
          <p>
            From the window treatment to the final finishing detail, explore
            the pieces that make a room feel complete.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <div className="service-panel">
                <img
                  src={service.image}
                  alt=""
                  style={{ objectPosition: service.position }}
                />
                <div className="service-overlay" />
                <span className="service-number">{service.number}</span>
                <h3 className="service-image-title">{service.title}</h3>
              </div>
              <div className="service-copy">
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <a className="service-cta" href={service.href}>
                  {service.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="showroom-section" id="showroom">
        <div className="section-heading heading-row showroom-heading">
          <div>
            <p className="eyebrow">Inside the showroom</p>
            <h2>Come see what we do.</h2>
          </div>
          <p>
            Walk through room settings, compare finishes and see how light,
            colour, pattern, fabric and furniture live together.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure className={item.className} key={item.src}>
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
        <div className="showroom-cta">
          <a className="button button-primary" href="/showroom">
            View showroom page <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="workshop-section" id="workshop">
        <div className="workshop-shell">
          <div className="workshop-rail">
            <p className="eyebrow">Workshop</p>
          </div>
          <div className="workshop-content">
            <figure className="workshop-media-band">
              <img
                src="/showroom/workshop-ai-placeholder.png"
                alt="Temporary workshop scene with curtain fabrics, measuring tools and sewing equipment"
              />
            </figure>
            <div className="workshop-copy">
              <h2>
                <span>Measured, made and</span>
                <span>finished for the room.</span>
              </h2>
              <div className="workshop-process-row">
                {workshopSteps.map((step) => {
                  const { action, detail } = splitWorkshopStep(step);

                  return (
                    <article key={step}>
                      <p>
                        <strong>{action}</strong>
                        {detail && <span> {detail}</span>}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="workshop-actions">
            <a className="text-link workshop-link" href="/workshop">
              Visit the workshop page <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow">Team & roles</p>
            <h2>Who helps you through the work.</h2>
          </div>
        </div>
        <div className="team-role-grid">
          {teamRoles.map((role) => (
            <article className="team-role-card" key={role.title}>
              <img className="team-role-media" src={role.image} alt={role.alt} />
              <div className="team-role-body">
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link team-link" href="/team">
          <span className="team-link-label">See who helps with each step</span>
          <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="heritage-section" id="history">
        <div className="heritage-number">1959</div>
        <div className="heritage-copy">
          <p className="eyebrow light heritage-eyebrow">Established in Bloemfontein</p>
          <div className="heritage-title-card">
            <h2>Decades of helping local rooms come together.</h2>
          </div>
          <p>
            Free State Curtain Parlour has been part of Bloemfontein interiors since 1959.
            The history page will hold the newspaper articles, old photographs and
            local story behind the business.
          </p>
        </div>
      </section>

      <section className="reviews-section" id="reviews" aria-label="Google review rating">
        <div>
          <p className="eyebrow">Customer feedback</p>
          <h2>Helpful advice makes the difference.</h2>
          <p>
            Google reviewers mention helpful staff, decorating advice and
            friendly showroom service.
          </p>
        </div>
        <div className="rating-block">
          <span className="rating-number">4.4</span>
          <span className="rating-stars" aria-label="4.4 out of 5 stars">★★★★★</span>
          <span>Based on 23 Google reviews</span>
        </div>
        <div className="review-carousel" aria-label="Customer review highlights">
          <div className="review-track">
            {[...reviews, ...reviews].map((review, index) => (
              <article
                className="review-card"
                key={`${review.name}-${index}`}
                aria-hidden={index >= reviews.length}
              >
                <header className="review-author">
                  <img src={review.avatar} alt="" />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.detail}</span>
                  </div>
                  <span className="review-date">{review.date}</span>
                </header>
                <span
                  className="review-stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
                <p>{review.quote}</p>
                <footer>Google review</footer>
              </article>
            ))}
          </div>
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
            <p>Monday-Friday: 8:30am-4:30pm</p>
            <p>Saturday: 8:30am-12pm</p>
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
