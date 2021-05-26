import React, { Component, useState } from "react";

import styled from "styled-components";
import MenuCardIBNG from "./MenuCardIBNG";
import { data } from "./transactionData";

import { ReactComponent as ChevronIcon } from "../assets/icons/ChevronOri.svg";
import NavBarMobile from "./NavBarMobile";
import HeaderMobile from "./HeaderMobile";

import { Mobile, Default } from "../util/userAgent";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    position: fixed;
    height: calc(100vh-90px);
  }
`;

//NavMenu Components
const NavMenu = styled.div`
  min-width: 200px;
  background-color: #000033;
  color: white;
  padding: 30px 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLogo = styled.img`
  width: 100px;
  margin-bottom: 25px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: ${(props) => (props.active ? "800" : "600")};
  margin-left: 5px;
  margin-top: 10px;
  color: ${(props) => (props.active ? "white" : "#9e9e9e")};
`;
const NavIcon = styled.img`
  width: 20px;
  margin-right: 15px;
`;

const NavText = styled.p`
  font-size: 16px;
`;

//rgba(142, 142, 147, 0.12);
const DashboardContainer = styled.div`
  width: 100%;
  background-color: rgba(142, 142, 147, 0.12);
  color: white;
  @media (max-width: 768px) {
    height: 100%;
    position: relative;
    top: 55px;
    overflow: scroll;
    margin-bottom: 100px;
  }
`;

const DashboardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
`;

const DashboardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: 500;
  margin-right: auto;
`;

const Icon = styled.img`
  width: ${(props) => (props.small ? "12px" : "24px")};
  margin-right: ${(props) => (props.small ? "8px" : "15px")};
  padding-bottom: ${(props) => (props.small ? "" : "5px")};
`;

const Avatar = styled.img`
  width: 30px;
  margin-left: 0px;
  margin-top: -5px;
`;

const Search = styled.div`
  width: 300px;
  border-radius: 10px;
  height: 36px;
  background: rgba(142, 142, 147, 0.12);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  font-weight: 400;
  color: #8e8e93;
  margin-right: 10px;
  @media (max-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 5px;
  }
`;

const SearchBar = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #8e8e93;
  font-weight: 400;
`;

const SubMenu = styled.div`
  background-color: white;
  box-sizing: border-box;
  padding: 10px 20px 0px 20px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  box-shadow: 0px 2px 4px rgba(23, 38, 51, 0.04);
  @media (max-width: 768px) {
    overflow: scroll;
    padding-top: 20px;
    position: fixed;
    z-index: 151;
    width: 100%;
  }
`;

const SubMenuItem = styled.div`
  color: #666666;
  border-bottom: ${(props) => (props.active ? "2px solid red" : "")};
  font-size: 16px;
  line-height: 2.5;
  font-weight: 400;
  margin-right: 28px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
    display: inline-block;
    white-space: nowrap;
    padding-right: 15px;
  }
`;

const DashboardContents = styled.div`
  width: 100%;
  display: flex;
  padding: 40px 20px;
  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    position: relative;
    overflow: scroll;
    top: 50px;
  }
`;

const Card = styled.div`
  width: 60%;
  min-width: 340px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 99%;
    align-self: flex-start;
    min-width: inherit;
  }
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => (props.subtitle ? null : "1px solid #f0f0f0")};
  padding: 15px 20px;
`;

const CardTitle = styled.span`
  font-weight: 600;
  color: black;
`;

const CardSubTitle = styled.span`
  font-weight: 400;
  font-size: 11px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Chevron = styled.div`
  transform: ${(props) => (props.active ? "rotate(90deg)" : null)};
  transition: 0.3s all;
`;

const TrxStatus = styled.span`
  color: ${(props) => (props.received ? "green" : "red")};
  font-size: 20px;
  margin-right: 5px;
`;

const CardSummary = styled.div`
  display: flex;
  flex-direction column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Currency = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  color: #666666;
`;

const Amount = styled.span`
  font-size: 18px;
  color: black;
  margin-left: 5px;
`;

const SubAmount = styled.span`
  font-size: 10px;
  color: black;
`;

const TransactionContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  height: 5px;
`;
const TransactionBar = styled.div`
  width: 100%;
  background-color: red;
  border-radius: 50px;
  height: 5px;
`;
const TransactionChart = styled.div`
  width: 70%;
  background-color: green;
  border-radius: 10px;
  height: 5px;
`;
const MobileMenu = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 165;
`;

