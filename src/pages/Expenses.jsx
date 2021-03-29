import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 60%;
  @media (max-width: 788px) {
    width: 90%;
    margin: 10px 10px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 20px 0 0px 0;
  background: rgba(50, 80, 120, 0.9);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.9);
  color: white;
`;
const Wrapper = styled.div`
  margin: 0 0;
  box-sizing: border-box;
  display: flex;
  padding: 25px 25px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-image: url("https://www.goodfreephotos.com/albums/singapore/singapore-skyline-with-dark-blue-sky-in-the-background-at-night.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

const Button = styled.button`
  min-width: 100px;
  border-radius: 20px;
  border: none;
  margin: 10px 15px;
  padding: 20px 20px;
  outline: none;
  font-size: 16px;
  background: ${(props) => (props.active ? "green" : "white")};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const data = [
  {
    month: "March",
    online: ["$12.72", "$33.84", "$12.72", "$33.84", "$12.72", "$33.84"],
    onlineTotal: "$300",
    payWave: ["$18.88", "$35.55", "$33.84", "$12.72", "$33.84"],
    payWaveTotal: "$400",
    total: "$500",
  },
  {
    month: "April",
    online: ["$12.22", "$33.44"],
    payWave: ["$18.88", "$35.55"],
  },
];
export const Expenses = () => {
  const [monthData, setMonthData] = useState(null);
  const [expenseForm, showExpenseForm] = useState(false);

  return (
    <Wrapper>
      <h1>DBS LiveFresh Expense Tracker</h1>
      <Button onClick={() => showExpenseForm(true)}>Add Expense</Button>
      {expenseForm ? (
        <h1>
          Dropdown for month and spend type, and input field for amount, upon
          submit, compute category total and grand total and save in DB
        </h1>
      ) : null}
      <h3>Select Month</h3>
      <ButtonWrapper>
        {data.map((item, idx) => {
          return (
            <Button
              active={monthData ? monthData.month === item.month : false}
              key={idx}
              onClick={() => setMonthData(item)}
            >
              {item.month}
            </Button>
          );
        })}
      </ButtonWrapper>
      {monthData ? (
        <Container>
          <h3 style={{ color: "yellow" }}>
            Online Purchases for {monthData.month}
          </h3>
          {monthData.online.map((onl, idx) => {
            return <p key={idx}>{onl}</p>;
          })}
          <h4 style={{ color: "yellow" }}>
            Total Online: {monthData.onlineTotal}
          </h4>
          <h3 style={{ color: "aqua" }}>Visa PayWave Purchases</h3>
          {monthData.payWave.map((onl, idx) => {
            return <p key={idx}>{onl}</p>;
          })}
          <h4 style={{ color: "aqua" }}>
            Total PayWave: {monthData.payWaveTotal}
          </h4>
          <h1 style={{ color: "Chartreuse" }}>
            Grand Total: {monthData.total}{" "}
          </h1>
        </Container>
      ) : (
        <h1>No Month Selected</h1>
      )}
    </Wrapper>
  );
};
