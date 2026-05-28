
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/header.css";
import "../css/footer.css";
import "../css/resume.css";

function Resume() {
  const skillsData = [
    {
      title: "🚀 iOS & Mobile",
      skills: ["Swift", "SwiftUI", "Combine", "async/await", "UIKit", "MapKit", "Core Location", "HealthKit"],
    },
    {
      title: "💻 Frontend & Web",
      skills: ["TypeScript", "JavaScript", "React", "SolidJS", "HTML", "CSS", "Vite"],
    },
    {
      title: "🏗️ Architecture",
      skills: ["MVVM", "Clean Architecture", "Modular Structure", "State Management"],
    },
    {
      title: "☁️ Backend & Cloud",
      skills: ["Firebase Auth", "Firestore", "Cloud Functions", "REST APIs", "FCM"],
    },
    {
      title: "🎨 Design & Tools",
      skills: ["Figma", "Xcode", "VSCode", "Git", "GitHub", "Postman"],
    },
  ];



  return (
    <main className="containerBG">
      <Header />
      <div className="resume-container">
        {/* Header */}
        <div className="resume-header containerMain">
          <h1 className="resume-title">Puangpaka (Mook) Rattana</h1>
          <p className="resume-subtitle">Frontend Developer • iOS Engineer • MSc Software Engineering</p>
        </div>

        {/* Quick Contact Links */}
        <div className="resume-cta">
          <div className="resume-contact-links">
            <a href="mailto:mpmookr@gmail.com" className="resume-contact-link">
              💌 mpmookr@gmail.com
            </a>
            <a href="https://github.com/MpmookR" target="_blank" rel="noopener noreferrer" className="resume-contact-link">
              🔗 GitHub
            </a>
            <a href="https://www.linkedin.com/in/puangpaka-rattana-4608981b2/" target="_blank" rel="noopener noreferrer" className="resume-contact-link">
              🔗 LinkedIn
            </a>
          </div>
        </div>

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

        {/* About Me - Professional Summary */}
        <section className="resume-section">
          <h2 className="resume-section-title">About Me</h2>
          <div className="resume-items">
            <div className="resume-item">
              <p style={{fontSize: "clamp(14px, 2vw, 16px)", color: "#555", lineHeight: "1.8"}}>
                I'm a full-stack software engineer with hands-on experience building iOS apps (SwiftUI, MVVM) and web applications (React, TypeScript). Strong product thinking with UX design foundation. Experienced in full lifecycle: discovery, prototyping, implementation, testing, and deployment. Currently targeting roles as <strong>iOS Engineer, Frontend Engineer, or Product Designer</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          <div className="resume-items">
            <div className="resume-item">
              <h3 className="resume-role">🐶 SoPup: Dog Socialisation iOS App</h3>
              <p className="resume-company">MSc Final Project | June – October 2025</p>
              <ul className="resume-list">
                <li>Designed and developed a dual-mode iOS app (Puppy Mode & Social Mode) focused on responsible dog socialisation</li>
                <li>Built modular serverless backend using Firebase Cloud Functions (TypeScript), supporting matchmaking, real-time chat, meetups and reviews</li>
                <li>Integrated push notifications with FCM and optimised Firestore queries for real-time performance</li>
                <li>Delivered full UX lifecycle: interviews, surveys, personas, wireframes, prototypes, and usability testing</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">🌿 SoWell: Mood Tracker iOS App</h3>
              <p className="resume-company">Personal Project | March – April 2025</p>
              <ul className="resume-list">
                <li>Built HealthKit-integrated mood and wellbeing tracker with diary entries, calendar view, and weekly summaries</li>
                <li>Implemented SwiftData local persistence with cloud sync via Firebase</li>
                <li>Developed clean MVVM structure with secure user data handling</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">🎨 Freelance UX Designer</h3>
              <p className="resume-company">MoodBoard iOS Widget App | April 2023 – October 2024</p>
              <ul className="resume-list">
                <li>Improved onboarding and redesigned photo editing flow by translating 28 user survey responses into targeted UX updates</li>
                <li>Simplified widget editing workflows by redesigning UI from scroll-heavy layout into tap-based grouped panel</li>
                <li>Collaborated closely with iOS developer to ensure smooth translation from Figma to production, aligned with iOS standards</li>
              </ul>
            </div>
         </div>

        </section>
        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-items">
            <div className="resume-item">
              <h3 className="resume-role">MSc Software Engineering (Distinction)</h3>
              <p className="resume-company">University of Westminster, London</p>
              <ul className="resume-list">
                <li>Final Project: SoPup iOS App — Built production-ready mobile app with MVVM architecture and Firebase integration</li>
                <li>Specialized in mobile development, cloud services, and full-stack architecture</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">Google UX Design Certificate</h3>
              <p className="resume-company">Coursera</p>
              <ul className="resume-list">
                <li>Mastered user research, wireframing, prototyping, and design systems in Figma</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3 className="resume-role">BBA Marketing</h3>
              <p className="resume-company">Prince of Songkla University, Thailand</p>
            </div>
          </div>
        </section>

        {/* Key Strengths */}
        <section className="resume-section">
          <h2 className="resume-section-title">What I Bring</h2>
          <div className="resume-items">
            <div className="resume-item">
              <ul className="resume-list">
                <li>Production iOS apps with SwiftUI, MVVM, and Clean Architecture patterns</li>
                <li>Frontend features with TypeScript, React, and modern JavaScript tooling</li>
                <li>Full-stack capabilities: Firebase, Cloud Functions, REST APIs integration</li>
                <li>Bridge between UX design and engineering across mobile and web platforms</li>
                <li>Strong foundation in async/await, Combine, and state management</li>
                <li>Experience as Freelance UX Designer — delivered Figma to production handoffs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>


      <Footer />
    </main>
  );
}

export default Resume;