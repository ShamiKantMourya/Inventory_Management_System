import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import { Chart as ChartJs } from 'chart.js/auto';
import 'chart.js';

export default function PieChart() {
  const inventoryItems = useSelector((state) => state?.inventoryItems);
//   const sales = useSelector((state) => state?.sales);

  const [chartData, setChartData] = useState({
    labels: inventoryItems?.map(item => item.name),
    datasets: [
      {
        label: "Quantity of item",
        data: inventoryItems?.map(item => item.quantity),
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