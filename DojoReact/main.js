import React from 'react';
import ReactDOM from 'react-dom';
import MotelActions from './Actions/MotelActions';
import Motelgrid from './components/Motelgrid.jsx';

setInterval(function(){
	MotelActions.fetchlist();
},5000);	

ReactDOM.render(<Motelgrid/>,document.getElementById('app'));
