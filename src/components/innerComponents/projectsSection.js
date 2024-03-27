
import React from "react";
import { Container, Section, theme, media } from "../../styles";
import Project from "../project";
import styled from "@emotion/styled";
import FeaturedProject from "../featuredProject";
import { Element } from "react-scroll";


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

const Title = styled.h2`
  color: ${theme.colors.darkBlue};
// color: ${theme.colors.lightGray};
  margin-bottom: 30px;
`;
function ProjectsSection({data}) {
  return (
    <Section bgColor={theme.colors.light} id="projects">
      <Container>
      <Title>Projects.</Title>

        <Element name="projects" />

        <ProjectGrid>
          {data.map((project, i) => {
            if (project.featured) {
              return (
                <FeaturedProject
                  {...project}
                  key={project.title}
                  // ref={(ref) => (revealRefs[i] = ref)}
                />
              );
            }
            return (
              <Project
                {...project}
                key={project.title}
                // ref={(ref) => (revealRefs[i] = ref)}
              />
            );
          })}
        </ProjectGrid>
      </Container>
    </Section>
  );
}

export default ProjectsSection;
