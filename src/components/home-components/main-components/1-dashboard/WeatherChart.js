import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from 'recharts'

const data = [
      {name: 'Thu- T', uv: -1000, pv: 2400, amt: 2400},
      {name: 'Fri- F', uv: -3000, pv: 1398, amt: 2210},
      {name: 'Sat- S', uv: -2000, pv: 7800, amt: 2290},
      {name: 'Sun- S', uv: -2780, pv: 3908, amt: 2000},
      {name: 'Mon- M', uv: -1890, pv: 4800, amt: 2181},
      {name: 'Tue- T', uv:-2390, pv: 3800, amt: 2500},
      {name: 'Wed- W', uv: -3490, pv: 4300, amt: 2100},
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 20;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

const WeatherChart = () => {
  return (
    <div>
      <BarChart width={700} height={250} data={data} stackOffset="sign"
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        {/* <XAxis dataKey="name"/>
        <YAxis/> */}
        {/* <CartesianGrid strokeDasharray="3 3"/> */}
        <Tooltip/>
        {/* <Legend /> */}
        {/* <ReferenceLine y={0} stroke='#000'/> */}
        <Bar dataKey="pv" fill="#8884d8" stackId="stack">
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
        {/* <Bar  /> */}

      </BarChart>
    </div>
  )
}



export default WeatherChart
