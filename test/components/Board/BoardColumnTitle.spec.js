import React from 'react';
import sd from 'skin-deep';

import BoardColumnTitle from 'components/Board/BoardColumnTitle';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Board - BoardColumnTitle)', () => {
  it('Should render BoardColumnTitle component', function() {
    const title = 'Example';
    const tree = sd.shallowRender(<BoardColumnTitle content={title} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='board-column-title'>
        <h3 className='text-center'> {title} </h3>
      </div>
    );
  });
});
