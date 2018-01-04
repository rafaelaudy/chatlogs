/* eslint-disable global-require */
import * as data from './data';
import getChatLog from './service';

let getMessagesMock;
let getMembersMock;

describe('Service tests', () => {
  beforeEach(() => {
    getMessagesMock = jest.spyOn(data, 'getMessages');
    getMembersMock = jest.spyOn(data, 'getMembers');
  });

  afterEach(() => {
    getMessagesMock.mockRestore();
    getMembersMock.mockRestore();
  });

  it('it calls the messages API', () => {
    getChatLog();
    expect(getMessagesMock.mock.calls.length).toBe(1);
  });

  it('it calls the members API', () => {
    getChatLog();
    expect(getMembersMock.mock.calls.length).toBe(1);
  });

  it('returns an array of chatlogs', () => getChatLog().then((chatLogs) => {
    expect(Array.isArray(chatLogs)).toBeTruthy();
  }));

  it('chatlogs are in the correct format', () => {
    const message = { ...require('./messages.json')[0] };
    const member = { ...require('./members.json')[0] };
    message.id = 'message1';
    message.userId = 'member1';
    member.id = 'member1';
    member.firstName = 'mariana';
    member.lastName = 'berg';
    getMessagesMock.mockImplementation(() => Promise.resolve([message]));
    getMembersMock.mockImplementation(() => Promise.resolve([member]));

    return getChatLog().then(([firstMessage]) => {
      expect(firstMessage.messageId).toBe(message.id);
      expect(firstMessage.userId).toBe(member.id);
      expect(firstMessage.fullName).toBe('mariana berg');
      expect(typeof firstMessage.timestamp).toBe('string');
      expect(typeof firstMessage.email).toBe('string');
      expect(typeof firstMessage.message).toBe('string');
      expect(firstMessage.avatar === null || typeof firstMessage.avatar === 'string').toBeTruthy();
    });
  });

  it('returns chatlogs ordered by timestamp is desc order', () => {
    const messages = { ...require('./messages.json') };
    messages[0].timestamp = '2015-11-09T05:04:58Z';
    messages[1].timestamp = '2017-11-09T05:04:58Z';
    getMessagesMock.mockImplementation(() => Promise.resolve([messages[0], messages[1]]));

    return getChatLog().then((chatLogs) => {
      expect(chatLogs[0].timestamp).toBe('2017-11-09T05:04:58Z');
      expect(chatLogs[1].timestamp).toBe('2015-11-09T05:04:58Z');
    });
  });
});