const Dashboard = () => {
  const [subMenuActive, setSubMenuActive] = useState("Summary");
  const [showCard, setShowCard] = useState("Money");

  const setActive = (subMenu) => {
    setActive(subMenu);
  };

  const setCard = (card) => {
    if (showCard === card) {
      setShowCard("");
    } else {
      setShowCard(card);
    }
  };

  return (
    <>
      <Container>
        <NavMenu>
          <NavLogo src={require("../assets/logo/dbslogo.png")} />
          <NavItem active>
            <NavIcon src={require("../assets/icons/Home.svg")} />
            <NavText>Home</NavText>
          </NavItem>
          <NavItem>
            <NavIcon src={require("../assets/icons/Icon-3.svg")} />
            <NavText>Invest</NavText>
          </NavItem>
          <NavItem>
            <NavIcon src={require("../assets/icons/Icon-2.svg")} />
            <NavText>{"Pay & Transfer"}</NavText>
          </NavItem>
          <NavItem>
            <NavIcon src={require("../assets/icons/Icon-1.svg")} />
            <NavText>Plan</NavText>
          </NavItem>
          <NavItem>
            <NavIcon src={require("../assets/icons/Icon.svg")} />
            <NavText>Apply</NavText>
          </NavItem>
        </NavMenu>
        <Mobile>
          <HeaderMobile />
        </Mobile>
        <DashboardContainer>
          <Default>
            <DashboardHeader>
              <DashboardTitle>Home</DashboardTitle>
              <Search>
                <Icon small src={require("../assets/icons/magnifier.svg")} />
                <SearchBar>Type transfer, search services, payee...</SearchBar>
              </Search>
              <Icon menu src={require("../assets/icons/Search.svg")} />
              <Icon menu src={require("../assets/icons/Chatbot.svg")} />
              <Avatar menu src={require("../assets/icons/dbsavatar.svg")} />
            </DashboardHeader>
          </Default>
          <SubMenu>
            <SubMenuItem
              onClick={() => setSubMenuActive("Summary")}
              active={subMenuActive === "Summary"}
            >
              Summary
            </SubMenuItem>
            <SubMenuItem
              onClick={() => setSubMenuActive("Transaction")}
              active={subMenuActive === "Transaction"}
            >
              Transaction History
            </SubMenuItem>
            <SubMenuItem
              onClick={() => setSubMenuActive("Accounts")}
              active={subMenuActive === "Accounts"}
            >
              Accounts
            </SubMenuItem>
          </SubMenu>
          <DashboardContents>
            <Card>
              <CardHeader onClick={() => setCard("Money")}>
                <CardTitle>Money In and Out</CardTitle>
                <CardSubTitle>
                  Last 30 Days
                  <Chevron active={showCard === "Money"}>
                    <ChevronIcon />
                  </Chevron>
                </CardSubTitle>
              </CardHeader>
              {showCard === "Money" ? (
                <>
                  <CardHeader subtitle>
                    <CardSummary>
                      <CardSubTitle>
                        <TrxStatus received>•</TrxStatus>You recieved
                      </CardSubTitle>
                      <Currency>
                        SGD
                        <Amount>12,889</Amount>
                        <SubAmount>.00</SubAmount>
                      </Currency>
                    </CardSummary>
                    <CardSummary>
                      <CardSubTitle>
                        <TrxStatus>•</TrxStatus>You spent
                      </CardSubTitle>
                      <Currency>
                        SGD
                        <Amount>9,125</Amount>
                        <SubAmount>.00</SubAmount>
                      </Currency>
                    </CardSummary>
                  </CardHeader>
                  <TransactionContainer>
                    <TransactionBar>
                      <TransactionChart />
                    </TransactionBar>
                  </TransactionContainer>
                  <CardHeader subtitle>
                    <CardTitle>Top Categories</CardTitle>
                  </CardHeader>
                  {data.map((item, index) => {
                    return (
                      <MenuCardIBNG
                        activate={null}
                        active={true}
                        title={item.Title}
                        subtitle={item.Subtitle}
                        icon={item.Icon}
                        last={index === data.length - 1}
                        id={item.children ? index : item.id}
                        amount={item.Amount}
                        percentage={item.Percentage}
                      />
                    );
                  })}
                </>
              ) : null}
            </Card>
          </DashboardContents>
        </DashboardContainer>
        <Mobile>
          <MobileMenu>
            <NavBarMobile />
          </MobileMenu>
        </Mobile>
      </Container>
    </>
  );
};

export default Dashboard;
