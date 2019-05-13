import List from './List';

let wrapper;
const items = ['one', 'two', 'three'];

beforeEach(() => {
  wrapper = mount( <List items={items} /> );
});

describe('<List /> rendering', () => {
  it('renders list-items', () => {
    // Expects the wrapper object to be defined
    expect(wrapper.find('#list-items')).toBeDefined();
    expect(wrapper.find('#item')).toHaveLength(items.length);
  });

  
  it('should show \'No items in list\' when items is empty', () => {
    // Expects the wrapper object to be defined
    wrapper.setProps({ items: []});
    expect(wrapper.find('#empty-message').text()).toEqual('No items in list');
  });

  it('renders a list item', () => {
    // Checks if an element in the component exists
    
    expect(wrapper.contains(<li key='one' id='item'>one</li>)).toBeTruthy();
  });

  it('renders correct text in item', () => {
    expect(wrapper.find('#item').get(0).props.children).toEqual('one');
  });
});
describe('<List /> interactions', () => {});
describe('<List /> lifecycle method invocations', () => {});