import React from 'react'
import Gauges from './Gauges'

function GaugeList(props){
    return(
        <div>
            {
                    props.gauges.map((gauge) => {
                        return (
                            <Gauges
                                Variable={gauge.Variable}
                                Value= {gauge.Value}
                                Max={gauge.Max}
                                Min={gauge.Min}
                                Measure={gauge.Measure}
                                MajorTicks={gauge.MajorTicks}
                                Highlights={gauge.Highlights}
                            />
                        )
                    })
                }
        </div>
    )
}

export default GaugeList