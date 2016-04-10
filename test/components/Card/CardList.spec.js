import React from 'react';
import sd from 'skin-deep';

import CardList from 'components/Card/CardList';
import Card from 'components/Card/Card';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Card - CardList)', () => {
  it('Should render CardList component', function() {
    const list = [
      {
        id: 0,
        title: 'Bla bla bla bla',
        labels: [
          {color: 'red', string: 'atention'}
        ],
        date: new Date(),
        description: 'meeeeeeeee'
      },
      {
        id: 1,
        title: 'Blaze',
        labels: [
          {color: 'yellow', string: 'warning'}
        ],
        date: new Date(),
        description: undefined
      }
    ];
    const tree = sd.shallowRender(<CardList list={list} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='card-list'>
        <Card key={list[0].id} task={list[0]} />
        <Card key={list[1].id} task={list[1]} />
      </div>
    );
  });
});
