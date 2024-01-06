import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Rectangle,
  Pie,
  PieChart,
  Area,
  AreaChart,
} from "recharts";
import Data from "../../Data/ProfileOverViewLineGraph.json";
import CircleData from "../../Data/StraightAnglePieChart.json";

export function LineChartOne() {
  return (
    <LineChart
      width={700}
      height={250}
      data={Data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="red"
        strokeWidth={5}
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={5} />
    </LineChart>
  );
}

export function DotLineChartOne() {
  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={Data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#800080"
          strokeDasharray="3 3"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#ff97fa"
          strokeDasharray="3 3"
          strokeWidth={2}
        />
      </LineChart>
    </>
  );
}

export function BarLineOne() {
  return (
    <>
      <BarChart
        width={500}
        height={300}
        data={Data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#800080"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#ff97fa"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </>
  );
}

export function StraightAnglePieChart() {
  return (
    <>
      <PieChart width={400} height={220}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={CircleData}
          cx="50%"
          cy="70%"
          outerRadius={100}
          fill="#800080"
          label
        />
      </PieChart>
    </>
  );
}

export function StackedAreaChart() {
  return (
    <>
      <AreaChart
        width={700}
        height={200}
        data={Data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#800080"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ff97fa"
        />
      </AreaChart>
    </>
  );
}
