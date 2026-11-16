import BackToTop from "../components/BackToTop";
import { DumbbellIcon, PlayIcon, WhiskIcon } from "../components/icons";
import { HEVY, TIKTOK } from "../../../data/site";
import portrait from "../../../assets/images/home/mook.jpg";
import resumePdf from "../../../assets/resumeFile/Mook_PRattana_PDEngineer.pdf";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="np-section np-section--paper" aria-labelledby="about-h" tabIndex={-1}>
      <span className="np-section-label">Section A · About me</span>
      <h2 id="about-h" className="np-section-title np-section-title--about">FROM 0 TO 1: SHE DESIGNS IT, THEN SHIPS IT</h2>

      <div className="np-about">
        <figure className="np-figure">
          <img src={portrait} alt="Mook smiling in a diner booth, holding her phone" loading="lazy" />
          <figcaption>Mook, phone in hand, most likely testing a build :) </figcaption>
        </figure>

        <div className="np-about-body">
          <div className="np-article">
            <p className="np-article-lede">
              Mook brings product design and engineering together, taking ideas from user research to working
              products.
            </p>

            <p>Her name is Puangpaka Rattana, but she goes by Mook.</p>
            <p>
              Her interest in design began in customer operations, where she saw how confusing digital journeys
              affected real people. Wanting to understand how her designs could become working products, she
              completed an MSc in Software Engineering.
            </p>
            <p>
              She’s now looking for a team where she can contribute, learn from experienced colleagues, and build
              useful products with care.
            </p>
          </div>

          <div className="np-toolkit">
            <h3 className="np-toolkit-label">The Toolkit</h3>
            <ul className="np-toolkit-list">
              {["Figma", "SwiftUI", "React", "TypeScript", "Firebase"].map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="np-about-extras">
        <aside className="np-extra np-offclock" aria-labelledby="offclock-h">
              <h3 id="offclock-h" className="np-kicker-label">Off the clock</h3>
              <ul className="np-list">
                <li>
                  <DumbbellIcon />
                  <span>
                    Lifting at the gym. Meet me on{" "}
                    <a href={HEVY} target="_blank" rel="noopener noreferrer">
                      Hevy
                    </a>
                    .
                  </span>
                </li>
                <li>
                  <WhiskIcon />
                  <span>I bake and cook. No promises it’s safe to eat.
                  </span>
                </li>
                <li>
                  <PlayIcon />
                  <span>TikToker with 5 likes, max. {""}
                    <a href={TIKTOK} target="_blank" rel="noopener noreferrer">
                      Tiktok
                    </a>
                  </span>
                </li>
              </ul>
            </aside>

        <div className="np-extra np-resume">
              <div className="np-resume-text">
                <h3 className="np-kicker-label">The full résumé</h3>
                <p>Projects, experience and skills on one page.</p>
              </div>
              <a className="np-resume-btn" href={resumePdf} download="PRattana_ProductEngineerCV.pdf">
                Download CV <span className="np-resume-meta">PDF, 1 page</span>
              </a>
            </div>
      </div>
      <BackToTop />
    </section>
  );
}
