import React, { useState } from "react";
import styled from "styled-components";

const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 10px;
  background-color: #172633;
  height: 70px;
  box-shadow: 0px -0.5px 0px rbga(0, 0, 0, 0.3);
  backdrop-filter: blur(27.1828px);
`;

const Icon = styled.img`
  width: ${(props) => (props.small ? "12px" : "24px")};
  margin-right: ${(props) => (props.small ? "8px" : "")};
  padding-bottom: ${(props) => (props.small ? "" : "5px")};
  padding: ${(props) => (props.menu ? "20px" : "")};
`;

const NavBarItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: normal:
  justify-content: center;
  align-items: center;
`;
const NavTitle = styled.div`
  font-size: 10px;
  font-weight: ${(props) => (props.active ? "800" : "500")};
  color: ${(props) => (props.active ? "white" : "grey")};
`;

const NavBarMobile = () => {
  const [active, setActive] = useState(null);
  const activate = (idx) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };
  return (
    <MenuBar>
      <NavBarItem>
        <Icon src={require("../assets/icons/Home.svg")} />
        <NavTitle active>Home</NavTitle>
      </NavBarItem>
      <NavBarItem>
        <Icon src={require("../assets/icons/Icon-3.svg")} />
        <NavTitle>Invest</NavTitle>
      </NavBarItem>
      <NavBarItem>
        <Icon src={require("../assets/icons/Icon-2.svg")} />
        <NavTitle>{"Pay & Transfer"}</NavTitle>
      </NavBarItem>
      <NavBarItem>
        <Icon src={require("../assets/icons/Icon-1.svg")} />
        <NavTitle>{"Plan"}</NavTitle>
      </NavBarItem>
      <NavBarItem>
        <Icon src={require("../assets/icons/Icon.svg")} />
        <NavTitle>{"Support"}</NavTitle>
      </NavBarItem>
    </MenuBar>
  );
};
export default NavBarMobile;
