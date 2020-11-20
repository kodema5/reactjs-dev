// contains base framework code
// it maybe large, but likely cached by browser
//
import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

global.$ = $
global.Popper = Popper
global.React = React
global.ReactDOM = ReactDOM
