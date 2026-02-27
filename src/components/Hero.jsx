const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6rem 2rem 4rem",
    position: "relative",
    overflow: "hidden",
  },
  bg: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    pointerEvents: "none",
  },
  content: {
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
    animation: "fadeInUp 0.8s ease both",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "rgba(56,189,248,0.1)",
    border: "1px solid rgba(56,189,248,0.3)",
    borderRadius: "100px",
    padding: "6px 16px",
    fontSize: "0.8rem",
    color: "#38bdf8",
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "0.05em",
    marginBottom: "1.5rem",
    fontWeight: "500",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#38bdf8",
    animation: "pulse 2s infinite",
  },
  name: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
    fontWeight: "700",
    color: "#e2e8f0",
    lineHeight: 1.1,
    marginBottom: "0.5rem",
    letterSpacing: "-0.02em",
  },
  accent: {
    color: "#38bdf8",
  },
  title: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "clamp(1rem, 3vw, 1.4rem)",
    color: "#64748b",
    marginBottom: "1.5rem",
    fontWeight: "400",
    letterSpacing: "0.05em",
  },
  description: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1rem",
    color: "#94a3b8",
    lineHeight: 1.8,
    maxWidth: "560px",
    margin: "0 auto 2.5rem",
  },
  actions: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "12px 28px",
    background: "#38bdf8",
    color: "#0a0a14",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "600",
    fontSize: "0.9rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    letterSpacing: "0.02em",
    transition: "transform 0.2s, box-shadow 0.2s",
    textDecoration: "none",
    display: "inline-block",
  },
  btnSecondary: {
    padding: "12px 28px",
    background: "transparent",
    color: "#e2e8f0",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "500",
    fontSize: "0.9rem",
    border: "1px solid rgba(226,232,240,0.2)",
    borderRadius: "8px",
    cursor: "pointer",
    letterSpacing: "0.02em",
    transition: "border-color 0.2s, color 0.2s",
    textDecoration: "none",
    display: "inline-block",
  },
  stats: {
    display: "flex",
    gap: "3rem",
    justifyContent: "center",
    marginTop: "4rem",
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
  },
  statNum: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2rem",
    fontWeight: "700",
    color: "#38bdf8",
    display: "block",
  },
  statLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.78rem",
    color: "#64748b",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={styles.section}>
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(56,189,248,0.3); }
        .btn-secondary:hover { border-color: rgba(56,189,248,0.5) !important; color: #38bdf8 !important; }
      `}</style>
      <div style={styles.bg} />
      <div style={styles.grid} />
      <div style={styles.content}>
        <div style={styles.badge}>
          <span style={styles.dot} />
          Available for Opportunities
        </div>
        <h1 style={styles.name}>
          Nithin 
        </h1>
        <p style={styles.title}>AI/ML Developer &amp; Full Stack Engineer</p>
        <p style={styles.description}>
          MCA student at MS Ramaiah Institute of Technology building intelligent systems with LLMs, 
          RAG pipelines, and modern web technologies. Passionate about the intersection of AI and real-world applications.
        </p>
        <div style={styles.actions}>
          <button className="btn-primary" style={styles.btnPrimary} onClick={() => scrollTo("projects")}>
            View Projects
          </button>
          <button className="btn-secondary" style={styles.btnSecondary} onClick={() => scrollTo("contact")}>
            Get in Touch
          </button>
        </div>
        <div style={styles.stats}>
          {[
            { num: "9.17", label: "MCA CGPA" },
            { num: "3+", label: "AI Projects" },
            { num: "3+", label: "Certifications" },
          ].map((s) => (
            <div key={s.label} style={styles.stat}>
              <span style={styles.statNum}>{s.num}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}