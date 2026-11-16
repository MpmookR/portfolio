import Badge from "../../../components/Badge";
import BackToTop from "../components/BackToTop";
import Signature from "../components/Signature";
import { CodeIcon } from "../components/icons";
import { EMAIL, GITHUB, LINKEDIN, RIGHT_TO_WORK } from "../../../data/site";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="np-postcard-wrap" aria-labelledby="contact-h" tabIndex={-1}>
      <div className="np-postcard">
        <div className="np-postcard-sides">
          <div className="np-postcard-message">
            <span className="np-small-caps">This space for writing messages</span>
            {/* One heading, two lines: screen readers hear "Hiring...? Let’s talk." */}
            <h2 id="contact-h" className="np-hand np-postcard-title">
              <span className="np-postcard-line">Hiring...?</span>{" "}
              <span className="np-postcard-line">Let’s talk.</span>
            </h2>
            <p className="np-hand np-postcard-note">
              I’m looking for product engineer, frontend or product designer roles. Write back any time, I always
              reply.
            </p>
            <p className="np-rtw np-rtw--postcard">{RIGHT_TO_WORK}</p>
            <div className="np-signoff">
              <span className="np-hand">Yours,</span>
              <Signature className="np-sig" />
            </div>
          </div>

          <div className="np-postcard-address">
            <div className="np-postcard-top">
              <Badge className="np-badge" />
              <div className="np-stamp">
                <div className="np-stamp-inner">
                  <CodeIcon />
                  <span>1ST CLASS</span>
                </div>
              </div>
            </div>

            <div className="np-postcard-head">
              <span className="np-postcard-word">POST CARD</span>
              <span className="np-small-caps">This space for address only</span>
            </div>

            <ul className="np-address" aria-label="Ways to reach me">
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <span className="np-hand">Email</span>
                  <span className="np-address-cta">Send a letter →</span>
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <span className="np-hand">LinkedIn</span>
                  <span className="np-address-cta">Connect →</span>
                </a>
              </li>
              <li>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  <span className="np-hand">GitHub</span>
                  <span className="np-address-cta">Read the code →</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <BackToTop />
      </div>
    </section>
  );
}
