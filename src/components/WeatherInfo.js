import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectLoading,
  selectWeatherToday,
  selectError,
} from "../features/weather/weatherSlice";
import moment from "moment";
import Loading from "./Loading";

function WeatherInfo({ changeLayout }) {
  const loading = useSelector(selectLoading);
  const today = useSelector(selectWeatherToday);
  const error = useSelector(selectError);

  if (error) return error;
  return (
    <StyledContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <StyledHeader>
            <button onClick={() => changeLayout()}>Search for places</button>
            <span className="material-icons">gps_fixed</span>
          </StyledHeader>
          <StyledCloud>
            <div className="cloud-background">
              <img src="/images/Cloud-background.png" alt="" />
            </div>
            <div className="cloud">
              <img
                src={`/images/${today.weather_state_name.replace(" ", "")}.png`}
                alt=""
              />
            </div>
          </StyledCloud>
          <StyledState>
            <div className="temp">
              {Math.round(today.the_temp)}
              <span>&#8451;</span>
            </div>
            <div className="state">{today.weather_state_name}</div>
          </StyledState>
          <StyledLocation>
            <div className="date">Today . {moment().format("ddd, DD MMM")}</div>
            <div className="location">
              <span className="material-icons">location_on</span> {today.city}
            </div>
          </StyledLocation>
        </>
      )}
    </StyledContainer>
  );
}

export default WeatherInfo;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 2rem 0px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1.3rem;

  button {
    padding: 0.8rem;
    border: none;
    color: #e7e7eb;
    background-color: var(--color-button);
    cursor: pointer;
  }

  span {
    background-color: var(--color-button);
    padding: 8px;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const StyledCloud = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-top: 20px;

  .cloud-background {
    position: absolute;
    inset: 0;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.3;
      object-fit: contain;
    }
  }

  .cloud {
    height: 100%;
    display: flex;
    justify-content: center;

    img {
      height: 100%;
      object-fit: contain;
    }
  }
`;

const StyledState = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .temp {
    font-size: 6rem;
    font-weight: 500;

    span {
      font-size: 48px;
      opacity: 0.6;
    }
  }

  .state {
    font-size: 36px;
    font-weight: 600;
    margin-top: 20px;
    opacity: 0.6;
  }
`;

const StyledLocation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  opacity: 0.6;

  .location {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
`;
