const { Buffer } = require('buffer');
const { v4: uuidv4 } = require("uuid");

module.exports = () => {
  return new Buffer.from(uuidv4()).toString("base64");
};

// let currentNonce: string | undefined;

// export const setNonce = (nonce: string) => {
//   currentNonce = nonce;
// };

// declare var __webpack_nonce__: string;

// export const getNonce = () => {
//   // local value is most important
//   if (currentNonce) {
//     return currentNonce;
//   }

//   // build in webpack support
//   if (typeof __webpack_nonce__ !== 'undefined') {
//     return __webpack_nonce__;
//   }

//   // parcel does not support nonce by itself

//   // rollup does not support nonce by itself

//   return undefined;
// };
