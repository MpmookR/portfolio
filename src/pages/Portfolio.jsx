import Header from "../components/header";
import ProjectCard from "../components/projectCard";
import Footer from "../components/footer";
import "../css/portfolio.css";
import "../css/header.css";

function Portfolio() {
  const frontendProjects = [
    {
      title: "Sopup",
      description: "A serverless iOS app designed to promote safe dog socialisation. It introduces a dual-mode system to enforce welfare rules and guide responsible interactions.",
      image: "/src/assets/images/projects/soPup/soPup_logo.png",
      link: "/projects/sopup",
      tags: ["Swift", "SwiftUI", "SwiftData", "Node.js/TypeScript", "Firebase Cloud Functions", "Serverless", "API Integration", "UX/UI Design"],
      featured: true,
    },
    {
      title: "SoWell",
      description: "TBC",
      image: "/src/assets/portfolio/taskapp.jpg",
      link: "/projects/sowell",
      tags: ["React", "Redux", "UI/UX"],
    },
    {
      title: "iShare",
      description: "TBC",
      image: "/src/assets/portfolio/weather.jpg",
      link: "/projects/ishare",
      tags: ["React", "API", "JavaScript"],
    },
  ];

  const uxProjects = [
    {
      title: "Mobile App Design",
      description: "A complete mobile app design system for a fitness tracking application with user flows and wireframes.",
      image: "/src/assets/portfolio/fitness-design.jpg",
      link: "/project/mobile-app-design",
      tags: ["Figma", "UX Design", "Wireframing"],
      featured: true,
    },
    {
      title: "Website Redesign",
      description: "Complete redesign of a corporate website focusing on user experience, accessibility, and modern design principles.",
      image: "/src/assets/portfolio/website-redesign.jpg",
      link: "/project/website-redesign",
      tags: ["UI/UX", "Figma", "Design System"],
    },
    {
      title: "User Interface Kit",
      description: "Comprehensive UI kit with components, patterns, and guidelines for consistent design across projects.",
      image: "/src/assets/portfolio/ui-kit.jpg",
      link: "/project/ui-kit",
      tags: ["Design System", "Figma", "Components"],
    },
  ];

  return (
    <main className="containerBG">
      <Header />
      <div className="portfolio-container">
      <div className="portfolio-header containerMain">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-subtitle">
          Showcasing Frontend Engineering & UX Design Work
        </p>
      </div>

      {/* Frontend Engineering Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Frontend Engineering</h2>
        <div className="projects-grid">
          {frontendProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
              featured={project.featured}
            />
          ))}
        </div>
      </section>

      {/* UX Design Section */}
      <section className="portfolio-section">
        <h2 className="section-title">UX Design</h2>
        <div className="projects-grid">
          {uxProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
              featured={project.featured}
            />
          ))}
        </div>
      </section>
      </div>

      <Footer />
    </main>
  );
}

export default Portfolio;