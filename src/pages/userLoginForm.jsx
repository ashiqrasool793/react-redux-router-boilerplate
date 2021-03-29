import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 5px 0px;
  border: 0.6px solid green;
  padding: 10px 10px;
  border-radius: 10px;
  width: 90%;
`;

const StyledButton = styled.button`
  margin: 5px 0px 5px 5px;
  border: 0.6px solid green;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  background-color: green;
  color: white;
  text-align: center;
  align-self: flex-end;
`;

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 70%;
  margin: 20px 20px;
  align-items: flex-end;
  justify-content: center;
  background-color: black;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
`;

const UserLoginForm = () => {
  const [userID, setUserID] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    console.log(userID + " > " + password);
  };
  return (
    <WrapperForm onSubmit={handleSubmit}>
      <StyledInput
        onChange={(e) => setUserID(e.target.value)}
        type="text"
        name="userID"
        value={userID}
        placeholder="Enter your username"
      />
      <StyledInput
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        value={password}
        placeholder="Enter your password"
      />
      <ButtonWrapper>
        <StyledButton type="submit">Submit</StyledButton>
        <StyledButton type="submit">Cancel</StyledButton>
      </ButtonWrapper>
    </WrapperForm>
  );
};

export default UserLoginForm;
