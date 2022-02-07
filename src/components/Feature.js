import React from "react";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import styled, { css } from "styled-components";
import Netflix from "../assets/images/Netflix.jpg";
import lord from "../assets/images/lord.jpg"

const FeatureContainer = styled.div`
  height: 90vh;
  position: relative;
`;

const InfoContainer = styled.div`
  width: 35%;
  position: absolute;
  left: 50px;
  bottom: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  img {
    width: 400px;
  }
  .desc {
    margin: 20px 0px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
  background: ${(props) => (props.primary ? "white" : "#0b0b0b")};
  color: ${(props) => (props.primary ? "#0b0b0b" : "white")};
  span {
    margin-left: 5px;
  }
`;

const Feature = () => {
  return (
    <FeatureContainer>
      <img src={Netflix} alt="main" />
      <InfoContainer>
        <img src={lord} alt="logo" />
        <span className="desc">
          The Matrix depicts a dystopian future in which humanity is unknowingly
          trapped inside a simulated reality, the Matrix, which intelligent
          machines have created to distract humans while using their bodies as
          an energy source.
        </span>
        <ButtonContainer>
          <StyledButton primary>
            <PlayArrow />
            <span>Play</span>
          </StyledButton>
          <StyledButton>
            <InfoOutlined />
            <span>Info</span>
          </StyledButton>
        </ButtonContainer>
      </InfoContainer>
    </FeatureContainer>
  );
};

export default Feature;
