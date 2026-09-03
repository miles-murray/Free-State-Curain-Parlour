import { primaryNav } from "../content";

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className = "" }: SiteHeaderProps) {
  return (
    <header className={`site-header ${className}`}>
      <a className="brand" href="/#top" aria-label="Free State Curtain Parlour home">
        <img
          className="brand-logo"
          src="/fscp-logo-transparent.png"
          alt="Free State Curtain Parlour, established 1959"
          width="1627"
          height="621"
        />
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {primaryNav.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        <a className="nav-contact" href="/contact">
          Visit us
        </a>
      </nav>
    </header>
  );
}
