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
    Icon: require("../assets/icons/Active.svg"),
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
    Icon: require("../assets/icons/limit.svg"),
    children: null,
  },
  {
    Title: "Other Services",
    Subtitle: "Top Up, eStatement, Check Rates",
    Icon: require("../assets/icons/manage.svg"),
    children: null,
  },
  {
    Title: "App & Security Settings",
    Subtitle: "Peek Balance, Manage Notifications",
    Icon: require("../assets/icons/Lock.svg"),
    children: null,
  },
  {
    Title: "Travel Mode",
    Subtitle: "Off",
    Icon: require("../assets/icons/airplane.svg"),
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
  background-color: rgba(142, 142, 147, 0.12);
`;
const CardWrapper = styled.div`
  background-color: white;
  width: 100%;
  border-bottom: ${(props) =>
    props.last || props.profile || props.active ? "1px #DDE3E7 solid" : ""};
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${(props) =>
    props.last || props.profile ? "0px 2px 4px rgba(23,38,51,0.04)" : ""};
  margin-bottom: ${(props) => (props.profile ? "15px" : "")};
  padding-top: ${(props) => (props.profile ? "10px" : "")};
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-top: auto;
  margin-bottom: 40px;
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
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 600;
  color: #858f96;
`;
const LastLogin = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: #919191;
`;
const LogOut = styled.button`
  border-radius: 20px;
  background-color: #ff3e3e;
  color: #ffffff;
  border: none;
  width: 79px;
  height: 24px;
  padding: 2px;
  font-weight: 800;
  font-size: 11px;
  outline: none;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  background-color: #ffffff;
  height: 50px;
`;
const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
  padding-top: 5px;
  background-color: #172633;
  height: 50px;
  box-shadow: 0px -0.5px 0px rbga(0, 0, 0, 0.3);
  backdrop-filter: blur(27.1828px);
`;

const Icon = styled.img`
  width: ${(props) => (props.small ? "12px" : "24px")};
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
  font-weight: normal;
  color: white;
`;

const SearchBar = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #8e8e93;
  font-weight: 400;
`;

const MoreTabFull = () => {
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
      <Header>
        <Icon menu src={require("../assets/icons/Search.svg")} />
        <Search>
          <Icon small src={require("../assets/icons/magnifier.svg")} />
          <SearchBar>Search services</SearchBar>
        </Search>
        <Icon menu src={require("../assets/icons/Chatbot.svg")} />
      </Header>
      <CardWrapper last={true} profile>
        <MenuCard
          profile={true}
          activate={() => console.log("Profile")}
          active={false}
          title={"Ashiqa"}
          subtitle={"Nickname, Address, User ID"}
          icon={require("../assets/icons/ava.svg")}
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
      <MenuBar>
        <NavBarItem>
          <Icon src={require("../assets/icons/Home.svg")} />
          <NavTitle>Home</NavTitle>
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
          <NavTitle>{"Home"}</NavTitle>
        </NavBarItem>
      </MenuBar>
    </Wrapper>
  );
};
export default MoreTabFull;
