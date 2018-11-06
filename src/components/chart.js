import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesNormalBand } from 'react-sparklines';
import __ from 'lodash';
;
function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return ( //pass data in as props form weather_list. 
		<div>
			<Sparklines height={180} width={230} data={props.data}>
				<SparklinesLine color={props.color} /> 
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.data)} {props.units}
			</div>
		</div>
	);
}