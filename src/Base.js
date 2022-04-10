import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Dash from './Dash';
import { render } from '@testing-library/react';

function Base() {
    return (
        <>
        {/* <div className = "App1"> */}
<div className="container-fluid">
  <div className="row">
        <Sidebar/>
        <Dash/>
    </div>
    </div>
        {/* </div> */}
        </>
    );
     
}

export default Base;