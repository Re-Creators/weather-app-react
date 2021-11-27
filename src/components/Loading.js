import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <Ball>
        <div></div>
      </Ball>
    </Container>
  );
}
export default Loading;
const Ball = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 50px;
    height: 50px;
    border: 5px solid #63aed9;
    border-top-color: transparent;
    border-radius: 50%;
  }

  div {
    animation: ldio-mh3zcws7mp 1s linear infinite;
    top: 100px;
    left: 100px;
  }
  @keyframes ldio-mh3zcws7mp {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  background: none;
`;
