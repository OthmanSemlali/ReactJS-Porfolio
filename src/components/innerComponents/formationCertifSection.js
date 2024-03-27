import styled from "@emotion/styled";
import { Container, Section, theme } from "../../styles";
import CertificationItem from "../certificationItem";
import FormationItem from "../formationItem";

// import {formationPage} from '../json'

// import FormationItem from './formationItem'
// import CertificationItem from './certificationItem'

// import { Container, Section, theme } from '../styles'
// import Header from "./header"
// import Footer from "./footer"

const Title = styled.h2`
//   color: ${theme.colors.darkBlue};
color: ${theme.colors.lightGray};
  margin-bottom: 45px;
`;

const FormationCertifsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormationCertifs = (props) => {
  return (
    <>
      {/* <Header headsData={formationPage} scrollDown={true} /> */}

      <div class="container">
        cc
        <div class="linesd">
          <div class="linde"></div>
          <div class="lined"></div>
          <div class="lined"></div>

        
        </div>
        <Section
            bgColor={'transparent'}
            id="experience"
            className="bg-animated"
          >
    
            <Container>
              <Title>Formation.</Title>
              <FormationCertifsContainer>
                {props.formations.map((formation, i) => {
                  return (
                    <FormationItem
                      {...formation}
                      key={`${formation.company}`}
                    />
                  );
                })}
              </FormationCertifsContainer>
            </Container>
            <Container>
              <Title>Certificates.</Title>
              <FormationCertifsContainer>
                {props.certifications.map((certif, i) => {
                  return <CertificationItem {...certif} key={`${i}`} />;
                })}
              </FormationCertifsContainer>
            </Container>
          </Section>
      </div>
    </>
  );
};

export default FormationCertifs;
