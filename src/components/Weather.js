import styled from "styled-components";
function Weather({ date, maxTemp, minTemp, img }) {
  return (
    <StyledContainer>
      <span>{date}</span>
      <img src={`/images/${img}.png`} alt="" />
      <div className="temp">
        <span>{minTemp}&#8451;</span>
        <span>{maxTemp}&#8451;</span>
      </div>
    </StyledContainer>
  );
}

export default Weather;

const StyledContainer = styled.div`
  width: 45%;
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-primary);
  padding: 1rem;

  @media (min-width: 768px) {
    width: 18%;
    margin-bottom: 0;
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  img {
    width: 100%;
    height: 80px;
    object-fit: contain;
  }

  span {
    height: 35px;
  }

  .temp {
    font-size: 14px;
    margin-top: 14px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
