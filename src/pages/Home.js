import React from "react";
import styled from "styled-components";

import Feature from "../components/Feature";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";

const HomeContainer = styled.div`
  background-color: #0b0b0b;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Feature />
      <MovieList />
    </HomeContainer>
  );
};

export default Home;
