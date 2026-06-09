import Footer from "../components/footer";
import ClickableFolder from "../components/clickableFolder";
import logoOrange from "../assets/images/logo/logo_orange.svg";
import heroImage from "../assets/images/home/hero.svg";

function Home() {
  return (
    <main className="home-page containerBG">
      <div className="home-main-content">
        {/* header + title */}
        <div className="top-section containerMain">
          <header className="home-header">
            <a href="/" className="logo" aria-label="Mook's Portfolio logo">
              <img
                src={logoOrange}
                alt="Mook's Portfolio logo"
              />
            </a>
          </header>

          <section className="heroName" aria-labelledby="hero-title">
            <div className="hero-title-block">
              <h1 id="hero-title" className="hero-title">
                Junior Frontend Engineer
              </h1>
              <p className="hero-name" aria-label="Puangpaka Mook Rattana">
                <span className="name-first">Puangpaka</span>
                <span className="name-nickname" aria-hidden="true">
                  mook
                </span>
                <span className="name-last">Rattana</span>
              </p>
            </div>
          </section>
        </div>

        {/* hero image + folders */}
        <section className="hero heroTop containerMain">
          <div className="hero-image">
            <img
              src={heroImage}
              alt="Puangpaka short description"
              className="hero-img"
            />
          </div>

          <div className="folders-grid">
            <ClickableFolder
              folderType="lightBlue"
              label="Projects"
              path="/portfolio"
            />
            <ClickableFolder folderType="pink" label="Resume" path="/resume" />
          </div>
        </section>
      </div>

      {/* Sliding Text Animation */}

      <div className="sliding-text-container">
        <div className="sliding-text">
          <div className="sliding-text-group">
            <span>Open to new opportunities</span>
            <span>☼</span>
            <span>Let’s build something fun</span>
            <span>☼</span>
            <span>Open to new opportunities</span>
            <span>☼</span>
          </div>

          <div className="sliding-text-group" aria-hidden="true">
            <span>Let’s build something fun</span>
            <span>☼</span>
            <span>Open to new opportunities</span>
            <span>☼</span>
            <span>Let’s build something fun</span>
            <span>☼</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Home;
