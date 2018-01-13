import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts'

const data = [
  {name: 'Adam', 'tasks to do': 65, 'in progress': 15, amt: 80},
  {name: 'Bill', 'tasks to do': 50, 'in progress': 5, amt: 55},
  {name: 'Bri', 'tasks to do': 80, 'in progress': 8, amt: 88},
  {name: 'Brodie', 'tasks to do': 30, 'in progress': 20, amt: 60},
  {name: 'Cat', 'tasks to do': 85, 'in progress': 20, amt: 105},
  {name: 'Chris', 'tasks to do': 75, 'in progress': 5, amt: 80},
  {name: 'Dalton', 'tasks to do': 45, 'in progress': 10, amt: 55},
  {name: 'Danah', 'tasks to do': 105, 'in progress': 10, amt: 115},
  {name: 'Gena', 'tasks to do': 75, 'in progress': 20, amt: 95},
  {name: 'Jack', 'tasks to do': 60, 'in progress': 10, amt: 70},
  {name: 'Jamie', 'tasks to do': 95, 'in progress': 10, amt: 105},
  {name: 'James', 'tasks to do': 55, 'in progress': 15, amt: 70},
  {name: 'Jenny', 'tasks to do': 25, 'in progress': 25, amt: 50},
  {name: 'JJ', 'tasks to do': 60, 'in progress': 10, amt: 70},
  {name: 'Jonny', 'tasks to do': 65, 'in progress': 15, amt: 80},
  {name: 'Ken', 'tasks to do': 85, 'in progress': 6, amt: 91},
  {name: 'Steve', 'tasks to do': 75, 'in progress': 10, amt: 85},
  {name: 'Tyler', 'tasks to do': 55, 'in progress': 15, amt: 70},
];


const StackedBarChart = () => {
  return (
    <div className="stackedbarchart-container">
      <BarChart width={1100} height={250} data={data}
            margin={{top: 20, right: 20, left: 10, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <ReferenceLine y={100} stroke="red" />
        <Bar dataKey="tasks to do" stackId="a" fill="#00C49F" />
        <Bar dataKey="in progress" stackId="a" fill="#FFBB28" />
      </BarChart>
    </div>
  )
}

export default StackedBarChart
