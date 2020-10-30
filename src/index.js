import React from 'react';
import ReactDOM from 'react-dom';
import DigFac from './pages/DigFac'
import 'bootstrap/dist/css/bootstrap.css'
import 'canvas-gauges/gauge.min.js'
//import canvas from 'canvas-gauges'

const container = document.getElementById('root')

ReactDOM.render(<DigFac />, container)