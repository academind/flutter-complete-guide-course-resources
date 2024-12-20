const functions = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");

// When encountering an error after using this code
// follow the link that should be shown in the error message
// Enable the registry (on the page after following the link) and try again
 
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