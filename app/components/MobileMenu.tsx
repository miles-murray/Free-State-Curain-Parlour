import { sitePages } from "../content";

export function MobileMenu() {
  return (
    <details className="mobile-menu">
      <summary aria-label="Open menu">
        <span className="mobile-menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="mobile-menu-label">Menu</span>
      </summary>
      <div className="mobile-menu-panel">
        <div className="mobile-menu-inner">
          <img
            className="mobile-menu-logo"
            src="/fscp-logo-transparent.png"
            alt="Free State Curtain Parlour"
            width="1627"
            height="621"
          />
          <nav className="mobile-menu-links" aria-label="Mobile navigation">
            {sitePages.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </details>
  );
}
