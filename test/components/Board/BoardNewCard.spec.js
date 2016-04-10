import React from 'react';
import sd from 'skin-deep';

import BoardNewCard from 'components/Board/BoardNewCard';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Board - BoardNewCard)', () => {
  it('Should render BoardNewCard component', function() {
    const noRef = () => {};
    const tree = sd.shallowRender(<BoardNewCard />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <button className='add-card-button' onClick={noRef}>
        Add a new Card...
      </button>
    );
  });

  it('Should render BoardNewCard component should change when click', function() {
    const noRef = () => {};
    const tree = sd.shallowRender(<BoardNewCard />);
    const boardNewCardInstance = tree.getMountedInstance();

    boardNewCardInstance.onClick();
    const vdom = tree.getRenderOutput();
    
    expect(vdom).to.equalJSX(
      <div className='new-card' onClick={noRef}>
        <textarea className='textarea-card' />
        <button className='btn btn-success'> Add this card </button>
      </div>
    );
  });
});
