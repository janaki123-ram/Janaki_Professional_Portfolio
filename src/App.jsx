import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  MapPin, Code2, Sparkles, ExternalLink, GraduationCap, BriefcaseBusiness
} from "lucide-react";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import { profile, projects, skills, experience, publication } from "./data";

function App() {
  const groupedSkills = [...new Set(skills.map(skill => skill.group))];

  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="availability"><span /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="hero-intro">Hello, I'm</p>
            <h1>{profile.name.split(" ").slice(0, 2).join(" ")}<br /><span>{profile.name.split(" ").slice(2).join(" ")}</span></h1>
            <h2>{profile.role} <span>— {profile.secondaryRole}</span></h2>
            <p className="hero-description">
              I build clean, useful web experiences and enjoy turning ideas into working applications.
              Currently strengthening my skills in software development and AI.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button-secondary" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
              <span className="social-location"><MapPin size={14} /> {profile.location}</span>
            </div>
          </motion.div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-monogram"><span>J</span><i>.</i></div>
            <div className="floating-card card-code"><Code2 size={17} /><span>Building with code</span></div>
            <div className="floating-card card-spark"><Sparkles size={17} /><span>Always learning</span></div>
            <div className="art-caption">DEVELOPER <span>·</span> PROBLEM SOLVER <span>·</span> CREATOR</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious mind. Practical builder." />
          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy">I'm a computer applications student who enjoys <span>building technology</span> and learning how things work.</p>
              <p>My interests include web development, problem solving, and artificial intelligence. I focus on learning by building projects and improving one step at a time.</p>
            </div>
            <div className="education-card">
              <div className="education-icon"><GraduationCap /></div>
              <div><span className="card-overline">EDUCATION · 2024—2027</span><h3>Bachelor of Computer Applications</h3><p>Aditya Degree College</p><small>CGPA: 7.00</small></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionHeading eyebrow="WHAT I WORK WITH" title="Skills & technologies" description="A growing toolkit across programming, frontend development, databases, and core concepts." />
          <div className="skills-groups">
            {groupedSkills.map(group => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="skill-pills">{skills.filter(skill => skill.group === group).map(skill => <span key={skill.name}>{skill.name}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects I've built." description="A couple of projects where I put my development skills into practice." />
          <div className="projects-list">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <SectionHeading eyebrow="LEARNING JOURNEY" title="Experience & publication" description="Learning through structured training, practical exploration, and research." />
          <div className="timeline">
            {experience.map(item => (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-icon"><BriefcaseBusiness size={19} /></div>
                <div className="timeline-content"><span className="card-overline">{item.period}</span><h3>{item.title}</h3><p className="timeline-org">{item.organization}</p><p>{item.description}</p></div>
              </div>
            ))}
            <div className="timeline-item">
              <div className="timeline-icon"><Code2 size={19} /></div>
              <div className="timeline-content"><span className="card-overline">JANUARY 2025</span><h3>{publication.title}</h3><p className="timeline-org">{publication.event}</p><p>{publication.description}</p></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-orb" />
            <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
            <h2>Let's create something<br /><span>meaningful.</span></h2>
            <p className="contact-copy">I'm open to connecting, learning, and exploring opportunities in software development and AI.</p>
            <a className="button-primary" href={`mailto:${profile.email}`}>Say hello <Mail size={17} /></a>
            <div className="contact-bottom">
              <span><MapPin size={14} /> {profile.location}</span>
              <div><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">J<span>.</span></span><span>{profile.shortName}<small>PORTFOLIO</small></span></a><p>Designed & built with care · © {new Date().getFullYear()} {profile.name}</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </>
  );
}

export default App;