import { useState } from "react";
import styled from "styled-components";
import SearchLocation from "./SearchLocation";
import WeatherInfo from "./WeatherInfo";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function Sidebar() {
  const [showInfo, setShowInfo] = useState(true);
  return (
    <StyledContainer>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={showInfo}
          addEvenetListener={(node, done) => {
            node.addEvenetListener("transitioned", done, false);
          }}
          classNames="slide"
          timeout={300}
        >
          {showInfo ? (
            <WeatherInfo changeLayout={() => setShowInfo(false)} />
          ) : (
            <SearchLocation changeLayout={() => setShowInfo(true)} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </StyledContainer>
  );
}

export default Sidebar;

const StyledContainer = styled.div`
  width: 100%;
  height: 711px;
  background-color: var(--color-primary);

  @media (min-width: 768px) {
    width: 35%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;
