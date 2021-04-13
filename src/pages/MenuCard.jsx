import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ReactComponent as ChevronIcon } from "../assets/icons/ChevronOri.svg";
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 90%;
  border-bottom: ${(props) => (props.last ? "" : "1px #DDE3E7 solid")};
  padding: 10px 15px 10px 0px;
  height: 50px;
`;
const Chevron = styled.div`
  transform: ${(props) => (props.active ? "rotate(90deg)" : null)};
  transition: 0.3s all;
`;
const MenuInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  color: #454f57;
  padding-left: ${(props) => (props.profile ? "15px" : "26px")};
  padding-bottom: ${(props) => (props.profile ? "3px" : "null")};
`;
const Title = styled.div`
  font-weight: 600;
  font-size: ${(props) => (props.profile ? "20px" : "16px")};
  color: ${(props) => (props.profile ? "#172633" : "")};
  margin-bottom: 5px;
`;
const Subtitle = styled.div`
  font-weight: normal;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #9ba4ab;
`;
const Icon = styled.img`
  width: ${(props) => (props.profile ? "60px" : "24px")};
  padding-left: ${(props) => (props.profile ? null : "10px")};
  margin-left: ${(props) => (props.profile ? "-5px" : null)};
`;
const MenuCard = (props) => {
  return (
    <Card
      active={props.active}
      last={props.last}
      onClick={() => props.activate(props.position)}
    >
      <MenuInfo>
        <Icon profile={props.profile} src={props.icon} />
        <Description profile={props.profile}>
          <Title profile={props.profile}>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
        </Description>
      </MenuInfo>
      <Chevron active={props.active}>
        <ChevronIcon />
      </Chevron>
    </Card>
  );
};
export default MenuCard;
