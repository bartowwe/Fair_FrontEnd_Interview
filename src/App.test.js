import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShowRoom from './ShowRoom'
import assert from 'assert';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('check favorited', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().checkFavorited()).to.be(true)
  });
