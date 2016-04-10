import React from 'react';
import sd from 'skin-deep';

import CardDate from 'components/Card/CardDate';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Card - CardDate)', () => {
  it('Should render CardDate component', function() {
    const date = new Date('04/10/2016 18:00');
    const tree = sd.shallowRender(<CardDate date={date} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <span className='date'>
        10/04/2016 - 18:00
      </span>
    );
  });
});
