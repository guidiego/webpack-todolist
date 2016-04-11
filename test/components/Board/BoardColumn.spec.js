import React from 'react';
import sd from 'skin-deep';

import BoardColumn from 'components/Board/BoardColumn';
import BoardColumnTitle from 'components/Board/BoardColumnTitle';
import CardList from 'components/Card/CardList';
import BoardAddCardContainer from 'containers/BoardAddCardContainer';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Board - BoardColumn)', () => {
  it('Should render BoardColumn component', function() {
    const listMockup = [
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
    const title = 'test';
    const tree = sd.shallowRender(<BoardColumn title={title} items={listMockup}/>);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='col-md-4'>
        <div className='board-column'>
          <BoardColumnTitle content={title} />
          <CardList list={listMockup}/>
          <BoardAddCardContainer list={title.toLowerCase()} />
        </div>
      </div>
    );
  });
});
