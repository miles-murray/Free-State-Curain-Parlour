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
      <nav className="mobile-menu-panel" aria-label="Mobile navigation">
        {sitePages.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
