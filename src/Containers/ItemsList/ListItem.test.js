import ListItem from './ListItem';

let wrapper;

beforeEach(() => {
  wrapper = mount( <ListItem / > );
});

describe('<App /> rendering', () => {
  it('should render correctly', () => {
    const tree = renderer.create( <ListItem / > ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('<App /> interactions', () => {});
describe('<App /> lifecycle method invocations', () => {});