import React from 'react';

import classes from './CardLabels.scss';

const mapToLabelComponent = (label) => {
  const hash = Math.random().toString(36).substring(7) + label.string + label.color;

  return (<label key={hash} className={classes[label.color]}> {label.string} </label>);
};

const CardLabels = ({labelList = []}) => {
  const labelComponents = labelList.map(mapToLabelComponent);

  return (
    <div className='row'>
      <div className='col-md-12'>
        {labelComponents}
      </div>
    </div>
  );
};

export default CardLabels;
