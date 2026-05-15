import Footer from "../components/footer";
import ClickableFolder from "../components/clickableFolder";

function Home() {
  return (
    <main className="containerBG">
      <div className="top-section containerMain">
        <header className="home-header">
          <a href="/" className="logo" aria-label="Mook's Portfolio logo">
            <img
              src="/src/assets/images/logo/logo_orange.svg"
              alt="Mook's Portfolio logo"
            />
          </a>
        </header>

        {/* Hero Section */}
        <section className="heroName" aria-labelledby="hero-title">
          {/* Title */}
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

      <section className="hero heroTop containerMain">
        <div className="hero-image">
          <img
            src="/src/assets/images/home/hero.svg"
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

      <Footer />
    </main>
  );
}

export default Home;
