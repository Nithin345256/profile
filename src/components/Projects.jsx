const styles = {
  section: {
    padding: "6rem 2rem",
    background: "rgba(56,189,248,0.02)",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  inner: {
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "rgba(10,10,20,0.6)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    transition: "border-color 0.3s, transform 0.3s",
  },
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
  },
  projectIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "rgba(56,189,248,0.1)",
    border: "1px solid rgba(56,189,248,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    flexShrink: 0,
  },
  projectTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#e2e8f0",
    lineHeight: 1.3,
    marginBottom: "2px",
  },
  projectCategory: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.75rem",
    color: "#38bdf8",
    fontWeight: "500",
    letterSpacing: "0.05em",
  },
  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.06)",
  },
  bulletList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  bullet: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.88rem",
    color: "#94a3b8",
    lineHeight: 1.6,
    paddingLeft: "1rem",
    position: "relative",
  },
  bulletDot: {
    position: "absolute",
    left: 0,
    top: "9px",
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "#38bdf8",
  },
  tagWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "auto",
  },
  tag: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.75rem",
    color: "#64748b",
    background: "rgba(100,116,139,0.1)",
    borderRadius: "4px",
    padding: "3px 8px",
  },
};

const projects = [
  {
    icon: "🤖",
    title: "AI-Powered Java Tutor Chatbot",
    category: "AI / NLP",
    bullets: [
      "Built an intelligent tutoring system using RAG and Transformers from a 1,595-page Java technical manual.",
      "Implemented chunk classification (code vs. prose) and FAISS similarity search across 2,459 embedded segments.",
      "Integrated Google Gemini API with prompt engineering for structured, step-by-step explanations with page references.",
    ],
    tags: ["RAG", "Transformers", "FAISS", "Gemini API", "Python"],
  },
  {
    icon: "♻️",
    title: "Waste Classification System",
    category: "Computer Vision",
    bullets: [
      "Developed a YOLOv5-based image classification system to classify waste as dry or wet for efficient recycling.",
      "Built an interactive Streamlit app supporting image, camera, and video inputs with bounding boxes and confidence scores.",
    ],
    tags: ["YOLOv5", "Streamlit", "Computer Vision", "Python"],
  },
  {
    icon: "🗺️",
    title: "HelpHim — Map-Based Reporting Platform",
    category: "Full Stack",
    bullets: [
      "Created a location-aware reporting system using Google Maps API for geo-tagged public issue reporting.",
      "Designed an Officer Dashboard with role-based access control, real-time updates, and priority-based task management.",
    ],
    tags: ["Google Maps API", "MERN Stack", "RBAC", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <style>{`
        .project-card:hover { border-color: rgba(56,189,248,0.3) !important; transform: translateY(-4px); }
      `}</style>
      <div style={styles.inner}>
        <p style={styles.sectionLabel}>Work</p>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <p style={styles.sectionDesc}>
          Real-world applications spanning AI research, computer vision, and full-stack development.
        </p>
        <div style={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className="project-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.projectIcon}>{p.icon}</div>
                <div>
                  <p style={styles.projectTitle}>{p.title}</p>
                  <p style={styles.projectCategory}>{p.category}</p>
                </div>
              </div>
              <div style={styles.divider} />
              <ul style={styles.bulletList}>
                {p.bullets.map((b, i) => (
                  <li key={i} style={styles.bullet}>
                    <span style={styles.bulletDot} />
                    {b}
                  </li>
                ))}
              </ul>
              <div style={styles.tagWrap}>
                {p.tags.map((t) => (
                  <span key={t} style={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}