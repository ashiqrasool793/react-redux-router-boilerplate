import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";
import { CSSTransitionGroup } from "react-transition-group";
import "./example.css";
import { storeAppData } from "../actions/index";
import { connect } from "react-redux";
import { isIOS, isAndroid } from "../util/userAgent";
import { useHistory } from "react-router-dom";

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
        id: "QLApply",
      },
      {
        Title: "Accounts",
        Subtitle: "Multiplier, eMulti Currency, My Accounts",
        Icon: "",
        id: "QLOpenAccount",
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
  {
    Title: "Support",
    Subtitle: "Off",
    Icon: require("../assets/icons/Support.svg"),
    children: [
      {
        Title: "Discover",
        Subtitle: "Find out what's news and get tips",
        Icon: "",
        id: "",
      },
      {
        Title: "Share a Feedback",
        Subtitle: "Report an issue or help us improve",
        Icon: "",
        id: "",
      },
      {
        Title: "Get Help",
        Subtitle: "Find out answers, or contact us",
        Icon: "",
        route: "internal",
        id: "support",
      },
    ],
  },
];
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  margin-top: 0px;
  box-sizing: border-box;
  background-color: rgba(142, 142, 147, 0.12);
`;

const CardWrapper = styled.div`
  background-color: white;
  width: 100%;
  border-bottom: ${(props) => (props.suggest ? "1px solid #dde3e7" : "")};
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.suggest ? "row" : "column")};
  justify-content: ${(props) =>
    props.suggestCard ? "flex-end" : "flex-start"};
  box-shadow: ${(props) =>
    props.last || props.profile ? "0px 2px 4px rgba(23,38,51,0.04)" : ""};
  margin-bottom: ${(props) => (props.profile ? "15px" : "")};
  height: ${(props) => (props.suggest ? "56px" : "auto")};
  min-height: 56px;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding-top: 15px;
  margin-bottom: 15px;
  margin-top: auto;
  align-self: center;
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
  padding-top: 15px;
  background-color: #ffffff;
  height: 50px;
  position: fixed;
  border-bottom: 1px solid #dde3e7;
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
  width: ${(props) => (props.like ? "20px" : props.small ? "14px" : "24px")};
  margin-right: ${(props) => (props.small ? "8px" : "")};
  padding-bottom: ${(props) => (props.small ? "" : "5px")};
  padding: ${(props) => (props.menu ? "20px" : "")};
  margin-left: ${(props) => (props.like ? "16px" : "")};
`;

const Search = styled.div`
  width: 85%;
  border-radius: 10px;
  height: 36px;
  background: rgba(142, 142, 147, 0.12);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  font-weight: 400;
  color: #8e8e93;
  margin-top: 15px;
  align-self: center;
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

const Body = styled.div`
  padding-top: 65px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.div`
  font-size: 16px;
  color: #172633;
  font-weight: 600;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  margin-top: ${(props) => (props.first ? "80px" : null)};
`;

const FeatureTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  font-weight: 500;
  color: #6f7981;
  color: ${(props) => (props.warning ? "red" : "#454f57")};
  padding: 10px 15px 20px 15px;
`;

const FeatureBoxWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin-right: 10px;
`;

const FeatureBox = styled.div`
  border: 2px solid red;
  height: 150px;
  min-width: 120px;
  border-radius: 20px;
  margin: 0 0 0 15px;
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  background-color: #ffffff;
  width: 90%;
  border-bottom: ${(props) =>
    props.last || props.open ? "" : "1px #dde3e7 solid"};
  height: auto;

  padding-top: 16px;
  padding-bottom: ${(props) => (props.open ? "-16px" : "16px;")};
`;

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #454f57;
  margin-bottom: 5px;
  margin-left: ${(props) => (props.title ? "16px" : "")};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: ${(props) => (props.open ? "break-spaces" : "nowrap")};
  max-width: 80%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => (props.full ? "100%" : "75%")};
  color: #454f57;
  padding-bottom: ${(props) => (props.profile ? "3px" : "null")};
`;
const Subtitle = styled.div`
  font-weight: normal;
  font-size: ${(props) => (props.small ? "12px" : "14px")};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #9ba4ab;
`;

const Count = styled.div`
  background-color: #59656d;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  height: 16px;
  color: white;
  border-radius: 69px;
  text-align: center;
  justify-content: center;
  margin-right: -5px;
  font-size: 12px;
  margin-top: 4px;
`;

const Content = styled.div`
  color: #455057;
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0;
  text-align: justify;
  width: 90%;
  align-self: flex-start;
  letter-spacing: -0.1px;
  line-height: 20px;
`;

