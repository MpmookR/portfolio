import Header from "../../components/header";
import Footer from "../../components/footer";
import CaseStudyHero from "../../components/caseStudy/CaseStudyHero";
import CaseStudyCTA from "../../components/caseStudy/CaseStudyCTA";
import CaseStudyReflection from "../../components/caseStudy/CaseStudyReflection";
import "../../css/ishare.css";
import iShareHero from "../../assets/images/projects/iShare/ishareHero.png";

const ISHARE_HERO = {
  badge: "Full-Stack Web App · University Coursework",
  title: "iShare",
  subtitle: "A recipe-sharing platform with a React SPA frontend and a RESTful ASP.NET Core backend",
  heroImage: {
    src: iShareHero,
    alt: "iShare recipe sharing app hero image",
  },
  meta: [
    { label: "Timeline", value: "Jan – Apr 2025" },
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Stack", value: "React · Redux · ASP.NET Core · SQLite" },
  ],
  links: [
    {
      href: "https://github.com/MpmookR/ishare",
      label: "Frontend Repo",
      variant: "outline",
      icon: "github",
    },
    {
      href: "https://github.com/MpmookR/homeCookAPI",
      label: "Backend Repo",
      variant: "outline",
      icon: "github",
    },
    {
      href: "https://zippy-cranachan-12b890.netlify.app",
      label: "🟢 Live Frontend",
      variant: "solid",
    },
        {
      href: "https://homecookapi.onrender.com",
      label: "🟢 Live Backend",
      variant: "solid",
    },
        {
      href: "https://drive.google.com/file/d/1OXVBdpcp3pUUkcjs1Qhe3Tfx4KZjeZER/view?usp=drive_link",
      label: "📽️ Walkthrough →",
      variant: "outline",
    },
  ],

};

