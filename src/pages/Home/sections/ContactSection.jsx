import Badge from "../../../components/Badge";
import BackToTop from "../components/BackToTop";
import Signature from "../components/Signature";
import CopyButton from "../components/CopyButton";
import { CodeIcon } from "../components/icons";
import { EMAIL, GITHUB, LINKEDIN, RIGHT_TO_WORK_DETAIL, RIGHT_TO_WORK_LABEL } from "../../../data/site";
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
              reply 🫶🏼
            </p>
            {/* Rubber stamp. The hidden full stop makes screen readers pause
                between the two lines instead of running them together. */}
            <p className="np-rtw-stamp">
              <span className="np-rtw-stamp-label">{RIGHT_TO_WORK_LABEL}</span>
              <span className="np-visually-hidden">. </span>
              <span className="np-rtw-stamp-detail">{RIGHT_TO_WORK_DETAIL}</span>
            </p>
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
              {/* The address itself is the link, so people on webmail can
                  read or copy it instead of relying on a mail app. */}
              <li className="np-address-email">
                <a href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}>
                  {/* <wbr> lets a narrow phone break the line after the @, never mid-word */}
                  <span className="np-hand">
                    {EMAIL.split("@")[0]}@<wbr />
                    {EMAIL.split("@")[1]}
                  </span>
                </a>
                <CopyButton text={EMAIL} label="Copy email address" className="np-copy" />
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
