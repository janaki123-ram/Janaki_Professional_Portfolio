import { motion } from "framer-motion";
import { ArrowUpRight, Github, TrendingUp, GraduationCap } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const Icon = index === 0 ? TrendingUp : GraduationCap;

  return (
    <motion.article
      className={`project-card ${project.accent}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
    >
      <div className="project-visual">
        <div className="project-window">
          <div className="window-top"><i /><i /><i /><span>PROJECT PREVIEW</span></div>
          <div className="visual-content">
            <div className="visual-icon"><Icon size={24} /></div>
            <div className="visual-lines"><b /><i /><i /></div>
            {index === 0 ? (
              <div className="mini-chart">
                <div className="chart-label"><span>PORTFOLIO VALUE</span><strong>+12.8%</strong></div>
                <svg viewBox="0 0 420 105" role="img" aria-label="Decorative rising chart">
                  <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="currentColor" stopOpacity=".28"/><stop offset="100%" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs>
                  <path d="M0 82 C35 76 38 60 75 67 S120 84 150 54 S200 61 225 43 S270 53 300 28 S355 43 420 8 L420 105 L0 105Z" fill="url(#chartFill)" />
                  <path d="M0 82 C35 76 38 60 75 67 S120 84 150 54 S200 61 225 43 S270 53 300 28 S355 43 420 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            ) : (
              <div className="login-preview">
                <span>STUDENT PORTAL</span><b>Welcome back</b><i /><i /><em>Sign in</em>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="project-info">
        <div className="project-meta"><span>{project.number} / 02</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
        </div>
      </div>
    </motion.article>
  );
}