"use client";

import { sitePages } from "../content";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHeader, setIsPastHeader] = useState(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");

    if (!header) return;

    const updateMenuVisibility = () => {
      setIsPastHeader(header.getBoundingClientRect().bottom <= 0);
    };

    updateMenuVisibility();
    window.addEventListener("scroll", updateMenuVisibility, { passive: true });
    window.addEventListener("resize", updateMenuVisibility);

    return () => {
      window.removeEventListener("scroll", updateMenuVisibility);
      window.removeEventListener("resize", updateMenuVisibility);
    };
  }, []);

  return (
    <details
      className={`mobile-menu${
        isPastHeader || isOpen ? " mobile-menu--desktop-visible" : ""
      }`}
      onToggle={() => setIsOpen(Boolean(menuRef.current?.open))}
      ref={menuRef}
    >
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
          <Image
            className="mobile-menu-logo"
            src="/fscp-logo-transparent.png"
            alt="Free State Curtain Parlour"
            width={1627}
            height={621}
            sizes="188px"
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
