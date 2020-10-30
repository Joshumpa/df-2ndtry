import React from 'react'
import GaugeList from '../components/GaugeList'
import Button from '../components/Button'

class DigFac extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "Variable": "Cycle",
                "Value": 5,
                "Max": "10",
                "Min": "0",
                "Measure": "sec",
                "MajorTicks": "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
                "Highlights": '[{ "from": 0, "to": 2, "color": "rgba(200, 50, 50, .75)" }]'
            }, {
                "id": 2,
                "Variable": "RecovTime",
                "Value": 5,
                "Max": "10",
                "Min": "0",
                "Measure": "Sec",
                "MajorTicks": "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
                "Highlights": '[{ "from": 0, "to": 2, "color": "rgba(200, 50, 50, .75)" }]'
            }, {
                "id": 3,
                "Variable": "Inyection Time",
                "Value": 0.5,
                "Max": "0.80",
                "Min": "0",
                "Measure": "Sec",
                "MajorTicks": "[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]",
                "Highlights": '[{ "from": 0, "to": 0.2, "color": "rgba(200, 50, 50, .75)" }]'
            }

            ]
        }
    }
    render() {
        return (
            <div>
                <GaugeList
                    gauges={this.state.data}
                />
                <Button/>
            </div>
        )
    }
}
export default DigFac