import Header from "../../components/header";
import Footer from "../../components/footer";
import ComingSoon from "../../components/ComingSoon";

function IShare() {
  return (
    <main className="containerBG">
      <Header />
      <ComingSoon
        badge="Full-Stack Web App Case Study"
        title="iShare"
        teaser="A full-stack recipe-sharing platform built with ASP.NET Core Web API and React, enabling users to create, share, save, rate, and comment on recipes. Features secure JWT authentication, role-based access control, and a scalable clean architecture with documented REST APIs"
      />
      <Footer />
    </main>
  );
}

export default IShare;
