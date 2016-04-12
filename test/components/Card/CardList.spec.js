import React from 'react';
import sd from 'skin-deep';

import { Map } from 'immutable';
import CardList from 'components/Card/CardList';
import CardContainer from 'containers/CardContainer';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Card - CardList)', () => {
  it('Should render CardList component', function() {
    const list = [
      Map({
        id: 0,
        title: 'Bla bla bla bla',
        labels: [
          {color: 'red', string: 'atention'}
        ],
        date: new Date(),
        description: 'meeeeeeeee'
      }),
      Map({
        id: 1,
        title: 'Blaze',
        labels: [
          {color: 'yellow', string: 'warning'}
        ],
        date: new Date(),
        description: undefined
      })
    ];
    const tree = sd.shallowRender(<CardList list={list} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='card-list'>
        <CardContainer key={list[0].get('id')} task={list[0]} />
        <CardContainer key={list[1].get('id')} task={list[1]} />
      </div>
    );
  });
});
