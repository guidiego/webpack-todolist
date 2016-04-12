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

    boardNewCardInstance.openTaskCreator();
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <form onSubmit={noRef} className='new-card'>
        <textarea onChange={noRef} value='' className='textarea-card' />
        <button type='submit' className='btn btn-success'> Add this card </button>
      </form>
    );
  });
});
