import React from 'react';
import sd from 'skin-deep';

import CardOptionsButton from 'components/Card/CardOptionsButton';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Card - CardOptionsButton)', () => {
  it('Should render CardOptionsButton component', function() {
    const tree = sd.shallowRender(<CardOptionsButton />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <button className='option-button'>
        <i className='glyphicon glyphicon-cog' />
      </button>
    );
  });
});
