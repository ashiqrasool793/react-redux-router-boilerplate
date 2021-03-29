import React from "react";
import styled, { keyframes } from "styled-components";
import FBICON from "../assets/icons/FBICON.svg";
import IGICON from "../assets/icons/IGICON.svg";
import TWITTERICON from "../assets/icons/TWITTERICON.svg";
import GITHUBICON from "../assets/icons/GITHUBICON.svg";

import { device } from "../utils/MediaQueries";

const Container = styled.div`
  width: 60%;
  @media (max-width: 788px) {
    width: 90%;
    margin: 10px 10px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 10px 20px;
  min-height: 500px;
  background: rgba(50, 80, 120, 0.6);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
`;

const SocialMediaWrapper = styled.div`
  background: red;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px 0px;
  min-height: 60px;
  background: rgba(255, 255, 255, 0.3);
  @media (max-width: 425px) {
    width: 90%;
  }
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

const ProfileWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  h1 {
    font-weight: 500;
    font-size: 35px;
  }
  span {
    font-weight: 400;
    font-size: 25px;
  }
`;

const Icon = styled.img`
  width: 40px;
  padding: 5px 0;
  @media (max-width: 425px) {
    width: 30px;
  }
  cursor: pointer;
  :hover {
    width: 45px;
  }
`;

export const UserDetails = () => {
  return (
    <>
      <Container>
        <ProfileWrapper>
          <h1>Ashiq Rasool</h1>
          <span>Software Engineer</span>
        </ProfileWrapper>

        <SocialMediaWrapper>
          <Icon onClick={() => console.log("clicked")} src={FBICON} />
          <Icon src={IGICON} />
          <Icon src={TWITTERICON} />
          <Icon src={GITHUBICON} />
        </SocialMediaWrapper>
      </Container>
    </>
  );
};
