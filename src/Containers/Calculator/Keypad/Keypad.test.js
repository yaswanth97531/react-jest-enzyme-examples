import Keypad from './Keypad';

let wrapper;

beforeEach(() => {
  wrapper = mount( 
    <Keypad
      callOperator={jest.fn()}
      numbers={[]}
      operators={[]}
      setOperator={jest.fn()}
      updateDisplay={jest.fn()}
    /> );
});

describe('<Keypad /> rendering', () => {
  it('should render correctly', () => {
    const tree = renderer.create( <Keypad / > ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a <div>', () => {
    expect(wrapper.find('div').length).toEqual(5);
  });

  it('renders the values of numbers', () => {
    wrapper.setProps({ numbers: ['0', '1', '2'] });
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });

  it('renders the values of operators', () => {
    wrapper.setProps({operators:['+','-','*','/']});
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });

  it('should render an instance of the Key component', () => {
    expect(wrapper.find('Key').length).toEqual(1);
  });

  it('should render an instance of the Key component for each index of numbers, operators, and the submit key', () => {
    const numbers = ['0', '1'];
    const operators = ['+', '-'];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find('Key').length).toEqual(keyTotal);
  });
});

describe('<Keypad /> interactions', () => {});

describe('<Keypad /> lifecycle method invocations', () => {});