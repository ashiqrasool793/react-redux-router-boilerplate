import React, { useEffect, useState } from "react";
import Reader from "react-qr-scanner";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
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

export default function QRScan() {
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
    (async function effectDetectCamera() {
      await detectCamera();
    })();
    setData(null);
  }, []);

  return permissionGranted ? (
    <>
      {data ? (
        <Button onClick={() => (window.location.href = "https://" + data)}>
          Click to navigate to {data}
        </Button>
      ) : (
        <span>{data}</span>
      )}
      <Reader onError={handleError} onScan={handleScan} facingMode="rear" />
    </>
  ) : (
    <div>Waiting for Camera Permission</div>
  );
}
