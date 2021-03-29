import React from "react";
import { UserDetails } from "./UserDetails";
import { UserInfo } from "./userInfo";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  margin: 0 0;
  box-sizing: border-box;
  animation: ${rotate} 2s linear 5s;
  display: flex;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://www.goodfreephotos.com/albums/singapore/singapore-skyline-with-dark-blue-sky-in-the-background-at-night.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

export const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <UserInfo />
        <UserDetails />
      </Wrapper>
    </>
  );
};
