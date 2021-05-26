import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";
import { CSSTransitionGroup } from "react-transition-group";
import "./example.css";
import { storeAppData } from "../actions/index";
import { connect } from "react-redux";
import { isIOS, isAndroid } from "../util/userAgent";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 15px;
  background-color: #ffffff;
  height: 50px;
  position: fixed;
  z-index: 102;
`;

const Icon = styled.img`
  width: ${(props) => (props.small ? "12px" : "")};
  margin-right: ${(props) => (props.small ? "8px" : "")};
  padding-bottom: ${(props) => (props.small ? "" : "5px")};
  padding: ${(props) => (props.menu ? "20px" : "")};
`;

const Search = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 36px;
  background: rgba(142, 142, 147, 0.12);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  font-weight: 400;
  color: #8e8e93;
`;

const SearchBar = styled.input`
  font-size: 14px;
  font-weight: normal;
  color: #8e8e93;
  font-weight: 400;
  background: none;
  border: none;
  outline: none;
  width: 100%;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: black;
  padding: 10px 20px 0 20px;
`;

const HeaderMobile = (props) => {
  return (
    <Header>
      <Icon menu src={require("../assets/icons/Search.svg")} />
      <Search>
        <Icon small src={require("../assets/icons/magnifier.svg")} />
        <SearchBar placeholder="Search services" />
      </Search>
      <Icon
        onClick={() => console.log("LccDigiBotChat")}
        menu
        src={require("../assets/icons/Chatbot.svg")}
      />
    </Header>
  );
};

export default HeaderMobile;
