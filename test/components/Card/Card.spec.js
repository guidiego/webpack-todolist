import React from 'react';
import sd from 'skin-deep';

import Card from 'components/Card/Card';
import CardLabels from 'components/Card/CardLabels';
import CardTitle from 'components/Card/CardTitle';
import CardOptionsButton from 'components/Card/CardOptionsButton';
import CardDate from 'components/Card/CardDate';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Card - Card)', () => {
  it('Should render Card component with description', function() {
    const task = {
      id: 0,
      title: 'Bla bla bla bla',
      labels: [
        {color: 'red', string: 'atention'}
      ],
      date: new Date(),
      description: 'meeeeeeeee'
    };
    const tree = sd.shallowRender(<Card task={task} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='card'>
        <CardLabels labelList={task.labels} />
        <CardTitle title={task.title} />
        <CardOptionsButton />
        <div className='card-info row'>
          <div className='col-sm-3'>
            <i className='glyphicon glyphicon-list-alt' />
          </div>
          <div className='col-sm-9 text-right'>
            <CardDate date={task.date} />
          </div>
        </div>
      </div>
    );
  });

  it('Should render Card component without description', function() {
    const task = {
      id: 0,
      title: 'Bla bla bla bla',
      labels: [
        {color: 'red', string: 'atention'}
      ],
      date: new Date(),
      description: undefined
    };
    const tree = sd.shallowRender(<Card task={task} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='card'>
        <CardLabels labelList={task.labels} />
        <CardTitle title={task.title} />
        <CardOptionsButton />
        <div className='card-info row'>
          <div className='col-sm-3'>
          </div>
          <div className='col-sm-9 text-right'>
            <CardDate date={task.date} />
          </div>
        </div>
      </div>
    );
  });
});
