import React from 'react';
import DOM from 'react-dom';

import classes from './main.scss';

const ComponentTest = () => {
  return (<span className={classes.test}>Hello World</span>)
}

export const sum = (x,y) => x+y;

DOM.render(<ComponentTest />, document.getElementById('app'));
