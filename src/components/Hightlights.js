import styled from "styled-components";
import { selectWeatherToday } from "../features/weather/weatherSlice";
import { useSelector } from "react-redux";

function Hightlights() {
  const today = useSelector(selectWeatherToday);

  return (
    <StyledContainer>
      <h2>Today’s Hightlights </h2>
      <StyledHightlights>
        <StyledHightlight>
          <span>Wind Status</span>
          <div className="hightlight__value">
            <span className="hightlight__large">
              {today.wind_speed.toFixed(1)}
            </span>{" "}
            mph
          </div>
          <div className="hightlight__direction">
            <span className="material-icons icon">near_me</span>{" "}
            {today.wind_direction_compass}
          </div>
        </StyledHightlight>
        <StyledHightlight>
          <span>Humidity</span>
          <div className="hightlight__value">
            <span className="hightlight__large">{today.humidity}</span> mph
          </div>
          <StyledHumidity>
            <span>0</span>
            <span>50</span>
            <span>100</span>
            <span>%</span>
            <div
              className="indicator"
              style={{ width: `${today.predictability}px` }}
            ></div>
          </StyledHumidity>
        </StyledHightlight>
        <StyledHightlight>
          <span>Visibility</span>
          <div className="hightlight__value">
            <span className="hightlight__large">
              {today.visibility.toFixed(1)}
            </span>{" "}
            miles
          </div>
        </StyledHightlight>
        <StyledHightlight>
          <span>Air Pressure</span>
          <div className="hightlight__value">
            <span className="hightlight__large">
              {today.air_pressure.toFixed(1)}
            </span>{" "}
            mb
          </div>
        </StyledHightlight>
      </StyledHightlights>
    </StyledContainer>
  );
}

export default Hightlights;

const StyledContainer = styled.div`
  padding: 2rem 0px;
`;

const StyledHightlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .hightlight__direction {
    display: flex;
    align-items: center;

    .icon {
      padding: 6px;
      font-size: 14px;
      background-color: var(--color-button);
      border-radius: 50%;
      margin-right: 10px;
      transform: rotate(180deg);
    }
  }
`;

const StyledHightlight = styled.div`
  width: 45%;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 28px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    padding: 22px 32px;
  }

  .hightlight__value {
    margin: 8px 0px;
  }

  .hightlight__large {
    font-size: 28px;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }
`;

const StyledHumidity = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  margin-top: 12px;
  background-color: white;
  border-radius: 16px;

  span {
    position: absolute;
    top: -16px;
    font-size: 12px;
  }

  span:nth-child(1) {
    left: 0;
  }

  span:nth-child(2) {
    left: 50%;
    transform: translateX(-50%);
  }

  span:nth-child(3) {
    right: 0;
  }

  span:nth-child(4) {
    right: 0;
    top: 5px;
  }

  .indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffec65;
    border-radius: 80px;
  }
`;
