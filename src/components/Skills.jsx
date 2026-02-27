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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "1.8rem",
    transition: "border-color 0.3s, transform 0.3s",
    cursor: "default",
  },
  cardIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "rgba(56,189,248,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    fontSize: "1.2rem",
  },
  cardTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    color: "#38bdf8",
    fontWeight: "600",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  tagWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  tag: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.8rem",
    color: "#94a3b8",
    background: "rgba(148,163,184,0.08)",
    border: "1px solid rgba(148,163,184,0.12)",
    borderRadius: "6px",
    padding: "4px 10px",
    fontWeight: "400",
  },
};

const skillCategories = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    skills: ["LLMs", "RAG", "Transformers", "Deep Learning", "Computer Vision"],
  },
  {
    icon: "💻",
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    icon: "🌐",
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "MERN Stack"],
  },
  {
    icon: "🗄️",
    title: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "FAISS", "Git", "VS Code", "Jupyter Notebook"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <style>{`
        .skill-card:hover { border-color: rgba(56,189,248,0.3) !important; transform: translateY(-4px); }
      `}</style>
      <p style={styles.sectionLabel}>Expertise</p>
      <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
      <p style={styles.sectionDesc}>
        A blend of AI/ML research capabilities and full-stack engineering skills.
      </p>
      <div style={styles.grid}>
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-card" style={styles.card}>
            <div style={styles.cardIcon}>{cat.icon}</div>
            <p style={styles.cardTitle}>{cat.title}</p>
            <div style={styles.tagWrap}>
              {cat.skills.map((s) => (
                <span key={s} style={styles.tag}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}