function IShare() {
  return (
    <main className="containerBG">
      <Header />

      <CaseStudyHero {...ISHARE_HERO} />

      {/* ── OVERVIEW ── */}
      <section className="is-section is-section--alt">
        <div className="is-section-inner is-two-col">
          <div>
            <p className="is-eyebrow">Overview</p>
            <h2 className="is-section-title">A full-stack project built across two courseworks</h2>
            <p className="is-body">
              iShare is a recipe-sharing community where users can post, discover, like, save,
              and comment on recipes. It was built as a two-part university coursework:
              A .NET Core REST API first, then a React SPA consuming it. Each assessed
              independently and requiring production-quality architecture throughout.
            </p>
            <p className="is-body">
              The backend (HomeCookAPI) follows clean architecture with JWT authentication,
              role-based access control, repository pattern, and Swagger documentation.
              The frontend is a Redux-powered SPA with full API integration, responsive
              design, and deployment on Netlify.
            </p>
          </div>
          <div>
            <div className="is-stat-stack">
              <div className="is-stat-card is-stat-card--green">
                <span className="is-stat-num">2</span>
                <span className="is-stat-desc">Separate assessed projects. CW1: Backend API  and CW2: React frontend</span>
              </div>
              <div className="is-stat-card is-stat-card--blue">
                <span className="is-stat-num">5+</span>
                <span className="is-stat-desc">Entity models with one-to-many and many-to-many relationships</span>
              </div>
              <div className="is-stat-card is-stat-card--orange">
                <span className="is-stat-num">2</span>
                <span className="is-stat-desc">Live deployments. Frontend on Netlify and backend API on Render</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="is-section">
        <div className="is-section-inner">
          <p className="is-eyebrow">Features</p>
          <h2 className="is-section-title">What the app does</h2>
          <p className="is-body is-body--center">
            Every feature maps directly to an API endpoint.
            The frontend and backend fully integrate end-to-end.
          </p>

          <div className="is-features-grid">
            <div className="is-feature-card">
              <span className="is-feature-icon">🔐</span>
              <h4>User Authentication</h4>
              <p>Register, log in, and manage your profile. Secure JWT tokens with role-based access control (User, Admin, SuperAdmin).</p>
            </div>
            <div className="is-feature-card">
              <span className="is-feature-icon">🍽️</span>
              <h4>Recipe Management</h4>
              <p>Create, edit, delete, and browse recipes. Full CRUD operations consumed from the REST API.</p>
            </div>
            <div className="is-feature-card">
              <span className="is-feature-icon">🔍</span>
              <h4>Search & Discovery</h4>
              <p>Search for recipes by name or ingredient. Browse the community feed to discover new dishes.</p>
            </div>
            <div className="is-feature-card">
              <span className="is-feature-icon">❤️</span>
              <h4>Like & Save</h4>
              <p>Like recipes to show appreciation and save them to a personal collection for easy access later.</p>
            </div>
            <div className="is-feature-card">
              <span className="is-feature-icon">💬</span>
              <h4>Commenting</h4>
              <p>Leave comments on any recipe. Authenticated users can engage with the community directly.</p>
            </div>
            <div className="is-feature-card">
              <span className="is-feature-icon">📱</span>
              <h4>Responsive Design</h4>
              <p>Built with Bootstrap and custom CSS to work cleanly across laptop and mobile screen sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WALKTHROUGH VIDEO ── */}
      <section className="is-section is-section--alt">
        <div className="is-section-inner">
          <p className="is-eyebrow">Demo</p>
          <h2 className="is-section-title">A full walkthrough of the app</h2>
          <p className="is-body is-body--center">
             From login and recipe creation through to liking, saving, and commenting.
          </p>
          <div className="is-video-wrap">
            <iframe
              src="https://drive.google.com/file/d/1OXVBdpcp3pUUkcjs1Qhe3Tfx4KZjeZER/preview"
              title="iShare project walkthrough"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section className="is-section ">
        <div className="is-section-inner">
          <p className="is-eyebrow">Architecture</p>
          <h2 className="is-section-title">Two separate projects. One seamless experience.</h2>
          <p className="is-body is-body--center">
            Frontend and backend are independently deployed and communicate
            entirely through REST API calls with JWT bearer tokens.
          </p>

          <div className="is-arch-layers">
            <div className="is-arch-layer is-arch-layer--frontend">
              <span className="is-arch-layer-icon">⚛️</span>
              <div className="is-arch-layer-body">
                <h4>React Frontend — iShare</h4>
                <p>
                  Single-page application built with React, React Router, and Redux for global state management.
                  Bootstrap + custom CSS for responsive layout. Deployed on Netlify.
                  Consumes all backend endpoints for auth, recipes, likes, saves, and comments.
                </p>
              </div>
            </div>
            <div className="is-arch-connector">↕</div>
            <div className="is-arch-layer is-arch-layer--api">
              <span className="is-arch-layer-icon">🔧</span>
              <div className="is-arch-layer-body">
                <h4>ASP.NET Core REST API — HomeCookAPI</h4>
                <p>
                  RESTful API following clean architecture — Controllers → Services → Repositories.
                  JWT authentication via ASP.NET Core Identity. Role-based access control.
                  DTO-based contracts, ILogger integration, global error handling middleware.
                  Documented with Swagger. Deployed on Render.
                </p>
              </div>
            </div>
            <div className="is-arch-connector">↕</div>
            <div className="is-arch-layer is-arch-layer--db">
              <span className="is-arch-layer-icon">🗄️</span>
              <div className="is-arch-layer-body">
                <h4>SQLite — Entity Framework Core</h4>
                <p>
                  Lightweight relational database managed via Entity Framework Core migrations.
                  Fluent API for entity relationships (one-to-many, many-to-many).
                  Models: User, Recipe, Comment, Like, SavedRecipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACKEND ── */}
      <section className="is-section is-section--alt">
        <div className="is-section-inner">
          <p className="is-eyebrow">Backend Deep Dive</p>
          <h2 className="is-section-title">HomeCookAPI: built for correctness and security</h2>
          <p className="is-body is-body--center">
            The backend was assessed on architecture, security, testing, and deployment —
            not just whether it ran. Every design choice was deliberate.
          </p>

          <div className="is-detail-grid">
            <div className="is-detail-card">
              <span className="is-detail-tag">Auth</span>
              <h4>JWT + ASP.NET Identity</h4>
              <p>Secure login and registration with password hashing and salting. Token expiry and role-based route protection.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Architecture</span>
              <h4>Clean Layered Structure</h4>
              <p>Controllers handle HTTP only. Business logic lives in the Service layer. Data access is abstracted behind Repositories.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Data</span>
              <h4>DTOs + Validation</h4>
              <p>No direct entity exposure in API responses. Data Annotations enforce input validation before reaching the database.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Observability</span>
              <h4>ILogger Integration</h4>
              <p>Structured logging at info, warning, and error levels across all controllers and services for easier debugging.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Security</span>
              <h4>CORS + Rate Limiting</h4>
              <p>CORS policy scoped to the frontend domain. Rate limiting middleware to protect against abuse.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Docs</span>
              <h4>Swagger / OpenAPI</h4>
              <p>All endpoints documented with Swagger UI — descriptions, request/response schemas, and auth requirements included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRONTEND ── */}
      <section className="is-section">
        <div className="is-section-inner">
          <p className="is-eyebrow">Frontend Deep Dive</p>
          <h2 className="is-section-title">iShare: React SPA with full API integration</h2>
          <p className="is-body is-body--center">
            The frontend was assessed on API consumption, component reusability,
            state management, and React best practices — not just UI polish.
          </p>

          <div className="is-detail-grid">
            <div className="is-detail-card">
              <span className="is-detail-tag">State</span>
              <h4>Redux Global State</h4>
              <p>Auth state, saved recipes, and user session managed in Redux — avoiding prop drilling and keeping components clean.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Routing</span>
              <h4>React Router SPA</h4>
              <p>Client-side navigation with protected routes. No full page reloads between views — full SPA behaviour.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">API</span>
              <h4>Full Endpoint Coverage</h4>
              <p>Every backend endpoint consumed — auth, recipe CRUD, likes, saves, and comments — with loading and error states.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Components</span>
              <h4>Reusable Architecture</h4>
              <p>Broken into pages, components, and services directories. Shared components (RecipeCard, CommentList) used across views.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Styling</span>
              <h4>Bootstrap + Custom CSS</h4>
              <p>Bootstrap handles the responsive grid and base components. Custom CSS overrides for branding and layout specifics.</p>
            </div>
            <div className="is-detail-card">
              <span className="is-detail-tag">Deploy</span>
              <h4>Netlify CI/CD</h4>
              <p>Continuous deployment via GitHub integration. Every push to main triggers a new production build automatically.</p>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyReflection
        alt
        skills={[
          "Full-stack ownership (frontend + backend)",
          "RESTful API design (ASP.NET Core)",
          "JWT authentication & role-based access",
          "Clean architecture & repository pattern",
          "Entity Framework Core + SQLite",
          "React SPA + Redux state management",
          "React Router (protected routes)",
          "API consumption with error & loading states",
          "Responsive design (Bootstrap)",
          "Swagger API documentation",
          "CI/CD with Netlify + Render",
        ]}
        banner={
          <>
            <strong>What this shows:</strong> I can build and connect a complete full-stack system independently —
            designing the API contract, implementing authentication securely, wiring up the frontend to consume every
            endpoint, and shipping both sides to production. The two separate repositories reflect a real-world
            separation of concerns between frontend and backend teams.
          </>
        }
      />

      <CaseStudyCTA
        title="Explore iShare"
        subtitle="Try the live app or browse the code"
        buttons={[
          { label: "Live App →", href: "https://zippy-cranachan-12b890.netlify.app", variant: "solid", external: true },
          { label: "Frontend Repo", href: "https://github.com/MpmookR/ishare", variant: "outline-light", external: true },
          { label: "Backend Repo", href: "https://github.com/MpmookR/homeCookAPI", variant: "outline-light", external: true },
          { label: "← All Projects", href: "/portfolio", variant: "ghost" },
        ]}
      />

      <Footer />
    </main>
  );
}

export default IShare;
