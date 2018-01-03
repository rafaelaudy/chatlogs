export default function getChatLog() {
  return Promise.resolve([{
    messageId: '12356',
    userId: '613651251',
    fullName: 'Robin Balmforth',
    timestamp: new Date().toISOString(),
    email: 'robin@example.com',
    message: 'Hello, World!',
    avatar: null
  }]);
};
