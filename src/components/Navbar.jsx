import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell">
        <a className="brand" href="#home" aria-label="Go to homepage">
          <span className="brand-mark">J<span>.</span></span>
          <span>{profile.shortName}<small>PORTFOLIO</small></span>
        </a>
        <div className="desktop-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-links">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}