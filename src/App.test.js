import App from './App';
import Add from './Containers/Add/Add'
import Calculator from './Containers/Calculator/Calculator';

let wrapper;

beforeEach(() => {
  wrapper = mount( <App /> );
});

describe('<App /> rendering', () => {
  it('should render correctly', () => {
    const tree = renderer.create( < App / > ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the \'Add\' Component', () => {
    expect(wrapper.containsMatchingElement(<Add />)).toEqual(true);
  });

  it('should render the \'Calculator\' Component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
describe('<App /> interactions', () => {});
describe('<App /> lifecycle method invocations', () => {});