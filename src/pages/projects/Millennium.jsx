import Header from "../../components/header";
import Footer from "../../components/footer";
import ComingSoon from "../../components/ComingSoon";

function Millennium() {
  return (
    <main className="containerBG">
      <Header />
      <ComingSoon
        badge="Website Redesign Case Study"
        title="Millennium Residence"
        teaser="Complete redesign of a condominium's website to enhance user experience, improve navigation, and modernize the visual design"
      />
      <Footer />
    </main>
  );
}

export default Millennium;
