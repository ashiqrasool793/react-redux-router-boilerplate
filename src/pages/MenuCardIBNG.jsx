import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ReactComponent as ChevronIcon } from "../assets/icons/ChevronOri.svg";
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  border-bottom: ${(props) => (props.last ? "" : "1px #DDE3E7 solid")};
  padding: ${(props) => (props.support ? "0 15px" : "10px 20px 10px 20px;")};
  height: 70px;
  border-radius: ${(props) => (props.last ? "10px" : null)};
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
  align-items: ${(props) => (props.amount ? "flex-end" : "")};
  width: ${(props) => (props.amount ? "" : "100%")};
  color: #454f57;
  padding-left: ${(props) =>
    props.profile || props.support ? "15px" : "15px"};
  padding-bottom: ${(props) => (props.profile ? "3px" : "null")};
`;
const Title = styled.div`
  font-weight: ${(props) => (props.support ? "500" : "600")};
  font-size: ${(props) => (props.profile ? "20px" : "16px")};
  color: ${(props) => (props.profile ? "#172633" : "")};
  margin-bottom: ${(props) => (props.support ? "0" : "5px")};
  margin-left: ${(props) => (props.amount ? "5px" : "")};
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
  width: ${(props) => (props.profile ? "60px" : "35px")};
  padding-left: ${(props) => (props.profile ? null : "0px")};
  margin-left: ${(props) => (props.profile ? "-5px" : null)};
  display: block;
  border: 1px solid grey;
  border-radius: 50%;
  padding: 5px;
`;

const Currency = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
`;

const MenuCard = (props) => {
  return (
    <Card
      active={props.active}
      last={props.last}
      onClick={() => console.log("HI")} //props.activate(props.id)}
      support={props.support}
    >
      <MenuInfo>
        <Icon
          profile={props.profile}
          src={props.icon ? props.icon : require("../assets/icons/white.svg")}
        />
        <Description
          icon={props.icon}
          support={props.support}
          profile={props.profile}
        >
          <Title support={props.support} profile={props.profile}>
            {props.title}
          </Title>
          <Subtitle>{props.subtitle}</Subtitle>
        </Description>
      </MenuInfo>
      <Description amount>
        <Currency>
          SGD
          <Title amount>{props.amount.split(".")[0].toString()}</Title>
          {"." + props.amount.split(".")[1].toString()}
        </Currency>
        <Subtitle>{props.percentage}</Subtitle>
      </Description>
    </Card>
  );
};
export default MenuCard;
