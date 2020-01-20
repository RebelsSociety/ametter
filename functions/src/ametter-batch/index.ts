import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// Settings
const baseURL: string = "http://api.themoviedb.org/3";
const uri: string = "/movie/now_playing?page={0}&api_key=";
const key: string = functions.config().api.key;
console.log(baseURL + uri);
console.log(key);


// Handling functions by time trigger
export const ametterBatch = functions.pubsub.schedule('00 00 * * *')
    .timeZone('Japan/Tokyo')
    .onRun((context) => {
        // TODO: add batch logic
        return null;
    });
