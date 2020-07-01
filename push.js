var push = require('web-push');

let vapidKeys = {
  publicKey:
    'BHebmqRIcMFi18L5VUNUXVxT3E5gcbxSsL7LPMPhAMnZslSlMilnJX7rAE-0ufoLY2lF6QQ1SERXPckKIw3gbng',
  privateKey: 'PbR4vVQEWx3PskWh8RvMatOKpkXQplNgH3lcuundIck'
};

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fwMG_ImcKYc:APA91bHtTnPUQ0tBehI7Kk1CGn4s3yhIKhJunhqiggl5XxbyVPmqxDkugwctQMzL2VDTrG_ypKwWqb1Djv-kqWbxpmsatPSjSAUldFENqCIZShaFvZFiCwH-X2hS0-Xjqv5mq2XYHcf9',
  expirationTime: null,
  keys: {
    p256dh:
      'BLHrTAa9dZ4LV5DoCgtXCXLMd21_S3qyt4eSqn6UQCjIEAuemY0QI29Mvc-LL02e0DLGPKd3xkVHjCD4eqJWHSg',
    auth: 'TW-LBZmYtXNW7VQUPX4I0w'
  }
};

push.sendNotification(sub, 'test message');
