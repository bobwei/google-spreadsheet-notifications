import notifyWithSlack from './slack';

function fn(notifications, msg) {
  for (const type in notifications) {
    if (type === 'slack') {
      const { webhookUrl } = notifications[type];
      notifyWithSlack(webhookUrl, msg);
    }
  }
}

export default fn;
