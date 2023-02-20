import React, { useEffect} from "react";
import styled from "@emotion/styled";
import { Element } from "react-scroll";
import ScrollReveal from "scrollreveal";
import Project from "./project";
import FeaturedProject from "./featuredProject";
import { Container, Section, theme, media } from "../styles";
import Header from "./header";
import Footer from "./footer";
import { projectsPage } from "../json";


const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 20px;

  ${media.mediumOnly} {
    grid-template-columns: 1fr 1fr;

    .featured {
      grid-column: span 2;
    }
  }

  ${media.largeUp} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 40px;

    .project {
      grid-column: span 2;
    }

    .feature-1 {
      grid-column: 1/4;
      grid-row: 1/3;
    }

    .feature-2 {
      grid-column: 3/6;
      grid-row: 3/5;
    }
  }
`;

// const ViewMoreProjects = styled.div`
//   background-color: ${theme.colors.mayerPurple};
//   color: ${theme.colors.light};
//   text-align: center;
//   padding: 12px 20px;
//   border-radius: ${theme.borderRadius};
//   width: 350px;
//   margin-top: 30px;
//   margin-left: auto;
//   margin-right: auto;
//   box-shadow: ${theme.boxShadow};
//   transition: ${theme.transition};
//   &:hover {
//     cursor: pointer;
//     box-shadow: ${theme.boxShadowHover};
//   }

// `

const Projects = ({ data }) => {
  const revealRefs = [];


  useEffect(() => {
    window.scrollTo(0, 0);
    const revealConfig = theme.scrollRevealConfig;
    revealConfig.afterReveal = (el) => {
      el.style.transform = "";
      el.style.transition = "";
    };

    revealRefs.forEach((ref) => ScrollReveal().reveal(ref, revealConfig));
  }, [revealRefs]);



  return (
    <>
      
      <Header headsData={projectsPage} scrollDown={true} />


      <Section bgColor={theme.colors.light} id="projects">
        <Container>
          <Element name="projects" />

          <ProjectGrid>
            {data.map((project, i) => {
              
              if (project.featured) {
                return (
                  <FeaturedProject
                    {...project}
                    key={project.title}
                    ref={(ref) => (revealRefs[i] = ref)
                    }
                  />
                );
              }
              return (
                <Project
                  {...project}
                  key={project.title}
                  ref={(ref) => (revealRefs[i] = ref)
                  }
                />
              );
            })}
          </ProjectGrid>
        </Container>
      </Section>
      <Footer></Footer>
    </>
  );
};

export default Projects;
