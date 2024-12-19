import { Chart } from "chart.js/auto";
import React, { PropsWithChildren, useEffect, useRef } from "react";

type Props = {};

namespace Bar {
  export const Chart = (props: PropsWithChildren) => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useBarChart(chartRef);

    return (
      <div
        className="chart-container"
        style={{
          position: "relative",
          height: "40vh",
          width: "80vw",
        }}
      >
        <canvas ref={chartRef}></canvas>
      </div>
    );
  };
  export const Tooltip = (props: PropsWithChildren) => <div></div>;
}
namespace Data {
  export const Set = (props: PropsWithChildren) => <div></div>;
  export const Item = (props: PropsWithChildren) => <div></div>;
}

const AnalyticsView = (props: Props) => {
  return (
    <div>
      AnalyticsView
      <Bar.Chart>
        <Bar.Tooltip />
        <Data.Set label="# of Votes">
          <Data.Item label="red" bg="red" border="red" value="30" />
          <Data.Item label="green" bg="green" border="green" value="40" />
        </Data.Set>
      </Bar.Chart>
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
      responsive: true,
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
