const services = [
  {
    number: "01",
    title: "Curtains & fabrics",
    description:
      "Compare curtain fabrics, textures and finishes in relation to the whole room. We help you choose fullness, lining, rods and rails that suit the light, scale and mood of the space.",
    cta: "Explore curtain options",
    href: "#advice",
    image: "/showroom/service-curtains-fabrics.jpeg",
    position: "34% center",
  },
  {
    number: "02",
    title: "Blinds",
    description:
      "Balance privacy, light control and everyday use with a clean, practical finish. Choose blind options that work with the rest of the room rather than feeling separate from it.",
    cta: "Plan window treatments",
    href: "#visit",
    image: "/showroom/service-blinds.jpeg",
    position: "22% center",
  },
  {
    number: "03",
    title: "Wallpaper & decor",
    description:
      "Add pattern, texture and character with wallpaper, decor and finishing touches. See how colour, objects and surfaces can connect the whole room.",
    cta: "Explore finishing touches",
    href: "#showroom",
    image: "/showroom/service-wallpaper-decor.jpeg",
    position: "center center",
  },
  {
    number: "04",
    title: "Furniture & room settings",
    description:
      "See furniture, soft furnishings and decor together in complete room settings. It makes it easier to choose pieces that feel layered, comfortable and connected.",
    cta: "Plan a showroom visit",
    href: "#visit",
    image: "/showroom/service-furniture-room-settings.jpeg",
    position: "center center",
  },
];

const guidanceSteps = [
  {
    icon: "room",
    title: "Start with your room",
    text: "Tell us what you are changing, what needs to work better and how you want the room to feel.",
  },
  {
    icon: "compare",
    title: "Compare in person",
    text: "See colour, texture, scale and finish in the showroom before making a decision.",
  },
  {
    icon: "together",
    title: "Bring it together",
    text: "Choose window treatments, fabrics, wallpaper, furniture and decor with one clear direction.",
  },
];

const gallery = [
  {
    src: "/showroom/showroom-entry.jpg",
    alt: "Free State Curtain Parlour showroom with curtains, decor shelving and furniture",
    label: "The Westdene showroom",
    className: "gallery-wide",
  },
  {
    src: "/showroom/curtain-lounge.jpg",
    alt: "A curtain display framing a styled lounge setting",
    label: "Curtains & soft furnishings",
    className: "gallery-tall",
  },
  {
    src: "/showroom/decor-display.jpg",
    alt: "Decor, lighting and natural wood displays inside the showroom",
    label: "Objects & finishing pieces",
    className: "gallery-small",
  },
  {
    src: "/showroom/bedroom-setting.jpg",
    alt: "A styled bedroom setting with layered cushions and textiles",
    label: "Furniture & room settings",
    className: "gallery-small",
  },
];

