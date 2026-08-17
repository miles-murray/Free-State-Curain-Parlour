const services = [
  "Curtains",
  "Blinds",
  "Wallpaper",
  "Furniture",
  "Decor",
  "Interior advice",
];

const gallery = [
  {
    src: "/showroom/decor-display.jpg",
    alt: "Decor displays and warm wood shelving inside Free State Curtain Parlour",
    label: "Decor displays",
  },
  {
    src: "/showroom/curtain-lounge.jpg",
    alt: "Curtains, cushions and a lounge setting in the Bloemfontein showroom",
    label: "Curtain displays",
  },
  {
    src: "/showroom/bedroom-setting.jpg",
    alt: "Bedroom furniture and soft furnishings in the showroom",
    label: "Room settings",
  },
];

const trustPoints = [
  "Established in 1959",
  "Westdene showroom",
  "Real fabrics and finishes to view",
  "Curtains, blinds, wallpaper and decor in one place",
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell" aria-labelledby="home-title">
        <header className="site-header">
          <a className="brand" href="/" aria-label="Free State Curtain Parlour home">
            <span className="brand-mark">FSCP</span>
            <span className="brand-name">Free State Curtain Parlour</span>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#showroom">Showroom</a>
            <a href="#visit">Visit</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Est. 1959 | Westdene, Bloemfontein</p>
            <h1 id="home-title">Curtains, blinds and decor advice for real homes.</h1>
            <p className="hero-lede">
              Visit Free State Curtain Parlour for curtains, blinds, wallpaper,
              furniture and decor finishes from a trusted local showroom.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-light" href="#visit">
                Visit Showroom
              </a>
              <a className="button button-outline" href="tel:+27514303474">
                Call Us
              </a>
            </div>
          </div>

          <div className="hero-media" aria-label="Free State Curtain Parlour showroom">
            <img
              src="/showroom/showroom-entry.jpg"
              alt="Inside Free State Curtain Parlour with decor shelves, curtains, lighting and wood finishes"
            />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Business highlights">
        {trustPoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </section>

      <section className="section section-dark" id="services">
        <div className="section-heading">
          <p className="eyebrow">What You Will Find</p>
          <h2>Everything needed to bring a room together.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <span>{service}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section showroom-section" id="showroom">
        <div className="showroom-copy">
          <p className="eyebrow">Showroom Led</p>
          <h2>See the fabrics, finishes and furniture in person.</h2>
          <p>
            The website should make people confident enough to walk in, ask for
            advice, compare options and see how curtains, blinds, furniture and
            decor work together in a real space.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div>
          <p className="eyebrow">Visit The Showroom</p>
          <h2>44 Second Avenue, Westdene, Bloemfontein</h2>
          <p>
            Monday to Friday 8:30am-4:30pm, Saturday 8:30am-12pm, Sunday closed.
          </p>
        </div>
        <div className="contact-panel">
          <a href="tel:+27514303474">051 430 3474</a>
          <a href="mailto:freestatecurtainparlour@gmail.com">
            freestatecurtainparlour@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
