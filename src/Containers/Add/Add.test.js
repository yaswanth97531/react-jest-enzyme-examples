import Add from './Add';
import Form from '../Form/Form';

// function createTestProps(props) {
//   return {
//     apiId: '6e770272-212b-404e-ab9c-333fdba02f2f',
//     cancelButton: true,
//     allComments: [],
//     theme: {
//       custom: {
//         maxCommentLength: 1300
//       }
//     },
//     ...props,
//   };
// }

let wrapper;
beforeEach(() => {
  wrapper = mount( <Add /> );
});


describe('<Add /> rendering', () => {
  it('should render on <h1>', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render a <p>', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should render one <Form>', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should render 2 <label>s', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });

  // it('should render a <TextField /> to type the comment', () => {
  //   expect(wrapper.find(TextField)).toHaveLength(1);
  // });
  
  // it('should render a <Typography /> to display the maximum length of the comment', () => {
  //   expect(wrapper.find(Typography)).toHaveLength(1);
  // });

  // it('should render only one <Button /> to button only the save option, if cancelButton property is false', () => {
  //   wrapper = shallow(<Add {...props} cancelButton={false} />);
  //   expect(wrapper.find(Button)).toHaveLength(1);
  // });
});

describe('<Add /> interactions', () => {
  // it('should call the onClick function when \' Add Comment\' button is clicked', () => {
  //   const mockedHandleClickAddComment = jest.fn();
  //   wrapper.instance().handleClickAddComment = mockedHandleClickAddComment;
  //   wrapper.find(Button).first().props().onClick();
  //   expect(mockedHandleClickAddComment).toHaveBeenCalledTimes(1);
  // });

  // it('should change the state commentText and currentLength when the onChange function of the TextField is invoked', () => {
  //   wrapper.find(TextField).simulate('change',
  //     { traget: { value: 'New Comment' } }
  //   );
  //   expect(wrapper.state('commentText')).toEqual('New Comment');
  //   expect(wrapper.state('currentLength')).toEqual('New Comment'.length);
  // });
});

describe('<Add /> lifecycle method invocations', () => {
//   it('should change the state componentState componentDidMount method id invoked', () => {
//     expect(wrapper.state('componentState')).toEqual('mounted');
//   });
});