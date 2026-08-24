import Header from "../components/header";
import ProjectCard from "../components/projectCard";
import Footer from "../components/footer";
import "../css/portfolio.css";
import "../css/header.css";
import soPupLogo from "../assets/images/projects/soPup/soPup_logo.png";
import soWellLogo from "../assets/images/projects/soWell/soWell_logo.png";
import iShareLogo from "../assets/images/projects/iShare/iShareLogo.png";
import moodboardLogo from "../assets/images/projects/MoodBoard/moodboard_logo.png";
import passionHubLogo from "../assets/images/projects/passionHub/passionHub_logo.png";
import millenniumLogo from "../assets/images/projects/MillenniumResidence/millennium_logo.png";

function Portfolio() {
  const frontendProjects = [
    {
      title: "Sopup",
      description: "A serverless iOS app designed to promote safe dog socialisation. It introduces a dual-mode system to enforce welfare rules and guide responsible interactions.",
      image: soPupLogo,
      link: "/projects/sopup",
      tags: ["Swift", "SwiftUI", "SwiftData", "Node.js/TypeScript", "Firebase Cloud Functions", "Serverless", "API Integration", "UX/UI Design"],
      featured: true,
    },
    {
      title: "SoWell",
      description: "A HealthKit-integrated mood and wellbeing tracker with diary entries, calendar view, and weekly summaries to help users monitor their mental health and identify patterns",
      image: soWellLogo,
      link: "/projects/sowell",
      tags: ["Swift", "SwiftUI", "SwiftData", "Firebase", "HealthKit", "API Integration", "UX/UI Design"],
    },
    {
      title: "iShare",
      description: "A social recipe-sharing platform where users can post, search, like, save, and comment on recipes, fostering a vibrant community of food enthusiasts",
      image: iShareLogo,
      link: "/projects/ishare",
      tags: ["React", "C#", "ASP.NET Core", "SQLite", "Redux", "Swagger", "Netlify", "Render"],
    },
  ];

  const uxProjects = [
    {
      title: "MoodBoard: iOS Widget App",
      description: "Led UX improvements for onboarding and photo editing workflows, translating user research into developer-ready solutions and collaborating closely with the iOS engineer during implementation",
      image: moodboardLogo,
      link: "/projects/moodboard",
      tags: ["Figma", "UX Design", "UX Research","Wireframing","Prototyping","User Flows","Usability Testing", "Stakeholder Engagement", "Developer Collaboration", "Real-world Product Experience"],
      featured: true,
    },
    {
      title: "The Passion Hub: Web Platform",
      description: "Designed a child development centre website, collaborating with stakeholders to translate business goals into an accessible and user-centred web experience",
      image: passionHubLogo,
      link: "/projects/passionhub",
      tags: ["UI/UX", "Figma", "UX Research","Wireframing","Prototyping", "Stakeholder Engagement", "Developer Collaboration", "Real-world Product Experience"],
    },
    {
      title: "The Millennium Residence: Website Redesign",
      description: "Complete redesign of a condominium's website to enhance user experience, improve navigation, and modernize the visual design.",
      image: millenniumLogo,
      link: "/projects/Millennium",
      tags: ["UI/UX", "Figma", "Web Redesign"],
    },
  ];

  return (
    <main className="containerBG">
      <Header />
      <div className="portfolio-container">
      <div className="portfolio-header containerMain">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-subtitle">
          Showcasing Product Design & Engineering Work
        </p>
      </div>

      {/* Product Design & Engineering Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Product Design & Engineering</h2>
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