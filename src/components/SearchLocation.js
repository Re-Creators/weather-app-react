import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "../api/axios";
import { getWeatherByWoeid } from "../features/weather/weatherSlice";
import Loading from "./Loading";

function SearchLocation({ changeLayout }) {
  const [locations, setLocations] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  async function search() {
    setLoading(true);
    const { data } = await axios.get(`/location/search/?query=${keyword}`);

    setLoading(false);
    setLocations(data);
  }

  function chooseLocation(woeid) {
    dispatch(getWeatherByWoeid(woeid));
    changeLayout();
  }

  return (
    <StyledContainer>
      <StyledButton onClick={() => changeLayout()}>
        <span className="material-icons">close</span>
      </StyledButton>
      <StyledSearchContainer>
        <StyledSearch>
          <input
            type="text"
            placeholder="search location"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <span className="material-icons">search</span>
        </StyledSearch>
        <StyledSearchButton onClick={search}>Search</StyledSearchButton>
      </StyledSearchContainer>
      <StyledLocations>
        {loading ? (
          <Loading />
        ) : (
          locations.map((location, index) => (
            <>
              <StyledLocation
                key={location.woeid}
                onClick={() => chooseLocation(location.woeid)}
              >
                <span>{location.title}</span>
                <span className="material-icons">navigate_next</span>
              </StyledLocation>
            </>
          ))
        )}
      </StyledLocations>
    </StyledContainer>
  );
}

export default SearchLocation;

const StyledContainer = styled.div`
  padding: 14px 24px;
  display: flex;
  flex-direction: column;
  min-height: 711px;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  align-self: self-end;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

const StyledSearch = styled.div`
  position: relative;
  color: white;
  width: 75%;

  input {
    width: 100%;
    padding: 12px 16px;
    padding-left: 40px;
    background: transparent;
    border: 1px solid white;
    outline: none;
    color: white;
  }

  span {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.6;
  }
`;

const StyledSearchButton = styled(StyledButton)`
  padding: 14px 16px;
  background-color: #3c47e9;
  margin-left: 12px;
`;

const StyledLocations = styled.div`
  width: 100%;
  height: 600px;
  max-height: 100%;
  margin-top: 32px;
`;
const StyledLocation = styled.div`
  color: white;
  display: flex;
  align-items: cente;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: white;
  }
`;
