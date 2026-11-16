import Jump from "../components/Jump";
import Typewriter from "../components/Typewriter";
import { RIGHT_TO_WORK } from "../../../data/site";
import teaserPortrait from "../../../assets/images/home/mook-censored.jpg";
import teaserProject from "../../../assets/images/home/teaser-project.png";
import "./FrontPage.css";

const APPROACH = ["Understand the problem.", "Design the experience.", "Build it. Test it. Improve it."];

// The paper texture is a background image (see .np-front in FrontPage.css);
// this only adds the two fold creases on top.
function Folds() {
  return <div className="np-fold" aria-hidden="true" />;
}

// The masthead and the story cards that link down to each section.
export default function FrontPage() {
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short" });

  return (
    <article className="np-front" aria-label="Front page">
      <header className="np-masthead">
        <div className="np-dateline">
          <span>London edition · {today}</span>
          <span>Portfolio for today</span>
          <span>Open to work</span>
        </div>
        <h1 className="np-title">The Daily Mook</h1>
        <nav className="np-nav" aria-label="Sections">
          <Jump to="about">About</Jump>
          <Jump to="projects">Projects</Jump>
          <Jump to="contact">Contact</Jump>
        </nav>
      </header>

      <div className="np-front-grid">
        <Jump to="about" className="np-story np-lead">
          <span className="np-kicker np-kicker--tag">Breaking</span>
          <h2 className="np-lead-title">DESIGN × ENGINEER</h2>
          <p className="np-hand np-lead-sub">
            <span className="np-highlight">building end-to-end, from research to shipped code</span>
          </p>
          <span className="np-sticker" aria-hidden="true">
            OPEN
            <br />
            TO
            <br />
            WORK!
          </span>
          <span className="np-tap">Read the full story ↓</span>
        </Jump>

        <Jump to="about" className="np-story np-teaser">
          <div className="np-panel np-panel--photo">
            <img src={teaserPortrait} alt="Mook in a diner booth, eyes hidden behind a black bar that says Censored" />
          </div>
          <h3 className="np-teaser-title">FROM 0 TO 1: SHE DESIGNS IT, THEN SHIPS IT</h3>
          <p>Meet Mook, a designer and developer who takes products from user research to the App Store.</p>
          <span className="np-tap">About me →</span>
        </Jump>

        <Jump to="projects" className="np-story np-teaser">
          <div className="np-panel np-panel--photo">
            <img src={teaserProject} alt="Mook in a diner booth, eyes hidden behind a black bar that says Censored" />
          </div>              
          <h3 className="np-teaser-title">FOUR PROJECTS SHIP, NOBODY PANICS</h3>
          <p>SoPup, Ondo, Local Edition and MoodBoard: case studies with the research, the decisions and the code.</p>
          <span className="np-tap">See projects →</span>
        </Jump>

        <div className="np-classifieds">
          <Jump to="contact" className="np-story np-ad np-ad--hire">
            <span className="np-hand np-ad-title">Hiring?</span>
            <span>Product engineer, frontend or product designer roles. Inquire within.</span>
            <span className="np-rtw">{RIGHT_TO_WORK}</span>
            <span className="np-tap">Contact →</span>
          </Jump>
          <div className="np-ad np-ad--approach">
            <h3 className="np-ad-shout">THE APPROACH</h3>
            <Typewriter lines={APPROACH} />
          </div>
        </div>
      </div>

      <Folds />
    </article>
  );
}
