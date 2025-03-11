import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const ChartPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("San Francisco Bay Trends");

  const locations = ["San Francisco Bay Trends", "New York City Trends", "Los Angeles Trends"];

  const data = {
    labels: Array.from({ length: 52 }, (_, i) => `W${String(i + 1).padStart(2, "0")}`),
    datasets: [
      {
        type: "bar",
        label: "GM Dollars",
        data: Array.from({ length: 52 }, () => Math.floor(Math.random() * 200000 + 50000)),
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        yAxisID: "y",
      },
      {
        type: "line",
        label: "GM %",
        data: Array.from({ length: 52 }, () => Math.random() * 60 + 10),
        borderColor: "rgba(255, 99, 32, 1)",
        backgroundColor: "rgba(255, 99, 32, 0.2)",
        borderWidth: 2,
        pointRadius: 2,
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#fff" },
        grid: { color: "rgba(255, 255, 255, 0.2)" },
      },
      y1: {
        beginAtZero: true,
        position: "right",
        ticks: { color: "#ff9932" },
        grid: { drawOnChartArea: false },
      },
      x: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255, 255, 255, 0.2)" },
      },
    },
    plugins: {
      legend: { labels: { color: "#fff" } },
      title: {
        display: true,
        text: "Gross Margin",
        color: "#fff",
        font: { size: 16 },
      },
    },
  };

  return (
    <div className="chart-container">
      <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
        {locations.map((loc, idx) => (
          <option key={idx} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartPage;
