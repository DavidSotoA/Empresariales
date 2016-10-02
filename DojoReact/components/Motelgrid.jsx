import React from 'react';
import Reflux from 'reflux';
import MotelStore from '../Store/MotelStore';

var Motelgrid= React.createClass({
	mixins: [Reflux.connect(MotelStore, 'motelstore')],

	render: function(){
		if(this.state.motelstore){
			return <div>
			{
				this.state.motelstore.map(function(imagen){
					return 
					<div key={image.id} className="image">
						<h4>{image.name}</h4>
						<a href= {image.URL_Video}>
							<img src={image.logo}></img>
						</a>
						<p>{image.description}</p>
					</div>
				})
			}
			</div>
		}else{
			return(<p>No hay información para mostrar</p>);
		}
	} 
});

export default Motelgrid;