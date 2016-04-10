import React from 'react';
import sd from 'skin-deep';

import CardTitle from 'components/Card/CardTitle';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Card - CardTitle)', () => {
  it('Should render CardTitle component', function() {
    const title = 'Example';
    const tree = sd.shallowRender(<CardTitle title={title} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='card-title'>
        {title}
      </div>
    );
  });
});
