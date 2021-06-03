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
        id: "QL",
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
    Icon: require("../assets/icons/airplane.svg"),
    children: null,
  },
];
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  margin-top: 0px;
  background-color: rgba(142, 142, 147, 0.12);
  * {
    box-sizing: unset;
  }
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
  z-index: 515165;
`;

const Icon = styled.img`
  width: ${(props) => (props.small ? "12px" : "24px")};
  margin-right: ${(props) => (props.small ? "0px" : "")};
  padding-bottom: ${(props) => (props.small ? "" : "5px")};
  padding: ${(props) => (props.menu ? "20px" : "")};
`;

const Body = styled.div`
  padding-top: 65px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  align-items: center;
  justify-content: space-between;
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

const VideoCardWrapper = styled.div`
  display: flex;
  margin-right: 0px;
  flex-wrap: wrap;
  justify-content: center;
`;

const VideoCard = styled.div`
  border: none;
  height: 134px;
  width: 42%;
  border-radius: 6px 6px 0 0px;
  margin: 0 10px 15px 10px;
  background-color: #dde3e7;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`;
const VideoCardFooter = styled.div`
  border: none;
  width: calc(100% - 20px);
  min-height: 30px;
  background-color: white;
  border-radius: 0 0 6px 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #454f57;
  font-weight: 600;
  padding: 5px 10px;
`;

const VideoIcon = styled.img`
  width: 8px;
  margin-left: 8px;
  margin-bottom: 5px;
  align-self: flex-start;
  padding: 2px 2px;
  border: 1px solid black;
  border-radius: 50%;
`;

const VideoTime = styled.div`
  font-size: 10px;
  margin-left: 5px;
`;

const VideoPlayback = styled.div`
  display: flex;
  align-self: flex-start;
`;

const FeatureHeader = styled.div`
  font-size: 24px;
  color: #172633;
  max-width: 300px;
  width: 50%;
  padding: 24px;
  position: relative;
`;

const FeaturePicture = styled.img`
  width: 250px;
  position: absolute;
  right: 0px;
  padding-top: 40px;
`;

const SearchBar = styled.input`
  font-size: 14px;
  font-weight: normal;
  color: #8e8e93;
  font-weight: 400;
  background: none;
  border: none;
  outline: none;
  width: 90%;
`;

const Search = styled.div`
  width: 90%;
  border-radius: 10px;
  height: 40px;
  background: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  font-weight: 400;
  border: 1px solid #dde3e7;
`;
const QuickLink = styled.div`
  border-radius: 16px;
  background: #ff7f6e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  font-weight: 600;
  font-size: 14px;
  margin-right: 7px;
  border: 1px solid #ed583b;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  color: white;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rbga(60, 60, 67, 0.6);
  position: relative;
`;

const QuickLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const FooterImg = styled.img`
  width: 85%;
  margin-top: 32px;
  align-self: center;
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

const FooterTitle = styled.div`
  font-size: 16px;
  color: #172633;
  align-self: center;
  padding: 35px 0 16px 0;
  font-weight: 600;
`;
const Support = (props) => {
  const [active, setActive] = useState(null);
  let history = useHistory();
  const activate = (idx) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };

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

  return (
    <Wrapper>
      <Header>
        <Icon
          menu
          src={require("../assets/icons/BackArrow.svg")}
          onClick={() => history.push("/moretabfull")}
        />
      </Header>
      <Body>
        <FeatureCard>
          <FeatureHeader>How can we help you today?</FeatureHeader>
          <FeaturePicture src={require("../assets/icons/LaptopGirl.svg")} />
        </FeatureCard>
        <FeatureCard first>
          <SearchWrapper>
            <Search>
              <SearchBar placeholder="Ask a question" />
              <Icon small src={require("../assets/icons/Dictation.svg")} />
            </Search>
          </SearchWrapper>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Need help urgently?</FeatureTitle>
          <QuickLinkWrapper>
            <QuickLink>Report a transaction dispute</QuickLink>
            <QuickLink>Block card</QuickLink>
          </QuickLinkWrapper>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>
            <div>Digibank Guides</div>
          </FeatureTitle>
          <VideoCardWrapper>
            <VideoCard>
              <VideoPlayback>
                <VideoIcon src={require("../assets/icons/PlayIcon.svg")} />
                <VideoTime>3:33</VideoTime>
              </VideoPlayback>
              <VideoCardFooter>Register for PayNow</VideoCardFooter>
            </VideoCard>
            <VideoCard>
              <VideoCardFooter>View my statements</VideoCardFooter>
            </VideoCard>
          </VideoCardWrapper>
          <VideoCardWrapper>
            <VideoCard>
              <VideoPlayback>
                <VideoIcon src={require("../assets/icons/PlayIcon.svg")} />
                <VideoTime>3:33</VideoTime>
              </VideoPlayback>
              <VideoCardFooter>Register for PayNow</VideoCardFooter>
            </VideoCard>
            <VideoCard>
              <VideoCardFooter>View my statements</VideoCardFooter>
            </VideoCard>
          </VideoCardWrapper>
          <VideoCardWrapper>
            <VideoCard>
              <VideoPlayback>
                <VideoIcon src={require("../assets/icons/PlayIcon.svg")} />
                <VideoTime>3:33</VideoTime>
              </VideoPlayback>
              <VideoCardFooter>Register for PayNow</VideoCardFooter>
            </VideoCard>
            <VideoCard>
              <VideoCardFooter>View my statements</VideoCardFooter>
            </VideoCard>
          </VideoCardWrapper>
          <VideoCardWrapper>
            <VideoCard>
              <VideoPlayback>
                <VideoIcon src={require("../assets/icons/PlayIcon.svg")} />
                <VideoTime>3:33</VideoTime>
              </VideoPlayback>
              <VideoCardFooter>Register for PayNow</VideoCardFooter>
            </VideoCard>
            <VideoCard>
              <VideoCardFooter>View my statements</VideoCardFooter>
            </VideoCard>
          </VideoCardWrapper>
          <VideoCardWrapper>
            <VideoCard>
              <VideoPlayback>
                <VideoIcon src={require("../assets/icons/PlayIcon.svg")} />
                <VideoTime>3:33</VideoTime>
              </VideoPlayback>
              <VideoCardFooter>Register for PayNow</VideoCardFooter>
            </VideoCard>
            <VideoCard>
              <VideoCardFooter>View my statements</VideoCardFooter>
            </VideoCard>
          </VideoCardWrapper>
        </FeatureCard>
        <FooterTitle>Can't find what you're looking for?</FooterTitle>
        <CardWrapper>
          <MenuCard
            support={true}
            activate={() => console.log("click")}
            active={false}
            title={"Go to Help & Support portal"}
            icon={require("../assets/icons/settings.svg")}
            last={false}
            position={"index"}
          />
          <MenuCard
            support
            activate={() => console.log("click")}
            active={false}
            title={"Contact Us"}
            icon={require("../assets/icons/phone.svg")}
            last={true}
            position={"index"}
          />
        </CardWrapper>
        <FooterImg src={require("../assets/icons/Group.svg")} />
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

export default connect(mapStateToProps, { storeAppData })(Support);
