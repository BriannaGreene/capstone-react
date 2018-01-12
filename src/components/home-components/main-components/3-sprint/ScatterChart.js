import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


const data01 = [
  {x: 1, y: 20, z: 20},
  {x: 2, y: 30, z: 30},
  {x: 4, y: 45, z: 45},
  {x: 6, y: 65, z: 65},
  {x: 8, y: 80, z: 80},
  {x: 10, y: 100, z: 100}
];

const data02 = [
  {x: 8, y: 5, z: 5},
  {x: 10, y: 15, z: 15},
  {x: 12, y: 25, z: 25},
  {x: 14, y: 40, z: 40},
  {x: 16, y: 50, z: 50},
  {x: 18, y: 75, z: 75}
];


const ScatterChartComp = () => {
  return (
    <div className="stackedbarchart-container">
      <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      	<XAxis type="number" dataKey={'x'} name='stature' unit='day'/>
      	<YAxis type="number" dataKey={'y'} name='weight' unit='tickets'/>
        <ZAxis dataKey={'z'} range={[60, 400]} name='score' unit='day'/>
        <CartesianGrid />
      	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
        <Legend/>
      	<Scatter name='g62' data={data01} fill='#8884d8' shape="star"/>
        <Scatter name='g68' data={data02} fill='#82ca9d' shape="triangle"/>
      </ScatterChart>
    </div>
  )
}

export default ScatterChartComp
