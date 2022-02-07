import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React from "react";
import MovieItem from "./MovieItem";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Title = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-left: 50px;
`;

const Wrapper = styled.div`
  position: relative;
  .sliderArrow {
    width: 50px;
    height: 100%;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
`;

const MovieContainer = styled.div`
  margin-left: 50px;
  display: flex;
  margin-top: 10px;
  width: max-content;
  transform: translateX(0px);
`;

const MovieList = () => {
  return (
    <ListContainer>
      <Wrapper>
        <MovieContainer>
          <MovieItem index={0} />
          <MovieItem index={1} />
          <MovieItem index={2} />
          <MovieItem index={3} />
          <MovieItem index={4} />
          <MovieItem index={5} />
        </MovieContainer>
      </Wrapper>
    </ListContainer>
  );
};

export default MovieList;
