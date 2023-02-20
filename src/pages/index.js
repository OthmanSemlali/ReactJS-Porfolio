// helmet set.js


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Projects from "../components/projects";
import Contact from "../components/contact";

import FormationCertifs from "../components/FormationCertifs";
import Home from "../components/SharedLayout";

import { greeting, projects, formations, certifications,ErrorData} from "../json";







const IndexPage = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Header data={greeting} />} />
        <Route path="projects" element={<Projects scrollDown={true} data={projects} />} />
        <Route path="formation" element={<FormationCertifs
          formations={formations}
          certifications={certifications}
        />} />
        
        <Route path="contact" element={<Contact data={projects} />}></Route>
        <Route path="*" element={<Header headsData = {ErrorData} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default IndexPage;
