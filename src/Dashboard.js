import React from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  datasets: [
    {
      data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
      lineTension: 0,
      backgroundColor: "transparent",
      borderColor: "#007bff",
      borderWidth: 4,
      pointBackgroundColor: "#007bff"
    }
  ]
};

export default function App() {
  return (
    <>
     {/* <div className="App"> */}
      <Line
        data={data}
        width={1423}
        height={600}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }}
      />
     {/* </div> */}
     </>
  );
}