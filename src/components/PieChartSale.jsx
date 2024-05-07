import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import { Chart as ChartJs } from 'chart.js/auto'

import 'chart.js';

export default function PieChartSales() {

  const sales = useSelector((state) => state?.sales);
  // console.log(sales, "sales")
  const salesBreakDown = sales?.reduce(
    (acc, curr) => ({
      ...acc,
      [curr?.item]:
        (acc[curr?.item] || 0) + (curr?.price * curr?.quantity || 0),
    }),
    {}
  );

  const [chartData, setChartData] = useState({
    labels: Object.keys(salesBreakDown),
    datasets: [
      {
        label: "Total Sale price",
        data: Object.values(salesBreakDown),
        backgroundColor: [
          "#555", "#FF0800","#00BFFF", "#03C03C", "#eec0c8", "#FFEF00"
        ],
        hoverOffset: 4,
      }

    ],
  })

  return <div className='chart'>
    <Pie data={chartData} ></Pie>
  </div >
}