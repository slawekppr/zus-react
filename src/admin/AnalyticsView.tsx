import { Chart, ChartConfiguration } from "chart.js/auto";
import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

namespace Bar {
  export const Context = React.createContext<any>(null);
  export const useContext = () => React.useContext(Context);

  export function Chart(props: PropsWithChildren) {
    const chartRef = useRef<HTMLCanvasElement>(null);

    const config: ChartConfiguration<"bar", number[], string> = {
      type: "bar",
      data: { labels: [], datasets: [] },
    };

    useBarChart(chartRef, config);

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
        <Context.Provider value={{ config }}>{props.children}</Context.Provider>
      </div>
    );
  }
  export function Tooltip(props: PropsWithChildren) {
    const {} = Bar.useContext();
    return <></>;
  }
}
namespace Data {
  export const Context = React.createContext<any>(null);
  export const useContext = () => React.useContext(Context);

  export function Set(
    props: PropsWithChildren<{
      label: string;
    }>
  ) {
    const { config } = Bar.useContext();
    const dataset = (config.data.datasets[0] ??= {
      label: props.label,
      data: [],
    });
    return (
      <Context.Provider value={{ dataset }}>{props.children}</Context.Provider>
    );
  }
  export function Item(
    props: PropsWithChildren<{
      label: string;
      bg: string;
      border: string;
      value: number | string;
    }>
  ) {
    const { config } = Bar.useContext();
    const { dataset } = Data.useContext();

    useEffect(() => {
      dataset.data.push(props.value);
      config.data.labels.push(props.value);
    }, []);

    return <></>;
  }
}

const AnalyticsView = () => {
  return (
    <div>
      AnalyticsView
      <Bar.Chart>
        <Bar.Tooltip />
        <MySpecialDataset factor={20} />
        <MySpecialDataset />
      </Bar.Chart>
    </div>
  );
};

const MySpecialDataset = ({ factor = 10 }: { factor?: number }) => (
  <Data.Set label="# of Votes">
    {["red", "green", "blue"].map((label, index) => (
      <Data.Item
        key={label}
        label={label}
        bg={label}
        border={label}
        value={(index + 1) * factor}
      />
    ))}
  </Data.Set>
);

export default AnalyticsView;

function useBarChart(
  chartRef: React.RefObject<HTMLCanvasElement>,
  config: ChartConfiguration<"bar", number[], string>
) {
  useEffect(() => {
    if (!chartRef.current) throw new Error("missin canvas");
    const chart = new Chart(chartRef.current, config);

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
