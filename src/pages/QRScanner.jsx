import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./example.css";
import { storeAppData } from "../actions/index";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Reader from "react-qr-scanner";

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

const Button = styled.button`
  width: 85%;
  background-color: red;
  color: white;
  font-size: 18px;
  padding: 20px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  height: 70px;
  margin: 10px 10px;
`;
const QRScanner = (props) => {
  let history = useHistory();
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [data, setData] = useState(false);
  const handleScan = async (url) => {
    if (url === null || data === url) {
      console.log("data");
    } else {
      setData(url);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const detectCamera = async () => {
    await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
    await navigator.mediaDevices.enumerateDevices();

    setPermissionGranted(true);
  };

  useEffect(() => {
    window.storeAppData = props.storeAppData;
    (async function effectDetectCamera() {
      await detectCamera();
    })();
    setData(null);
  }, []);

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
        {permissionGranted ? (
          <>
            {data ? (
              <Button
                onClick={() => (window.location.href = "https://" + data)}
              >
                Click to navigate to {data}
              </Button>
            ) : (
              <span>{data}</span>
            )}
            <Reader
              onError={handleError}
              onScan={handleScan}
              facingMode="rear"
              style={{ width: "100%", height: "calc(100%-60px)" }}
            />
          </>
        ) : (
          <div>Waiting for Camera Permission</div>
        )}
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

export default connect(mapStateToProps, { storeAppData })(QRScanner);
