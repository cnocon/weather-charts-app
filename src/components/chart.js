import React from 'react';
// Sparklines chart docs http://borisyankov.github.io/react-sparklines/
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) => {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <p>Avg. <b className="badge badge-secondary">{average(props.data)}{props.units}</b></p>
    </div>
  );
}
