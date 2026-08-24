import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/header.css";
import "../css/footer.css";
import "../css/resume.css";

function Resume() {
  const skillsData = [
    {
      title: "💻 Frontend & Web",
      skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "React Router",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
        "Accessibility (WCAG)",
      ],
    },
    {
      title: "🚀 iOS & Mobile",
      skills: [
        "Swift",
        "SwiftUI",
        "Combine",
        "async/await",
        "UIKit",
        "MapKit",
        "Core Location",
        "HealthKit",
        "TestFlight",
      ],
    },
    {
      title: "🏗️ Engineering & Architecture",
      skills: [
        "MVVM",
        "Clean Architecture",
        "Component-Based Architecture",
        "Modular Structure",
        "State Management",
        "API Integration",
        "Authentication",
        "Responsive Implementation",
      ],
    },
    {
      title: "☁️ Backend & Cloud",
      skills: [
        "Node.js",
        "REST APIs",
        "Firebase Auth",
        "Firestore",
        "Firebase Storage",
        "Cloud Functions",
        "Firebase Cloud Messaging",
        "Sanity CMS",
      ],
    },
    {
      title: "🎨 UX & Product Design",
      skills: [
        "UX Research",
        "User Flows",
        "Information Architecture",
        "Wireframing",
        "Interactive Prototyping",
        "Usability Testing",
        "Design Systems",
        "Developer Handoff",
        "Figma",
      ],
    },
    {
      title: "🤖 AI & Prototyping",
      skills: [
        "OpenAI API",
        "Claude Code",
        "ChatGPT",
        "Figma MCP",
        "Prompt Design",
        "Structured Outputs",
        "AI-Assisted Prototyping",
      ],
    },
    {
      title: "🛠️ Development Tools",
      skills: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <main className="containerBG">
      <Header />
      <div className="resume-container">
        {/* Header */}
        <div className="resume-header containerMain">
          <h1 className="resume-title">Puangpaka (Mook) Rattana</h1>
          <p className="resume-subtitle">
            Frontend-Focused Product Engineer • Product Designer • MSc Software
            Engineering
          </p>
        </div>

        {/* Quick Contact Links */}
        <div className="resume-cta">
          <div className="resume-contact-links">
            <a href="mailto:mpmookr@gmail.com" className="resume-contact-link">
              💌 mpmookr@gmail.com
            </a>
            <a
              href="https://github.com/MpmookR"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-link"
            >
              🔗 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/puangpaka-rattana-4608981b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-link"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        {/* About Me - Professional Summary */}
        <section className="resume-section">
          <h2 className="resume-section-title">About Me</h2>
          <div className="resume-items">
            <div className="resume-item">
              <p className="resume-summary">
                I’m a <strong>Product Designer &amp; Engineer</strong> who
                enjoys turning real user problems into thoughtful digital
                products. With a background in product design and an MSc in Software
                Engineering, I bring together user research, product thinking and technical understanding to take ideas from early exploration to tested, working experiences.
              </p>

              <p className="resume-summary">
                My work spans health, wellbeing and social products across web and iOS, reflecting my personal interest in fitness, nutrition and technology that improves everyday life. I care about simplifying complex journeys, creating accessible and polished interfaces, and collaborating with users and cross-functional teams to ensure the final product is both useful and practical to build.
              </p>

              <p className="resume-summary">
                I’m particularly interested in roles where design and
                engineering work closely together and where I can continue
                learning while contributing to products with a meaningful
                impact.
              </p>

              <p className="resume-summary">
                <strong>
                  <span className="keyword-highlight">
                    Eligible to work in the UK • No employer sponsorship
                    required now or in the future
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="resume-section">
          <h2 className="resume-section-title">Skills & Tools</h2>
          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="skill-tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          <div className="resume-items">
            <div className="resume-item">
              <h3 className="resume-role">
                <Link to="/projects/sopup">
                  🐶 SoPup: Dog Socialisation iOS App
                </Link>
              </h3>
              <p className="resume-company">
                MSc Final Project | June – October 2025
              </p>

              <ul className="resume-list">
                <li>
                  Led the end-to-end product design and development of an iOS
                  app helping dog owners find compatible dogs and arrange safer
                  meetups by combined interviews with dog owners and research
                  from veterinarians and dog trainers to design a full-stack
                  dog-socialisation application and custom
                  compatibility-matching logic.
                </li>
                <li>
                  Designed the backend architecture and built Node.js and
                  TypeScript REST API services consumed by the SwiftUI
                  application.
                </li>
                <li>
                  Developed a location and behaviour aware matching algorithm,
                  duplicate-request prevention and controlled meetup status
                  transitions.
                </li>
                <li>
                  Implemented Firestore data models and queries,
                  duplicate-request prevention, Firebase Authentication and push
                  notifications.
                </li>
                <li>
                  Automated the creation of a chat room when a match was
                  accepted, connecting database operations, notifications and
                  frontend responses.
                </li>
                <li>
                  Structured the codebase using models, services and
                  repositories, separating user interface, business logic and
                  data access.
                </li>
                <li>
                  Released through TestFlight to 20+ users, using feedback to
                  improve product flows and implementation.
                </li>
              </ul>

              <p className="resume-tools">
                Tools: SwiftUI, TypeScript, Firebase, Node.js, Figma, MVVM
              </p>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">
                <Link to="/projects/sowell">
                  🌿 SoWell: Mood Tracker iOS App
                </Link>
              </h3>
              <p className="resume-company">
                MSc Group Project | March – April 2025
              </p>
              <ul className="resume-list">
                <li>
                  Designed and developed a mood and wellness tracking app,
                  combining UX research, user flows, wireframes, and SwiftUI
                  implementation
                </li>
                <li>
                  Created accessible mood tracking, diary, calendar, and weekly
                  summary experiences with clear visual hierarchy and
                  mobile-first interaction patterns
                </li>
                <li>
                  Integrated HealthKit to connect wellbeing insights with user
                  activity and sleep data.
                </li>
                <li>
                  Implemented SwiftData for local persistence and Firebase for
                  authentication and cloud data handling.
                </li>
                <li>
                  Applied MVVM architecture to keep the app scalable, testable,
                  and easy to maintain.
                </li>
              </ul>
              <p className="resume-tools">
                Tools: SwiftUI, SwiftData, HealthKit, Firebase Auth, Firestore,
                MVVM, Figma
              </p>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">
                <Link to="/projects/ishare">
                  🍱 iShare: Recipe Sharing Web Platform
                </Link>
              </h3>
              <p className="resume-company">
                MSc Solo Project | March – April 2025
              </p>
              <ul className="resume-list">
                <li>
                  Designed and developed a responsive recipe-sharing platform,
                  translating user requirements and interface concepts into
                  reusable React components.
                </li>
                <li>
                  Created accessible and mobile-friendly user experiences using
                  modern UI patterns, consistent component design, and
                  responsive layouts.
                </li>
                <li>
                  Integrated frontend interfaces with REST APIs supporting
                  authentication, recipe management, comments, likes, and saved
                  recipes.
                </li>

                <li>
                  Developed backend services using ASP.NET Core, Entity
                  Framework Core, SQLite, and JWT authentication.
                </li>

                <li>
                  Implemented Redux state management and React Router navigation
                  to deliver a seamless single-page application experience.
                </li>
              </ul>
              <p className="resume-tools">
                Tools: React, TypeScript, ASP.NET Core, SQLite, Redux, Figma
              </p>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">🎨 Freelance UX Designer</h3>
              <p className="resume-company">
                <Link to="/projects/moodboard">MoodBoard iOS Widget App</Link> |
                July 2023 – April 2024
              </p>
              <ul className="resume-list">
                <li>
                  Improved onboarding and redesigned photo editing flow by
                  translating 28 user survey responses into targeted UX updates
                </li>
                <li>
                  Simplified widget editing workflows by redesigning UI from
                  scroll-heavy layout into tap-based grouped panel
                </li>
                <li>
                  Collaborated closely with iOS developer to ensure smooth
                  translation from Figma to production, aligned with iOS
                  standards
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">
                👩🏽‍💻 Team Leader & Subject Matter Expert
              </h3>
              <p className="resume-company">
                Teleperformance, Malaysia | July 2019 – July 2021
              </p>
              <ul className="resume-list">
                <li>
                  Led and coached a distributed customer service team using
                  structured performance frameworks, moving multiple
                  underperforming agents into top 5–10 rankings
                </li>
                <li>
                  Managed schedules, KPIs, performance reviews, and acted as the
                  main liaison between agents, quality, training, and management
                  teams, while supporting onboarding through guidance and
                  documentation
                </li>
                <li>
                  Investigated recurring system/interface issues and prepared
                  reports, reducing escalations and repeat issues
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">🎪 Co-Producer & Administrator</h3>
              <p className="resume-company">
                Talk Of The Town , Thailand | October 2017 – June 2019
              </p>
              <ul className="resume-list">
                <li>
                  Coordinated large-scale events (music festivals, New Year
                  events, product launches) with 1,000–10,000+ attendees,
                  managing schedules, timelines, and task allocation across
                  internal teams and external vendors
                </li>
                <li>
                  Coordinated travel and logistics for artists and key guests,
                  including flights, hotels, transport, and restaurant bookings,
                  while acting as the central liaison across creative, finance,
                  production, security, and external partners
                </li>
                <li>
                  Prepared run sheets, budgets, and post-event documentation,
                  contributing to smooth delivery, high client satisfaction, and
                  repeat engagements.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-items resume-items-ed">
            <div className="resume-item">
              <h3 className="resume-role">
                MSc Software Engineering (Distinction)
              </h3>
              <p className="resume-company">
                University of Westminster, London
              </p>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">Google UX Design Certificate</h3>
              <p className="resume-company">Coursera</p>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">Bachelor’s in Marketing</h3>
              <p className="resume-company">
                Prince of Songkla University, Thailand
              </p>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

export default Resume;
