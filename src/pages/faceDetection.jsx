import React, { useState } from "react";
import styled from "styled-components";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  flex-direction: column;
  @media (max-width: 788px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
`;

const BigBox = styled.div`
  border-radius: 20px;
  min-height: 400px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 5px 5px;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15px 0;
`;

const SmallBox = styled.img`
  width: 150px;
  border-radius: 20px;
  margin: 5px 5px;
`;

const FaceDetection = () => {
  const [data, setData] = useState([]);
  const handleTakePhoto = (dataUri) => {
    setData([...data, dataUri]);
    console.log(data);
  };

  return (
    <Wrapper>
      <BigBox>
        <h3>Camera</h3>
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
      </BigBox>
      {data.length > 0 ? (
        <BigBox style={{ flexDirection: "row" }}>
          {data.map((pic, index) => {
            return <SmallBox key={index} src={pic} />;
          })}
        </BigBox>
      ) : null}
    </Wrapper>
  );
};

export default FaceDetection;
