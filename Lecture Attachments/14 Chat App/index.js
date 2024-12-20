const functions = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
 
admin.initializeApp();
exports.myFunction = functions.onDocumentCreated(
  "chat/{messageId}",
  (event) => {
    const data = event.data.data();
    return admin.messaging().send({
      notification: {
        title: data["username"],
        body: data["text"],
      },
      data: {
        click_action: "FLUTTER_NOTIFICATION_CLICK",
      },
      topic: "chat",
    });
  }
);