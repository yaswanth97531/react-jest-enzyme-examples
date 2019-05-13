import Display from './Display';

let wrapper;

beforeEach(() => {
wrapper = shallow(<Display />);
});

describe('<Display /> rendering', () => {
  const tree = renderer.create( <Display displayValue={''} / > ).toJSON();
  it('should render correctly', () => expect(tree).toMatchSnapshot());
  
  it('should render the <div> Component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders the value of displayValue', () => {
    wrapper.setProps({ displayValue: 'test' });
    expect(wrapper.text()).toEqual('test');
  });
});
describe('<Display /> interactions', () => {});
describe('<Display /> lifecycle method invocations', () => {});