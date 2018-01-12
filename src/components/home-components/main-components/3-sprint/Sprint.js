import React from 'react'
import StackedBarChart from './StackedBarChart'
import PieChart from './PieChart'
import ScatterChartComp from './ScatterChart'

const Sprint = () => {
  return (
    <div className="main-body-top">
      <div className="graph-title-container">
        <span className="graph-title">Hours Left in Sprint: 100</span>
      </div>
      <div>
        <StackedBarChart />
      </div>
      <div className="sprint-body-bottom">
        <div className="body-left">
          <div className="graph-title-container">
            <span className="graph-title">Tickets Status</span>
          </div>
          <div>
            <PieChart />
          </div>
        </div>
        <div className="body-right">
          <ScatterChartComp />
        </div>

      </div>

    </div>
  )
}

export default Sprint
