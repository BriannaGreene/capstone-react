import React from 'react'
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts'

const data = [
  {name: 'Done', value: 177},
  {name: 'To Do', value: 125},
  {name: 'In Progress', value: 45},
  {name: 'Stretch Goals', value: 37},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartGraph = () => {
  return (
    <div className="stackedbarchart-container">
      <PieChart width={400} height={350} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Legend />
      </PieChart>
    </div>
  )
}

export default PieChartGraph
