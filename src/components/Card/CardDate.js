import React from 'react';

import classes from './CardDate.scss';

const fixedCases = (date) => date < 9 ? '0' + date : date;

const CardDate = ({date}) => {
  const day = fixedCases(date.getDate());
  const month = fixedCases(date.getMonth() + 1);
  const hours = fixedCases(date.getHours());
  const minutes = fixedCases(date.getMinutes());

  return (
    <span className={classes['date']}>
      {day}/{month}/{date.getFullYear()} - {hours}:{minutes}
    </span>
  );
};

export default CardDate;
