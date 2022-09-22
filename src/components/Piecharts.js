import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import API from "./API";
import useFetch from "./useFetch";









const Piecharts = () => {

  const api = axios.create({
    baseURL: "http://localhost:8000/client",
  });

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    api.get("/").then((res) => setDataList(res.data));
  }, []);

  const countDataState = () => {
    let count = {};

    for (const element of dataList) {
      if (count[element?.state]) {
        count[element?.state] += 1;
      } else {
        count[element?.state] = 1;
      }
    }
    let res = Object.values(count)

    return res;
  };

  let series = countDataState();

  let options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["01", "02"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (


        <ReactApexChart
            options={options}
            series={series}
            type="pie"
            height={500}
            width={500}
        />







  );
};

export default Piecharts;