const reviews = [
  {
    quote: "Best place to visit when you want to update your home",
    name: "SR",
    detail: "Local Guide · 82 reviews",
    date: "9 months ago",
    rating: 5,
    avatar: "/reviewers/sr.png",
  },
  {
    quote:
      "This picture is not related to FS Curtain Parlour, but you will find the most creative, friendly and assertive staff here.",
    name: "Jacques Groenewald",
    detail: "Local Guide · 128 reviews",
    date: "5 years ago",
    rating: 4,
    avatar: "/reviewers/jacques-groenewald.png",
  },
  {
    quote:
      "If you're looking for decorating advice this is the place to go. Thank you Johan for all your help.",
    name: "Matthew Cockcroft",
    detail: "Local Guide · 153 reviews",
    date: "6 years ago",
    rating: 5,
    avatar: "/reviewers/matthew-cockcroft.png",
  },
  {
    quote: "Best service ever",
    name: "Doreen Dikobo",
    detail: "Local Guide · 31 reviews",
    date: "5 years ago",
    rating: 5,
    avatar: "/reviewers/doreen-dikobo.png",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="home-title">
        <img
          className="hero-image"
          src="/showroom/hero-interior.jpeg"
          alt="Free State Curtain Parlour showroom interior with decor shelving, lighting and rugs"
        />
        <div className="hero-shade" />

        <header className="site-header">
          <a className="brand" href="#top" aria-label="Free State Curtain Parlour home">
            <img
              className="brand-logo"
              src="/fscp-logo-transparent.png"
              alt="Free State Curtain Parlour, established 1959"
              width="1627"
              height="621"
            />
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#advice">Guidance</a>
            <a href="#showroom">Showroom</a>
            <a className="nav-contact" href="#visit">Visit us</a>
          </nav>
        </header>

        <div className="hero-content" id="top">
          <p className="eyebrow light">Westdene, Bloemfontein</p>
          <h1 id="home-title">Where fabric, furniture and finishing touches meet.</h1>
          <p className="hero-lede">
            From window treatments to wallpaper, soft furnishings, furniture
            and finishing decor, our Bloemfontein showroom helps you bring the
            whole room together.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#showroom">Explore the showroom</a>
            <a className="button button-ghost" href="tel:+27514303474">Call 051 430 3474</a>
          </div>
        </div>

        <div className="hero-foot">
          <span>Curtains / Blinds / Wallpaper / Furniture / Decor / Showroom guidance</span>
          <span className="heritage-mark">Established 1959</span>
        </div>
      </section>

      <section className="intro-band" aria-label="Introduction">
        <div className="intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">A whole-room approach</p>
            <h2>The room, considered as a whole.</h2>
            <p>
              Every choice changes the room, from the way light enters to the
              colours, textures, furniture and finishing pieces around it. Our
              showroom helps you see how everything works together before you
              choose.
            </p>
            <p className="intro-extra">
              Bring in your colours, measurements or photos, and we will help
              you look at the room as one complete setting, from window
              treatments and fabrics to furniture, wallpaper and finishing decor.
            </p>
            <a className="text-link intro-link" href="#advice">
              Discuss your room <span aria-hidden="true">→</span>
            </a>
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
            <p className="eyebrow light">Curtains, blinds, wallpaper, furniture & decor</p>
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

      <section className="guidance-section" id="advice">
        <div className="guidance-image">
          <img
            src="/showroom/curtain-lounge.jpg"
            alt="Curtain display framing a styled lounge setting in the Free State Curtain Parlour showroom"
          />
        </div>
        <div className="guidance-panel">
          <div className="guidance-intro">
            <p className="eyebrow">Showroom guidance</p>
            <h2>Guidance that starts with your room.</h2>
            <div className="guidance-mobile-image">
              <img
                src="/showroom/curtain-lounge.jpg"
                alt="Curtain display framing a styled lounge setting in the Free State Curtain Parlour showroom"
              />
            </div>
            <p>
              Bring your photos, measurements, ideas or problem areas. We help
              you compare window treatments, fabrics, wallpaper, furniture and
              decor in the showroom so the choices work together in the room.
            </p>
          </div>
          <div className="guidance-steps">
            {guidanceSteps.map((step) => (
              <article key={step.title}>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
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
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="showroom-cta">
          <a className="button button-primary" href="#visit">
            View full showroom <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="heritage-section" aria-label="Our heritage">
        <div className="heritage-number">1959</div>
        <div className="heritage-copy">
          <p className="eyebrow light heritage-eyebrow">Established in Bloemfontein</p>
          <div className="heritage-title-card">
            <h2>Decades of helping local rooms come together.</h2>
          </div>
          <p>
            Free State Curtain Parlour has been part of Bloemfontein interiors since 1959.
            A history of 67 years lives on in our hands-on showroom,
            where good advice and real materials still matter.
          </p>
          <a className="text-link light-link heritage-link" href="#showroom">
            Learn more about FSCP <span aria-hidden="true">→</span>
          </a>
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
          <a
            className="text-link"
            href="https://www.google.com/search?q=free+state+curtain+parlour+reviews#lrd=0x1e8fc5487d8b6e7f:0x2008387ce253b67a,1,,,,"
            target="_blank"
            rel="noreferrer"
          >
            Read reviews <span aria-hidden="true">→</span>
          </a>
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
            <h2>Let’s find what works in your room.</h2>
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
              <a className="button button-ghost" href="tel:+27514303474">Call the showroom</a>
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

      <footer className="site-footer">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/fscp-logo-transparent.png"
            alt="Free State Curtain Parlour"
            width="1627"
            height="621"
          />
        </div>
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#showroom">Showroom</a>
          <a href="#visit">Contact</a>
        </nav>
        <p>Established 1959 / Bloemfontein, South Africa</p>
      </footer>
    </main>
  );
}
