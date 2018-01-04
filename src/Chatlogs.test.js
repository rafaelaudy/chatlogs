import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Chatlogs from './Chatlogs';
import * as service from './service';

let getChatLogMock;

beforeEach(() => {
  getChatLogMock = jest.spyOn(service, 'default').mockImplementation(() => Promise.resolve([]));
});

afterEach(() => {
  getChatLogMock.mockRestore();
});

it('loads the chatlog messages from service', () => {
  const chatlogs = shallow(<Chatlogs />);
  expect(getChatLogMock.mock.calls.length).toBe(1);
});

it('starts with an empty page before chatlogs are loaded', () => {
  const chatlogs = shallow(<Chatlogs />);
  expect(chatlogs.find('Chatlog').exists()).toBeFalsy();
});

it('renders an empty page when there is no Chatlogs', () => {
  const chatlogsPromise = Promise.resolve([]);
  getChatLogMock.mockImplementation(() => chatlogsPromise);

  const chatlogs = shallow(<Chatlogs />);

  return chatlogsPromise.then(() => {
    chatlogs.update();
    expect(chatlogs.find('Chatlog').exists()).toBeFalsy();
  });
});

it('renders a list of Chatlogs', () => {
  const chatlog = {avatar: 'a', email: 'e', timestamp: '2016-03-15T20:24:57Z'};
  const chatlogsPromise = Promise.resolve([chatlog, chatlog]);
  getChatLogMock.mockImplementation(() => chatlogsPromise);

  const chatlogs = shallow(<Chatlogs />);

  return chatlogsPromise.then(() => {
    chatlogs.update();
    expect(chatlogs.find('Chatlog').length).toBe(2);
  });
});
