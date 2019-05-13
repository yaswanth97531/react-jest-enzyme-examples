import CounterList from './CounterList';

let wrapper;

beforeEach(() => {
  wrapper = shallow( < CounterList / > );
});

describe('<CounterList /> rendering', () => {
  it('should render 2 counters by default', () => {
    const counters = wrapper.find('Counter');
    expect(counters.length).toEqual(2);
  });
});

describe('<CounterList /> interactions', () => {
  it('can add more counters when we click the button', () => {
    const btn = wrapper.find('button');
    btn.simulate('click');
    const counters = wrapper.find('Counter');
    expect(counters.length).toEqual(3);
  });
});

describe('<CounterList /> lifecycle method invocations', () => {});