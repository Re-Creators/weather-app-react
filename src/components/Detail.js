import styled from "styled-components";
import Hightlights from "./Hightlights";
import Weather from "./Weather";
import {
  selectLoading,
  selectWeathers,
  selectError,
} from "../features/weather/weatherSlice";
import { useSelector } from "react-redux";
import moment from "moment";
import Loading from "./Loading";

function Detail() {
  const loading = useSelector(selectLoading);
  const weathers = useSelector(selectWeathers);
  const error = useSelector(selectError);

  if (error) return error;
  return (
    <StyledContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <StyledScaleButton>
            <button>&#8451;</button>
            <button>&#x2109;</button>
          </StyledScaleButton>
          <StyledWeatherLists>
            {weathers.slice(1).map((weather, index) => (
              <Weather
                key={index}
                date={
                  index === 0
                    ? "Tomorrow"
                    : moment(new Date(weather.applicable_date)).format(
                        "ddd, DD MMM"
                      )
                }
                img={weather.weather_state_name.replace(" ", "")}
                minTemp={Math.round(weather.min_temp)}
                maxTemp={Math.round(weather.max_temp)}
              />
            ))}
          </StyledWeatherLists>
          <Hightlights />
        </>
      )}
    </StyledContainer>
  );
}

export default Detail;

const StyledContainer = styled.div`
  width: 100%;
  height: 711px;
  padding: 1.6rem 2rem;
  color: white;

  @media (min-width: 768px) {
    width: 65%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 75%;
    padding: 1.6rem 8rem;
  }
`;

const StyledScaleButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    border: none;
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-right: 16px;
    padding: 8px;
    border-radius: 50%;
    background-color: white;
  }
`;

const StyledWeatherLists = styled.div`
  margin-top: 66px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
