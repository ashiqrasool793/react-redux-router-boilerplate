import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import FBICON from "../assets/icons/FBICON.svg";
import IGICON from "../assets/icons/IGICON.svg";
import TWITTERICON from "../assets/icons/TWITTERICON.svg";
import GITHUBICON from "../assets/icons/GITHUBICON.svg";

import { device } from "../utils/MediaQueries";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 25%;
  margin: 0 15px;
  @media (max-width: 788px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    min-height: 220px;
    min-width: 200px;
    margin: 20px 10px;
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
  overflow: hidden;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  h1 {
    font-weight: 500;
    font-size: 20px;
  }
  span {
    font-weight: 400;
    font-size: 15px;
  }
  @media (max-width: 788px) {
    flex-direction: column;
    margin: 10px 20px;
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

const ProfileIcon = styled.img`
  width: 130px;
  margin-top: 10px;
  border-radius: 50%;
  padding: 5px 0;
  @media (max-width: 425px) {
    width: 90px;
    align-self: center;
    margin-top: 0px;
  }
  cursor: pointer;
`;

const Link = styled.a`
  border-radius: 5px;
  font-size: 15px;
  width: 100%;
  padding: 5px 5px;
  font-weight: 700;
  margin: 10px;
  text-align: center;
  @media (max-width: 788px) {
    margin: 5px;
  }
  background: ${(props) => (props.active ? "rgba(255, 255, 255, 0.7)" : null)};
  color: ${(props) => (props.active ? "black" : "white")};
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
  @media (max-width: 788px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 30px;
    align-self: flex-end;
  }
`;

export const UserInfo = () => {
  const [active, setActive] = useState({
    Home: true,
  });

  const navigateLink = (navigateTo) => {
    const obj = {
      [navigateTo]: true,
    };
    setActive(obj);
  };

  return (
    <>
      <Container>
        <ProfileWrapper>
          <ProfileIcon
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQGk8SdIN-vh_g/profile-displayphoto-shrink_200_200/0/1605986705813?e=1618444800&v=beta&t=u8ximTvqWBFas_ahLfZT3m0I4Ja_3mb-GaCLflsk2UI"
            }
          />
          <h1>Ashiq Rasool</h1>
          <span>Software Engineer</span>
        </ProfileWrapper>
        <MenuWrapper>
          <Link onClick={() => navigateLink("Home")} active={active.Home}>
            Home
          </Link>
          <Link
            onClick={(e) => navigateLink("Portfolio")}
            value="Home"
            active={active.Portfolio}
          >
            Portfolio
          </Link>
          <Link onClick={() => navigateLink("AboutMe")} active={active.AboutMe}>
            About me
          </Link>
          <Link onClick={() => navigateLink("Contact")} active={active.Contact}>
            Contact
          </Link>
        </MenuWrapper>
      </Container>
    </>
  );
};
