
import styled from "@emotion/styled"

import {formationPage} from '../json'

import FormationItem from './formationItem'
import CertificationItem from './certificationItem'

import { Container, Section, theme } from '../styles'
import Header from "./header"
import Footer from "./footer"

const Title = styled.h2`
  color: ${theme.colors.darkBlue};
  margin-bottom: 45px;
`;

const FormationCertifsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormationCertifs = (props) => {


  return (
    <>
    <Header headsData={formationPage} scrollDown={true} />

    <Section bgColor={theme.colors.light} id="experience">
      <Container>
        <Title>Formation.</Title>
        <FormationCertifsContainer>
          {
            props.formations.map((formation, i) => {
              return <FormationItem
                {...formation}
                key={`${formation.company}`}
      
                 />
            })
          }
        </FormationCertifsContainer>
      </Container>
      

      <Container>
        <Title >Certificates.</Title>
        <FormationCertifsContainer>
          {
            props.certifications.map((certif, i) => {
              return <CertificationItem
                {...certif}
                key={`${i}`}
 
                />
            })
          }
        </FormationCertifsContainer>
      </Container>
    </Section>
    <Footer></Footer>
    </>

  )
}

export default FormationCertifs
