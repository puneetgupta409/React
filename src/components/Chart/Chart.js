import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';
const Chart = (props) => {
    const dataPointMax = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointMax)
    return <div className="chart">
        {
            props.dataPoints.map((dataPointData) => (
                <ChartBar
                    key={dataPointData.label}
                    value={dataPointData.value}
                    label={dataPointData.label}
                    maxValue={totalMaximum} />
            ))
        }
    </div>
}

export default Chart;