import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Parent App', () => {
  const wrapper = shallow(<App />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('passes props to showroom', () => {
    const showRoomElement = wrapper.find('ShowRoom');
    expect(typeof showRoomElement.props().favorite).toBe('function');
    expect(typeof showRoomElement.props().id).toBe('string');
    expect(typeof showRoomElement.props().favorited).toBe('function');
  });

  it('check favorited returns false on start', () => {
    expect(wrapper.instance().checkFavorited()).toBe(false);
  })
});

describe('Showroom', () => {

})
