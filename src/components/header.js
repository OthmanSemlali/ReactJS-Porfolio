import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import bgUrl from "../images/earth.png";
import { Container, theme, media } from "../styles";
import scroll from "../images/sc.gif";
import { Link } from "react-router-dom";

const Head = styled.header`
  height: 100vh;
  background-image: url(${bgUrl});
  background-size: cover;
  background-position: center;

  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  padding-bottom: 20px;
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.largeUp} {
    padding-left: 100px;

    padding-right: 100px;
  }

  .LinkHome {
    color: ${theme.colors.yellow};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-in-out;
  width: 60px;
  height: 60px;
  background-image: url(${scroll});
  background-size: cover;
  background-position: center;
`;

const HeaderText = styled.h1`
  margin-bottom: 5px;
  max-width: 900px;
  ${media.medium} {
    max-width: 700px;
  }

  ${media.small} {
    max-width: 500px;
  }
`;

const HeaderTitle = styled.h5`
  font-size: 20px;
  color: ${theme.colors.gray};
  max-width: 480px;
  margin-bottom: 10px;

  ${media.medium} {
    font-size: 18px;
  }
`;

const Header = ({ data, headsData, scrollDown }) => {
  const [isMounted, setIsMounted] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      iconRef.current.style.opacity = "0";
    } else {
      iconRef.current.style.opacity = "1";
    }
  };

  const one = () => (
    <HeaderTitle style={{ transitionDelay: "100ms", color: "white" }}>
      {headsData ? headsData.title : data.intro}
    </HeaderTitle>
  );
  const two = () => (
    <HeaderText style={{ transitionDelay: "200ms" }}>
      {headsData ? headsData.subTitle : data.name}
    </HeaderText>
  );

  const three = () => (
    <HeaderTitle style={{ transitionDelay: "300ms" }}>
      {headsData ? headsData.subCopy : data.subCopy}
    </HeaderTitle>
  );

  const linkHome = () => (
    <Link to="/" className="LinkHome" style={{ transitionDelay: "400ms" }}>
      {headsData ? (headsData.LinkHome ? "Go Home ›" : null) : null}
    </Link>
  );
  const items = [one, two, three, linkHome];

  return (
    <>
      <Head>
        <Container>
          <TransitionGroup>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                  {item}
                </CSSTransition>
              ))}
          </TransitionGroup>
        </Container>
        {scrollDown ? <Icon ref={iconRef}></Icon> : null}
      </Head>
    </>
  );
};

export default Header;
