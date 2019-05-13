import Key from './Key';

let wrapper;

beforeEach(() => {
  wrapper = shallow( 
    <Key
      keyAction={jest.fn()}
      keyType={''}
      keyValue={''}
    /> );
});

describe('<Key /> rendering', () => {
  it('should render correctly', () => {
    const tree = renderer.create( <Key / > ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a <div>', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the value of keyValue', () => {
    wrapper.setProps({ keyValue: 'test' });
    expect(wrapper.text()).toEqual('test');
  });
});

describe('<Key /> interactions', () => {});

describe('<Key /> lifecycle method invocations', () => {});