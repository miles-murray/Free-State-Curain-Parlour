export function SiteFooter() {
  return (
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
        <a href="/services">Services</a>
        <a href="/showroom">Showroom</a>
        <a href="/workshop">Process</a>
        <a href="/projects">Projects</a>
        <a href="/team">Team</a>
        <a href="/history">History</a>
        <a href="/contact">Contact</a>
      </nav>
      <p>Established 1959 / Bloemfontein, South Africa</p>
    </footer>
  );
}
