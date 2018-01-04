import { getMessages, getMembers } from './data';

const mapChatlog = (message, member) => ({
    messageId: message.id,
    userId: member.id,
    fullName: `${member.firstName} ${member.lastName}`,
    timestamp: message.timestamp,
    email: member.email,
    message: message.message,
    avatar: member.avatar
});

export default function getChatLog() {
  return Promise.all([getMessages(), getMembers()])
    .then((data) => {
      const messages = data[0];
      const members = data[1];

      let chatlogs = [];
      messages.forEach(message => {
        const member = members.find(member => member.id === message.userId);
        chatlogs.push(mapChatlog(message, member));
      });

      // desc sort by timestamp
      return chatlogs.sort((a,b) => b.timestamp.localeCompare(a.timestamp));
    });
};