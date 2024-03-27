import React from "react";
import Header from "../components/header";
import { certifications, formations, greeting, projects } from "../json";
import ProjectsSection from "../components/innerComponents/projectsSection";
import FormationCertifSection from "../components/innerComponents/formationCertifSection";
import Contact from "../components/contact";
import ContactSection from "../components/innerComponents/contactSection";
import Footer from "../components/footer";

function Landing() {
  return (
    <>
      <Header data={greeting} scrollDown={true} typing={true} />
      <ProjectsSection data={projects} />
      <FormationCertifSection
        formations={formations}
        certifications={certifications}
      />

      <ContactSection />

      {/* <footer></footer> */}
      <Footer />
    </>
  );
}

export default Landing;