const Suggestion = (props) => {
  const [active, setActive] = useState(null);
  const activate = (idx) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };

  let history = useHistory();

  useEffect(() => {
    window.storeAppData = props.storeAppData;
  }, []);

  const navigateToApp = (id) => {
    console.log("HI");
    if (isAndroid) {
      console.log("Inside Android");
      window.location.href =
        "dbsmbanking://com.dbs.sg.dbsmbanking/promoid/?PWEB=TRUE&serviceID=" +
        id;
    } else {
      console.log("Inside Else");
      window.location.href =
        "dbsmbanking://com.dbs.sg.dbsmbanking/promoid/?PWEB=TRUE&serviceID=" +
        id;
    }

    // } else if (isIOS) {
    //   console.log("Inside iOS");
    //   window.location.href = "DBSDigibankSG://?serviceID=" + id;
    // }
  };

  const routeToPage = (route) => {
    history.push(`/${route}`);
  };

  const [liked, setLiked] = useState([]);
  const [open, setOpen] = useState([]);

  const featureData = [
    {
      title: "Cardless Withdrawals at ATM Machines",
      subtitle: "Product Capabilities",
      content:
        "Sometimes we forget to bring our cards out and is in need of cash. It’ll be really helpful if we can use fingerprint or our app to verify ourselves at the ATM esp when we need cash urgently!",
      date: "Date added: 12 Apr 2020",
    },
    {
      title: "Set Separate Goals for my Account",
      subtitle: "Product Capabilities",
      content:
        "Sometimes we forget to bring our cards out and is in need of cash. It’ll be really helpful if we can use fingerprint or our app to verify ourselves at the ATM esp when we need cash urgently!",
      date: "Date added: 12 Apr 2020",
    },
    {
      title: "Cardless Withdrawals at ATM Machines",
      subtitle: "Product Capabilities",
    },
    {
      title: "Cardless Withdrawals at ATM Machines",
      subtitle: "Product Capabilities",
    },
  ];

  const likeItem = (index) => {
    if (liked.includes(index)) {
      const arr = [...liked];
      arr.splice(arr.indexOf(index), 1);
      setLiked(arr);
    } else {
      setLiked([...liked, index]);
    }
  };

  const openItem = (index) => {
    if (open.includes(index)) {
      const arr = [...open];
      arr.splice(arr.indexOf(index), 1);
      setOpen(arr);
    } else {
      setOpen([...open, index]);
    }
  };

  return (
    <Wrapper>
      <Header>
        <Icon
          menu
          onClick={() => history.push("/moretabfull")}
          src={require("../assets/icons/BackArrow.svg")}
        />
        <Title>Suggest a Feature</Title>
        <Icon
          onClick={() => navigateToApp("LccDigiBotChat")}
          menu
          src={require("../assets/icons/Chatbot.svg")}
        />
      </Header>
      <Body>
        <Search>
          <Icon small src={require("../assets/icons/magnifier.svg")} />
          <SearchBar placeholder="Search for a name or number" />
        </Search>
        <FeatureCard>
          <FeatureTitle>MY SUGGESTIONS</FeatureTitle>
          <CardWrapper suggest>
            <Icon like src={require("../assets/icons/Add.svg")} />
            <CardTitle title>Add a suggestion</CardTitle>
          </CardWrapper>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>TOP SUGGESTIONS</FeatureTitle>
          {featureData.map((item, idx) => {
            return (
              <CardWrapper suggestCard>
                <Card
                  open={open.includes(idx) && item.content}
                  last={idx === featureData.length - 1}
                >
                  <Description onClick={() => openItem(idx)}>
                    <CardTitle open={open.includes(idx) && item.content}>
                      {item.title}
                    </CardTitle>
                    <Subtitle>{item.subtitle}</Subtitle>
                  </Description>
                  <Count>2.1K</Count>
                  <Icon
                    like
                    onClick={() => likeItem(idx)}
                    src={
                      liked
                        ? liked.includes(idx)
                          ? require("../assets/icons/Liked.svg")
                          : require("../assets/icons/Like.svg")
                        : require("../assets/icons/Like.svg")
                    }
                  />
                </Card>

                {open.includes(idx) && item.content ? (
                  <Card>
                    <Description full>
                      <Content>{item.content}</Content>
                      <Subtitle small>{item.date}</Subtitle>
                    </Description>
                  </Card>
                ) : null}
              </CardWrapper>
            );
          })}
        </FeatureCard>
      </Body>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  console.log(state.digiNativePOC);
  return {
    nativeData: state.digiNativePOC,
  };
};

export default connect(mapStateToProps, { storeAppData })(Suggestion);
