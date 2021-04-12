import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron-right.svg";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 88%;
  border-bottom: ${(props) => (props.last ? "" : "1px #D3D3D3 solid;")};
  padding: 15px;
  height: 45px;
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
  padding-left: 30px;
  width: 80%;
  color: #696969;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: ${(props) => (props.profile ? "20px" : "16px")};
  color: ${(props) => (props.profile ? "#383838	" : "")};
  margin-bottom: 2px;
`;

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: grey;
`;
const Icon = styled.img`
  width: 20px;
`;

const MenuCard = (props) => {
  return (
    <Card
      active={props.active}
      last={props.last}
      onClick={() => props.activate(props.position)}
    >
      <MenuInfo>
        <Icon src={props.icon} />
        <Description>
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
