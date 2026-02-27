const styles = {
  section: {
    padding: "6rem 2rem",
    background: "rgba(56,189,248,0.02)",
    borderTop: "1px solid rgba(255,255,255,0.05)",
  },
  inner: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
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
  },
  sectionDesc: {
    fontFamily: "'DM Sans', sans-serif",
    color: "#64748b",
    fontSize: "1rem",
    lineHeight: 1.7,
    maxWidth: "500px",
    margin: "0 auto 3.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.2rem",
    marginBottom: "3rem",
  },
  contactCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "1.5rem",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
    transition: "border-color 0.3s, transform 0.3s",
  },
  contactIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "rgba(56,189,248,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
  },
  contactLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.75rem",
    color: "#64748b",
    fontWeight: "500",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  contactValue: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    color: "#e2e8f0",
    fontWeight: "500",
    wordBreak: "break-all",
    textAlign: "center",
  },
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: "2rem",
    marginTop: "1rem",
  },
  footerText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.82rem",
    color: "#475569",
  },
  footerAccent: {
    color: "#38bdf8",
  },
};

const contacts = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9740984469",
    href: "tel:+919740984469",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "nithinmalve009@gmail.com",
    href: "mailto:nithinmalve009@gmail.com",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Nithin345256",
    href: "https://github.com/Nithin345256",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/Nithinmalve",
    href: "https://linkedin.com/in/Nithinmalve",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <style>{`
        .contact-card:hover { border-color: rgba(56,189,248,0.4) !important; transform: translateY(-4px); }
        .contact-card:hover .contact-icon { background: rgba(56,189,248,0.2) !important; }
      `}</style>
      <div style={styles.inner}>
        <p style={styles.sectionLabel}>Get in Touch</p>
        <h2 style={styles.sectionTitle}>Let's Connect</h2>
        <p style={styles.sectionDesc}>
          Open to internships, full-time roles, and interesting project collaborations in AI/ML and full-stack development.
        </p>
        <div style={styles.grid}>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact-card"
              style={styles.contactCard}
            >
              <div className="contact-icon" style={styles.contactIcon}>{c.icon}</div>
              <p style={styles.contactLabel}>{c.label}</p>
              <p style={styles.contactValue}>{c.value}</p>
            </a>
          ))}
        </div>
        {/* <div style={styles.footer}>
          <p style={styles.footerText}>
          </p>
        </div> */}
      </div>
    </section>
  );
}