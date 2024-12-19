import { Chart } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

type Props = {};

const AnalyticsView = (props: Props) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useBarChart(chartRef);

  return (
    <div>
      AnalyticsView
      <canvas ref={chartRef} width={300} height={300}></canvas>
    </div>
  );
};

export default AnalyticsView;

function useBarChart(chartRef: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    if (!chartRef.current) throw new Error("missin canvas");
    const chart = renderChart(chartRef.current);

    return () => chart.destroy();
  }, []);
}

function renderChart(canvas: HTMLCanvasElement) {
  const chart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: ["red", "blue", "yellow", "green", "purple", "orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      borderColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.label;
            },
          },
        },
      },
    },
  });
  return chart;
}
