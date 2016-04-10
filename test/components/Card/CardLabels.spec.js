import React from 'react';
import sd from 'skin-deep';

import CardLabels from 'components/Card/CardLabels';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(components/Card - CardLabels)', () => {
  it('Should render CardLabels component with One Label', function() {
    const list = [{color: 'red', string: 'atention'}];
    const tree = sd.shallowRender(<CardLabels labelList={list} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='row'>
        <div className='col-md-12'>
          <label className='red'> atention </label>
        </div>
      </div>
    );
  });

  it('Should render CardLabels component with More Label', function() {
    const list = [{color: 'red', string: 'atention'}, {color: 'blue', string: 'atention'}];
    const tree = sd.shallowRender(<CardLabels labelList={list} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='row'>
        <div className='col-md-12'>
          <label className='red'> atention </label>
          <label className='blue'> atention </label>
        </div>
      </div>
    );
  });

  it('Should render CardLabels component with no Label', function() {
    const list = [];
    const tree = sd.shallowRender(<CardLabels labelList={list} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='row'>
        <div className='col-md-12'>
        </div>
      </div>
    );
  });
});
