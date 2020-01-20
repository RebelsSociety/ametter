import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const ametterBackend = functions.https.onRequest((request, response) => {
    // TODO: add backend logic
    response.send("Hello from Firebase!");
});
