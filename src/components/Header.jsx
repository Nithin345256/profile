import { useState, useEffect } from "react";

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "0 2rem",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "background 0.3s, box-shadow 0.3s",
  },
  headerScrolled: {
    background: "rgba(10, 10, 20, 0.95)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 1px 20px rgba(0,0,0,0.4)",
  },
  headerTop: {
    background: "transparent",
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#e2e8f0",
    letterSpacing: "0.02em",
    cursor: "pointer",
  },
  logoAccent: {
    color: "#38bdf8",
  },
  nav: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  navLink: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: "#94a3b8",
    textDecoration: "none",
    letterSpacing: "0.05em",
    fontWeight: "500",
    transition: "color 0.2s",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "4px",
  },
  bar: {
    width: "24px",
    height: "2px",
    background: "#e2e8f0",
    borderRadius: "2px",
    transition: "all 0.3s",
  },
  mobileMenu: {
    position: "fixed",
    top: "64px",
    left: 0,
    right: 0,
    background: "rgba(10, 10, 20, 0.98)",
    backdropFilter: "blur(10px)",
    padding: "1.5rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    zIndex: 999,
    borderBottom: "1px solid rgba(56,189,248,0.2)",
  },
};

const navItems = ["About", "Skills", "Projects", "Certifications", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
        header a:hover, header button.navlink:hover { color: #38bdf8 !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
      <header style={{ ...styles.header, ...(scrolled ? styles.headerScrolled : styles.headerTop) }}>
        <div style={styles.logo} onClick={() => scrollTo("hero")}>
          N<span style={styles.logoAccent}>.</span>
        </div>
        <nav style={styles.nav} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item}
              className="navlink"
              style={styles.navLink}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          className="hamburger-btn"
          style={{ ...styles.hamburger, display: isMobile ? "flex" : "none" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </header>
      {menuOpen && isMobile && (
        <div style={styles.mobileMenu}>
          {navItems.map((item) => (
            <button
              key={item}
              style={{ ...styles.navLink, fontSize: "1rem", textAlign: "left" }}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}