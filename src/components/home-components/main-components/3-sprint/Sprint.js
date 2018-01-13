import React from 'react'
import StackedBarChart from './StackedBarChart'
import PieChart from './PieChart'
import ScatterChartComp from './ScatterChart'

const Sprint = () => {
  return (
    <div id="sprint-body">
      <div className="sprint-body-top">
        <div className="graph-title-container">
          <span className="graph-title">Team: g62 - Hours Left for Capstone: 100</span>
        </div>
        <div>
          <StackedBarChart />
        </div>
        <div className="sprint-body-bottom">
          <div className="sprint-body-left">
            <div className="graph-title-container">
              <span className="graph-title">g62 Tickets Status</span>
            </div>
            <div>
              <PieChart />
            </div>
          </div>
          <div className="sprint-body-right">
            <div className="graph-title-container">
              <span className="graph-title">Team Sprints Comparison</span>
            </div>
            <ScatterChartComp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sprint
