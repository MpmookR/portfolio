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
        "React Router",
        "HTML",
        "CSS",
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
      ],
    },
    {
      title: "🏗️ Architecture",
      skills: [
        "MVVM",
        "Clean Architecture",
        "Modular Structure",
        "State Management",
        "SPA Development",
        "API Integration",
      ],
    },
    {
      title: "☁️ Backend & Cloud",
      skills: [
        "Node.js",
        "Firebase Auth",
        "Firestore",
        "Firebase Storage",
        "Cloud Functions",
        "REST APIs",
        "FCM",
      ],
    },
    {
      title: "🎨 UX & Product Design",
      skills: [
        "UX Research",
        "Wireframing",
        "Prototyping",
        "User Flows",
        "Usability Testing",
        "Design Systems",
        "Figma",
      ],
    },
    {
      title: "🛠️ Tools",
      skills: ["Git", "GitHub", "Postman", "VSCode", "VSCode"],
    },
    {
      title: "🤖 AI-Assisted Development",
      skills: ["Claude Code", "ChatGPT"],
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
            Frontend Developer • UX Designer • MSc Software Engineering
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
                <strong>
                  <span className="keyword-highlight">
                    Frontend & UX-Focused Software Developer
                  </span>
                </strong>{" "}
                with experience building responsive web and iOS applications
                using React, SwiftUI, TypeScript, and API-driven backends.
                Combining a background in UX design with an MSc in Software
                Engineering, I enjoy creating digital products that are both
                intuitive for users and well-engineered behind the scenes.
              </p>

              <p className="resume-summary">
                I am particularly interested in{" "}
                <strong>
                  <span className="keyword-highlight">
                    Frontend Developer roles where design and development work
                    closely together.
                  </span>
                </strong>{" "}
                I enjoy translating ideas, wireframes, and user requirements
                into polished, accessible, and responsive experiences, while
                collaborating with designers, developers, and stakeholders to
                solve real user problems.
              </p>

              <p className="resume-summary">
                What excites me most is working in product-focused or agency
                environments where I can contribute to both the user experience
                and the technical implementation, helping turn concepts into
                engaging and impactful digital products.
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

        {/* Tech Stack */}
        <section className="resume-section">
          <h2 className="resume-section-title">Tech Stack</h2>
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
                <Link to="/projects/sopup">🐶 SoPup: Dog Socialisation iOS App</Link>
              </h3>
              <p className="resume-company">
                MSc Final Project | June – October 2025
              </p>

              <ul className="resume-list">
                <li>
                  Led product design and frontend development of a dual-mode
                  mobile platform, designing user flows, wireframes, prototypes,
                  and production-ready interfaces.
                </li>
                <li>
                  Translated UX research, usability testing, and user feedback
                  into iterative improvements across onboarding, matchmaking,
                  messaging, and meetup experiences.
                </li>
                <li>
                  Developed responsive SwiftUI interfaces integrated with
                  Firebase Auth, Firestore, Storage, and Cloud Functions.
                </li>
                <li>
                  Built modular backend services in TypeScript supporting
                  matchmaking, messaging, reviews, and real-time social
                  interactions.
                </li>
                <li>
                  Implemented real-time data updates, push notifications, and
                  scalable architecture while maintaining a user-centred
                  experience.
                </li>
              </ul>

              <p className="resume-tools">
                Tools: SwiftUI, TypeScript, Firebase, Node.js, Figma, MVVM
              </p>
            </div>

            <div className="resume-item">
              <h3 className="resume-role"><Link to="/projects/sowell">🌿 SoWell: Mood Tracker iOS App</Link></h3>
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
                <Link to="/projects/ishare">🍱 iShare: Recipe Sharing Web Platform</Link>
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
                <Link to="/projects/moodboard">MoodBoard iOS Widget App</Link> | July 2023 – April 2024
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
              <h3 className="resume-role">Bachelor’s in marketing</h3>
              <p className="resume-company">
                Prince of Songkla University, Thailand
              </p>
            </div>
          </div>
        </section>

        {/* Key Strengths */}
        {/* <section className="resume-section">
          <h2 className="resume-section-title">What I Bring</h2>
          <div className="resume-items">
            <div className="resume-item">
              <ul className="resume-list">
                <li>
                  Production iOS apps with SwiftUI, MVVM, and Clean Architecture
                  patterns
                </li>
                <li>
                  Frontend features with TypeScript, React, and modern
                  JavaScript tooling
                </li>
                <li>
                  Full-stack capabilities: Firebase, Cloud Functions, REST APIs
                  integration
                </li>
                <li>
                  Bridge between UX design and engineering across mobile and web
                  platforms
                </li>
                <li>
                  Strong foundation in async/await, Combine, and state
                  management
                </li>
                <li>
                  Experience as Freelance UX Designer — delivered Figma to
                  production handoffs
                </li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>

      <Footer />
    </main>
  );
}

export default Resume;
