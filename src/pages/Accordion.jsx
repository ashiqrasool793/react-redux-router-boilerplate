import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron-right.svg";
import redIcon from "../assets/icons/redIcon.svg";
import MenuCard from "./MenuCard";
import { CSSTransitionGroup } from "react-transition-group";
import "./example.css";

const MenuData = [
  {
    Title: "Apply",
    Subtitle: "Cards, Accounts, Loans",
    Icon: require("../assets/icons/redIcon.svg"),
    children: [
      {
        Title: "Card",
        Subtitle: "Credit Card, Debit Card",
        Icon: "",
      },
      {
        Title: "Accounts",
        Subtitle: "Multiplier, eMulti Currency, My Accounts",
        Icon: "",
      },
      {
        Title: "Loans",
        Subtitle: "Cashline, Pay by Instalments, Balance Transfer",
        Icon: "",
      },
      {
        Title: "Insurance",
        Subtitle: "CardCare/Cash Care, Cancer Care, Travel Insurance",
        Icon: "",
      },
      {
        Title: "Vickers Account",
        Subtitle: "Open Vickers Account via digibank",
        Icon: "",
      },
      {
        Title: "Application Status",
        Subtitle: "Check your application status here",
        Icon: "",
      },
    ],
  },
  {
    Title: "Manage",
    Subtitle: "Payment & Transfer, Cards, Accounts",
    Icon: require("../assets/icons/redManage.svg"),
    children: null,
  },
  {
    Title: "Other Services",
    Subtitle: "Top Up, eStatement, Check Rates",
    Icon: require("../assets/icons/redManage.svg"),
    children: null,
  },
  {
    Title: "App & Security",
    Subtitle: "Peek Balance, Manage Notifications",
    Icon: require("../assets/icons/redManage.svg"),
    children: null,
  },
  {
    Title: "Travel Mode",
    Subtitle: "Off",
    Icon: require("../assets/icons/redManage.svg"),
    children: null,
  },
  {
    Title: "Support",
    Subtitle: "Report any issues, feedback and tips",
    Icon: require("../assets/icons/redManage.svg"),
    children: null,
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  margin-top: 5px;
  box-sizing: border-box;
  background-color: #f5f5f5;
`;

const CardWrapper = styled.div`
  background-color: white;
  width: 100%;
  border-bottom: ${(props) =>
    props.last || props.profile || props.active ? "1px #dcdcdc solid" : ""};
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${(props) =>
    props.last || props.profile ? "0 3px 2px -2px lightgrey" : ""};
  margin-bottom: ${(props) => (props.profile ? "15px" : "")};
  padding-top: ${(props) => (props.profile ? "10px" : "")};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 25px;
`;

const AppVersion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 10px;
`;
const Version = styled.div`
  font-size: 10px;
  margin-bottom: 5px;
  font-weight: 600;
  color: grey;
`;
const LastLogin = styled.div`
  font-size: 9px;
  font-weight: 400;
  color: #919191;
`;

const LogOut = styled.button`
  border-radius: 20px;
  background-color: red;
  color: white;
  border: none;
  width: 75px;
  height: 20px;
  padding: 2px;
  font-weight: 800;
  font-size: 10px;
`;

const Accordion = () => {
  const [active, setActive] = useState(null);

  const activate = (idx) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };

  return (
    <Wrapper>
      <CardWrapper last={true} profile>
        <MenuCard
          profile={true}
          activate={() => console.log("Profile")}
          active={false}
          title={"Ashiqa"}
          subtitle={"Nickname, Address, User ID"}
          icon={"item.Icon"}
          last={true}
          position={"index"}
        />
      </CardWrapper>

      {MenuData.map((item, index) => {
        return (
          <CardWrapper
            key={index}
            last={index === MenuData.length - 1}
            active={index === active}
          >
            <MenuCard
              activate={item.children ? activate : () => null}
              active={index === active}
              title={item.Title}
              subtitle={item.Subtitle}
              icon={item.Icon}
              last={index === MenuData.length - 1}
              position={index}
            />
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={400}
              transitionLeaveTimeout={300}
              transitionLeave={true}
              style={{ display: "contents" }}
            >
              {item.children && index === active
                ? item.children.map((subItem, subIndex) => {
                    return (
                      <MenuCard
                        key={subIndex}
                        activate={() => console.log("SubItem Yo")}
                        active={false}
                        title={subItem.Title}
                        subtitle={subItem.Subtitle}
                        icon={subItem.Icon}
                        last={subIndex === item.children.length - 1}
                      />
                    );
                  })
                : null}
            </CSSTransitionGroup>
          </CardWrapper>
        );
      })}
      <Footer>
        <AppVersion>
          <Version>App Version: 1.0.29</Version>
          <LastLogin>Last Login: 17 April 2020, 19:20</LastLogin>
        </AppVersion>
        <LogOut>LOG OUT</LogOut>
      </Footer>
    </Wrapper>
  );
};

export default Accordion;