const styles = {
  section: {
    padding: "6rem 2rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.78rem",
    color: "#38bdf8",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: "0.75rem",
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    color: "#e2e8f0",
    fontWeight: "700",
    marginBottom: "1rem",
    lineHeight: 1.2,
  },
  sectionDesc: {
    fontFamily: "'DM Sans', sans-serif",
    color: "#64748b",
    fontSize: "1rem",
    maxWidth: "500px",
    lineHeight: 1.7,
    marginBottom: "3.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "1.8rem",
    display: "flex",
    gap: "1.2rem",
    alignItems: "flex-start",
    transition: "border-color 0.3s, transform 0.3s",
  },
  certBadge: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.05))",
    border: "1px solid rgba(56,189,248,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.4rem",
    flexShrink: 0,
  },
  certInfo: {
    flex: 1,
  },
  certTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#e2e8f0",
    marginBottom: "4px",
    lineHeight: 1.4,
  },
  certIssuer: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.8rem",
    color: "#38bdf8",
    fontWeight: "500",
    marginBottom: "6px",
  },
  certDesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.8rem",
    color: "#64748b",
    lineHeight: 1.5,
  },
};

const certs = [
  {
    icon: "🧠",
    title: "Deep Learning",
    issuer: "NPTEL – IIT Ropar",
    desc: "Comprehensive deep learning course covering neural networks, CNNs, RNNs, and advanced architectures.",
  },
  {
    icon: "🌐",
    title: "The Complete Full Stack Web Development Bootcamp",
    issuer: "Dr. Angela Yu",
    desc: "End-to-end web development with HTML, CSS, JavaScript, Node.js, React, and databases.",
  },
  {
    icon: "🐍",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Dr. Angela Yu",
    desc: "100-day Python challenge covering automation, data science, web scraping, and app development.",
  },
];

const education = [
  {
    degree: "MCA",
    institute: "M S Ramaiah Institute of Technology, Bengaluru",
    year: "2024 – 2026",
    cgpa: "9.17",
  },
  {
    degree: "BCA",
    institute: "LB and SBS College, Sagar",
    year: "2021 – 2024",
    cgpa: "8.66",
  },
];

const eduStyles = {
  eduSection: {
    marginTop: "4rem",
  },
  eduGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  eduCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "1.8rem",
    transition: "border-color 0.3s, transform 0.3s",
  },
  degree: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.1rem",
    color: "#38bdf8",
    fontWeight: "700",
    marginBottom: "4px",
  },
  institute: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: "#e2e8f0",
    fontWeight: "500",
    marginBottom: "8px",
    lineHeight: 1.4,
  },
  metaRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  year: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.8rem",
    color: "#64748b",
  },
  cgpa: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    color: "#38bdf8",
    fontWeight: "600",
    background: "rgba(56,189,248,0.1)",
    padding: "2px 10px",
    borderRadius: "100px",
  },
};

export default function Certifications() {
  return (
    <section id="certifications" style={styles.section}>
      <style>{`
        .cert-card:hover { border-color: rgba(56,189,248,0.3) !important; transform: translateY(-3px); }
        .edu-card:hover { border-color: rgba(56,189,248,0.3) !important; transform: translateY(-3px); }
      `}</style>
      <p style={styles.sectionLabel}>Credentials</p>
      <h2 style={styles.sectionTitle}>Certifications</h2>
      <p style={styles.sectionDesc}>
        Continuous learning through recognized programs and bootcamps.
      </p>
      <div style={styles.grid}>
        {certs.map((c) => (
          <div key={c.title} className="cert-card" style={styles.card}>
            <div style={styles.certBadge}>{c.icon}</div>
            <div style={styles.certInfo}>
              <p style={styles.certTitle}>{c.title}</p>
              <p style={styles.certIssuer}>{c.issuer}</p>
              <p style={styles.certDesc}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={eduStyles.eduSection}>
        <p style={{ ...styles.sectionLabel, marginBottom: "0.5rem" }}>Academic Background</p>
        <h2 style={{ ...styles.sectionTitle, fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>Education</h2>
        <div style={eduStyles.eduGrid}>
          {education.map((e) => (
            <div key={e.degree} className="edu-card" style={eduStyles.eduCard}>
              <p style={eduStyles.degree}>{e.degree}</p>
              <p style={eduStyles.institute}>{e.institute}</p>
              <div style={eduStyles.metaRow}>
                <span style={eduStyles.year}>{e.year}</span>
                <span style={eduStyles.cgpa}>CGPA {e.cgpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}