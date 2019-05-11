import React from 'react'
import Counter from './Counter';
import { exportAllDeclaration } from '@babel/types';

let wrapper;

beforeEach(() => {
  wrapper = shallow( <Counter / > );
});

describe('<Counter /> rendering', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('starts with a count of 0', () => {
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: 0');
  });
});

describe('<Counter /> interactions', () => {
  it('can increment the count when the button is clicked', () => {
    const incrementBtn = wrapper.find('#increment')
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text()
    expect(text).toEqual('Current count: 1')
  });
  
  it('can decrement the count when the button is clicked', () => {
    const decrementBtn = wrapper.find('#decrement')
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text()
    expect(text).toEqual('Current count: -1')
  });
});

describe('<Counter /> lifecycle method invocations', () => {});