import Header from "../../components/header";
import Footer from "../../components/footer";
import ComingSoon from "../../components/ComingSoon";

function PassionHub() {
  return (
    <main className="containerBG">
      <Header />
      <ComingSoon
        badge="Web Design"
        title="Passion Hub"
        teaser="Designed a responsive website for a child development and therapy centre, improving service discovery, parent engagement, and access to support programs through user-centred UX design"
      />
      <Footer />
    </main>
  );
}

export default PassionHub;
