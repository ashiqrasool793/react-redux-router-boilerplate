import React from "react";
import styled from "styled-components";
import { data } from "../util/allocation";

const mmyy = [];

const getMonths = () => {
  for (const item of data) {
    for (const subItem of item.allocation) {
      if (!mmyy.includes(subItem.month)) {
        mmyy.push(subItem.month);
      }
    }
  }
};

getMonths();

function Scheduler() {
  return (
    <table>
      <tr>
        <th>Location</th>
        {mmyy.map((item, index) => {
          return <th key={index}>{item}</th>;
        })}
      </tr>
      {data.map((item, index) => {
        return (
          <>
            <tr>
              <td>{item.factory}</td>
              {item.allocation.map((subItem, index) => {
                return subItem.execdate.substr(5, 2) === "05" ? (
                  <td>{subItem.order_id}</td>
                ) : null;
              })}
            </tr>
          </>
        );
      })}
    </table>
  );
}

export default Scheduler;
